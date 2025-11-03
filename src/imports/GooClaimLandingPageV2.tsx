import svgPaths from "./svg-wetavtg3da";
import imgLogomark2 from "figma:asset/f1163d58a8bf72259e2770440f27e5787ba374be.png";

function Paragraph() {
  return (
    <div className="absolute h-[17.5px] left-0 top-[28px] w-[1392px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#6a7282] text-[12.25px] text-nowrap top-0 whitespace-pre">Last updated: October 12, 2025</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[42px] left-0 top-[52.5px] w-[1392px]" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[42px] left-0 not-italic text-[42px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">{`Privacy & Legal`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[49px] left-0 top-[105px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#4a5565] text-[15.75px] top-[-0.5px] w-[664px]">Your trust is our priority. Learn how GooClaim protects your data and ensures compliance with healthcare regulations.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[154px] relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Heading1 />
      <Paragraph1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[295px] items-start left-0 pb-px pt-[112px] px-[21px] top-0 w-[1434px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-100 border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="h-[9371px] relative shrink-0 w-[224px]" data-name="Sidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[9371px] w-[224px]" />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[31.5px] left-0 not-italic text-[26.25px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">🛡️ Privacy Policy</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">How we handle your personal information</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[59.5px] items-start left-0 top-0 w-[784px]" data-name="Container">
      <Heading2 />
      <Paragraph2 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Introduction</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[73.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[771px]">{`GooClaim ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our healthcare automation platform.`}</p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-[3px] w-[62.938px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#101828] text-[12.25px] text-nowrap whitespace-pre">Important:</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1e2939] text-[12.25px] top-0 w-[685px]">GooClaim is designed for healthcare providers and organizations. We do not collect or store patient health information (PHI) directly. Our platform processes administrative and billing data in compliance with HIPAA regulations.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-blue-50 h-[77px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[77px] items-start pb-0 pl-[21.5px] pr-[17.5px] pt-[17.5px] relative w-full">
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[752px]">By using GooClaim, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[241.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Container3 />
      <Paragraph5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[283.5px] items-start left-0 top-[87.5px] w-[784px]" data-name="Container">
      <Heading3 />
      <Container4 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Information We Collect</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Account Information</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[774px]">Name, email address, phone number, organization name, job title, and billing information when you create an account or request a demo.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <Paragraph6 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Usage Data</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[778px]">Information about how you interact with our platform, including feature usage, session duration, clicks, and navigation patterns.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph7 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Technical Information</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[718px]">IP address, browser type, device information, operating system, and cookies for authentication and analytics purposes.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph8 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Business Data</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[752px]">Claims data, prior authorization requests, medical codes, and other administrative healthcare information that you input into our system.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading8 />
      <Paragraph9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[17.5px] h-[360.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[402.5px] items-start left-0 top-[413px] w-[784px]" data-name="Container">
      <Heading5 />
      <Container10 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">How We Use Information</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Provide, operate, and maintain our healthcare automation services</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Process claims, prior authorizations, and medical coding requests</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Improve, personalize, and expand our platform capabilities</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Communicate with you about updates, support, and service-related notices</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Analyze usage patterns to enhance user experience and performance</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Detect, prevent, and address technical issues or fraudulent activity</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Comply with legal obligations and regulatory requirements</p>
    </div>
  );
}

function List() {
  return (
    <div className="h-[234.5px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[234.5px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem />
          <ListItem1 />
          <ListItem2 />
          <ListItem3 />
          <ListItem4 />
          <ListItem5 />
          <ListItem6 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[276.5px] items-start left-0 top-[857.5px] w-[784px]" data-name="Container">
      <Heading9 />
      <List />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Data Security</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[773px]">We implement industry-standard security measures to protect your information from unauthorized access, alteration, disclosure, or destruction:</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">End-to-end encryption for data in transit (TLS 1.3)</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">AES-256 encryption for data at rest</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Regular security audits and penetration testing</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Multi-factor authentication (MFA) for user accounts</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Role-based access control (RBAC)</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">SOC 2 Type II compliance</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">HIPAA-compliant infrastructure and processes</p>
    </div>
  );
}

function List1() {
  return (
    <div className="h-[213.5px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[213.5px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem7 />
          <ListItem8 />
          <ListItem9 />
          <ListItem10 />
          <ListItem11 />
          <ListItem12 />
          <ListItem13 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[318.5px] items-start left-0 top-[1176px] w-[784px]" data-name="Container">
      <Heading10 />
      <Paragraph10 />
      <List1 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Sharing of Information</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">We do not sell, rent, or trade your personal information. We may share information only in the following circumstances:</p>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Service Providers</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[771px]">With trusted third-party vendors who assist in operating our platform (hosting, analytics, payment processing) under strict confidentiality agreements.</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading12 />
      <Paragraph12 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Legal Requirements</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">When required by law, court order, or government regulation, or to protect our rights, property, or safety.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading13 />
      <Paragraph13 />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Business Transfers</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">In connection with a merger, acquisition, or sale of assets, with notice provided to affected users.</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading14 />
      <Paragraph14 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">With Your Consent</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">With your explicit permission for specific purposes you authorize.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading15 />
      <Paragraph15 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[17.5px] h-[287px] items-start relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[367.5px] items-start left-0 top-[1536.5px] w-[784px]" data-name="Container">
      <Heading11 />
      <Paragraph11 />
      <Container18 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Retention and Deletion</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">We retain your information for as long as necessary to provide our services and comply with legal obligations:</p>
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[97.313px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Account Data:</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText1 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[97.31px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Retained while your account is active and for 7 years after closure for compliance purposes</p>
    </div>
  );
}

function BoldText2() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[86.25px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Claims Data:</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText2 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[86.25px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Retained for 10 years in accordance with healthcare recordkeeping requirements</p>
    </div>
  );
}

function BoldText3() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[104.461px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Analytics Data:</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText3 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[104.46px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Aggregated and anonymized after 24 months</p>
    </div>
  );
}

function BoldText4() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[60.305px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Cookies:</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText4 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[60.3px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Removed when you clear your browser or after expiration periods (see Cookie Policy)</p>
    </div>
  );
}

function List2() {
  return (
    <div className="h-[129.5px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[129.5px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem14 />
          <ListItem15 />
          <ListItem16 />
          <ListItem17 />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[447.29px] top-[3.5px] w-[153.188px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-nowrap whitespace-pre">privacy@gooclaim.com</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[448px]">You may request deletion of your personal data by contacting us at</p>
      <Link />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[730px]">. We will honor your request within 30 days, subject to legal retention requirements.</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[273px] items-start left-0 top-[1946px] w-[784px]" data-name="Container">
      <Heading16 />
      <Paragraph16 />
      <List2 />
      <Paragraph17 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Cookies and Tracking Technologies</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[21px] left-[190.75px] top-[26px] w-[90.766px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#155dfc] text-[14px] text-nowrap top-0 whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[782px]">We use cookies and similar tracking technologies to enhance your experience. You control cookie preferences through our consent banner. See our</p>
      <Button />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[281.52px] not-italic text-[#364153] text-[14px] top-[25px] w-[206px]">below for detailed information.</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[91px] items-start left-0 top-[2261px] w-[784px]" data-name="Container">
      <Heading17 />
      <Paragraph18 />
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Contact Information</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">For questions or concerns about this Privacy Policy, please contact us:</p>
    </div>
  );
}

function BoldText5() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[2px] w-[41.68px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Email:</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[45.62px] top-[2px] w-[153.188px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-nowrap whitespace-pre">privacy@gooclaim.com</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText5 />
      <Link1 />
    </div>
  );
}

function BoldText6() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[2px] w-[48.109px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Phone:</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText6 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[48.11px] not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">1-800-GOO-CLAIM</p>
    </div>
  );
}

function BoldText7() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[2px] w-[61.844px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Address:</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText7 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[21px] whitespace-pre">GooClaim Privacy Office</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[42px] whitespace-pre">123 Healthcare Blvd, Suite 500</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[63px] whitespace-pre">San Francisco, CA 94105</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[140px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph20 />
      <Paragraph21 />
      <Paragraph22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[220.5px] items-start left-0 top-[2394px] w-[784px]" data-name="Container">
      <Heading18 />
      <Paragraph19 />
      <Container22 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[2656.5px] left-0 top-0 w-[784px]" data-name="Section">
      <Container2 />
      <Container5 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container23 />
    </div>
  );
}

function PrimitiveDiv() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[2712.5px] w-[784px]" data-name="Primitive.div" />;
}

function Heading19() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[31.5px] left-0 not-italic text-[26.25px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">⚖️ Terms of Service</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Legal terms governing your use of GooClaim</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[59.5px] items-start left-0 top-0 w-[784px]" data-name="Container">
      <Heading19 />
      <Paragraph23 />
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Use of Service</p>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[762px]">By accessing and using GooClaim, you agree to comply with these Terms of Service. GooClaim provides healthcare automation software designed for medical practices, hospitals, and healthcare organizations.</p>
    </div>
  );
}

function BoldText8() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[67.492px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Eligibility:</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText8 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[748px]">You must be at least 18 years old and have the authority to enter into this agreement on behalf of your organization.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[154px] items-start left-0 top-[87.5px] w-[784px]" data-name="Container">
      <Heading20 />
      <Paragraph24 />
      <Paragraph25 />
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">User Responsibilities</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">You agree to:</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Provide accurate and complete information when creating an account</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Maintain the security and confidentiality of your login credentials</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Use the service only for lawful purposes in compliance with healthcare regulations</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Not attempt to gain unauthorized access to our systems or networks</p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Not use the service to transmit malicious code or harmful content</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Notify us immediately of any security breaches or unauthorized access</p>
    </div>
  );
}

function List3() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[182px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem18 />
          <ListItem19 />
          <ListItem20 />
          <ListItem21 />
          <ListItem22 />
          <ListItem23 />
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[262.5px] items-start left-0 top-[283.5px] w-[784px]" data-name="Container">
      <Heading21 />
      <Paragraph26 />
      <List3 />
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Intellectual Property</p>
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[73.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[782px]">All content, features, and functionality of GooClaim, including but not limited to software, algorithms, text, graphics, logos, and trademarks, are owned by GooClaim and protected by copyright, trademark, and other intellectual property laws.</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[761px]">You retain ownership of your data and content submitted to GooClaim. We claim no intellectual property rights over your healthcare data.</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[178.5px] items-start left-0 top-[588px] w-[784px]" data-name="Container">
      <Heading22 />
      <Paragraph27 />
      <Paragraph28 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Service Availability</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">We strive to maintain 99.9% uptime but cannot guarantee uninterrupted access. We reserve the right to:</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Perform scheduled maintenance with advance notice</p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Make updates and improvements to the platform</p>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Suspend or terminate access for violations of these terms</p>
    </div>
  );
}

function List4() {
  return (
    <div className="h-[87.5px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[87.5px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem24 />
          <ListItem25 />
          <ListItem26 />
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[168px] items-start left-0 top-[808.5px] w-[784px]" data-name="Container">
      <Heading23 />
      <Paragraph29 />
      <List4 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Limitation of Liability</p>
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[73.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[768px]">TO THE MAXIMUM EXTENT PERMITTED BY LAW, GOOCLAIM SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.</p>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Our total liability for any claims shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[154px] items-start left-0 top-[1018.5px] w-[784px]" data-name="Container">
      <Heading24 />
      <Paragraph30 />
      <Paragraph31 />
    </div>
  );
}

function Heading25() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Termination</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[756px]">{`Either party may terminate this agreement with 30 days' written notice. We may immediately suspend or terminate your access if you breach these terms or engage in fraudulent activity.`}</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Upon termination, you will receive a copy of your data in a standard format within 30 days.</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[129.5px] items-start left-0 top-[1214.5px] w-[784px]" data-name="Container">
      <Heading25 />
      <Paragraph32 />
      <Paragraph33 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[1386px] left-0 top-[2755.5px] w-[784px]" data-name="Section">
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function PrimitiveDiv1() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[4197.5px] w-[784px]" data-name="Primitive.div" />;
}

function Heading26() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[31.5px] left-0 not-italic text-[26.25px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">🤝 Data Processing Agreement (DPA)</p>
    </div>
  );
}

function Paragraph34() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">HIPAA Business Associate Agreement</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[59.5px] items-start left-0 top-0 w-[784px]" data-name="Container">
      <Heading26 />
      <Paragraph34 />
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Roles and Responsibilities</p>
    </div>
  );
}

function Heading28() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Customer (Covered Entity)</p>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#364153] text-[12.25px] text-nowrap top-0 whitespace-pre">Data Controller</p>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#364153] text-[12.25px] text-nowrap top-0 whitespace-pre">Determines purposes of processing</p>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#364153] text-[12.25px] text-nowrap top-0 whitespace-pre">Ensures lawful data collection</p>
    </div>
  );
}

