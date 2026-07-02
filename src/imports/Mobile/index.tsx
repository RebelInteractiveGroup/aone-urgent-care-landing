import svgPaths from "./svg-84mqpsz1pl";
import imgContainer from "./60d71de7fef6177beb58cfcc49c1e962e0570e62.png";
import imgRgLogotype11 from "./73c6e53ad866c267ab3ab596eaa0f659792accf3.png";
import imgImage from "./6fadcf0e990657007a0d29a382ec314550b28297.png";
import imgImage1 from "./7804865e403699d550e8a2da3b0b048084637512.png";
import imgImage2 from "./049d9653d87898cffdba97a2507d0e64099245da.png";

function Logo() {
  return (
    <div className="h-[83px] relative shrink-0 w-[334px]" data-name="Logo">
      <div className="-translate-x-1/2 absolute aspect-[152/60] bottom-[-0.81%] left-[calc(50%-65.26px)] top-[4.03%]" data-name="RG-Logotype (1) 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src={imgRgLogotype11} />
        </div>
      </div>
    </div>
  );
}

function TitleAndImg() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Title and img">
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue:Condensed_Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[55px] text-white uppercase w-[min-content]">
        <p className="leading-[64px]">Expert Orthopedic Care, When You Need It</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="text">
      <TitleAndImg />
      <div className="[word-break:break-word] flex flex-col font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[24px]">
          Complete the form below to request an orthopedic evaluation. Our team will review your information, reach out to discuss your symptoms and schedule a consultation,
          <br aria-hidden />
          and develop a personalized treatment plan designed to help you heal and get back to
          <br aria-hidden />
          your life.
        </p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-white tracking-[-0.2px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Enter first name
      </p>
    </div>
  );
}

function Input1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content2 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Input">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <span className="leading-[20px]">{`First Name `}</span>
        <span className="leading-[20px] text-[#dc2626]">*</span>
      </p>
      <Input1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-white tracking-[-0.2px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Enter last name
      </p>
    </div>
  );
}

function Input3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content3 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Input">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <span className="leading-[20px]">{`Last Name `}</span>
        <span className="leading-[20px] text-[#dc2626]">*</span>
      </p>
      <Input3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start justify-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="Input field">
        <Input />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="Input field">
        <Input2 />
      </div>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-white tracking-[-0.2px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Enter your email
      </p>
    </div>
  );
}

function Input5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content4 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Input">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <span className="leading-[20px]">{`Email `}</span>
        <span className="leading-[20px] text-[#dc2626]">*</span>
      </p>
      <Input5 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-white tracking-[-0.2px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Enter your phone
      </p>
    </div>
  );
}

function Input7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content5 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Input">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <span className="leading-[20px]">{`Phone `}</span>
        <span className="leading-[20px] text-[#dc2626]">*</span>
      </p>
      <Input7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[17px] items-start justify-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="Input field">
        <Input4 />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] h-[76px] items-start relative shrink-0 w-full" data-name="Input field">
        <Input6 />
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-white tracking-[-0.2px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Select location
      </p>
    </div>
  );
}

function Input9() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content6 />
          <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrow-down">
            <div className="absolute inset-[36.98%_23.96%]" data-name="Icon">
              <div className="absolute inset-[-14.4%_-7.2%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9167 6.70833">
                  <path d={svgPaths.p2c6d7a00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Input">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <span className="leading-[20px]">{`Location `}</span>
        <span className="leading-[20px] text-[#dc2626]">*</span>
      </p>
      <Input9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] h-[77px] items-start relative shrink-0 w-[328px]" data-name="Input field">
        <Input8 />
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] min-w-px relative text-[14px] text-white tracking-[-0.2px]" style={{ fontVariationSettings: '"opsz" 14' }}>
        Select reason
      </p>
    </div>
  );
}

