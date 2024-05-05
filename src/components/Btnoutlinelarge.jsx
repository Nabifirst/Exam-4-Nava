import { useMemo } from "react";

const Btnoutlinelarge = ({
  largeButton,
  btnoutlinelargeBorder,
  btnoutlinelargePosition,
  btnoutlinelargeTop,
  btnoutlinelargeLeft,
  btnoutlinelargeWidth,
  largeButtonColor,
}) => {
  const btnoutlinelargeStyle = useMemo(() => {
    return {
      border: btnoutlinelargeBorder,
      position: btnoutlinelargePosition,
      top: btnoutlinelargeTop,
      left: btnoutlinelargeLeft,
      width: btnoutlinelargeWidth,
    };
  }, [
    btnoutlinelargeBorder,
    btnoutlinelargePosition,
    btnoutlinelargeTop,
    btnoutlinelargeLeft,
    btnoutlinelargeWidth,
  ]);

  const largeButtonStyle = useMemo(() => {
    return {
      color: largeButtonColor,
    };
  }, [largeButtonColor]);

  return (
    <div
      className="rounded overflow-hidden flex flex-col items-center justify-start py-0 px-10 text-center text-base text-primary font-h1 border-[1px] border-solid border-primary"
      style={btnoutlinelargeStyle}
    >
      <b
        className="relative tracking-[0.5px] leading-[52px]"
        style={largeButtonStyle}
      >
        {largeButton}
      </b>
    </div>
  );
};

export default Btnoutlinelarge;
