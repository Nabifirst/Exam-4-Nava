import { useMemo } from "react";

const IconBoxleft = ({
  sEOStrategy,
  culpaNostrudCommodoEaCons,
  icOptions,
  iconBoxleftPosition,
  iconBoxleftTop,
  iconBoxleftLeft,
  iconBoxleftWidth,
}) => {
  const iconBoxleftStyle = useMemo(() => {
    return {
      position: iconBoxleftPosition,
      top: iconBoxleftTop,
      left: iconBoxleftLeft,
      width: iconBoxleftWidth,
    };
  }, [iconBoxleftPosition, iconBoxleftTop, iconBoxleftLeft, iconBoxleftWidth]);

  return (
    <div
      className="w-[285px] h-[188px] text-left text-xl text-gray-900 font-h1"
      style={iconBoxleftStyle}
    >
      <div className="absolute w-full top-[72px] right-[0%] left-[0%] h-[116px]">
        <b className="absolute w-full top-[0px] left-[0%] leading-[150%] inline-block">
          {sEOStrategy}
        </b>
        <div className="absolute w-full top-[38px] left-[0%] text-base leading-[160%] text-gray-700 inline-block">
          {culpaNostrudCommodoEaCons}
        </div>
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-12 h-12 overflow-hidden"
        alt=""
        src={icOptions}
      />
    </div>
  );
};

export default IconBoxleft;
