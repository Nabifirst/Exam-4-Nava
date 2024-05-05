import { useMemo } from "react";
import UpBtn from "./UpBtn";
import Inputsmalllight from "./Inputsmalllight";

const Footer = ({
  footerPosition,
  footerTop,
  footerLeft,
  sIGNUPTORight,
  servicesLeft,
  linksLeft,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: footerPosition,
      top: footerTop,
      left: footerLeft,
    };
  }, [footerPosition, footerTop, footerLeft]);

  const sIGNUPTOStyle = useMemo(() => {
    return {
      right: sIGNUPTORight,
    };
  }, [sIGNUPTORight]);

  const servicesStyle = useMemo(() => {
    return {
      left: servicesLeft,
    };
  }, [servicesLeft]);

  const linksStyle = useMemo(() => {
    return {
      left: linksLeft,
    };
  }, [linksLeft]);

  return (
    <div
      className="w-[1920px] bg-gray-900 max-w-full h-[508px] text-left text-base text-white font-h1"
      style={footerStyle}
    >
      <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] bg-white h-[50px] opacity-[0.05]" />
      <div className="absolute top-[474px] left-[345px] overflow-hidden flex flex-row items-center justify-start gap-[4px] text-xs">
        <div className="relative leading-[150%]">
          © All rights reserved.Made with
        </div>
        <img className="w-4 relative h-4" alt="" src="/heart.svg" />
        <div className="relative leading-[150%]">{`by Createx Studio `}</div>
      </div>
      <div className="absolute right-[345px] bottom-[90px] flex flex-row items-start justify-start gap-[16px] text-sm">
        <div className="relative leading-[150%]">GO TO TOP</div>
        <UpBtn upBtnPosition="relative" />
      </div>
      <div className="absolute bottom-[90px] left-[345px] overflow-hidden flex flex-row items-center justify-start gap-[24px]">
        <img
          className="w-[120px] relative rounded-sm h-10 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/award@2x.png"
        />
        <img
          className="w-[120px] relative rounded-sm h-10 overflow-hidden shrink-0 object-cover"
          alt=""
          src="/award@2x.png"
        />
        <img
          className="w-[120px] relative rounded-sm h-10 overflow-hidden shrink-0"
          alt=""
          src="/award.svg"
        />
        <div className="w-[120px] relative rounded-sm bg-white h-10 overflow-hidden shrink-0">
          <img
            className="absolute top-[-28px] left-[10px] w-[100px] h-[100px] object-cover"
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
      <div className="absolute w-[100.05%] right-[-0.03%] bottom-[169.5px] left-[-0.03%] box-border h-px opacity-[0.4] border-t-[1px] border-solid border-divider-gradient" />
      <div className="absolute top-[80px] right-[345px] w-[286px] h-[126px] text-3xs">
        <div className="absolute top-[96px] right-[0px] leading-[150%] flex items-center w-[286px]">
          *Subscribe to our newsletter to receive communications and early
          updates from Createx SEO Agency.
        </div>
        <Inputsmalllight
          placeholder="Email address"
          downChevron="/right.svg"
          inputsmalllightWidth="286px"
          inputsmalllightPosition="absolute"
          inputsmalllightTop="48px"
          inputsmalllightLeft="0px"
        />
        <b
          className="absolute top-[0px] right-[31px] text-base tracking-[1px] leading-[150%]"
          style={sIGNUPTOStyle}
        >
          SIGN UP TO OUR NEWSLETTER
        </b>
      </div>
      <div className="absolute top-[80px] left-[1052px] w-[157px] h-24">
        <div className="absolute top-[36px] left-[0px] w-[157px] h-[60px]">
          <div className="absolute top-[34px] left-[0px] flex flex-row items-center justify-start gap-[8px] opacity-[0.6]">
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0"
              alt=""
              src="/mail.svg"
            />
            <div className="relative leading-[160%]">hello@createx.com</div>
          </div>
          <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[8px] opacity-[0.6]">
            <img className="w-4 relative h-4" alt="" src="/iphone.svg" />
            <div className="relative leading-[160%]">(405) 555-0128</div>
          </div>
        </div>
        <b className="absolute top-[0px] left-[calc(50%_-_78.5px)] tracking-[1px] leading-[150%]">
          CONTACT US
        </b>
      </div>
      <div
        className="absolute top-[80px] left-[calc(50%_-_84px)] w-24 h-[198px]"
        style={servicesStyle}
      >
        <div
          className="absolute top-[36px] left-[calc(50%_-_48px)] flex flex-col items-start justify-start gap-[8px] opacity-[0.6]"
          style={linksStyle}
        >
          <div className="relative leading-[160%]">Social Media</div>
          <div className="relative leading-[160%]">SEO</div>
          <div className="relative leading-[160%]">Research</div>
          <div className="relative leading-[160%]">{`Content & PR`}</div>
          <div className="relative leading-[160%]">Payed Traffic</div>
        </div>
        <b className="absolute top-[0px] left-[calc(50%_-_48px)] tracking-[1px] leading-[150%]">
          SERVICES
        </b>
      </div>
      <div className="absolute top-[80px] left-[calc(50%_-_254px)] w-[90px] h-[198px]">
        <div className="absolute top-[36px] left-[calc(50%_-_45px)] flex flex-col items-start justify-start gap-[8px] opacity-[0.6]">
          <div className="relative leading-[160%]">About Us</div>
          <div className="relative leading-[160%]">Case Studies</div>
          <div className="relative leading-[160%]">Blog</div>
          <div className="relative leading-[160%]">Careers</div>
          <div className="relative leading-[160%]">Contacts</div>
        </div>
        <b className="absolute top-[0px] left-[calc(50%_-_43px)] tracking-[1px] leading-[150%]">
          COMPANY
        </b>
      </div>
      <div className="absolute top-[254px] left-[345px] overflow-hidden flex flex-row items-center justify-start gap-[20px]">
        <img
          className="w-6 relative h-6 opacity-[0.6]"
          alt=""
          src="/facebook.svg"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0.6]"
          alt=""
          src="/linkedin.svg"
        />
        <img
          className="w-6 relative h-6 opacity-[0.6]"
          alt=""
          src="/twitter.svg"
        />
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0 opacity-[0.6]"
          alt=""
          src="/instagram.svg"
        />
      </div>
      <div className="absolute top-[126px] left-[345px] text-xs leading-[150%] inline-block w-[281px] opacity-[0.6]">
        Createx SEO Agency is a full-service digital marketing agency. We help
        businesses make more money through a wealth of performance data and
        market research. We create science-based SEO strategies to empower our
        clients.
      </div>
      <img
        className="absolute top-[80px] left-[345px] w-[130px] h-[22px] overflow-hidden"
        alt=""
        src="/logo.svg"
      />
    </div>
  );
};

export default Footer;