function List5() {
  return (
    <div className="h-[66.5px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[66.5px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem27 />
          <ListItem28 />
          <ListItem29 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[10.5px] items-start relative shrink-0" data-name="Container">
      <Heading28 />
      <List5 />
    </div>
  );
}

function Heading29() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">GooClaim (Business Associate)</p>
    </div>
  );
}

function ListItem30() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#364153] text-[12.25px] text-nowrap top-0 whitespace-pre">Data Processor</p>
    </div>
  );
}

function ListItem31() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#364153] text-[12.25px] text-nowrap top-0 whitespace-pre">Processes data per instructions</p>
    </div>
  );
}

function ListItem32() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#364153] text-[12.25px] text-nowrap top-0 whitespace-pre">Implements security measures</p>
    </div>
  );
}

function List6() {
  return (
    <div className="h-[66.5px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[66.5px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem30 />
          <ListItem31 />
          <ListItem32 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[10.5px] items-start relative shrink-0" data-name="Container">
      <Heading29 />
      <List6 />
    </div>
  );
}

function Container34() {
  return (
    <div className="gap-[21px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[98px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[140px] items-start left-0 top-[87.5px] w-[784px]" data-name="Container">
      <Heading27 />
      <Container34 />
    </div>
  );
}

function Heading30() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Scope of Processing</p>
    </div>
  );
}

function Heading31() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Data Categories</p>
    </div>
  );
}

function Paragraph35() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Medical billing codes, prior authorization data, claims information, provider identifiers, and organizational metadata.</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading31 />
      <Paragraph35 />
    </div>
  );
}

function Heading32() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Processing Activities</p>
    </div>
  );
}

function Paragraph36() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[743px]">Medical coding automation, prior authorization processing, denial prediction, claim validation, and administrative analytics.</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading32 />
      <Paragraph36 />
    </div>
  );
}

function Heading33() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Duration</p>
    </div>
  );
}

function Paragraph37() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">For the term of the service agreement and retention period as specified in our Privacy Policy.</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading33 />
      <Paragraph37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col gap-[17.5px] h-[217px] items-start relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[259px] items-start left-0 top-[269.5px] w-[784px]" data-name="Container">
      <Heading30 />
      <Container39 />
    </div>
  );
}

function Heading34() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Security Measures</p>
    </div>
  );
}

function Paragraph38() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">GooClaim implements technical and organizational measures to ensure HIPAA compliance:</p>
    </div>
  );
}

function ListItem33() {
  return (
    <div className="[grid-area:1_/_1] relative shrink-0" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Encryption at rest and in transit</p>
    </div>
  );
}

function ListItem34() {
  return (
    <div className="[grid-area:1_/_2] relative shrink-0" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Access controls and authentication</p>
    </div>
  );
}

function ListItem35() {
  return (
    <div className="[grid-area:2_/_1] relative shrink-0" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Audit logging and monitoring</p>
    </div>
  );
}