function Input11() {
  return (
    <div className="flex-[1_0_0] min-h-px relative rounded-[8px] w-full" data-name="Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative size-full">
          <Content7 />
          <div className="relative shrink-0 size-[20px]" data-name="Icons/Arrow-down">
            <div className="absolute inset-[36.98%_23.96%]" data-name="Icon">
              <div className="absolute inset-[-14.4%_-7.2%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9167 6.70833">
                  <path d={svgPaths.p2c6d7a00} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Input10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full" data-name="Input">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-white uppercase whitespace-nowrap">
        <span className="leading-[20px]">{`Reasoning `}</span>
        <span className="leading-[20px] text-[#dc2626]">*</span>
      </p>
      <Input11 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] h-[77px] items-start relative shrink-0 w-[328px]" data-name="Input field">
        <Input10 />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-full" data-name="Content">
      <Frame />
      <Frame1 />
      <Frame3 />
      <Frame2 />
    </div>
  );
}

function TextPadding() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text padding">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white uppercase whitespace-nowrap">Submit</p>
    </div>
  );
}

function ButtonWithText() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Button with text">
      <div className="bg-[#f05123] relative rounded-[8px] shrink-0 w-full" data-name="Buttons/Button">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center px-[20px] py-[12px] relative size-full">
            <TextPadding />
          </div>
        </div>
      </div>
    </div>
  );
}

function InputWithButton() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Input with button">
      <ButtonWithText />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative rounded-[24px] shrink-0 w-full" data-name="Form">
      <InputWithButton />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0 w-full" data-name="Content">
      <Text />
      <Content1 />
      <Form />
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[35px] items-start justify-center px-[16px] relative size-full">
          <Logo />
          <Content />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex h-[347px] items-center relative shrink-0 w-[328px]" data-name="Image">
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgImage} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[76px] items-center justify-center py-[97px] relative shrink-0 w-[360px]" data-name="Container">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#15284b] inset-0" />
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <img alt="" className="absolute h-[387.92%] left-[34.42%] max-w-none top-[-62.94%] w-[577.72%]" src={imgContainer} />
        </div>
      </div>
      <Section />
      <Image />
    </div>
  );
}

function Title() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-black text-center w-full" data-name="Title">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[1.1] relative shrink-0 text-[40px] uppercase w-[328px]">Same-Day Care for Orthopedic Injuries and Pain</p>
      <p className="font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] min-w-full relative shrink-0 text-[16px] w-[min-content]">Advanced Orthopedics of New England’s walk-in orthopedic urgent care is built around one goal: helping you move better, faster. From sudden injuries to lingering pain, we provide same-day evaluations, on-site imaging, and immediate treatment, all delivered by specialists focused exclusively on orthopedic care.</p>
    </div>
  );
}

function SectionTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Section Title">
      <Title />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#f05123] content-stretch flex items-center justify-center p-[5px] relative rounded-[7142.143px] shrink-0 size-[40px]" data-name="Icon">
      <div className="relative shrink-0 size-[24.286px]" data-name="Icons/check-mark">
        <div className="absolute inset-[27.25%_16.24%]" data-name="Icon">
          <div className="absolute inset-[-6.46%_-4.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8265 12.4786">
              <path d={svgPaths.p372aae80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentItem() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center not-italic pt-[6px] relative shrink-0 text-black w-full" data-name="Content item">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] uppercase w-full">Back and Neck Pain</p>
      <p className="font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">Persistent or sudden back and neck pain can interfere with every aspect of daily life. Our specialists evaluate spine-related conditions, identify the source of your discomfort, and recommend treatment to relieve pain and restore mobility.</p>
    </div>
  );
}

function Service() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[16px] relative shrink-0 w-full" data-name="Service">
      <Icon />
      <ContentItem />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#f05123] content-stretch flex items-center justify-center p-[5px] relative rounded-[7142.143px] shrink-0 size-[40px]" data-name="Icon">
      <div className="relative shrink-0 size-[24.286px]" data-name="Icons/check-mark">
        <div className="absolute inset-[27.25%_16.24%]" data-name="Icon">
          <div className="absolute inset-[-6.46%_-4.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8265 12.4786">
              <path d={svgPaths.p372aae80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentItem1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center not-italic pt-[6px] relative shrink-0 text-black w-full" data-name="Content item">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] uppercase w-full">Broken Bones and Fractures</p>
      <p className="font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">From simple fractures to more complex breaks, we provide on-site X-rays, prompt diagnosis, and immediate stabilization. Early treatment helps support proper healing and reduces the risk of complications.</p>
    </div>
  );
}

