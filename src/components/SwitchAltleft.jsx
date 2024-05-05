import { useMemo } from "react";

const SwitchAltleft = ({
  switchAltleftPosition,
  switchAltleftTop,
  switchAltleftLeft,
}) => {
  const switchAltleftStyle = useMemo(() => {
    return {
      position: switchAltleftPosition,
      top: switchAltleftTop,
      left: switchAltleftLeft,
    };
  }, [switchAltleftPosition, switchAltleftTop, switchAltleftLeft]);

  return (
    <div
      className="w-[390px] max-w-full h-[46px] text-center text-base text-primary font-h1"
      style={switchAltleftStyle}
    >
      <div className="absolute h-full w-[53.85%] top-[0%] right-[0%] bottom-[0%] left-[46.15%] rounded-tl-none rounded-tr-21xl rounded-br-21xl rounded-bl-none box-border overflow-hidden flex flex-col items-center justify-start py-2.5 px-5 border-[1px] border-solid border-primary">
        <div className="bg-white h-[26px] flex flex-row items-center justify-start gap-[8px]">
          <b className="relative leading-[160%]">Yearly</b>
          <div className="relative text-xs leading-[150%] text-left">
            -12% Off
          </div>
        </div>
      </div>
      <div className="absolute h-full w-[53.85%] top-[0%] right-[46.15%] bottom-[0%] left-[0%] rounded-21xl bg-primary overflow-hidden flex flex-col items-center justify-start py-2.5 px-5 box-border text-white">
        <b className="relative leading-[160%]">Monthly</b>
      </div>
    </div>
  );
};

export default SwitchAltleft;
