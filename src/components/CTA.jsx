import { useMemo } from "react";
import Formdefault from "./Formdefault";
import Btnsolidregular from "./Btnsolidregular";

const CTA = ({ propTop }) => {
  const cTAStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[3828px] left-[345px] shadow-[0px_80px_80px_-20px_rgba(154,_156,_165,_0.08),_0px_30px_24px_-10px_rgba(154,_156,_165,_0.05),_0px_12px_10px_-6px_rgba(154,_156,_165,_0.04),_0px_4px_4px_-4px_rgba(30,_33,_44,_0.03)] rounded bg-primary w-[1230px] h-[243px] overflow-hidden text-center text-13xl text-white font-h1"
      style={cTAStyle}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1230px] h-[243px] overflow-hidden"
        alt=""
        src="/background14.svg"
      />
      <div className="absolute top-[122px] left-[60px] flex flex-row items-end justify-start gap-[24px]">
        <Formdefault
          label="Name"
          placeholder="Your name"
          formdefaultWidth="260px"
          formdefaultPosition="relative"
          formdefaultTop="unset"
          formdefaultRight="unset"
          formdefaultLeft="unset"
          labelColor="#fff"
          inputBackgroundColor="#f5f5f7"
        />
        <Formdefault
          label="Email"
          placeholder="Your working email"
          formdefaultWidth="260px"
          formdefaultPosition="relative"
          formdefaultTop="unset"
          formdefaultRight="unset"
          formdefaultLeft="unset"
          labelColor="#fff"
          inputBackgroundColor="#f5f5f7"
        />
        <Formdefault
          label="Your website URL"
          placeholder="http://yoursite.com"
          formdefaultWidth="338px"
          formdefaultPosition="relative"
          formdefaultTop="unset"
          formdefaultRight="unset"
          formdefaultLeft="unset"
          labelColor="#fff"
          inputBackgroundColor="#f5f5f7"
        />
        <Btnsolidregular
          regularButton="Analyse your site"
          btnsolidregularPosition="unset"
          btnsolidregularTop="unset"
          btnsolidregularLeft="unset"
          btnsolidregularBackgroundColor="#1e212c"
          btnsolidregularBottom="unset"
        />
      </div>
      <div className="absolute top-[48px] left-[315px] leading-[130%] font-black flex items-center justify-center w-[600px]">
        Get a Free SEO Analysis!
      </div>
    </div>
  );
};

export default CTA;