function Service1() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[16px] relative shrink-0 w-full" data-name="Service">
      <Icon1 />
      <ContentItem1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#f05123] content-stretch flex items-center justify-center p-[5px] relative rounded-[7142.143px] shrink-0 size-[40px]" data-name="Icon">
      <div className="relative shrink-0 size-[24.286px]" data-name="Icons/check-mark">
        <div className="absolute inset-[27.25%_16.24%]" data-name="Icon">
          <div className="absolute inset-[-6.46%_-4.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8265 12.4786">
              <path d={svgPaths.p372aae80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentItem2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center not-italic pt-[6px] relative shrink-0 text-black w-full" data-name="Content item">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] uppercase w-full">Joint Pain, Swelling, and Stiffness</p>
      <p className="font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">Painful, swollen, or stiff joints can make everyday movements difficult. We identify the underlying cause of your symptoms and develop a treatment plan focused on reducing pain, improving function, and restoring movement.</p>
    </div>
  );
}

function Service2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[16px] relative shrink-0 w-full" data-name="Service">
      <Icon2 />
      <ContentItem2 />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Left content">
      <Service />
      <Service1 />
      <Service2 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <LeftContent />
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#f05123] content-stretch flex items-center justify-center p-[5px] relative rounded-[7142.143px] shrink-0 size-[40px]" data-name="Icon">
      <div className="relative shrink-0 size-[24.286px]" data-name="Icons/check-mark">
        <div className="absolute inset-[27.25%_16.24%]" data-name="Icon">
          <div className="absolute inset-[-6.46%_-4.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8265 12.4786">
              <path d={svgPaths.p372aae80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentItem3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center not-italic pt-[6px] relative shrink-0 text-black w-full" data-name="Content item">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] uppercase w-full">Sports and Activity-Related Injuries</p>
      <p className="font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">{`Whether you're a competitive athlete, weekend warrior, or active adult, we treat sports injuries ranging from sprains and strains to overuse conditions. Our goal is to help you recover safely and return to activity as quickly as possible.`}</p>
    </div>
  );
}

function Service3() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[16px] relative shrink-0 w-full" data-name="Service">
      <Icon3 />
      <ContentItem3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#f05123] content-stretch flex items-center justify-center p-[5px] relative rounded-[7142.143px] shrink-0 size-[40px]" data-name="Icon">
      <div className="relative shrink-0 size-[24.286px]" data-name="Icons/check-mark">
        <div className="absolute inset-[27.25%_16.24%]" data-name="Icon">
          <div className="absolute inset-[-6.46%_-4.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8265 12.4786">
              <path d={svgPaths.p372aae80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentItem4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center not-italic pt-[6px] relative shrink-0 text-black w-full" data-name="Content item">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] uppercase w-full">Sprains and Strains</p>
      <p className="font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">Ligament sprains and muscle strains are among the most common orthopedic injuries. We provide prompt diagnosis and treatment to reduce pain, support healing, and help you regain strength and stability.</p>
    </div>
  );
}

function Service4() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[16px] relative shrink-0 w-full" data-name="Service">
      <Icon4 />
      <ContentItem4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#f05123] content-stretch flex items-center justify-center p-[5px] relative rounded-[7142.143px] shrink-0 size-[40px]" data-name="Icon">
      <div className="relative shrink-0 size-[24.286px]" data-name="Icons/check-mark">
        <div className="absolute inset-[27.25%_16.24%]" data-name="Icon">
          <div className="absolute inset-[-6.46%_-4.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8265 12.4786">
              <path d={svgPaths.p372aae80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentItem5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center not-italic pt-[6px] relative shrink-0 text-black w-full" data-name="Content item">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] uppercase w-full">Upper and Lower Extremity Injuries</p>
      <p className="font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">We evaluate and treat injuries affecting the shoulders, elbows, wrists, hands, hips, knees, ankles, and feet. Our specialists create targeted treatment plans designed to restore function and mobility.</p>
    </div>
  );
}

