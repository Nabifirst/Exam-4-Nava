import { useMemo } from "react";

const Btnsolidlargeicon = ({
  largeButton,
  btnsolidlargeiconPosition,
  btnsolidlargeiconTop,
  btnsolidlargeiconLeft,
}) => {
  const btnsolidlargeiconStyle = useMemo(() => {
    return {
      position: btnsolidlargeiconPosition,
      top: btnsolidlargeiconTop,
      left: btnsolidlargeiconLeft,
    };
  }, [btnsolidlargeiconPosition, btnsolidlargeiconTop, btnsolidlargeiconLeft]);

  return (
    <div
      className="rounded bg-primary overflow-hidden flex flex-row items-start justify-start py-0 px-10 text-center text-base text-white font-h1"
      style={btnsolidlargeiconStyle}
    >
      <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
        <b className="relative tracking-[0.5px] leading-[52px]">
          {largeButton}
        </b>
        <img className="w-6 relative h-6" alt="" src="/right4.svg" />
      </div>
    </div>
  );
};

export default Btnsolidlargeicon;
