import { useMemo } from "react";
import Btnsolidregular from "./Btnsolidregular";

const Pricing = ({ propLeft, propLeft1 }) => {
  const itemsStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const priceStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div className="absolute top-[226px] left-[420px] shadow-[0px_60px_80px_-20px_rgba(30,_33,_44,_0.16),_0px_26px_24px_-10px_rgba(30,_33,_44,_0.1),_0px_12px_10px_-6px_rgba(30,_33,_44,_0.08),_0px_4px_4px_-4px_rgba(30,_33,_44,_0.05)] rounded bg-gray-900 box-border w-[390px] h-[536px] text-center text-base text-white font-h1 border-[1px] border-solid border-success">
      <Btnsolidregular
        regularButton="Choose plan"
        btnsolidregularPosition="absolute"
        btnsolidregularTop="unset"
        btnsolidregularLeft="calc(50% - 73px)"
        btnsolidregularBackgroundColor="#7772f1"
        btnsolidregularBottom="40px"
      />
      <div
        className="absolute top-[190px] left-[calc(50%_-_95.5px)] overflow-hidden flex flex-col items-start justify-start gap-[8px]"
        style={itemsStyle}
      >
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/mark1.svg" />
          <div className="relative leading-[160%]">Advanced Analytics</div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/mark1.svg" />
          <div className="relative leading-[160%]">Change Management</div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/mark1.svg" />
          <div className="relative leading-[160%]">Corporate Finance</div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/mark1.svg" />
          <div className="relative leading-[160%]">One Way Link Building</div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/mark1.svg" />
          <div className="relative leading-[160%]">Social Media Marketing</div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/mark1.svg" />
          <div className="relative leading-[160%]">{`Strategy & Marketing`}</div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-gray-600">
          <img className="w-4 relative h-4" alt="" src="/cross.svg" />
          <div className="relative leading-[160%]">Information Technology</div>
        </div>
      </div>
      <div className="absolute w-[100.26%] top-[165.5px] right-[-0.13%] left-[-0.13%] box-border h-px border-t-[1px] border-solid border-divider-gradient" />
      <div
        className="absolute top-[90px] left-[calc(50%_-_69px)] overflow-hidden flex flex-row items-start justify-start gap-[8px] text-27xl text-success"
        style={priceStyle}
      >
        <div className="relative leading-[130%] font-black">$64</div>
        <b className="relative text-xl leading-[150%] text-left">/mon</b>
      </div>
      <b className="absolute w-[87.69%] top-[40px] left-[6.15%] text-9xl leading-[150%] inline-block">
        Optimal
      </b>
    </div>
  );
};

export default Pricing;