function Service5() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[16px] relative shrink-0 w-full" data-name="Service">
      <Icon5 />
      <ContentItem5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="bg-[#f05123] content-stretch flex items-center justify-center p-[5px] relative rounded-[7142.143px] shrink-0 size-[40px]" data-name="Icon">
      <div className="relative shrink-0 size-[24.286px]" data-name="Icons/check-mark">
        <div className="absolute inset-[27.25%_16.24%]" data-name="Icon">
          <div className="absolute inset-[-6.46%_-4.36%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.8265 12.4786">
              <path d={svgPaths.p372aae80} id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42857" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentItem6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start justify-center not-italic pt-[6px] relative shrink-0 text-black w-full" data-name="Content item">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[32px] relative shrink-0 text-[24px] uppercase w-full">Work-Related Orthopedic Injuries</p>
      <p className="font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] relative shrink-0 text-[16px] w-full">Job-related injuries can impact both your health and your ability to work. We provide efficient orthopedic care, treatment recommendations, and recovery plans that support a safe return to the workplace.</p>
    </div>
  );
}

function Service6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Service">
      <Icon6 />
      <ContentItem6 />
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0 w-full" data-name="Left content">
      <Service3 />
      <Service4 />
      <Service5 />
      <Service6 />
    </div>
  );
}

function Image1() {
  return (
    <div className="content-stretch flex h-[287px] items-center relative rounded-[24px] shrink-0 w-full" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[24px] size-full" src={imgImage1} />
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[24px]" data-name="image 1" />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col gap-[37px] items-start relative shrink-0 w-full" data-name="Content">
      <LeftContent1 />
      <Image1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Content9 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-full" data-name="Container">
      <SectionTitle />
      <Content8 />
      <Container2 />
    </div>
  );
}

function FeaturesServices() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Features & Services">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[16px] py-[85px] relative size-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[40px] text-white uppercase w-full">Hear From Patients Who Chose Us</p>
    </div>
  );
}

function SectionTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <Title1 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="[word-break:break-word] font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white w-full">Discover why patients throughout Connecticut trust our orthopedic specialists for fast diagnoses, personalized treatment plans, and expert care when they need it most.</p>
    </div>
  );
}

function SectionTitle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
      <Title2 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Buttons">
      <div className="relative rounded-[9999px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Icons/Arrow-left">
            <div className="absolute bottom-[22.92%] left-[37.5%] right-[36.46%] top-1/4" data-name="Icon">
              <div className="absolute inset-[-6%_-12%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.75 14">
                  <path d="M7 0.75L0.75 7L7 13.25" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
      <div className="relative rounded-[9999px] shrink-0" data-name="Buttons/Button">
        <div className="content-stretch flex items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-full">
          <div className="relative shrink-0 size-[24px]" data-name="Icons/Arrow-right">
            <div className="absolute flex inset-[27.08%_37.5%_20.83%_36.46%] items-center justify-center" style={{ containerType: "size" }}>
              <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
                <div className="relative size-full" data-name="Icon">
                  <div className="absolute inset-[-6%_-12%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.75 14">
                      <path d="M7 0.75L0.75 7L7 13.25" id="Icon" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] items-start relative shrink-0 w-[327px]" data-name="Section">
      <SectionTitle1 />
      <SectionTitle2 />
      <Buttons />
    </div>
  );
}

function BxsQuoteLeft() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="bxs:quote-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="bxs:quote-left">
          <path d={svgPaths.p8393e00} fill="var(--fill-0, #F05123)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Content10() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
        <BxsQuoteLeft />
        <p className="[word-break:break-word] font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[16px] text-black w-[min-content]">I’ve been going to AONE for years and have had three joint replacements there. Now that I need a fourth, I wouldn’t consider going anywhere else. The doctors, clinical team, and office staff are consistently friendly, compassionate, and knowledgeable, creating thoughtful, personalized recovery plans. The care I’ve received has made a real difference every step of the way. You won’t be disappointed.”</p>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text content">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.2px] whitespace-nowrap">Laurie E.</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Content10 />
        <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Avatar group with label">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[12px] items-center px-[24px] py-[14px] relative size-full">
              <TextContent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[327px]" data-name="Section">
      <Card />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Container">
      <Section1 />
      <Section2 />
    </div>
  );
}

