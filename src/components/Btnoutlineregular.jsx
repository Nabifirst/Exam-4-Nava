import { useMemo } from "react";

const Btnoutlineregular = ({
  regularButton,
  btnoutlineregularPosition,
  btnoutlineregularTop,
  btnoutlineregularLeft,
  btnoutlineregularWidth,
  btnoutlineregularBottom,
}) => {
  const btnoutlineregularStyle = useMemo(() => {
    return {
      position: btnoutlineregularPosition,
      top: btnoutlineregularTop,
      left: btnoutlineregularLeft,
      width: btnoutlineregularWidth,
      bottom: btnoutlineregularBottom,
    };
  }, [
    btnoutlineregularPosition,
    btnoutlineregularTop,
    btnoutlineregularLeft,
    btnoutlineregularWidth,
    btnoutlineregularBottom,
  ]);

  return (
    <div
      className="rounded overflow-hidden flex flex-col items-center justify-start py-0 px-8 text-center text-sm text-primary font-h1 border-[1px] border-solid border-primary"
      style={btnoutlineregularStyle}
    >
      <b className="relative tracking-[0.5px] leading-[44px]">
        {regularButton}
      </b>
    </div>
  );
};

export default Btnoutlineregular;
