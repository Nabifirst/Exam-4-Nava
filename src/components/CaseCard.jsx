import { useMemo } from "react";

const CaseCard = ({
  circle,
  prop,
  engagement,
  circle1,
  prop1,
  deliverability,
  createxSEOAgencyHelpedNat,
  charityOrganisation,
  clientLogo,
  caseCardPosition,
  caseCardTop,
  caseCardLeft,
}) => {
  const caseCardStyle = useMemo(() => {
    return {
      position: caseCardPosition,
      top: caseCardTop,
      left: caseCardLeft,
    };
  }, [caseCardPosition, caseCardTop, caseCardLeft]);

  return (
    <div
      className="w-[390px] shadow-[0px_80px_80px_-20px_rgba(154,_156,_165,_0.08),_0px_30px_24px_-10px_rgba(154,_156,_165,_0.05),_0px_12px_10px_-6px_rgba(154,_156,_165,_0.04),_0px_4px_4px_-4px_rgba(30,_33,_44,_0.03)] rounded bg-white box-border max-w-full h-[390px] text-left text-xl text-gray-900 font-h1 border-[1px] border-solid border-gray-300"
      style={caseCardStyle}
    >
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
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src={circle1}
          />
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <b className="relative leading-[150%]">{prop1}</b>
            <div className="relative text-xs leading-[150%]">
              {deliverability}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[153px] left-[40px] text-base leading-[160%] text-gray-700 inline-block w-[310px]">
        {createxSEOAgencyHelpedNat}
      </div>
      <div className="absolute w-[100.26%] top-[132.5px] right-[-0.13%] left-[-0.13%] box-border h-px border-t-[1px] border-solid border-divider-gradient" />
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

export default CaseCard;