function ListItem36() {
  return (
    <div className="[grid-area:2_/_2] relative shrink-0" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Regular security assessments</p>
    </div>
  );
}

function ListItem37() {
  return (
    <div className="[grid-area:3_/_1] relative shrink-0" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Employee training and NDAs</p>
    </div>
  );
}

function ListItem38() {
  return (
    <div className="[grid-area:3_/_2] relative shrink-0" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Incident response procedures</p>
    </div>
  );
}

function ListItem39() {
  return (
    <div className="[grid-area:4_/_1] relative shrink-0" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Business continuity planning</p>
    </div>
  );
}

function ListItem40() {
  return (
    <div className="[grid-area:4_/_2] relative shrink-0" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Secure development practices</p>
    </div>
  );
}

function List7() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border gap-[7px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(4,_minmax(0px,_1fr))] h-[119px] pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem33 />
          <ListItem34 />
          <ListItem35 />
          <ListItem36 />
          <ListItem37 />
          <ListItem38 />
          <ListItem39 />
          <ListItem40 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[199.5px] items-start left-0 top-[570.5px] w-[784px]" data-name="Container">
      <Heading34 />
      <Paragraph38 />
      <List7 />
    </div>
  );
}

function Heading35() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Sub-processors</p>
    </div>
  );
}

function Paragraph39() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">We engage the following sub-processors, all of whom have executed HIPAA Business Associate Agreements:</p>
    </div>
  );
}

function Paragraph40() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Amazon Web Services (AWS)</p>
    </div>
  );
}

function Paragraph41() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">Cloud hosting infrastructure</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[52.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[52.5px] items-start pb-0 pl-[18px] pr-0 pt-[7px] relative w-full">
          <Paragraph40 />
          <Paragraph41 />
        </div>
      </div>
    </div>
  );
}

function Paragraph42() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Supabase</p>
    </div>
  );
}

function Paragraph43() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">Database and authentication services</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[52.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[52.5px] items-start pb-0 pl-[18px] pr-0 pt-[7px] relative w-full">
          <Paragraph42 />
          <Paragraph43 />
        </div>
      </div>
    </div>
  );
}

function Paragraph44() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-0 whitespace-pre">Stripe</p>
    </div>
  );
}

function Paragraph45() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">Payment processing</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[52.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[52.5px] items-start pb-0 pl-[18px] pr-0 pt-[7px] relative w-full">
          <Paragraph44 />
          <Paragraph45 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[185.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[266px] items-start left-0 top-[812px] w-[784px]" data-name="Container">
      <Heading35 />
      <Paragraph39 />
      <Container45 />
    </div>
  );
}

function Heading36() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Data Subject Rights</p>
    </div>
  );
}

function Paragraph46() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">We assist customers in fulfilling data subject requests within 30 days:</p>
    </div>
  );
}

function ListItem41() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Right to access personal data</p>
    </div>
  );
}

function ListItem42() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Right to rectification of inaccurate data</p>
    </div>
  );
}

function ListItem43() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Right to erasure (right to be forgotten)</p>
    </div>
  );
}

function ListItem44() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Right to data portability</p>
    </div>
  );
}

function ListItem45() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Right to restrict processing</p>
    </div>
  );
}

function ListItem46() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Right to object to processing</p>
    </div>
  );
}

function List8() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[182px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem41 />
          <ListItem42 />
          <ListItem43 />
          <ListItem44 />
          <ListItem45 />
          <ListItem46 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[262.5px] items-start left-0 top-[1120px] w-[784px]" data-name="Container">
      <Heading36 />
      <Paragraph46 />
      <List8 />
    </div>
  );
}

function Heading37() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Return or Deletion of Data</p>
    </div>
  );
}

function Paragraph47() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Upon termination or expiration of the agreement, we will:</p>
    </div>
  );
}

function ListItem47() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Return or provide access to all customer data within 30 days</p>
    </div>
  );
}

function ListItem48() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Securely delete all copies of customer data from our systems</p>
    </div>
  );
}

function ListItem49() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Provide certification of deletion upon request</p>
    </div>
  );
}

function ListItem50() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Retain only what is required by law with customer notice</p>
    </div>
  );
}

function NumberedList() {
  return (
    <div className="h-[119px] relative shrink-0 w-full" data-name="Numbered List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[119px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem47 />
          <ListItem48 />
          <ListItem49 />
          <ListItem50 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[199.5px] items-start left-0 top-[1424.5px] w-[784px]" data-name="Container">
      <Heading37 />
      <Paragraph47 />
      <NumberedList />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute h-[1666px] left-0 top-[4240.5px] w-[784px]" data-name="Section">
      <Container31 />
      <Container35 />
      <Container40 />
      <Container41 />
      <Container46 />
      <Container47 />
      <Container48 />
    </div>
  );
}

function PrimitiveDiv2() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[5962.5px] w-[784px]" data-name="Primitive.div" />;
}

function Heading38() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[31.5px] left-0 not-italic text-[26.25px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">🔐 Security Overview</p>
    </div>
  );
}

function Paragraph48() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Our commitment to data protection</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[59.5px] items-start left-0 top-0 w-[784px]" data-name="Container">
      <Heading38 />
      <Paragraph48 />
    </div>
  );
}

function Heading39() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Infrastructure</p>
    </div>
  );
}

function Paragraph49() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">GooClaim is built on enterprise-grade, HIPAA-compliant cloud infrastructure:</p>
    </div>
  );
}

function Heading40() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Azure Infrastructure</p>
    </div>
  );
}

function ListItem51() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Multi-region redundancy</p>
    </div>
  );
}

function ListItem52() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">99.99% uptime SLA</p>
    </div>
  );
}

function ListItem53() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">SOC 2 Type II certified</p>
    </div>
  );
}

function ListItem54() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">HIPAA-eligible services</p>
    </div>
  );
}

function List9() {
  return (
    <div className="h-[105px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[105px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem51 />
          <ListItem52 />
          <ListItem53 />
          <ListItem54 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[10.5px] items-start relative shrink-0" data-name="Container">
      <Heading40 />
      <List9 />
    </div>
  );
}

function Heading41() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Network Security</p>
    </div>
  );
}

function ListItem55() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">DDoS protection</p>
    </div>
  );
}

function ListItem56() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Web Application Firewall (WAF)</p>
    </div>
  );
}

function ListItem57() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Intrusion detection systems</p>
    </div>
  );
}

function ListItem58() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-0 whitespace-pre">Network segmentation</p>
    </div>
  );
}

function List10() {
  return (
    <div className="h-[105px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[105px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem55 />
          <ListItem56 />
          <ListItem57 />
          <ListItem58 />
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[10.5px] items-start relative shrink-0" data-name="Container">
      <Heading41 />
      <List10 />
    </div>
  );
}

function Container52() {
  return (
    <div className="gap-[21px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[136.5px] relative shrink-0 w-full" data-name="Container">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[217px] items-start left-0 top-[87.5px] w-[784px]" data-name="Container">
      <Heading39 />
      <Paragraph49 />
      <Container52 />
    </div>
  );
}

function Heading42() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">{`Encryption & Storage`}</p>
    </div>
  );
}

function Heading43() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Data in Transit</p>
    </div>
  );
}

function Paragraph50() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">All data transmitted between your browser and our servers uses TLS 1.3 encryption with perfect forward secrecy.</p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading43 />
      <Paragraph50 />
    </div>
  );
}

function Heading44() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Data at Rest</p>
    </div>
  );
}

function Paragraph51() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">All stored data is encrypted using AES-256 encryption with managed encryption keys rotated every 90 days.</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading44 />
      <Paragraph51 />
    </div>
  );
}

function Heading45() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Database Encryption</p>
    </div>
  );
}

function Paragraph52() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Database-level encryption with column-level encryption for sensitive fields like patient identifiers and financial data.</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[52.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading45 />
      <Paragraph52 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[17.5px] h-[192.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container55 />
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[234.5px] items-start left-0 top-[346.5px] w-[784px]" data-name="Container">
      <Heading42 />
      <Container57 />
    </div>
  );
}

