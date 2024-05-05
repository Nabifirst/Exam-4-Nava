import { useMemo } from "react";

const Articlelarge = ({
  howToMaximizeYourROIThrou,
  sEO,
  july52020,
  image,
  articlelargePosition,
  articlelargeTop,
  articlelargeLeft,
}) => {
  const articlelargeStyle = useMemo(() => {
    return {
      position: articlelargePosition,
      top: articlelargeTop,
      left: articlelargeLeft,
    };
  }, [articlelargePosition, articlelargeTop, articlelargeLeft]);

  return (
    <div
      className="w-[600px] max-w-full h-[477px] text-left text-base text-gray-900 font-h1"
      style={articlelargeStyle}
    >
      <div className="absolute bottom-[0px] left-[0px] overflow-hidden flex flex-row items-center justify-start gap-[8px]">
        <b className="relative leading-[160%]">Read more</b>
        <img className="w-6 relative h-6" alt="" src="/right1.svg" />
      </div>
      <b className="absolute w-full bottom-[42px] left-[0%] text-xl leading-[150%] inline-block">
        {howToMaximizeYourROIThrou}
      </b>
      <div className="absolute bottom-[80px] left-[0px] overflow-hidden flex flex-row items-start justify-start gap-[12px] text-sm text-gray-700">
        <div className="relative leading-[150%]">{sEO}</div>
        <div className="w-px relative box-border h-[13px] border-r-[1px] border-solid border-gray-700" />
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <img className="w-4 relative h-4" alt="" src="/clock.svg" />
          <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
            {july52020}
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
            By Diane Mccoy
          </div>
        </div>
      </div>
      <img
        className="absolute h-[75.47%] w-full top-[0%] right-[0%] bottom-[24.53%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image}
      />
      <div className="absolute top-[8px] right-[8px] rounded bg-success overflow-hidden flex flex-row items-center justify-start py-px px-2 text-lg text-white">
        <b className="relative leading-[150%]">Latest Post</b>
      </div>
    </div>
  );
};

export default Articlelarge;
