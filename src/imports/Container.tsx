import svgPaths from "./svg-zwbd4adfwa";
import clsx from "clsx";
type WrapperProps = {
  additionalClassNames?: string[];
};

function Wrapper({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      {children}
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string[];
};

function Text({ text, additionalClassNames = [] }: TextProps) {
  return (
    <div
      className={clsx(
        "box-border content-stretch flex flex-row items-center relative",
        additionalClassNames,
      )}
    >
      <div className="font-['Inter:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[#1b2228] text-[15px] text-left text-nowrap">
        <p className="block leading-[20px] whitespace-pre">{text}</p>
      </div>
    </div>
  );
}
type PagelinkTextProps = {
  text: string;
};

function PagelinkText({ text }: PagelinkTextProps) {
  return (
    <div className="relative shrink-0">
      <Text
        text={text}
        additionalClassNames={["gap-1.5", "justify-start", "p-0"]}
      />
    </div>
  );
}

function Logomark() {
  return (
    <Wrapper additionalClassNames={["size-7"]}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 28 28"
      >
        <g id="logomark">
          <path
            d={svgPaths.p1d5a9040}
            id="Icon"
            stroke="var(--stroke-0, #1B2228)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </g>
      </svg>
    </Wrapper>
  );
}

function Logo() {
  return (
    <Wrapper additionalClassNames={["h-8"]}>
      <div className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start p-0 relative">
        <Logomark />
        <div className="font-['Sen:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#1b2228] text-[28px] text-left text-nowrap tracking-[-1.12px]">
          <p className="adjustLetterSpacing block leading-none whitespace-pre">
            ClerIQ
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

function PageLinks() {
  return (
    <Wrapper>
      <div className="box-border content-stretch flex flex-row gap-8 items-start justify-start p-0 relative">
        <PagelinkText text="Features" />
        <PagelinkText text="Pricing" />
        <PagelinkText text="About" />
        <PagelinkText text="Contact" />
      </div>
    </Wrapper>
  );
}

function ButtonOutlinedStandard() {
  return (
    <Wrapper additionalClassNames={["rounded-2xl"]}>
      <div className="absolute border-[1.5px] border-[rgba(73,95,110,0.2)] border-solid inset-0 pointer-events-none rounded-2xl" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <Text
          text="Log in"
          additionalClassNames={["justify-center", "px-5", "py-2.5"]}
        />
      </div>
    </Wrapper>
  );
}

function ButtonFilledStandard() {
  return (
    <Wrapper additionalClassNames={["bg-[#0d99ff]", "rounded-2xl"]}>
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-2.5 relative">
          <div className="font-['Inter:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[15px] text-left text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Try it free</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

function ButtonGroup() {
  return (
    <Wrapper>
      <div className="box-border content-stretch flex flex-row gap-3.5 items-center justify-start p-0 relative">
        <ButtonOutlinedStandard />
        <ButtonFilledStandard />
      </div>
    </Wrapper>
  );
}

export default function Container() {
  return (
    <div
      className="backdrop-blur-[48px] backdrop-filter relative rounded-[20px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.16)] size-full"
      data-name="Container"
    >
      <div className="flex flex-row items-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-24 items-center justify-start overflow-clip pl-10 pr-5 py-5 relative size-full">
          <div
            className="absolute bg-[rgba(10,99,164,0.03)] inset-0"
            data-name="bg"
          />
          <Logo />
          <PageLinks />
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}