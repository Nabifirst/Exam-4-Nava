import { useMemo } from "react";

const Formdefault = ({
  label,
  placeholder,
  formdefaultWidth,
  formdefaultPosition,
  formdefaultTop,
  formdefaultRight,
  formdefaultLeft,
  labelColor,
  inputBackgroundColor,
}) => {
  const formdefaultStyle = useMemo(() => {
    return {
      width: formdefaultWidth,
      position: formdefaultPosition,
      top: formdefaultTop,
      right: formdefaultRight,
      left: formdefaultLeft,
    };
  }, [
    formdefaultWidth,
    formdefaultPosition,
    formdefaultTop,
    formdefaultRight,
    formdefaultLeft,
  ]);

  const labelStyle = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  const inputStyle = useMemo(() => {
    return {
      backgroundColor: inputBackgroundColor,
    };
  }, [inputBackgroundColor]);

  return (
    <div
      className="w-[390px] max-w-full h-[73px] overflow-hidden text-left text-sm text-gray-800 font-h1"
      style={formdefaultStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] leading-[150%]"
        style={labelStyle}
      >
        {label}
      </div>
      <div
        className="absolute h-[calc(100%_-_29px)] w-full top-[29px] right-[0px] bottom-[0px] left-[0px] rounded bg-gray-200 box-border overflow-hidden text-gray-600 border-[1px] border-solid border-gray-400"
        style={inputStyle}
      >
        <div className="absolute top-[11px] left-[16px] leading-[150%]">
          {placeholder}
        </div>
      </div>
    </div>
  );
};

export default Formdefault;
