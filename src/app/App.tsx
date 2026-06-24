import { useState, useId, useRef, useEffect } from "react";
import svgPaths from "../imports/Desktop/svg-j917f2bgzo";
import mobileSvgPaths from "../imports/Mobile/svg-84mqpsz1pl";
import imgContainer from "figma:asset/60d71de7fef6177beb58cfcc49c1e962e0570e62.png";
import imgRgLogotype11 from "figma:asset/73c6e53ad866c267ab3ab596eaa0f659792accf3.png";
import imgImage from "figma:asset/6fadcf0e990657007a0d29a382ec314550b28297.png";
import imgFeaturesServices from "figma:asset/32cfe491977e3cda185d07e7feed9097a50ebec8.png";
import imgImage1 from "figma:asset/82c38dfad697363096917c58032149a0990c426d.png";
import imgImage2 from "figma:asset/7804865e403699d550e8a2da3b0b048084637512.png";
import imgAvatar1 from "figma:asset/674c90fe2509517fe6e4d7e38e1f4ece9eb9d7ef.png";
import imgAvatar2 from "figma:asset/b07a0d0b0decacb902877a34c60c374c8783f047.png";
import imgImage3 from "figma:asset/049d9653d87898cffdba97a2507d0e64099245da.png";

/* MARKER-MAKE-KIT-INVOKED */

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const NAVY = "#15284b";
const ORANGE = "#f05123";
const BLUE = "#0086b8";

// ─── Font class helpers ────────────────────────────────────────────────────────
const fBold = "font-['Barlow_Condensed',sans-serif] font-bold not-italic";
const fLight = "font-['Barlow',sans-serif] font-light not-italic";

// ─── Reduced-motion check ─────────────────────────────────────────────────────
function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ─── useInView hook ───────────────────────────────────────────────────────────
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) { setInView(true); return; }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold: 0.12, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const { ref, inView } = useInView();
  const style: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  };
  return (
    // @ts-ignore — polymorphic ref
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
}

// ─── CheckIcon ────────────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <svg aria-hidden="true" focusable="false" className="w-5 h-5" fill="none" viewBox="0 0 17.83 12.48">
      <path d={svgPaths.p372aae80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.43" />
    </svg>
  );
}

// ─── QuoteIcon ────────────────────────────────────────────────────────────────
function QuoteIcon({ fill = ORANGE }: { fill?: string }) {
  return (
    <svg aria-hidden="true" focusable="false" className="w-9 h-9 shrink-0" fill="none" viewBox="0 0 36 36">
      <path d={svgPaths.p8393e00} fill={fill} />
    </svg>
  );
}

// ─── ServiceItem ──────────────────────────────────────────────────────────────
function ServiceItem({ title, body, delay = 0 }: { title: string; body: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
        <div
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ backgroundColor: ORANGE }}
          aria-hidden="true"
        >
          <CheckIcon />
        </div>
        <div className="flex flex-col gap-4 sm:pt-1.5 flex-1">
          <h3 className={`${fBold} uppercase leading-8 text-2xl`}>{title}</h3>
          <p className={`${fLight} text-base leading-6`}>{body}</p>
        </div>
      </div>
    </Reveal>
  );
}

// ─── TestimonialCard ──────────────────────────────────────────────────────────
function TestimonialCard({ quote, name, role, avatar }: {
  quote: string; name: string; role?: string; avatar?: string;
}) {
  return (
    <article
      className="bg-[#f9fafb] flex flex-col gap-2 p-2 rounded-2xl shrink-0 w-[469px]"
      aria-label={`Testimonial from ${name}`}
    >
      <div className="bg-white rounded-lg flex flex-col gap-4 p-6 flex-1">
        <QuoteIcon />
        <p className={`${fLight} text-base leading-6 text-black`}>{quote}</p>
      </div>
      <div className="bg-white rounded-lg flex items-center gap-3 px-6 py-3.5">
        {avatar && (
          <img src={avatar} alt="" aria-hidden="true" className="w-12 h-12 rounded-full object-cover shrink-0" />
        )}
        <div>
          <p className={`${fBold} text-base leading-6 text-black`}>{name}</p>
          {/* WCAG fix: #4b5563 (gray-600) gives 7.4:1 on white — passes AA */}
          {role && <p className={`${fLight} text-sm leading-5 text-[#4b5563]`}>{role}</p>}
        </div>
      </div>
    </article>
  );
}

