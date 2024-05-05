import { useMemo } from "react";

const SliderControlshover = ({
  sliderControlshoverPosition,
  sliderControlshoverTop,
  sliderControlshoverLeft,
}) => {
  const sliderControlshoverStyle = useMemo(() => {
    return {
      position: sliderControlshoverPosition,
      top: sliderControlshoverTop,
      left: sliderControlshoverLeft,
    };
  }, [
    sliderControlshoverPosition,
    sliderControlshoverTop,
    sliderControlshoverLeft,
  ]);

  return (
    <div className="w-[84px] h-12" style={sliderControlshoverStyle}>
      <img
        className="absolute h-full w-[57.14%] top-[0%] right-[0%] bottom-[0%] left-[42.86%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/nextbtnhover.svg"
      />
      <img
        className="absolute h-3/6 w-[28.57%] top-[25%] right-[71.43%] bottom-[25%] left-[0%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/prevbtn.svg"
      />
    </div>
  );
};

export default SliderControlshover;
