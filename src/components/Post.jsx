import { useMemo } from "react";

const Post = ({
  image,
  april92020,
  whySEOIsAllAboutContentMa,
  propTop,
  propHeight,
  propWidth,
  propColor,
}) => {
  const post1Style = useMemo(() => {
    return {
      top: propTop,
      height: propHeight,
    };
  }, [propTop, propHeight]);

  const titleStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const whySEOIsStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className="absolute top-[179px] left-[0px] h-[100px] overflow-hidden flex flex-row items-start justify-start gap-[20px] text-left text-sm text-gray-700 font-h1"
      style={post1Style}
    >
      <img
        className="w-[100px] relative rounded h-[100px] object-cover"
        alt=""
        src={image}
      />
      <div
        className="w-[220px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[4px]"
        style={titleStyle}
      >
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/clock.svg" />
          <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
            {april92020}
          </div>
        </div>
        <b
          className="w-[222px] relative text-base leading-[160%] inline-block text-primary"
          style={whySEOIsStyle}
        >
          {whySEOIsAllAboutContentMa}
        </b>
      </div>
    </div>
  );
};

export default Post;
