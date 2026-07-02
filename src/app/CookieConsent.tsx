import { useState, useEffect, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════════════════════
   Cookie Consent Manager
   ───────────────────────────────────────────────────────────────────────────
   - Category-based consent: Necessary (always on), Analytics, Marketing.
   - Google Tag Manager (GTM-WR6V3TFH) is loaded ONLY after the user makes a
     choice that grants at least one non-necessary category. It is NOT loaded
     from index.html.
   - Works with Google Consent Mode v2. The Consent Mode "default" state (all
     denied) is set in index.html; here we push "update" calls.

   ── dataLayer contract (use these to build GTM triggers / tag exceptions) ──
   Every event pushes { event, consent_analytics, consent_marketing } so tags
   can gate on the granted categories via a Custom Event trigger + condition,
   OR you can rely on Consent Mode's built-in tag settings.

     event: "cookie_consent_default"   -> fired on load when a prior choice
                                          exists (re-applies saved state)
     event: "cookie_consent_update"    -> fired whenever the user saves a choice
     consent_analytics: true | false
     consent_marketing: true | false

   Recommended GTM setup:
     • Enable Consent Mode on tags (Analytics tags require analytics_storage;
       Ads tags require ad_storage / ad_user_data / ad_personalization).
     • For non-Google tags, add a trigger exception or a blocking trigger using
       the "cookie_consent_update" event and the consent_* dataLayer variables.
   ═══════════════════════════════════════════════════════════════════════════ */

const GTM_ID = "GTM-WR6V3TFH";
const STORAGE_KEY = "aone_cookie_consent_v1";

// Brand tokens (kept in sync with App.tsx)
const NAVY = "#15284b";
const ORANGE = "#f05123";
const BLUE = "#0086b8";

const fBold = "font-['Barlow_Condensed',sans-serif] font-bold not-italic";
const fLight = "font-['Barlow',sans-serif] font-light not-italic";

type Consent = {
  necessary: true; // always granted
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
};

declare global {
  interface Window {
    dataLayer?: any[];
    __gtmLoaded?: boolean;
  }
}

function pushDL(obj: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
}

function gtagConsentUpdate(c: Consent) {
  // Google Consent Mode v2 update. Mirror the gtag() arguments-style push used
  // in index.html so GTM reads it as a native consent signal.
  window.dataLayer = window.dataLayer || [];
  function gtag(..._args: unknown[]) {
    window.dataLayer!.push(arguments);
  }
  gtag("consent", "update", {
    analytics_storage: c.analytics ? "granted" : "denied",
    ad_storage: c.marketing ? "granted" : "denied",
    ad_user_data: c.marketing ? "granted" : "denied",
    ad_personalization: c.marketing ? "granted" : "denied",
  });
}

// Google Analytics cookie name patterns.
//   GA4:    _ga, _ga_<STREAM_ID>
//   UA/legacy: _gid, _gat, _gat_<...>, _gac_<...>, AMP_TOKEN, __utm*
const GA_COOKIE_PATTERNS: RegExp[] = [
  /^_ga$/,
  /^_ga_/,
  /^_gid$/,
  /^_gat/,
  /^_gac_/,
  /^AMP_TOKEN$/,
  /^__utm/,
];

// Expire a cookie across every domain/path variant it could have been set on.
// GA sets cookies on the registrable domain (e.g. ".example.com"), so we try the
// exact host, each parent domain (dot-prefixed), and the current + root paths.
function deleteCookie(name: string) {
  const hostname = window.location.hostname;
  const domains = new Set<string>(["", hostname, "." + hostname]);
  const parts = hostname.split(".");
  for (let i = 0; i < parts.length - 1; i++) {
    const parent = parts.slice(i).join(".");
    domains.add(parent);       // e.g. example.com
    domains.add("." + parent); // e.g. .example.com (GA's default)
  }
  const paths = new Set<string>(["/", window.location.pathname]);
  const expired = "expires=Thu, 01 Jan 1970 00:00:00 GMT";
  for (const path of paths) {
    for (const domain of domains) {
      document.cookie =
        name +
        "=; " +
        expired +
        "; path=" +
        path +
        (domain ? "; domain=" + domain : "") +
        "; SameSite=Lax";
    }
  }
}

// GA4 respects a global window['ga-disable-<MEASUREMENT_ID>'] = true flag that
// stops a loaded gtag.js instance from setting/refreshing cookies. Derive the
// measurement ID(s) from any _ga_<STREAM_ID> cookies and set the flag, so GA
// can't immediately re-create the cookie we're about to delete.
function disableGAFromCookieNames(names: string[]) {
  for (const name of names) {
    const m = name.match(/^_ga_(.+)$/);
    if (m) {
      (window as unknown as Record<string, boolean>)["ga-disable-G-" + m[1]] = true;
    }
  }
}

// Remove all currently active Google Analytics cookies. Called when analytics
// consent is denied (e.g. "Reject all").
function clearGoogleAnalyticsCookies() {
  if (typeof document === "undefined") return;
  const purge = () => {
    if (!document.cookie) return;
    const names = document.cookie
      .split(";")
      .map((c) => c.split("=")[0].trim())
      .filter(Boolean);
    disableGAFromCookieNames(names);
    for (const name of names) {
      if (GA_COOKIE_PATTERNS.some((re) => re.test(name))) {
        deleteCookie(name);
      }
    }
  };
  purge();
  // A still-loaded gtag instance can re-write _ga right after the consent update
  // settles (Consent Mode has a ~500ms wait_for_update window). Sweep again to
  // catch any cookies that reappear.
  setTimeout(purge, 600);
}

function loadGTM() {
  if (window.__gtmLoaded) return;
  window.__gtmLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  const f = document.getElementsByTagName("script")[0];
  const j = document.createElement("script");
  j.async = true;
  j.src = "https://www.googletagmanager.com/gtm.js?id=" + GTM_ID;
  f.parentNode!.insertBefore(j, f);
}

function readStored(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (typeof parsed?.analytics !== "boolean") return null;
    return {
      necessary: true,
      analytics: !!parsed.analytics,
      marketing: !!parsed.marketing,
      timestamp: parsed.timestamp || new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

// Apply a consent choice: update Consent Mode, push a dataLayer event, and
// load GTM if anything beyond "necessary" is granted.
function applyConsent(c: Consent, eventName: "cookie_consent_default" | "cookie_consent_update") {
  gtagConsentUpdate(c);
  pushDL({
    event: eventName,
    consent_analytics: c.analytics,
    consent_marketing: c.marketing,
  });
  if (c.analytics || c.marketing) {
    loadGTM();
  }
  // If analytics was rejected, purge any Google Analytics cookies still active
  // (e.g. set on a prior visit or before the consent choice was made).
  if (!c.analytics) {
    clearGoogleAnalyticsCookies();
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  // On mount: re-apply stored consent, or show the banner.
  useEffect(() => {
    const stored = readStored();
    if (stored) {
      applyConsent(stored, "cookie_consent_default");
      setAnalytics(stored.analytics);
      setMarketing(stored.marketing);
    } else {
      setVisible(true);
    }
  }, []);

  const persistAndApply = useCallback((c: Omit<Consent, "necessary" | "timestamp">) => {
    const full: Consent = {
      necessary: true,
      analytics: c.analytics,
      marketing: c.marketing,
      timestamp: new Date().toISOString(),
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(full));
    } catch {
      /* storage may be unavailable; consent still applies for this session */
    }
    applyConsent(full, "cookie_consent_update");
    setVisible(false);
    setShowPrefs(false);
  }, []);

  const acceptAll = () => persistAndApply({ analytics: true, marketing: true });
  const rejectAll = () => persistAndApply({ analytics: false, marketing: false });
  const saveChoices = () => persistAndApply({ analytics, marketing });

  // Allow re-opening from a footer "Cookie settings" link.
  useEffect(() => {
    const open = () => {
      const stored = readStored();
      if (stored) {
        setAnalytics(stored.analytics);
        setMarketing(stored.marketing);
      }
      setShowPrefs(true);
      setVisible(true);
    };
    window.addEventListener("open-cookie-settings", open);
    return () => window.removeEventListener("open-cookie-settings", open);
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-5"
    >
      <div
        className="mx-auto max-w-[1120px] rounded-2xl shadow-2xl overflow-hidden"
        style={{ backgroundColor: "#ffffff", border: `1px solid ${NAVY}22` }}
      >
        <div className="p-5 sm:p-7 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className={`${fBold} text-2xl leading-8`} style={{ color: NAVY }}>
              We value your privacy
            </h2>
            <p className={`${fLight} text-base leading-6`} style={{ color: NAVY }}>
              We use cookies to run this site (always on) and, with your permission, to
              understand how it&apos;s used and to improve our marketing. You can accept all,
              reject non-essential cookies, or choose which categories to allow. See our{" "}
              <a
                href="https://www.ctortho.com/privacy-policy/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: BLUE }}
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {showPrefs && (
            <div className="flex flex-col gap-3 rounded-xl p-4" style={{ backgroundColor: `${NAVY}08` }}>
              <ToggleRow
                title="Strictly necessary"
                desc="Required for the site to function (e.g. form submission, security). Always active."
                checked
                disabled
                onChange={() => {}}
              />
              <ToggleRow
                title="Analytics"
                desc="Helps us understand how visitors use the site so we can improve it."
                checked={analytics}
                onChange={setAnalytics}
              />
              <ToggleRow
                title="Marketing"
                desc="Used to measure and improve advertising and remarketing."
                checked={marketing}
                onChange={setMarketing}
              />
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-end">
            {!showPrefs && (
              <button
                type="button"
                onClick={() => setShowPrefs(true)}
                className={`${fBold} text-base uppercase tracking-wide px-5 py-3 rounded-lg order-3 sm:order-1`}
                style={{ color: NAVY, backgroundColor: "transparent", border: `1px solid ${NAVY}` }}
              >
                Manage preferences
              </button>
            )}
            <button
              type="button"
              onClick={rejectAll}
              className={`${fBold} text-base uppercase tracking-wide px-5 py-3 rounded-lg order-2`}
              style={{ color: NAVY, backgroundColor: "transparent", border: `1px solid ${NAVY}` }}
            >
              Reject all
            </button>
            {showPrefs ? (
              <button
                type="button"
                onClick={saveChoices}
                className={`${fBold} text-base uppercase tracking-wide px-6 py-3 rounded-lg text-white order-1 sm:order-3`}
                style={{ backgroundColor: BLUE }}
              >
                Save choices
              </button>
            ) : (
              <button
                type="button"
                onClick={acceptAll}
                className={`${fBold} text-base uppercase tracking-wide px-6 py-3 rounded-lg text-white order-1 sm:order-3`}
                style={{ backgroundColor: ORANGE }}
              >
                Accept all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({
  title,
  desc,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-3 cursor-pointer select-none">
      <span className="relative inline-flex mt-1 shrink-0">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span
          className="w-11 h-6 rounded-full transition-colors"
          style={{ backgroundColor: checked ? BLUE : "#c4ccd8", opacity: disabled ? 0.6 : 1 }}
        />
        <span
          className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform"
          style={{ transform: checked ? "translateX(20px)" : "translateX(0)" }}
        />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className={`${fBold} text-base leading-5`} style={{ color: NAVY }}>
          {title}
        </span>
        <span className={`${fLight} text-sm leading-5`} style={{ color: `${NAVY}cc` }}>
          {desc}
        </span>
      </span>
    </label>
  );
}
