import { useMemo } from "react";

const Btnsolidregular = ({
  regularButton,
  btnsolidregularPosition,
  btnsolidregularTop,
  btnsolidregularLeft,
  btnsolidregularBackgroundColor,
  btnsolidregularBottom,
}) => {
  const btnsolidregularStyle = useMemo(() => {
    return {
      position: btnsolidregularPosition,
      top: btnsolidregularTop,
      left: btnsolidregularLeft,
      backgroundColor: btnsolidregularBackgroundColor,
      bottom: btnsolidregularBottom,
    };
  }, [
    btnsolidregularPosition,
    btnsolidregularTop,
    btnsolidregularLeft,
    btnsolidregularBackgroundColor,
    btnsolidregularBottom,
  ]);

  return (
    <div
      className="rounded bg-primary overflow-hidden flex flex-col items-center justify-start py-0 px-8 text-center text-sm text-white font-h1"
      style={btnsolidregularStyle}
    >
      <b className="relative tracking-[0.5px] leading-[44px]">
        {regularButton}
      </b>
    </div>
  );
};

export default Btnsolidregular;