function Heading46() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Access Control</p>
    </div>
  );
}

function ListItem59() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Multi-factor authentication (MFA) required for all users</p>
    </div>
  );
}

function ListItem60() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Role-based access control (RBAC) with principle of least privilege</p>
    </div>
  );
}

function ListItem61() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Session timeouts after 30 minutes of inactivity</p>
    </div>
  );
}

function ListItem62() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">IP whitelisting for administrative access</p>
    </div>
  );
}

function ListItem63() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Automated account lockout after 5 failed login attempts</p>
    </div>
  );
}

function ListItem64() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Regular access reviews and recertification</p>
    </div>
  );
}

function List11() {
  return (
    <div className="h-[182px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[182px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem59 />
          <ListItem60 />
          <ListItem61 />
          <ListItem62 />
          <ListItem63 />
          <ListItem64 />
        </div>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[224px] items-start left-0 top-[623px] w-[784px]" data-name="Container">
      <Heading46 />
      <List11 />
    </div>
  );
}

function Heading47() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">{`Monitoring & Auditing`}</p>
    </div>
  );
}

function Paragraph53() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Comprehensive logging and monitoring to detect and respond to security events:</p>
    </div>
  );
}

function ListItem65() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">24/7 security monitoring and alerting</p>
    </div>
  );
}

function ListItem66() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Audit logs retained for 7 years (HIPAA requirement)</p>
    </div>
  );
}

function ListItem67() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Automated anomaly detection and threat intelligence</p>
    </div>
  );
}

function ListItem68() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Quarterly vulnerability scans and annual penetration testing</p>
    </div>
  );
}

function ListItem69() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Security Information and Event Management (SIEM) integration</p>
    </div>
  );
}

function List12() {
  return (
    <div className="h-[150.5px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[150.5px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem65 />
          <ListItem66 />
          <ListItem67 />
          <ListItem68 />
          <ListItem69 />
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[231px] items-start left-0 top-[889px] w-[784px]" data-name="Container">
      <Heading47 />
      <Paragraph53 />
      <List12 />
    </div>
  );
}

function Heading48() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Compliance Alignment</p>
    </div>
  );
}

function Heading49() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">HIPAA</p>
    </div>
  );
}

function Paragraph54() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">Health Insurance Portability and Accountability Act</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading49 />
      <Paragraph54 />
    </div>
  );
}

function Heading50() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">SOC 2 Type II</p>
    </div>
  );
}

function Paragraph55() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">Service Organization Control</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading50 />
      <Paragraph55 />
    </div>
  );
}

function Heading51() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">GDPR</p>
    </div>
  );
}

function Paragraph56() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">General Data Protection Regulation</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading51 />
      <Paragraph56 />
    </div>
  );
}

function Heading52() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">CCPA</p>
    </div>
  );
}

function Paragraph57() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">California Consumer Privacy Act</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading52 />
      <Paragraph57 />
    </div>
  );
}

function Heading53() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">HITECH</p>
    </div>
  );
}

function Paragraph58() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] top-0 w-[369px]">Health Information Technology for Economic and Clinical Health Act</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading53 />
      <Paragraph58 />
    </div>
  );
}

function Heading54() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">ISO 27001</p>
    </div>
  );
}

function Paragraph59() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">Information Security Management (In Progress)</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="[grid-area:3_/_2] content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0" data-name="Container">
      <Heading54 />
      <Paragraph59 />
    </div>
  );
}

function Container67() {
  return (
    <div className="gap-[17.5px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[42px_42px_minmax(0px,_1fr)] h-[178.5px] relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Container62 />
      <Container63 />
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[220.5px] items-start left-0 top-[1162px] w-[784px]" data-name="Container">
      <Heading48 />
      <Container67 />
    </div>
  );
}

function Heading55() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Incident Response</p>
    </div>
  );
}

function Paragraph60() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">In the event of a security incident, we follow a documented incident response plan:</p>
    </div>
  );
}

function BoldText9() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[146.102px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">{`Detection & Analysis:`}</p>
    </div>
  );
}

function ListItem70() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText9 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[146.1px] not-italic text-[#364153] text-[14px] top-[0.5px] w-[303px]">Identify and assess the incident within 1 hour</p>
    </div>
  );
}

function BoldText10() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[93.125px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Containment:</p>
    </div>
  );
}

function ListItem71() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText10 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[93.13px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Isolate affected systems to prevent further impact</p>
    </div>
  );
}

function BoldText11() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[85.07px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Notification:</p>
    </div>
  );
}

function ListItem72() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText11 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[85.07px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">{`Notify affected customers within 24 hours (HIPAA breach < 72 hours)`}</p>
    </div>
  );
}

function BoldText12() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[82.164px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Eradication:</p>
    </div>
  );
}

function ListItem73() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText12 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[82.16px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Remove threat and restore systems from clean backups</p>
    </div>
  );
}

function BoldText13() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[69.445px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Recovery:</p>
    </div>
  );
}

function ListItem74() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText13 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[69.44px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Validate system integrity and resume normal operations</p>
    </div>
  );
}

function BoldText14() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[149.867px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Post-Incident Review:</p>
    </div>
  );
}

function ListItem75() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText14 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[149.87px] not-italic text-[#364153] text-[14px] top-[0.5px] w-[379px]">Document lessons learned and implement improvements</p>
    </div>
  );
}

function NumberedList1() {
  return (
    <div className="h-[199.5px] relative shrink-0 w-full" data-name="Numbered List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[199.5px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem70 />
          <ListItem71 />
          <ListItem72 />
          <ListItem73 />
          <ListItem74 />
          <ListItem75 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[280px] items-start left-0 top-[1424.5px] w-[784px]" data-name="Container">
      <Heading55 />
      <Paragraph60 />
      <NumberedList1 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute h-[1746.5px] left-0 top-[6005.5px] w-[784px]" data-name="Section">
      <Container49 />
      <Container53 />
      <Container58 />
      <Container59 />
      <Container60 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function PrimitiveDiv3() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] h-px left-0 top-[7808px] w-[784px]" data-name="Primitive.div" />;
}

function Heading56() {
  return (
    <div className="h-[31.5px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[31.5px] left-0 not-italic text-[26.25px] text-neutral-950 text-nowrap top-[0.5px] whitespace-pre">🍪 Cookie Policy</p>
    </div>
  );
}

function Paragraph61() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">How we use cookies and tracking technologies</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[7px] h-[59.5px] items-start left-0 top-0 w-[784px]" data-name="Container">
      <Heading56 />
      <Paragraph61 />
    </div>
  );
}

function Heading57() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">What Are Cookies</p>
    </div>
  );
}

function Paragraph62() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[740px]">Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences and analyzing how you use our platform.</p>
    </div>
  );
}

function BoldText15() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[90.227px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Your Control:</p>
    </div>
  );
}

function Paragraph63() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText15 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] w-[758px]">You can manage cookie preferences through our consent banner or your browser settings. Rejecting cookies may limit some functionality.</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[154px] items-start left-0 top-[87.5px] w-[784px]" data-name="Container">
      <Heading57 />
      <Paragraph62 />
      <Paragraph63 />
    </div>
  );
}

function Heading58() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Types of Cookies We Use</p>
    </div>
  );
}

function Heading59() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Essential Cookies (Always Active)</p>
    </div>
  );
}

function Paragraph64() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Required for the website to function properly. These cannot be disabled.</p>
    </div>
  );
}

function Paragraph65() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">Examples: Authentication, security, session management, cookie consent preference</p>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading59 />
      <Paragraph64 />
      <Paragraph65 />
    </div>
  );
}

function Heading60() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Analytics Cookies (Optional)</p>
    </div>
  );
}

function Paragraph66() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Help us understand how visitors interact with our website.</p>
    </div>
  );
}

function Paragraph67() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">Examples: Page views, session duration, feature usage, error tracking</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading60 />
      <Paragraph66 />
      <Paragraph67 />
    </div>
  );
}

