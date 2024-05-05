import { useMemo } from "react";
import Btnoutlineregular from "./Btnoutlineregular";
import Btnsolidregular from "./Btnsolidregular";
import Tab from "./Tab";

const Services = ({ ourServices, propTop, propLeft, propLeft1, propLeft2 }) => {
  const services2Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const tabsStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const socialMediaStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const ourServicesStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  return (
    <div
      className="absolute top-[1240px] left-[345px] w-[1315px] h-[719px] text-center text-base text-gray-800 font-h1"
      style={services2Style}
    >
      <img
        className="absolute top-[189px] left-[514px] w-[801px] h-[530px] object-contain"
        alt=""
        src="/bgshape.svg"
      />
      <img
        className="absolute top-[206px] left-[533px] w-[712px] h-[404px]"
        alt=""
        src="/illustration4.svg"
      />
      <div className="absolute top-[206px] left-[0px] w-[390px] h-[416px]">
        <div className="absolute top-[372px] left-[0px] overflow-hidden flex flex-row items-center justify-start gap-[24px]">
          <Btnoutlineregular
            regularButton="Learn more"
            btnoutlineregularPosition="unset"
            btnoutlineregularTop="unset"
            btnoutlineregularLeft="unset"
            btnoutlineregularWidth="unset"
            btnoutlineregularBottom="unset"
          />
          <Btnsolidregular
            regularButton="Try SEO toolkit"
            btnsolidregularPosition="unset"
            btnsolidregularTop="unset"
            btnsolidregularLeft="unset"
            btnsolidregularBackgroundColor="#7772f1"
            btnsolidregularBottom="unset"
          />
        </div>
        <div className="absolute top-[108px] left-[calc(50%_-_195px)] w-[390px] overflow-hidden flex flex-col items-start justify-start gap-[12px]">
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Aenean enim tellus morbi nisl vulputate dictumst.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Nibh sapien volutpat lacus augue.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Vel in amet, placerat adipiscing est pharetra.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Gravida ornare sit in et ut sit sem id.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Ultrices pellentesque dictum enim egestas ac diam.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Sit semper enim senectus integer ut turpis et.
            </div>
          </div>
        </div>
        <b className="absolute top-[0px] left-[0px] text-9xl leading-[150%] inline-block text-gray-900 text-left w-[390px]">
          Complete Worflow For Any SEO Professional
        </b>
      </div>
      <div
        className="absolute top-[100px] left-[345px] flex flex-row items-center justify-start"
        style={tabsStyle}
      >
        <Tab
          socialMedia="Social Media"
          tabPosition="relative"
          tabBorder="1px solid #7772f1"
          tabWidth="246px"
          socialMediaLeft="calc(50% - 46px)"
          socialMediaColor="#7772f1"
        />
        <Tab
          socialMedia="SEO"
          tabPosition="relative"
          tabBorder="unset"
          tabWidth="246px"
          socialMediaLeft="calc(50% - 16px)"
          socialMediaColor="#9a9da5"
        />
        <Tab
          socialMedia="Research"
          tabPosition="relative"
          tabBorder="unset"
          tabWidth="246px"
          socialMediaLeft="calc(50% - 33px)"
          socialMediaColor="#9a9da5"
        />
        <Tab
          socialMedia={`Content & PR`}
          tabPosition="relative"
          tabBorder="unset"
          tabWidth="246px"
          socialMediaLeft="calc(50% - 50px)"
          socialMediaColor="#9a9da5"
        />
        <Tab
          socialMedia="Payed Traffic"
          tabPosition="relative"
          tabBorder="unset"
          tabWidth="246px"
          socialMediaLeft="calc(50% - 47px)"
          socialMediaColor="#9a9da5"
        />
      </div>
      <div
        className="absolute top-[0px] left-[0px] text-27xl leading-[130%] font-black text-gray-900"
        style={ourServicesStyle}
      >
        {ourServices}
      </div>
    </div>
  );
};

export default Services;
