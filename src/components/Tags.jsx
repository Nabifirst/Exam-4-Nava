import { useMemo } from "react";

const Tags = ({ propTop }) => {
  const tagsStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[782px] left-[0px] w-[311px] h-[131px] text-left text-sm text-gray-700 font-h1"
      style={tagsStyle}
    >
      <div className="absolute top-[99px] left-[0px] rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
        <b className="relative leading-[150%]">#business</b>
      </div>
      <div className="absolute top-[99px] left-[106px] rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
        <b className="relative leading-[150%]">#PPC</b>
      </div>
      <div className="absolute top-[99px] right-[27px] rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
        <b className="relative leading-[150%]">#targeting</b>
      </div>
      <div className="absolute top-[55px] left-[0px] rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
        <b className="relative leading-[150%]">{`#tips&tricks`}</b>
      </div>
      <div className="absolute top-[55px] left-[121px] rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
        <b className="relative leading-[150%]">#strategy</b>
      </div>
      <div className="absolute top-[55px] left-[226px] rounded bg-primary overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 text-white">
        <b className="relative leading-[150%]">#SMM</b>
      </div>
      <img
        className="absolute top-[82px] left-[289px] w-[22px] h-[21px] object-cover"
        alt=""
        src="/cursor@2x.png"
      />
      <b className="absolute top-[0px] right-[264px] text-5xl leading-[130%] text-gray-900">
        Tags
      </b>
    </div>
  );
};

export default Tags;