function Heading61() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Functional Cookies (Optional)</p>
    </div>
  );
}

function Paragraph68() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Enable enhanced functionality and personalization.</p>
    </div>
  );
}

function Paragraph69() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">Examples: Language preferences, display settings, recent searches</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] h-[77px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading61 />
      <Paragraph68 />
      <Paragraph69 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col gap-[17.5px] h-[266px] items-start relative shrink-0 w-full" data-name="Container">
      <Container72 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[308px] items-start left-0 top-[283.5px] w-[784px]" data-name="Container">
      <Heading58 />
      <Container75 />
    </div>
  );
}

function Heading62() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Managing Cookies</p>
    </div>
  );
}

function Paragraph70() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">You have several options to control cookies:</p>
    </div>
  );
}

function BoldText16() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[104.641px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Cookie Banner:</p>
    </div>
  );
}

function ListItem76() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText16 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[104.64px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Accept or reject non-essential cookies when you first visit our site</p>
    </div>
  );
}

function BoldText17() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[121.609px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Browser Settings:</p>
    </div>
  );
}

function ListItem77() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText17 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[121.61px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">Most browsers allow you to refuse cookies or delete existing cookies</p>
    </div>
  );
}

function BoldText18() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[92.945px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Do Not Track:</p>
    </div>
  );
}

function ListItem78() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="List Item">
      <BoldText18 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[92.94px] not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">We honor Do Not Track signals from your browser</p>
    </div>
  );
}

function List13() {
  return (
    <div className="h-[94.5px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10.5px] h-[94.5px] items-start pl-[17.5px] pr-0 py-0 relative w-full">
          <ListItem76 />
          <ListItem77 />
          <ListItem78 />
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-[614.68px] top-px w-[134.039px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic relative shrink-0 text-[#155dfc] text-[12.25px] text-nowrap whitespace-pre">privacy@gooclaim.com</p>
    </div>
  );
}

function Paragraph71() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] top-0 w-[615px]">{`To clear your cookie consent and see the banner again, clear your browser's localStorage or contact us at`}</p>
      <Link2 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[206.5px] items-start left-0 top-[633.5px] w-[784px]" data-name="Container">
      <Heading62 />
      <Paragraph70 />
      <List13 />
      <Paragraph71 />
    </div>
  );
}

function Heading63() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">No Advertising Cookies</p>
    </div>
  );
}

function Heading64() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">Privacy-First Approach</p>
    </div>
  );
}

function BoldText19() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[3.5px] w-[307.828px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[24.5px] not-italic relative shrink-0 text-[#1e2939] text-[14px] text-nowrap whitespace-pre">GooClaim does NOT use advertising cookies.</p>
    </div>
  );
}

function Paragraph72() {
  return (
    <div className="h-[49px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText19 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#1e2939] text-[14px] top-[0.5px] w-[702px]">We do not sell your data to third parties or display targeted advertisements.</p>
    </div>
  );
}

function Paragraph73() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#364153] text-[12.25px] top-0 w-[745px]">Any analytics cookies we use are solely for improving our service and understanding user behavior on an aggregate, anonymized basis.</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="bg-blue-50 h-[164.5px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[7px] h-[164.5px] items-start pb-0 pl-[21.5px] pr-[17.5px] pt-[17.5px] relative w-full">
          <Heading64 />
          <Paragraph72 />
          <Paragraph73 />
        </div>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] h-[213.5px] items-start left-0 top-[882px] w-[784px]" data-name="Container">
      <Heading63 />
      <Container78 />
    </div>
  );
}

function Heading65() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[28px] left-0 not-italic text-[21px] text-neutral-950 text-nowrap top-[-1px] whitespace-pre">Contact Information</p>
    </div>
  );
}

function Paragraph74() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#364153] text-[14px] text-nowrap top-[0.5px] whitespace-pre">For questions about our use of cookies:</p>
    </div>
  );
}

function BoldText20() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[2px] w-[41.68px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[21px] not-italic relative shrink-0 text-[#364153] text-[14px] text-nowrap whitespace-pre">Email:</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[45.62px] top-[2px] w-[153.188px]" data-name="Link">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#155dfc] text-[14px] text-nowrap whitespace-pre">privacy@gooclaim.com</p>
    </div>
  );
}

function Paragraph75() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText20 />
      <Link3 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[101.5px] items-start left-0 top-[1137.5px] w-[784px]" data-name="Container">
      <Heading65 />
      <Paragraph74 />
      <Paragraph75 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute h-[1281px] left-0 top-[7851px] w-[784px]" data-name="Section">
      <Container70 />
      <Container71 />
      <Container76 />
      <Container77 />
      <Container79 />
      <Container80 />
    </div>
  );
}

function BoldText21() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-px w-[83.289px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.5px] not-italic relative shrink-0 text-[#4a5565] text-[12.25px] text-nowrap whitespace-pre">Last Updated:</p>
    </div>
  );
}

function Paragraph76() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText21 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-[83.29px] not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">October 12, 2025</p>
    </div>
  );
}

function Paragraph77() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">We may update this policy periodically. Material changes will be communicated via email to registered users.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[64.977px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#155dfc] text-[12.25px] text-nowrap top-[1.75px] whitespace-pre">Contact Us</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute h-[21px] left-[75.48px] top-0 w-[7.875px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#d1d5dc] text-[14px] text-nowrap top-0 whitespace-pre">•</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[21px] left-[93.85px] top-0 w-[87.461px]" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#155dfc] text-[12.25px] text-nowrap top-[1.75px] whitespace-pre">Print This Page</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Text />
      <Button2 />
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7px] h-[113px] items-start left-0 pb-0 pt-[29px] px-0 top-[9188px] w-[784px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Paragraph76 />
      <Paragraph77 />
      <Container81 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="basis-0 grow h-[9371px] min-h-px min-w-px relative shrink-0" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[9371px] relative w-full">
        <Section />
        <PrimitiveDiv />
        <Section1 />
        <PrimitiveDiv1 />
        <Section2 />
        <PrimitiveDiv2 />
        <Section3 />
        <PrimitiveDiv3 />
        <Section4 />
        <Container82 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="absolute box-border content-stretch flex gap-[42px] h-[9371px] items-start left-[38px] pl-0 pr-[308px] py-0 top-[323px] w-[1358px]" data-name="Container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

function Container84() {
  return <div className="absolute h-[774.531px] left-0 top-0 w-[1434px]" data-name="Container" />;
}

function Container85() {
  return <div className="absolute bg-[rgba(190,219,255,0.2)] blur-xl filter left-[52.8px] rounded-[1.67772e+07px] size-[120.173px] top-[16.32px]" data-name="Container" />;
}

function Container86() {
  return <div className="absolute bg-[rgba(185,248,207,0.2)] blur-xl filter left-[1252.23px] rounded-[1.67772e+07px] size-[132.708px] top-[610.99px]" data-name="Container" />;
}

function Logomark2() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Logomark2">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogomark2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[35px]" />
    </div>
  );
}

