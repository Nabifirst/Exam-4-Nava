import { useMemo } from "react";

const Post1 = ({ propTop }) => {
  const postStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[303px] left-[0px] overflow-hidden flex flex-row items-start justify-start gap-[20px] text-left text-sm text-gray-700 font-h1"
      style={postStyle}
    >
      <img
        className="w-[100px] relative rounded h-[100px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="w-[220px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[4px]">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/clock.svg" />
          <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
            March 12, 2020
          </div>
        </div>
        <b className="w-[222px] relative text-base leading-[160%] inline-block text-gray-900">
          <span className="capitalize">{`10 tips for `}</span>a
          <span className="capitalize">
            {" "}
            small business digital marketing strategy
          </span>
        </b>
      </div>
    </div>
  );
};

export default Post1;
