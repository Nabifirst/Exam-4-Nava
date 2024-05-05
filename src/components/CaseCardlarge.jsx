import { useMemo } from "react";

const CaseCardlarge = ({
  weHelpedSunsetCompanyBrea,
  circle,
  prop,
  openRate,
  circle1,
  prop1,
  growthInSales,
  image,
  clientLogo,
  personalCare,
  showCircleIcon,
  caseCardlargeBoxShadow,
  caseCardlargePosition,
  caseCardlargeTop,
  caseCardlargeLeft,
}) => {
  const caseCardlargeStyle = useMemo(() => {
    return {
      boxShadow: caseCardlargeBoxShadow,
      position: caseCardlargePosition,
      top: caseCardlargeTop,
      left: caseCardlargeLeft,
    };
  }, [
    caseCardlargeBoxShadow,
    caseCardlargePosition,
    caseCardlargeTop,
    caseCardlargeLeft,
  ]);

  return (
    <div
      className="w-[600px] shadow-[0px_80px_80px_-20px_rgba(154,_156,_165,_0.08),_0px_30px_24px_-10px_rgba(154,_156,_165,_0.05),_0px_12px_10px_-6px_rgba(154,_156,_165,_0.04),_0px_4px_4px_-4px_rgba(30,_33,_44,_0.03)] rounded bg-white box-border max-w-full h-[442px] text-left text-base text-gray-900 font-h1 border-[1px] border-solid border-gray-300"
      style={caseCardlargeStyle}
    >
      <div className="absolute bottom-[28px] left-[40px] overflow-hidden flex flex-row items-center justify-start gap-[8px]">
        <b className="relative leading-[160%]">View case</b>
        <img className="w-6 relative h-6" alt="" src="/right1.svg" />
      </div>
      <div className="absolute w-[86.67%] top-[316px] left-[6.67%] leading-[160%] text-gray-700 inline-block">
        {weHelpedSunsetCompanyBrea}
      </div>
      <div className="absolute w-[100.17%] top-[295.5px] right-[-0.08%] left-[-0.08%] box-border h-px border-t-[1px] border-solid border-divider-gradient" />
      <div className="absolute top-[224px] left-[40px] overflow-hidden flex flex-row items-center justify-start gap-[32px] text-xl">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src={circle}
          />
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <b className="relative leading-[150%]">{prop}</b>
            <div className="relative text-xs leading-[150%]">{openRate}</div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
          {showCircleIcon && (
            <img
              className="w-10 relative h-10 overflow-hidden shrink-0"
              alt=""
              src={circle1}
            />
          )}
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <b className="relative leading-[150%]">{prop1}</b>
            <div className="relative text-xs leading-[150%]">
              {growthInSales}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[200px]">
        <img
          className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-t rounded-b-none max-w-full overflow-hidden h-[200px] object-cover"
          alt=""
          src={image}
        />
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-t rounded-b-none bg-gray-900 h-[200px] opacity-[0.6]" />
      </div>
      <div className="absolute top-[28px] left-[40px] overflow-hidden flex flex-col items-start justify-start gap-[4px] text-sm text-white">
        <img
          className="w-[120px] relative h-16 overflow-hidden shrink-0 object-cover"
          alt=""
          src={clientLogo}
        />
        <div className="relative leading-[150%]">{personalCare}</div>
      </div>
    </div>
  );
};

export default CaseCardlarge;
