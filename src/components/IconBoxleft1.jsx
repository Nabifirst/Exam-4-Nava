import { useMemo } from "react";

const IconBoxleft1 = ({
  sEOReports,
  conguePhasellusEstAmetSem,
  icAnalysis,
  propTop,
  propLeft,
}) => {
  const iconBoxleft1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[388px] left-[946px] w-[285px] h-[188px] text-left text-xl text-gray-900 font-h1"
      style={iconBoxleft1Style}
    >
      <div className="absolute w-full top-[72px] right-[0%] left-[0%] h-[116px]">
        <b className="absolute w-full top-[0px] left-[0%] leading-[150%] inline-block">
          {sEOReports}
        </b>
        <div className="absolute w-full top-[38px] left-[0%] text-base leading-[160%] text-gray-700 inline-block">
          {conguePhasellusEstAmetSem}
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-12 h-12 overflow-hidden"
        alt=""
        src={icAnalysis}
      />
    </div>
  );
};

export default IconBoxleft1;
