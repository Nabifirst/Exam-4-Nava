import { useMemo } from "react";

const Inputdefault = ({
  placeholder,
  downChevron,
  inputdefaultWidth,
  inputdefaultPosition,
  inputdefaultTop,
  inputdefaultLeft,
  downChevronIconOverflow,
}) => {
  const inputdefaultStyle = useMemo(() => {
    return {
      width: inputdefaultWidth,
      position: inputdefaultPosition,
      top: inputdefaultTop,
      left: inputdefaultLeft,
    };
  }, [
    inputdefaultWidth,
    inputdefaultPosition,
    inputdefaultTop,
    inputdefaultLeft,
  ]);

  const downChevronIconStyle = useMemo(() => {
    return {
      overflow: downChevronIconOverflow,
    };
  }, [downChevronIconOverflow]);

  return (
    <div
      className="w-[390px] rounded bg-gray-200 box-border max-w-full h-11 overflow-hidden text-left text-sm text-gray-600 font-h1 border-[1px] border-solid border-gray-400"
      style={inputdefaultStyle}
    >
      <div className="absolute top-[11px] left-[16px] leading-[150%]">
        {placeholder}
      </div>
      <img
        className="absolute top-[14px] right-[16px] w-4 h-4"
        alt=""
        src={downChevron}
        style={downChevronIconStyle}
      />
    </div>
  );
};

export default Inputdefault;
