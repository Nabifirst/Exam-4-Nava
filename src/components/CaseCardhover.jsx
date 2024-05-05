import { useMemo } from "react";

const CaseCardhover = ({
  image,
  circle,
  prop,
  engagement,
  prop1,
  deliverability,
  createxSEOAgencyHelpedNat,
  charityOrganisation,
  clientLogo,
  showCircleIcon,
  caseCardhoverPosition,
  caseCardhoverTop,
  caseCardhoverLeft,
  imageIconBorderRadius,
}) => {
  const caseCardhoverStyle = useMemo(() => {
    return {
      position: caseCardhoverPosition,
      top: caseCardhoverTop,
      left: caseCardhoverLeft,
    };
  }, [caseCardhoverPosition, caseCardhoverTop, caseCardhoverLeft]);

  const imageIconStyle = useMemo(() => {
    return {
      borderRadius: imageIconBorderRadius,
    };
  }, [imageIconBorderRadius]);

  return (
    <div
      className="w-[390px] shadow-[0px_60px_80px_-20px_rgba(30,_33,_44,_0.16),_0px_26px_24px_-10px_rgba(30,_33,_44,_0.1),_0px_12px_10px_-6px_rgba(30,_33,_44,_0.08),_0px_4px_4px_-4px_rgba(30,_33,_44,_0.05)] rounded bg-white box-border max-w-full h-[390px] text-left text-xl text-white font-h1 border-[1px] border-solid border-gray-300"
      style={caseCardhoverStyle}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded w-[390px] h-[390px] object-cover"
        alt=""
        src={image}
        style={imageIconStyle}
      />
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-gray-900 opacity-[0.6] mix-blend-normal" />
      <div className="absolute bottom-[40px] left-[40px] flex flex-row items-center justify-start gap-[32px]">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src={circle}
          />
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <b className="relative leading-[150%]">{prop}</b>
            <div className="relative text-xs leading-[150%]">{engagement}</div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
          {showCircleIcon && (
            <img
              className="w-10 relative h-10 overflow-hidden shrink-0"
              alt=""
              src="/circle3.svg"
            />
          )}
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <b className="relative leading-[150%]">{prop1}</b>
            <div className="relative text-xs leading-[150%]">
              {deliverability}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[153px] left-[40px] text-base leading-[160%] inline-block w-[310px]">
        {createxSEOAgencyHelpedNat}
      </div>
      <div className="absolute w-[100.26%] top-[132.5px] right-[-0.13%] left-[-0.13%] box-border h-px opacity-[0.4] border-t-[1px] border-solid border-divider-gradient" />
      <div className="absolute top-[92px] left-[40px] text-sm leading-[150%]">
        {charityOrganisation}
      </div>
      <img
        className="absolute top-[40px] left-[40px] w-20 h-11 overflow-hidden object-cover"
        alt=""
        src={clientLogo}
      />
    </div>
  );
};

export default CaseCardhover;