function Container87() {
  return (
    <div className="basis-0 grow h-[31.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[31.5px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[31.5px] left-0 not-italic text-[#101828] text-[26.25px] text-nowrap top-[0.5px] tracking-[-1.12px] whitespace-pre">GooClaim</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute content-stretch flex gap-[10.5px] h-[35px] items-center left-0 top-0 w-[161.289px]" data-name="Footer">
      <Logomark2 />
      <Container87 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute h-[76.781px] left-0 top-[56px] w-[392px]" data-name="Footer">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.594px] left-0 not-italic text-[#4a5565] text-[15.75px] top-[-1px] w-[386px]">Transforming healthcare administration through autonomous AI agents. Eliminate manual workflows, reduce errors, and accelerate patient care delivery.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p8063980} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p3c89df0} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[155.312px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[155.312px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">contact@gooclaim.com</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Text1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p385b1800} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[112.938px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[112.938px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">+91 7762925373</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text2 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p2f289d80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p2846f780} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[110.273px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[110.273px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Bengaluru , India</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[21px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Text3 />
    </div>
  );
}

function Footer2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10.5px] h-[84px] items-start left-0 top-[153.78px] w-[406px]" data-name="Footer">
      <Container88 />
      <Container89 />
      <Container90 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p16f45800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-white relative rounded-[8.75px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[35px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[35px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p85afc00} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p256a2980} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p1c8f680} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-white relative rounded-[8.75px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[35px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[35px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p282e400} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          <path d={svgPaths.p1ddc42c0} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-white relative rounded-[8.75px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 size-[35px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[35px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Footer3() {
  return (
    <div className="absolute content-stretch flex gap-[14px] h-[35px] items-center left-0 top-[258.78px] w-[406px]" data-name="Footer">
      <Link4 />
      <Link5 />
      <Link6 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[293.781px] left-0 opacity-0 top-[20px] w-[406px]" data-name="Container">
      <Footer />
      <Footer1 />
      <Footer2 />
      <Footer3 />
    </div>
  );
}

function Footer4() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Footer">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#101828] text-[15.75px] text-nowrap top-[-0.5px] whitespace-pre">Navigation</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[58.148px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Features</p>
    </div>
  );
}

function ListItem79() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Button3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[46.734px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Pricing</p>
    </div>
  );
}

function ListItem80() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Button4 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[40.227px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">About</p>
    </div>
  );
}

function ListItem81() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Button5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[52.773px]" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Contact</p>
    </div>
  );
}

function ListItem82() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Button6 />
    </div>
  );
}

function Footer5() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] h-[115.5px] items-start relative shrink-0 w-full" data-name="Footer">
      <ListItem79 />
      <ListItem80 />
      <ListItem81 />
      <ListItem82 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] h-[293.781px] items-start left-[448px] opacity-0 top-[20px] w-[182px]" data-name="Container">
      <Footer4 />
      <Footer5 />
    </div>
  );
}

function Footer6() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Footer">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#101828] text-[15.75px] text-nowrap top-[-0.5px] whitespace-pre">Products</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[123.46px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">AI Medical Coding</p>
      <Icon6 />
    </div>
  );
}

function ListItem83() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[126.86px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Prior Authorization</p>
      <Icon7 />
    </div>
  );
}

function ListItem84() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[135.11px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Denial Management</p>
      <Icon8 />
    </div>
  );
}

function ListItem85() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[94.41px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Patient Intake</p>
      <Icon9 />
    </div>
  );
}

function ListItem86() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[104.33px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Documentation</p>
      <Icon10 />
    </div>
  );
}

function ListItem87() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Footer7() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] h-[147px] items-start relative shrink-0 w-full" data-name="Footer">
      <ListItem83 />
      <ListItem84 />
      <ListItem85 />
      <ListItem86 />
      <ListItem87 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] h-[293.781px] items-start left-[672px] opacity-0 top-[20px] w-[182px]" data-name="Container">
      <Footer6 />
      <Footer7 />
    </div>
  );
}

function Footer8() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Footer">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-0 not-italic text-[#101828] text-[15.75px] text-nowrap top-[-0.5px] whitespace-pre">Resources</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[90.63px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Case Studies</p>
      <Icon11 />
    </div>
  );
}

function ListItem88() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[91.48px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">White Papers</p>
      <Icon12 />
    </div>
  );
}

function ListItem89() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link13 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[32.81px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Blog</p>
      <Icon13 />
    </div>
  );
}

function ListItem90() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link14 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[82.71px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Help Center</p>
      <Icon14 />
    </div>
  );
}

function ListItem91() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link15 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[56.36px] size-[10.5px] top-[5.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon" opacity="0">
          <path d="M6.5625 1.3125H9.1875V3.9375" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d="M4.375 6.125L9.1875 1.3125" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
          <path d={svgPaths.p35b87a0} id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.875" />
        </g>
      </svg>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute h-[21px] left-0 top-0 w-[182px]" data-name="Link">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-0 whitespace-pre">Training</p>
      <Icon15 />
    </div>
  );
}

function ListItem92() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Link16 />
    </div>
  );
}

function Footer9() {
  return (
    <div className="content-stretch flex flex-col gap-[10.5px] h-[147px] items-start relative shrink-0 w-full" data-name="Footer">
      <ListItem88 />
      <ListItem89 />
      <ListItem90 />
      <ListItem91 />
      <ListItem92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21px] h-[293.781px] items-start left-[896px] opacity-0 top-[20px] w-[182px]" data-name="Container">
      <Footer8 />
      <Footer9 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute h-[293.781px] left-0 top-0 w-[1078px]" data-name="Container">
      <Container91 />
      <Container92 />
      <Container93 />
      <Container94 />
    </div>
  );
}

function Heading66() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[539.16px] not-italic text-[#101828] text-[15.75px] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">Enterprise-Grade Compliance</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[14px] top-[1.75px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p24a4cc80} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Footer10() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-full" data-name="Footer">
      <Icon16 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-[224px] not-italic text-[#4a5565] text-[12.25px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Compliance certifications coming soon - Currently in foundation stage</p>
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[20.25px] opacity-0 relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[20.25px] items-start px-[325.688px] py-0 relative w-full">
          <Footer10 />
        </div>
      </div>
    </div>
  );
}

function Footer11() {
  return (
    <div className="content-stretch flex flex-col gap-[41px] h-[65.75px] items-start relative shrink-0 w-full" data-name="Footer">
      <Heading66 />
      <Container96 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[122.75px] items-start left-0 opacity-0 pb-0 pt-[29px] px-0 top-[355.78px] w-[1078px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Footer11 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[248.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-[248.18px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#4a5565] text-[14px] top-0 w-[249px]">© 2025 Gooclaim. All rights reserved.</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#fb2c36] text-[14px] text-nowrap top-0 whitespace-pre">Automating the Claims That Hold Healthcare Back</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[21px] relative shrink-0 w-[586.352px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[7px] h-[21px] items-center relative w-[586.352px]">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[88.453px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[88.453px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-0 whitespace-pre">{`Privacy & Legal`}</p>
      </div>
    </div>
  );
}

function Footer12() {
  return (
    <div className="content-stretch flex h-[21px] items-center justify-between relative shrink-0 w-full" data-name="Footer">
      <Container98 />
      <Button7 />
    </div>
  );
}

function Container99() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[50px] items-start left-0 opacity-0 pb-0 pt-[29px] px-0 top-[520.53px] w-[1078px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Footer12 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[8.79px] w-[13.367px]" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-0 whitespace-pre">↑</p>
    </div>
  );
}

function Footer13() {
  return (
    <div className="bg-gradient-to-r from-[#155dfc] h-[42px] relative rounded-[8.75px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#1447e6] w-full" data-name="Footer">
      <Container100 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[41.37px] not-italic text-[14px] text-nowrap text-white top-[10.5px] whitespace-pre">Back to Top</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[70px] items-start left-0 opacity-0 pb-0 pl-[468.594px] pr-[468.602px] pt-[28px] top-[612.53px] w-[1078px]" data-name="Container">
      <Footer13 />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[662.531px] left-[178px] opacity-0 top-[56px] w-[1078px]" data-name="Container">
      <Container95 />
      <Container97 />
      <Container99 />
      <Container101 />
    </div>
  );
}

function Footer14() {
  return (
    <div className="absolute h-[774.531px] left-0 overflow-clip top-[9722px] w-[1434px]" data-name="Footer">
      <Container84 />
      <Container85 />
      <Container86 />
      <Container102 />
    </div>
  );
}

function PrivacyPolicyPage() {
  return (
    <div className="absolute bg-white h-[10496.5px] left-0 top-0 w-[1434px]" data-name="PrivacyPolicyPage">
      <Container1 />
      <Container83 />
      <Footer14 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[12.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[12.5px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-0 whitespace-pre">🛡️</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[82.086px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[82.086px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-0 whitespace-pre">Privacy Policy</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex gap-[7px] h-[31.5px] items-center left-0 top-0 w-[210px]" data-name="Button">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[#155dfc] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Introduction</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Information We Collect</p>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">How We Use Information</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Data Security</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Sharing of Information</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Retention and Deletion</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] top-[5.25px] w-[125px]">Cookies and Tracking Technologies</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Contact Information</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[266px] items-start left-[28px] top-[38.5px] w-[182px]" data-name="Container">
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[304.5px] relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Container103 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[12.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[12.5px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-0 whitespace-pre">⚖️</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[99.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[99.609px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-0 whitespace-pre">Terms of Service</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex gap-[7px] h-[31.5px] items-center left-0 top-0 w-[210px]" data-name="Button">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Button18() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Use of Service</p>
    </div>
  );
}

function Button19() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">User Responsibilities</p>
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Intellectual Property</p>
    </div>
  );
}

function Button21() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Service Availability</p>
    </div>
  );
}

function Button22() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Limitation of Liability</p>
    </div>
  );
}

