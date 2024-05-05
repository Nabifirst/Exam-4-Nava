import { useMemo } from "react";

const Post2 = ({
  image,
  july52020,
  surprisingWaysToCombineCo,
  propHeight,
  propWidth,
}) => {
  const post2Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const title1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className="overflow-hidden flex flex-row items-start justify-start gap-[20px] text-left text-sm text-gray-700 font-h1"
      style={post2Style}
    >
      <img
        className="w-[100px] relative rounded h-[100px] object-cover"
        alt=""
        src={image}
      />
      <div
        className="overflow-hidden flex flex-col items-start justify-start gap-[4px]"
        style={title1Style}
      >
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/clock.svg" />
          <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
            {july52020}
          </div>
        </div>
        <b className="w-[222px] relative text-base leading-[160%] inline-block text-gray-900">
          {surprisingWaysToCombineCo}
        </b>
      </div>
    </div>
  );
};

export default Post2;
