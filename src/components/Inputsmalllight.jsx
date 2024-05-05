import { useMemo } from "react";

const Inputsmalllight = ({
  placeholder,
  downChevron,
  inputsmalllightWidth,
  inputsmalllightPosition,
  inputsmalllightTop,
  inputsmalllightLeft,
}) => {
  const inputsmalllightStyle = useMemo(() => {
    return {
      width: inputsmalllightWidth,
      position: inputsmalllightPosition,
      top: inputsmalllightTop,
      left: inputsmalllightLeft,
    };
  }, [
    inputsmalllightWidth,
    inputsmalllightPosition,
    inputsmalllightTop,
    inputsmalllightLeft,
  ]);

  return (
    <div
      className="w-[390px] rounded bg-gray1-200 box-border max-w-full h-9 overflow-hidden text-left text-xs text-white font-h1 border-[1px] border-solid border-gray1-100"
      style={inputsmalllightStyle}
    >
      <div className="absolute top-[9px] left-[12px] leading-[150%] opacity-[0.6]">
        {placeholder}
      </div>
      <img
        className="absolute top-[10px] right-[12px] w-4 h-4"
        alt=""
        src={downChevron}
      />
    </div>
  );
};

export default Inputsmalllight;