function Testinomial() {
  return (
    <div className="bg-[#15284b] content-stretch flex flex-col items-start overflow-clip px-[16px] py-[85px] relative shrink-0 w-[360px]" data-name="Testinomial">
      <Container3 />
    </div>
  );
}

function Title3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 text-black w-full" data-name="Title">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[1.1] relative shrink-0 text-[40px] uppercase w-full">Why Choose Advanced Orthopedics Urgent Care?</p>
      <div className="font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[0] relative shrink-0 text-[16px] w-full">
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">{`When an orthopedic injury can't wait, you need fast access to specialists who understand bones, joints, muscles, and sports injuries. Our walk-in orthopedic urgent care centers provide same-day evaluations, on-site imaging, and personalized treatment plans, all in one convenient visit.`}</p>
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">{`Whether you're dealing with a fracture, sprain, sports injury, or sudden joint pain, our team focuses exclusively on orthopedic care, helping you get answers quickly and start the right treatment without unnecessary delays.`}</p>
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">​</p>
        <p className="leading-[24px] mb-0 whitespace-pre-wrap">Benefits include:</p>
        <ul className="list-disc">
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Walk-in access with no appointment required</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Same-day orthopedic evaluations</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">On-site X-rays and diagnostic imaging</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Specialized care from orthopedic experts</span>
          </li>
          <li className="mb-0 ms-[24px]">
            <span className="leading-[24px]">Personalized treatment and recovery plans</span>
          </li>
          <li className="ms-[24px]">
            <span className="leading-[24px]">Convenient locations throughout Connecticut</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function TextPadding1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] relative shrink-0" data-name="Text padding">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-left text-white uppercase whitespace-nowrap">Start Your Recovery</p>
    </div>
  );
}

function Action() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[12px] items-center relative shrink-0" data-name="Action">
      <div className="bg-[#f05123] content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Buttons/Button">
        <TextPadding1 />
      </div>
    </button>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] h-[952px] items-start justify-center px-[16px] py-[85px] relative shrink-0 w-[360px]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Section Title">
        <Title3 />
      </div>
      <Action />
    </div>
  );
}

function Images() {
  return (
    <div className="h-[495px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Images">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center pb-[85px] px-[16px] relative size-full">
          <div className="flex-[1_0_0] min-h-px relative rounded-[16px] w-full" data-name="Image">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
              <img alt="" className="absolute h-full left-[-16.83%] max-w-none top-0 w-[211.54%]" src={imgImage2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="About Section">
      <Container4 />
      <Images />
    </div>
  );
}

function LogoTitle() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[253px]" data-name="Logo Title">
      <div className="h-[100px] relative shrink-0 w-full" data-name="Logo">
        <div className="-translate-x-1/2 absolute aspect-[152/60] bottom-0 left-1/2 top-0" data-name="RG-Logotype (1) 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[99.99%] left-0 max-w-none top-0 w-full" src={imgRgLogotype11} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-name="Icons">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/facebook">
        <div className="absolute inset-[0.3%_0]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19.8785">
            <path d={svgPaths.p24dd3180} fill="var(--fill-0, #0086B8)" id="Icon" />
          </svg>
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Icons/instagram">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p33225700} fill="var(--fill-0, #0086B8)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0" data-name="Social Links">
      <p className="[word-break:break-word] font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Follow us on</p>
      <Icons />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[35px] items-start relative shrink-0 w-[253px]" data-name="Container">
      <LogoTitle />
      <SocialLinks />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] gap-[10px] items-start relative shrink-0 text-[16px] w-[322px]" data-name="Link">
      <div className="leading-[0] min-w-full relative shrink-0 w-[min-content]">
        <p className="leading-[24px] mb-0">35 Jolley Drive, Suite 301</p>
        <p className="leading-[24px]">Bloomfield, CT 06002</p>
      </div>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[24px] relative shrink-0 underline whitespace-nowrap">(860) 728-6740</p>
    </div>
  );
}

