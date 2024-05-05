import { useMemo } from "react";

const Btnsolidlarge = ({
  largeButton,
  btnsolidlargePosition,
  btnsolidlargeTop,
  btnsolidlargeLeft,
  btnsolidlargeWidth,
  btnsolidlargeRight,
}) => {
  const btnsolidlargeStyle = useMemo(() => {
    return {
      position: btnsolidlargePosition,
      top: btnsolidlargeTop,
      left: btnsolidlargeLeft,
      width: btnsolidlargeWidth,
      right: btnsolidlargeRight,
    };
  }, [
    btnsolidlargePosition,
    btnsolidlargeTop,
    btnsolidlargeLeft,
    btnsolidlargeWidth,
    btnsolidlargeRight,
  ]);

  return (
    <div
      className="rounded bg-primary overflow-hidden flex flex-col items-center justify-start py-0 px-10 text-center text-base text-white font-h1"
      style={btnsolidlargeStyle}
    >
      <b className="relative tracking-[0.5px] leading-[52px]">{largeButton}</b>
    </div>
  );
};

export default Btnsolidlarge;