function Button23() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Termination</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[185.5px] items-start left-[28px] top-[38.5px] w-[182px]" data-name="Container">
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[224px] relative shrink-0 w-full" data-name="Container">
      <Button17 />
      <Container105 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[12.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[12.5px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-0 whitespace-pre">🤝</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="basis-0 grow h-[35px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35px] relative w-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 top-0 w-[164px]">Data Processing Agreement (DPA)</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute content-stretch flex gap-[7px] h-[49px] items-center left-0 top-0 w-[210px]" data-name="Button">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Button25() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Roles and Responsibilities</p>
    </div>
  );
}

function Button26() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Scope of Processing</p>
    </div>
  );
}

function Button27() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Security Measures</p>
    </div>
  );
}

function Button28() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Sub-processors</p>
    </div>
  );
}

function Button29() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Data Subject Rights</p>
    </div>
  );
}

function Button30() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Return or Deletion of Data</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[185.5px] items-start left-[28px] top-[56px] w-[182px]" data-name="Container">
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[241.5px] relative shrink-0 w-full" data-name="Container">
      <Button24 />
      <Container107 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[12.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[12.5px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-0 whitespace-pre">🔐</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[107.789px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[107.789px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-0 whitespace-pre">Security Overview</p>
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="absolute content-stretch flex gap-[7px] h-[31.5px] items-center left-0 top-0 w-[210px]" data-name="Button">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Button32() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Infrastructure</p>
    </div>
  );
}

function Button33() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">{`Encryption & Storage`}</p>
    </div>
  );
}

function Button34() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Access Control</p>
    </div>
  );
}

function Button35() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">{`Monitoring & Auditing`}</p>
    </div>
  );
}

function Button36() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Compliance Alignment</p>
    </div>
  );
}

function Button37() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Incident Response</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[185.5px] items-start left-[28px] top-[38.5px] w-[182px]" data-name="Container">
      <Button32 />
      <Button33 />
      <Button34 />
      <Button35 />
      <Button36 />
      <Button37 />
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[224px] relative shrink-0 w-full" data-name="Container">
      <Button31 />
      <Container109 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[12.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[12.5px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-0 whitespace-pre">🍪</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[79.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[17.5px] relative w-[79.422px]">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-0 not-italic text-[12.25px] text-neutral-950 text-nowrap top-0 whitespace-pre">Cookie Policy</p>
      </div>
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute content-stretch flex gap-[7px] h-[31.5px] items-center left-0 top-0 w-[210px]" data-name="Button">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Button39() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">What Are Cookies</p>
    </div>
  );
}

function Button40() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Types of Cookies We Use</p>
    </div>
  );
}

function Button41() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Managing Cookies</p>
    </div>
  );
}

function Button42() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">No Advertising Cookies</p>
    </div>
  );
}

function Button43() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#4a5565] text-[12.25px] text-nowrap top-[5.25px] whitespace-pre">Contact Information</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3.5px] h-[154px] items-start left-[28px] top-[38.5px] w-[182px]" data-name="Container">
      <Button39 />
      <Button40 />
      <Button41 />
      <Button42 />
      <Button43 />
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[192.5px] relative shrink-0 w-full" data-name="Container">
      <Button38 />
      <Container111 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[21px] h-[1270.5px] items-start relative shrink-0 w-full" data-name="Navigation">
      <Container104 />
      <Container106 />
      <Container108 />
      <Container110 />
      <Container112 />
    </div>
  );
}

function PrivacyPolicyPage1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[874px] items-start left-[38px] overflow-clip pl-0 pr-[14px] py-0 top-[323px] w-[224px]" data-name="PrivacyPolicyPage">
      <Navigation />
    </div>
  );
}

function Container113() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0)] h-[37.5px] left-0 rounded-[14px] to-[rgba(255,255,255,0.1)] top-0 w-[143.586px]" data-name="Container" />;
}

function Paragraph78() {
  return (
    <div className="absolute h-[20px] left-[17.5px] top-[8.75px] w-[108.586px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[20px] left-[54px] not-italic text-[15px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">{`Get free Demo `}</p>
    </div>
  );
}

function ButtonFilled() {
  return (
    <div className="absolute bg-gradient-to-b from-[#0d99ff] h-[37.5px] left-[956.91px] rounded-[14px] shadow-[0px_4px_16px_0px_rgba(13,153,255,0.3)] to-[#0b7ce6] top-[17.5px] w-[143.586px]" data-name="ButtonFilled">
      <Container113 />
      <Paragraph78 />
    </div>
  );
}

function Container114() {
  return <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0.15)] h-[72.5px] left-0 rounded-[24px] to-[rgba(255,255,255,0.15)] top-0 via-50% via-[rgba(255,255,255,0.08)] w-[1118px]" data-name="Container" />;
}

function Container115() {
  return <div className="absolute h-[72.5px] left-0 rounded-[24px] top-0 w-[1118px]" data-name="Container" />;
}

function Container116() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-[72.5px] left-0 rounded-[24px] to-[rgba(0,0,0,0)] top-0 w-[1118px]" data-name="Container" />;
}

function Paragraph79() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[62.305px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1b2228] text-[15px] text-nowrap top-0 whitespace-pre">Features</p>
    </div>
  );
}

function Text16() {
  return <div className="absolute bg-[#0d99ff] h-[1.75px] left-[31.15px] top-[21.75px] w-0" data-name="Text" />;
}

function PageLink() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[62.305px]" data-name="PageLink">
      <Paragraph79 />
      <Text16 />
    </div>
  );
}

function Paragraph80() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[100.953px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1b2228] text-[15px] text-nowrap top-0 whitespace-pre">How it works?</p>
    </div>
  );
}

function Text17() {
  return <div className="absolute bg-[#0d99ff] h-[1.75px] left-[50.48px] top-[21.75px] w-0" data-name="Text" />;
}

function PageLink1() {
  return (
    <div className="absolute h-[20px] left-[90.31px] top-0 w-[100.953px]" data-name="PageLink">
      <Paragraph80 />
      <Text17 />
    </div>
  );
}

function Paragraph81() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[50.078px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1b2228] text-[15px] text-nowrap top-0 whitespace-pre">Pricing</p>
    </div>
  );
}

function Text18() {
  return <div className="absolute bg-[#0d99ff] h-[1.75px] left-[25.04px] top-[21.75px] w-0" data-name="Text" />;
}

function PageLink2() {
  return (
    <div className="absolute h-[20px] left-[219.26px] top-0 w-[50.078px]" data-name="PageLink">
      <Paragraph81 />
      <Text18 />
    </div>
  );
}

function Paragraph82() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[43.102px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1b2228] text-[15px] text-nowrap top-0 whitespace-pre">About</p>
    </div>
  );
}

function Text19() {
  return <div className="absolute bg-[#0d99ff] h-[1.75px] left-[21.55px] top-[21.75px] w-0" data-name="Text" />;
}

