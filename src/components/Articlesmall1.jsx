import { useMemo } from "react";

const Articlesmall = ({
  tag,
  june32020,
  byShawnEdwards,
  theBasicsOfBloggingSearch,
  maurisTinciduntSollicitud,
  pic,
  propRight,
  propLeft,
}) => {
  const articlesmallStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div
      className="absolute h-[80.86%] w-[31.4%] top-[19.14%] right-[0.97%] bottom-[0%] left-[67.63%] text-left text-base text-gray-900 font-h1"
      style={articlesmallStyle}
    >
      <div className="absolute bottom-[0px] left-[0px] overflow-hidden flex flex-row items-center justify-start gap-[8px]">
        <b className="relative leading-[160%]">Read more</b>
        <img className="w-6 relative h-6" alt="" src="/right1.svg" />
      </div>
      <div className="absolute bottom-[42px] left-[0px] flex flex-col items-start justify-start gap-[8px] text-sm text-gray-700">
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[12px]">
          <div className="relative leading-[150%]">{tag}</div>
          <div className="w-px relative box-border h-[13px] border-r-[1px] border-solid border-gray-700" />
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
            <img className="w-4 relative h-4" alt="" src="/clock.svg" />
            <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
              {june32020}
            </div>
          </div>
          <div className="w-px relative box-border h-[13px] border-r-[1px] border-solid border-gray-700" />
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
            <img
              className="w-4 relative h-4 overflow-hidden shrink-0"
              alt=""
              src="/profile.svg"
            />
            <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
              {byShawnEdwards}
            </div>
          </div>
        </div>
        <b className="w-[390px] relative text-xl leading-[150%] inline-block text-gray-900">
          {theBasicsOfBloggingSearch}
        </b>
        <div className="w-[390px] relative text-base leading-[160%] text-gray-800 inline-block">
          {maurisTinciduntSollicitud}
        </div>
      </div>
      <img
        className="absolute h-[59.17%] w-full top-[0%] right-[0%] bottom-[40.83%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={pic}
      />
    </div>
  );
};

export default Articlesmall;