function LinkColumn() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Link column">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[28px] min-w-full relative shrink-0 text-[20px] w-[min-content]">Bloomfield Urgent Care</p>
      <Link />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Link">
      <div className="min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <p className="leading-[24px] mb-0">113 Elm Street, Suite 101</p>
        <p className="leading-[24px]">Enfield, CT 06082</p>
      </div>
      <div className="relative shrink-0 text-[0px] whitespace-nowrap">
        <p className="mb-0 text-[16px]">
          <span className="leading-[24px]">{`Phone: `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] not-italic tracking-[-0.2px] underline">(860) 728-6740</span>
        </p>
        <p className="text-[16px]">
          <span className="leading-[24px]">{`Fax: `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] not-italic tracking-[-0.2px] underline">(860) 253-0431</span>
        </p>
      </div>
    </div>
  );
}

function LinkColumn1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-[372px]" data-name="Link column">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">Enfield Urgent Care</p>
      <Link1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[328px]" data-name="Container">
      <LinkColumn />
      <LinkColumn1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] gap-[10px] items-start leading-[0] relative shrink-0 w-full" data-name="Link">
      <div className="min-w-full relative shrink-0 text-[16px] w-[min-content]">
        <p className="leading-[24px] mb-0">224 Hartford Turnpike</p>
        <p className="leading-[24px]">Vernon, CT 06066</p>
      </div>
      <div className="min-w-full relative shrink-0 text-[0px] w-[min-content]">
        <p className="mb-0 text-[16px]">
          <span className="leading-[24px]">{`Phone: `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] not-italic tracking-[-0.2px] underline">(860) 728-6740</span>
        </p>
        <p className="text-[16px]">
          <span className="leading-[24px]">{`Fax: `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] not-italic tracking-[-0.2px] underline">(860) 454-8200</span>
        </p>
      </div>
    </div>
  );
}

function LinkColumn2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Link column">
      <p className="font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[28px] relative shrink-0 text-[20px] w-full">Vernon Urgent Care</p>
      <Link2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <LinkColumn2 />
    </div>
  );
}

function Locations() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[18px] h-[602px] items-start not-italic relative shrink-0 text-white tracking-[-0.2px] w-full" data-name="Locations">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Link">
      <p className="[word-break:break-word] font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-white tracking-[-0.2px] w-[616px] whitespace-pre-wrap">
        {`M-F, 8:30 am–4:30 pm `}
        <br aria-hidden />
        Saturday, 8:30 am–1:30 pm (Vernon only)
      </p>
    </div>
  );
}

function LinkColumn4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Link column">
      <p className="[word-break:break-word] font-['Helvetica_Neue:Condensed_Bold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.2px] w-full">Office Hours</p>
      <Link4 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col gap-[45px] h-[960px] items-start max-w-[1280px] px-[16px] relative shrink-0 w-[360px]" data-name="Content">
      <Container5 />
      <Locations />
      <LinkColumn4 />
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[85px] relative size-full">
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function Disclimer() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Helvetica_Neue_LT_Std:45_Light',sans-serif] gap-[15px] items-start leading-[24px] not-italic px-[16px] relative shrink-0 text-[16px] text-white w-[360px]" data-name="Disclimer">
      <p className="min-w-full relative shrink-0 w-[min-content]">© 2026 Advanced Orthopedics New England. All rights reserved</p>
      <p className="relative shrink-0 whitespace-nowrap">Digital marketing by Rebellion Group</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0086b8] content-stretch flex items-center justify-center py-[24px] relative shrink-0 w-full" data-name="Footer">
      <Disclimer />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="bg-[#15284b] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Footer Section">
      <Section3 />
      <Footer />
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative size-full" data-name="Mobile">
      <Container />
      <FeaturesServices />
      <Testinomial />
      <AboutSection />
      <FooterSection />
    </div>
  );
}