function PageLink3() {
  return (
    <div className="absolute h-[20px] left-[297.34px] top-0 w-[43.102px]" data-name="PageLink">
      <Paragraph82 />
      <Text19 />
    </div>
  );
}

function Paragraph83() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[56.539px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#1b2228] text-[15px] text-nowrap top-0 whitespace-pre">Contact</p>
    </div>
  );
}

function Text20() {
  return <div className="absolute bg-[#0d99ff] h-[1.75px] left-[28.27px] top-[21.75px] w-0" data-name="Text" />;
}

function PageLink4() {
  return (
    <div className="absolute h-[20px] left-[368.44px] top-0 w-[56.539px]" data-name="PageLink">
      <Paragraph83 />
      <Text20 />
    </div>
  );
}

function PageLinks() {
  return (
    <div className="absolute h-[20px] left-[278.1px] top-[26.25px] w-[424.977px]" data-name="PageLinks">
      <PageLink />
      <PageLink1 />
      <PageLink2 />
      <PageLink3 />
      <PageLink4 />
    </div>
  );
}

function Logomark() {
  return (
    <div className="relative shrink-0 size-[31.5px]" data-name="Logomark">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogomark2} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[31.5px]" />
    </div>
  );
}

function Paragraph84() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[#1b2228] text-[28px] text-nowrap top-0 tracking-[-1.12px] whitespace-pre">GooClaim</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex gap-[3.5px] h-[28px] items-center relative shrink-0 w-full" data-name="Container">
      <Logomark />
      <Paragraph84 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute content-stretch flex flex-col h-[28px] items-start left-[35px] top-[22.25px] w-[159.102px]" data-name="Logo">
      <Container117 />
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[72.5px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <ButtonFilled />
      <Container114 />
      <Container115 />
      <Container116 />
      <PageLinks />
      <Logo />
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[74.5px] items-start left-[157px] p-px rounded-[24px] top-[14px] w-[1120px]" data-name="Navigation">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.12)]" />
      <Container118 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[21px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g clipPath="url(#clip0_4089_1070)" id="Icon">
          <path d={svgPaths.p11f68f00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d="M7.4375 7.4375V7.44625" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d="M14 13.5625V13.5713" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d="M10.5 10.5V10.5088" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d="M9.625 14.875V14.8838" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d="M6.125 12.25V12.2588" id="Vector_6" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
        <defs>
          <clipPath id="clip0_4089_1070">
            <rect fill="white" height="21" width="21" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="absolute bg-blue-100 content-stretch flex items-center justify-center left-0 rounded-[1.67772e+07px] size-[42px] top-[3.5px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-0 size-[17.5px] top-[3.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d={svgPaths.p3a676f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
        </g>
      </svg>
    </div>
  );
}

function Heading67() {
  return (
    <div className="h-[24.5px] relative shrink-0 w-full" data-name="Heading 3">
      <Icon18 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.5px] left-[24.5px] not-italic text-[17.5px] text-neutral-950 text-nowrap top-[-0.5px] whitespace-pre">Your Privacy Matters</p>
    </div>
  );
}

function Paragraph85() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#4a5565] text-[14px] top-[0.5px] w-[737px]">{`We use cookies to enhance your browsing experience, analyze site traffic, and deliver personalized content. By clicking "Accept", you consent to our use of cookies for analytics and marketing purposes. You can change your preferences at any time.`}</p>
    </div>
  );
}

function Container120() {
  return (
    <div className="h-[99.75px] relative shrink-0 w-[748.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[7px] h-[99.75px] items-start relative w-[748.5px]">
        <Heading67 />
        <Paragraph85 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[17.5px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p10a10000} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2726e300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45833" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button44() {
  return (
    <div className="relative shrink-0 size-[17.5px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[17.5px]">
        <Icon19 />
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex h-[99.75px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container120 />
      <Button44 />
    </div>
  );
}

function BoldText22() {
  return (
    <div className="absolute content-stretch flex h-[15px] items-start left-0 top-px w-[32.609px]" data-name="Bold Text">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[17.5px] not-italic relative shrink-0 text-[#193cb8] text-[12.25px] text-nowrap whitespace-pre">Note:</p>
    </div>
  );
}

function Paragraph86() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="Paragraph">
      <BoldText22 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] left-0 not-italic text-[#193cb8] text-[12.25px] top-0 w-[755px]">GooClaim does not collect personally identifiable information (PII) through cookies. We only use cookies for site functionality and anonymous analytics.</p>
    </div>
  );
}

function Container122() {
  return (
    <div className="bg-blue-50 h-[58px] relative rounded-[8.75px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-blue-100 border-solid inset-0 pointer-events-none rounded-[8.75px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[58px] items-start pb-px pt-[11.5px] px-[11.5px] relative w-full">
          <Paragraph86 />
        </div>
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[14px] size-[14px] top-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4089_1057)" id="Icon">
          <path d={svgPaths.p38fbf2c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.pd7eb500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4089_1057">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button45() {
  return (
    <div className="bg-[#155dfc] h-[35px] relative rounded-[6.75px] shrink-0 w-[148.445px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35px] relative w-[148.445px]">
        <Icon20 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-[42px] not-italic text-[12.25px] text-nowrap text-white top-[8.75px] whitespace-pre">Accept Cookies</p>
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[15px] size-[14px] top-[10.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_4089_1052)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.75 5.25L5.25 8.75" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.25 5.25L8.75 8.75" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_4089_1052">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button46() {
  return (
    <div className="bg-white h-[35px] relative rounded-[6.75px] shrink-0 w-[179.883px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[6.75px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[35px] relative w-[179.883px]">
        <Icon21 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.5px] left-[43px] not-italic text-[12.25px] text-neutral-950 text-nowrap top-[8.75px] whitespace-pre">Reject Non-Essential</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex gap-[10.5px] h-[35px] items-start relative shrink-0 w-full" data-name="Container">
      <Button45 />
      <Button46 />
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute content-stretch flex h-[12.5px] items-start left-[265.5px] top-[0.5px] w-[68.883px]" data-name="Link">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-nowrap underline whitespace-pre">Privacy Policy</p>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute content-stretch flex h-[12.5px] items-start left-[358.88px] top-[0.5px] w-[66.641px]" data-name="Link">
      <p className="[text-underline-position:from-font] decoration-solid font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#155dfc] text-[10.5px] text-nowrap underline whitespace-pre">Cookie Policy</p>
    </div>
  );
}

function Paragraph87() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-0 not-italic text-[#6a7282] text-[10.5px] top-[-0.5px] w-[266px]">Learn more about how we protect your privacy in our</p>
      <Link17 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-[334.38px] not-italic text-[#6a7282] text-[10.5px] top-[-0.5px] w-[25px]">and</p>
      <Link18 />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[14px] left-[425.52px] not-italic text-[#6a7282] text-[10.5px] text-nowrap top-[-0.5px] whitespace-pre">.</p>
    </div>
  );
}

function Container124() {
  return (
    <div className="box-border content-stretch flex flex-col h-[29px] items-start pb-0 pt-[15px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Paragraph87 />
    </div>
  );
}

function Container125() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14px] h-[263.75px] items-start left-[56px] top-0 w-[780px]" data-name="Container">
      <Container121 />
      <Container122 />
      <Container123 />
      <Container124 />
    </div>
  );
}

function CookieConsent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[836px]" data-name="CookieConsent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[836px]">
        <Container119 />
        <Container125 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[323.75px] items-start left-[269px] pl-[30px] pr-[2px] py-[30px] rounded-[12.75px] top-[641.25px] w-[896px]" data-name="Card">
      <div aria-hidden="true" className="absolute border-2 border-gray-200 border-solid inset-0 pointer-events-none rounded-[12.75px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <CookieConsent />
    </div>
  );
}

export default function GooClaimLandingPageV2() {
  return (
    <div className="bg-white relative size-full" data-name="GooClaim Landing page (V2)">
      <PrivacyPolicyPage />
      <PrivacyPolicyPage1 />
      <Navigation1 />
      <Card />
    </div>
  );
}