// ─── HeroForm ─────────────────────────────────────────────────────────────────
function HeroForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", location: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const firstNameId = useId();
  const lastNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const locationId = useId();
  const reasonId = useId();

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.phone.trim()) e.phone = "Phone is required.";
    if (!form.location) e.location = "Please select a location.";
    if (!form.reason) e.reason = "Please select a reason.";
    return e;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    // FormData captures all named fields including the reCAPTCHA textarea Netlify injects
    fetch("/", {
      method: "POST",
      body: new URLSearchParams(new FormData(e.currentTarget) as unknown as Record<string, string>),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true));
  };

  const inputCls = "w-full bg-transparent border border-white rounded-lg px-4 py-2.5 text-white placeholder-white/70 text-sm font-['DM_Sans',sans-serif] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#15284b]";
  const selectCls = `${inputCls} bg-[#15284b]`;
  const labelCls = `block ${fBold} text-white text-sm uppercase mb-2`;
  const errCls = "text-red-300 text-xs mt-1";
  const arrowIcon = (
    <svg aria-hidden="true" focusable="false" className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3" fill="none" viewBox="0 0 12 7">
      <path d={mobileSvgPaths.p2c6d7a00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );

  if (submitted) {
    return (
      <div role="alert" className={`${fLight} text-white text-center py-8`}>
        <p className={`${fBold} text-xl mb-2`}>Thank you!</p>
        <p>Your request has been submitted. Our team will reach out shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} name="contact" method="POST" data-netlify="true" noValidate aria-label="Request an orthopedic evaluation" className="flex flex-col gap-4 w-full">
      <input type="hidden" name="form-name" value="contact" />
      {/* First / Last Name */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor={firstNameId} className={labelCls}>
            First Name <span className="text-red-400" aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id={firstNameId} name="firstName" type="text" autoComplete="given-name" placeholder="Enter first name"
            value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
            aria-required="true" aria-invalid={!!errors.firstName}
            aria-describedby={errors.firstName ? `${firstNameId}-err` : undefined}
            className={inputCls} />
          {errors.firstName && <p id={`${firstNameId}-err`} className={errCls} role="alert">{errors.firstName}</p>}
        </div>
        <div className="flex-1">
          <label htmlFor={lastNameId} className={labelCls}>
            Last Name <span className="text-red-400" aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id={lastNameId} name="lastName" type="text" autoComplete="family-name" placeholder="Enter last name"
            value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })}
            aria-required="true" aria-invalid={!!errors.lastName}
            aria-describedby={errors.lastName ? `${lastNameId}-err` : undefined}
            className={inputCls} />
          {errors.lastName && <p id={`${lastNameId}-err`} className={errCls} role="alert">{errors.lastName}</p>}
        </div>
      </div>

      {/* Email / Phone */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor={emailId} className={labelCls}>
            Email <span className="text-red-400" aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id={emailId} name="email" type="email" autoComplete="email" placeholder="Enter your email"
            value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
            aria-required="true" aria-invalid={!!errors.email}
            aria-describedby={errors.email ? `${emailId}-err` : undefined}
            className={inputCls} />
          {errors.email && <p id={`${emailId}-err`} className={errCls} role="alert">{errors.email}</p>}
        </div>
        <div className="flex-1">
          <label htmlFor={phoneId} className={labelCls}>
            Phone <span className="text-red-400" aria-hidden="true">*</span><span className="sr-only">(required)</span>
          </label>
          <input id={phoneId} name="phone" type="tel" autoComplete="tel" placeholder="Enter your phone"
            value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
            aria-required="true" aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? `${phoneId}-err` : undefined}
            className={inputCls} />
          {errors.phone && <p id={`${phoneId}-err`} className={errCls} role="alert">{errors.phone}</p>}
        </div>
      </div>

      {/* Location */}
      <div>
        <label htmlFor={locationId} className={labelCls}>
          Location <span className="text-red-400" aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <div className="relative">
          <select id={locationId} name="location" value={form.location}
            onChange={e => setForm({ ...form, location: e.target.value })}
            aria-required="true" aria-invalid={!!errors.location}
            aria-describedby={errors.location ? `${locationId}-err` : undefined}
            className={`${selectCls} appearance-none pr-10`}>
            <option value="" disabled style={{ backgroundColor: NAVY }}>Select location</option>
            <option value="bloomfield" style={{ backgroundColor: NAVY }}>Bloomfield, CT</option>
            <option value="enfield" style={{ backgroundColor: NAVY }}>Enfield, CT</option>
            <option value="vernon" style={{ backgroundColor: NAVY }}>Vernon, CT</option>
            <option value="springfield" style={{ backgroundColor: NAVY }}>Springfield, MA</option>
          </select>
          {arrowIcon}
        </div>
        {errors.location && <p id={`${locationId}-err`} className={errCls} role="alert">{errors.location}</p>}
      </div>

      {/* Reason */}
      <div>
        <label htmlFor={reasonId} className={labelCls}>
          Reasoning <span className="text-red-400" aria-hidden="true">*</span><span className="sr-only">(required)</span>
        </label>
        <div className="relative">
          <select id={reasonId} name="reason" value={form.reason}
            onChange={e => setForm({ ...form, reason: e.target.value })}
            aria-required="true" aria-invalid={!!errors.reason}
            aria-describedby={errors.reason ? `${reasonId}-err` : undefined}
            className={`${selectCls} appearance-none pr-10`}>
            <option value="" disabled style={{ backgroundColor: NAVY }}>Select reason</option>
            <option value="fracture" style={{ backgroundColor: NAVY }}>Broken Bone / Fracture</option>
            <option value="sprain" style={{ backgroundColor: NAVY }}>Sprain / Strain</option>
            <option value="joint" style={{ backgroundColor: NAVY }}>Joint Pain</option>
            <option value="sports" style={{ backgroundColor: NAVY }}>Sports Injury</option>
            <option value="back" style={{ backgroundColor: NAVY }}>Back / Neck Pain</option>
            <option value="work" style={{ backgroundColor: NAVY }}>Work-Related Injury</option>
            <option value="other" style={{ backgroundColor: NAVY }}>Other</option>
          </select>
          {arrowIcon}
        </div>
        {errors.reason && <p id={`${reasonId}-err`} className={errCls} role="alert">{errors.reason}</p>}
      </div>

      <button type="submit"
        className={`${fBold} w-full rounded-lg py-3 px-5 text-white uppercase text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#15284b]`}
        style={{
          backgroundColor: ORANGE,
          transition: "opacity 0.2s ease, transform 0.2s cubic-bezier(0.22,1,0.36,1)",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.015)"; (e.currentTarget as HTMLButtonElement).style.opacity = "0.93"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)"; (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
      >
        Submit
      </button>
    </form>
  );
}

// ─── Testimonials data ────────────────────────────────────────────────────────
const testimonials = [
  { quote: "I've been going to AONE for years and have had three joint replacements there. Now that I need a fourth, I wouldn't consider going anywhere else. The doctors, clinical team, and office staff are consistently friendly, compassionate, and knowledgeable. The care I've received has made a real difference every step of the way.", name: "Laurie E." },
  { quote: "I injured my ankle during a weekend soccer game and was worried I'd need to wait days to see a specialist. I walked into the orthopedic urgent care, had X-rays taken on-site, and left with a clear diagnosis and treatment plan. The entire experience was fast, professional, and reassuring.", name: "Michael R." },
  { quote: "From check-in to treatment, the process was smooth and efficient. I was dealing with severe knee pain and was relieved to get answers right away instead of waiting weeks for an appointment.", name: "Lisa P." },
  { quote: "After working with multiple agencies in the past, this was by far the smoothest and most rewarding design experience we've had.", name: "Jerome Bell" },
  { quote: "From the initial consultation to the final delivery, the process was seamless and incredibly professional — I've never felt more confident in a partnership.", name: "Jenny Wilson" },
];

// ─── TestimonialsCarousel ─────────────────────────────────────────────────────
function TestimonialsCarousel() {
  const [offset, setOffset] = useState(0);
  const maxOffset = testimonials.length - 1;
  const prev = () => setOffset(o => Math.max(0, o - 1));
  const next = () => setOffset(o => Math.min(maxOffset, o + 1));
  const CARD_W = 469;
  const GAP = 20;

  return (
    <section aria-labelledby="testimonials-heading" className="overflow-hidden">
      <div className="flex flex-col gap-12 px-4 py-20 sm:px-28 sm:py-28">
        <Reveal as="div" className="flex flex-col gap-5 max-w-full sm:max-w-[894px]">
          <h2 id="testimonials-heading"
            className={`${fBold} text-white uppercase leading-[1.1]`}
            style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}>
            Hear From Patients Who Chose Us
          </h2>
          <p className={`${fLight} text-white text-base leading-6`}>
            Discover why patients throughout Connecticut trust our orthopedic specialists for fast diagnoses, personalized treatment plans, and expert care when they need it most.
          </p>
          <div className="flex gap-3.5 items-center mt-1" role="group" aria-label="Testimonials navigation">
            <button onClick={prev} disabled={offset === 0} aria-label="Previous testimonials"
              className="w-11 h-11 rounded-full border border-white flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#15284b] disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "transparent",
                transition: "opacity 0.2s ease, transform 0.2s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={e => { if (!e.currentTarget.disabled) { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.opacity = "0.75"; } }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = offset === 0 ? "0.3" : "1"; }}
            >
              <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" viewBox="0 0 8 14">
                <path d="M7 0.75L0.75 7L7 13.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </button>
            <button onClick={next} disabled={offset >= maxOffset} aria-label="Next testimonials"
              className="w-11 h-11 rounded-full border border-white flex items-center justify-center text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#15284b] disabled:opacity-30 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "transparent",
                transition: "opacity 0.2s ease, transform 0.2s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={e => { if (!e.currentTarget.disabled) { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.opacity = "0.75"; } }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.opacity = offset >= maxOffset ? "0.3" : "1"; }}
            >
              <svg aria-hidden="true" focusable="false" className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 8 14">
                <path d="M7 0.75L0.75 7L7 13.25" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </Reveal>

        {/* Mobile: single full-width card */}
        <div className="sm:hidden w-full" aria-live="polite" aria-atomic="true">
          <div className="bg-[#f9fafb] flex flex-col gap-2 p-2 rounded-2xl w-full">
            <div className="bg-white rounded-lg flex flex-col gap-4 p-6 flex-1">
              <QuoteIcon />
              <p className={`${fLight} text-base leading-6 text-black`}>{testimonials[offset].quote}</p>
            </div>
            <div className="bg-white rounded-lg flex items-center gap-3 px-6 py-3.5">
              {testimonials[offset].avatar && (
                <img src={testimonials[offset].avatar} alt="" aria-hidden="true" className="w-12 h-12 rounded-full object-cover shrink-0" />
              )}
              <div>
                <p className={`${fBold} text-base leading-6 text-black`}>{testimonials[offset].name}</p>
                {testimonials[offset].role && <p className={`${fLight} text-sm leading-5 text-[#4b5563]`}>{testimonials[offset].role}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: sliding track */}
        <div className="hidden sm:block overflow-hidden" aria-live="polite" aria-atomic="false">
          <div className="flex gap-5"
            style={{ transform: `translateX(-${offset * (CARD_W + GAP)}px)`, transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)" }}>
            {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  // Hero content animates in on mount
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.22,1,0.36,1) 0.1s";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <div className="min-h-screen">
      {/* Skip to main content — WCAG 2.4.1 */}
      <a href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        style={{ backgroundColor: NAVY }}>
        Skip to main content
      </a>

      <main id="main-content">

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section aria-labelledby="hero-heading" className="relative overflow-hidden" style={{ backgroundColor: NAVY }}>
          <div aria-hidden="true" className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
            <img alt="" src={imgContainer} className="absolute max-w-none"
              style={{ width: "144%", height: "388%", top: "-63%", left: "8.6%" }} />
          </div>

          <div ref={heroRef} className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 py-24 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center justify-center">
            {/* Left — logo, heading, locations, CTA */}
            <div className="flex flex-col gap-8 w-full lg:max-w-[561px]">
              <img
                src={imgRgLogotype11}
                alt="Advanced Orthopedics New England"
                className="h-20 w-auto self-start object-contain shrink-0"
              />
              <div className="flex flex-col gap-5">
                <h1 id="hero-heading"
                  className={`${fBold} text-white uppercase leading-[1.16]`}
                  style={{ fontSize: "clamp(2rem, 5vw, 3.4375rem)" }}>
                  Same-Day Appointments Available
                </h1>
                <p className={`${fLight} text-white text-base leading-6`}>
                  Fast, convenient orthopedic care is available when you need it. Walk in during our operating hours—no appointment necessary. For added convenience, appointments may also be scheduled online. For additional information, call{" "}
                  <a href="tel:+18607286740" className="underline hover:opacity-80 whitespace-nowrap">(860) 728-6740</a>{" "}
                  and speak with a member of our team.
                </p>
              </div>

              {/* Location list */}
              <div className="flex flex-col gap-4">
                {[
                  { title: "Bloomfield Urgent Care", address: "35 Jolley Drive, Suite 301, Bloomfield, CT 06002", map: "https://maps.app.goo.gl/j6dgTz8FoQ5t3FuS8" },
                  { title: "Enfield Urgent Care",    address: "Elm Street, Suite 101, Enfield, CT 06082",         map: "https://maps.app.goo.gl/qjmedBEUG8bWvfuz6" },
                  { title: "Vernon Urgent Care",     address: "224 Hartford Turnpike, Vernon, CT 06066",          map: "https://maps.app.goo.gl/GCWFqqPREpwh5sr9A" },
                  { title: "Springfield, MA",        address: "299 Carew Street, Suite 409, Springfield, MA 01104", map: "https://maps.app.goo.gl/NR5Z1dKWN4QmeZVi9" },
                ].map(loc => (
                  <a key={loc.title} href={loc.map} target="_blank" rel="noopener noreferrer" className="group hover:opacity-80 transition-opacity">
                    <p className={`${fBold} text-white text-base leading-6`}>{loc.title}</p>
                    <span className={`${fLight} text-white text-sm leading-5 opacity-80 inline-flex items-center gap-1`}>
                      {loc.address}
                      <svg aria-hidden="true" focusable="false" className="inline-block w-3.5 h-3.5 shrink-0 opacity-70" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10 1h3v3M6 8l7-7M5 2H2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9" />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://ctortho.radixhealth.com/dash/self2/provider-search"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Schedule an appointment at Advanced Orthopedics New England"
                className={`${fBold} inline-flex items-center justify-center self-start rounded-md px-6 py-3 text-white uppercase text-base focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#15284b]`}
                style={{
                  backgroundColor: ORANGE,
                  transition: "opacity 0.2s ease, transform 0.2s cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.015)"; (e.currentTarget as HTMLAnchorElement).style.opacity = "0.93"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                Schedule Appointment
              </a>
            </div>

            {/* Right — hero image */}
            <div className="w-full lg:max-w-[550px] h-[347px] sm:h-[581px] rounded-2xl overflow-hidden shrink-0"
              style={{ transition: "transform 1s cubic-bezier(0.22,1,0.36,1)" }}>
              <img src={imgImage} alt="Orthopedic specialist examining a patient's shoulder" className="w-full h-full object-cover"
                style={{ transform: "scale(1.03)", transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s" }}
                onLoad={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }} />
            </div>
          </div>
        </section>

        {/* ── FEATURES & SERVICES ───────────────────────────────────────────── */}
        <section aria-labelledby="services-heading" className="relative bg-white overflow-hidden py-20 sm:py-28 px-4 sm:px-8">
          <div aria-hidden="true" className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden">
            <img alt="" src={imgFeaturesServices} className="absolute max-w-none opacity-30"
              style={{ width: "140%", height: "207%", top: "-87%", left: "-3%" }} />
            <div className="absolute inset-0"
              style={{ backgroundImage: "linear-gradient(248.5deg, rgba(255,255,255,0) 21%, rgb(255,255,255) 52%)" }} />
          </div>

          <div className="relative max-w-[1280px] mx-auto flex flex-col gap-14 sm:gap-20">
            <Reveal className="flex flex-col gap-4 items-center text-center max-w-[642px] mx-auto">
              <h2 id="services-heading"
                className={`${fBold} text-black uppercase leading-[1.1]`}
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Same-Day Care for Orthopedic Injuries and Pain
              </h2>
              <p className={`${fLight} text-black text-base leading-6`}>
                Advanced Orthopedics of New England's walk-in orthopedic urgent care is built around one goal: helping you move better, faster. From sudden injuries to lingering pain, we provide same-day evaluations, on-site imaging, and immediate treatment, all delivered by specialists focused exclusively on orthopedic care.
              </p>
            </Reveal>

            {/* Row 1 */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-12">
              <div className="flex flex-col gap-3.5 w-full lg:max-w-[556px]">
                <ServiceItem delay={0}   title="Back and Neck Pain" body="Persistent or sudden back and neck pain can interfere with every aspect of daily life. Our specialists evaluate spine-related conditions, identify the source of your discomfort, and recommend treatment to relieve pain and restore mobility." />
                <ServiceItem delay={80}  title="Broken Bones and Fractures" body="From simple fractures to more complex breaks, we provide on-site X-rays, prompt diagnosis, and immediate stabilization. Early treatment helps support proper healing and reduces the risk of complications." />
                <ServiceItem delay={160} title="Joint Pain, Swelling, and Stiffness" body="Painful, swollen, or stiff joints can make everyday movements difficult. We identify the underlying cause of your symptoms and develop a treatment plan focused on reducing pain, improving function, and restoring movement." />
              </div>
              <Reveal className="w-full lg:max-w-[621px] h-[287px] sm:h-[544px] rounded-3xl overflow-hidden shrink-0" delay={100}>
                <img src={imgImage1} alt="Doctor consulting with a patient about orthopedic treatment"
                  className="w-full h-full object-cover"
                  style={{ transform: "scale(1.03)", transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1)" }}
                  onLoad={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }} />
              </Reveal>
            </div>

            {/* Row 2 */}
            <div className="flex flex-col lg:flex-row-reverse items-start lg:items-center justify-between gap-10 lg:gap-12">
              <div className="flex flex-col gap-3.5 w-full lg:max-w-[556px]">
                <ServiceItem delay={0}   title="Sports and Activity-Related Injuries" body="Whether you're a competitive athlete, weekend warrior, or active adult, we treat sports injuries ranging from sprains and strains to overuse conditions. Our goal is to help you recover safely and return to activity as quickly as possible." />
                <ServiceItem delay={80}  title="Sprains and Strains" body="Ligament sprains and muscle strains are among the most common orthopedic injuries. We provide prompt diagnosis and treatment to reduce pain, support healing, and help you regain strength and stability." />
                <ServiceItem delay={160} title="Upper and Lower Extremity Injuries" body="We evaluate and treat injuries affecting the shoulders, elbows, wrists, hands, hips, knees, ankles, and feet. Our specialists create targeted treatment plans designed to restore function and mobility." />
                <ServiceItem delay={240} title="Work-Related Orthopedic Injuries" body="Job-related injuries can impact both your health and your ability to work. We provide efficient orthopedic care, treatment recommendations, and recovery plans that support a safe return to the workplace." />
              </div>
              <Reveal className="w-full lg:max-w-[621px] h-[287px] sm:h-[544px] rounded-3xl overflow-hidden shrink-0" delay={100}>
                <img src={imgImage2} alt="Orthopedic specialist helping a patient with physical therapy exercises"
                  className="w-full h-full object-cover"
                  style={{ transform: "scale(1.03)", transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1)" }}
                  onLoad={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
        <div style={{ backgroundColor: NAVY }}>
          <TestimonialsCarousel />
        </div>

        {/* ── WHY CHOOSE US ─────────────────────────────────────────────────── */}
        <section aria-labelledby="about-heading" className="bg-white flex flex-col lg:flex-row min-h-[600px]">
          {/* Left — copy, exactly 50% */}
          <div className="flex flex-col justify-center gap-8 sm:gap-12 px-8 sm:px-16 py-20 sm:py-28 w-full lg:w-1/2">
            <Reveal className="flex flex-col gap-4">
              <h2 id="about-heading"
                className={`${fBold} text-black uppercase leading-[1.1]`}
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                Why Choose Advanced Orthopedics Urgent Care?
              </h2>
              <div className={`${fLight} text-black text-base leading-6`}>
                <p className="mb-4">When an orthopedic injury can't wait, you need fast access to specialists who understand bones, joints, muscles, and sports injuries. Our walk-in orthopedic urgent care centers provide same-day evaluations, on-site imaging, and personalized treatment plans, all in one convenient visit.</p>
                <p className="mb-4">Whether you're dealing with a fracture, sprain, sports injury, or sudden joint pain, our team focuses exclusively on orthopedic care, helping you get answers quickly and start the right treatment without unnecessary delays.</p>
                <p className="mb-2">Benefits include:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Walk-in access with no appointment required</li>
                  <li>Same-day orthopedic evaluations</li>
                  <li>On-site X-rays and diagnostic imaging</li>
                  <li>Specialized care from orthopedic experts</li>
                  <li>Personalized treatment and recovery plans</li>
                  <li>Convenient locations throughout Connecticut and Springfield, Massachusetts</li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <a href="#main-content"
                aria-label="Start your recovery — request an orthopedic evaluation"
                className={`${fBold} inline-flex items-center justify-center self-start rounded-md px-4 py-2.5 text-white uppercase text-base focus:outline-none focus:ring-2 focus:ring-offset-2`}
                style={{
                  backgroundColor: ORANGE,
                  transition: "opacity 0.2s ease, transform 0.2s cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.015)"; (e.currentTarget as HTMLAnchorElement).style.opacity = "0.93"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              >
                Start Your Recovery
              </a>
            </Reveal>
          </div>

          {/* Right — image, exactly 50% */}
          <div className="relative h-[400px] lg:h-auto w-full lg:w-1/2 lg:self-stretch">
            <div className="absolute inset-0 p-8 sm:p-12">
              <div className="relative h-full rounded-2xl overflow-hidden">
                <img
                  alt="Patient receiving orthopedic care and rehabilitation"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "8% center", transform: "scale(1.03)", transition: "transform 1.2s cubic-bezier(0.22,1,0.36,1)" }}
                  onLoad={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  src={imgImage3}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────────────────────── */}
        <footer aria-label="Site footer" style={{ backgroundColor: NAVY }} className="text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-8 py-20 sm:py-28 flex flex-col gap-10 sm:gap-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 items-start">
              {/* Logo + social */}
              <Reveal className="flex flex-col gap-8 sm:gap-12 w-full sm:w-[253px] shrink-0">
                <img src={imgRgLogotype11} alt="Advanced Orthopedics New England"
                  className="h-20 w-auto self-start object-contain shrink-0" />
                <div className="flex flex-col gap-3 items-start">
                  <p className={`${fLight} text-white text-base leading-6`}>Follow us on</p>
                  <div className="flex gap-5 items-center">
                    <a href="https://www.facebook.com/ctortho/" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
                      className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#15284b] rounded"
                      style={{ transition: "opacity 0.2s ease, transform 0.2s ease" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.15)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; }}
                    >
                      <svg aria-hidden="true" focusable="false" className="w-5 h-5" fill="none" viewBox="0 0 20 19.88">
                        <path d={svgPaths.p24dd3180} fill={BLUE} />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/ctortho/" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                      className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#15284b] rounded"
                      style={{ transition: "opacity 0.2s ease, transform 0.2s ease" }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.15)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; }}
                    >
                      <svg aria-hidden="true" focusable="false" className="w-5 h-5" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p33225700} fill={BLUE} />
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Locations */}
              <nav aria-label="Clinic locations" className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                {[
                  { title: "Bloomfield Urgent Care", lines: ["35 Jolley Drive, Suite 301, Bloomfield, CT 06002"], map: "https://maps.app.goo.gl/j6dgTz8FoQ5t3FuS8", phones: [{ label: "", tel: "+18607286740", display: "(860) 728-6740" }] },
                  { title: "Enfield Urgent Care", lines: ["Elm Street, Suite 101, Enfield, CT 06082"], map: "https://maps.app.goo.gl/qjmedBEUG8bWvfuz6", phones: [{ label: "Phone: ", tel: "+18607286740", display: "(860) 728-6740" }, { label: "Fax: ", tel: "+18602530431", display: "(860) 253-0431" }] },
                  { title: "Vernon Urgent Care", lines: ["224 Hartford Turnpike, Vernon, CT 06066"], map: "https://maps.app.goo.gl/GCWFqqPREpwh5sr9A", phones: [{ label: "Phone: ", tel: "+18607286740", display: "(860) 728-6740" }, { label: "Fax: ", tel: "+18604548200", display: "(860) 454-8200" }] },
                  { title: "Springfield, MA", lines: ["299 Carew Street, Suite 409, Springfield, MA 01104"], map: "https://maps.app.goo.gl/NR5Z1dKWN4QmeZVi9", phones: [{ label: "Phone: ", tel: "+14137887321", display: "(413) 788-7321" }, { label: "Fax: ", tel: "+14137336369", display: "(413) 733-6369" }] },
                ].map((loc, i) => (
                  <Reveal key={loc.title} delay={i * 60} className="flex flex-col gap-2.5">
                    <h3 className={`${fBold} text-xl leading-7`}>{loc.title}</h3>
                    <address className="not-italic">
                      {loc.lines.map((l, j) => (
                        <a key={j} href={loc.map} target="_blank" rel="noopener noreferrer"
                          className={`${fLight} text-base leading-6 hover:opacity-80 transition-opacity inline-flex items-center gap-1`}>
                          {l}
                          <svg aria-hidden="true" focusable="false" className="inline-block w-3.5 h-3.5 shrink-0 opacity-70" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 1h3v3M6 8l7-7M5 2H2a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9" />
                          </svg>
                        </a>
                      ))}
                      {loc.phones.map((p, j) => (
                        <p key={j} className={`${fLight} text-base leading-6`}>
                          {p.label}
                          <a href={`tel:${p.tel}`} className="underline hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-[#15284b] rounded">
                            {p.display}
                          </a>
                        </p>
                      ))}
                    </address>
                    {loc.title === "Vernon Urgent Care" && (
                      <div className="mt-2 flex flex-col gap-1">
                        <p className={`${fBold} text-base leading-6`}>Office Hours</p>
                        <p className={`${fLight} text-base leading-6`}>
                          M–F, 8:30 am–4:30 pm<br />Saturday, 8:30 am–1:30 pm (Vernon only)
                        </p>
                      </div>
                    )}
                  </Reveal>
                ))}
              </nav>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-8 py-6 gap-4"
            style={{ backgroundColor: BLUE }}>
            <p className={`${fLight} text-white text-base leading-6`}>© 2026 Advanced Orthopedics New England. All rights reserved</p>
            <p className={`${fLight} text-white text-base leading-6`}>Digital marketing by Rebellion Group</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
