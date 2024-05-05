import { useMemo } from "react";

const Formlarge = ({
  label,
  placeholder,
  formlargeWidth,
  formlargePosition,
  formlargeTop,
  formlargeLeft,
  formlargeHeight,
}) => {
  const formlargeStyle = useMemo(() => {
    return {
      width: formlargeWidth,
      position: formlargePosition,
      top: formlargeTop,
      left: formlargeLeft,
      height: formlargeHeight,
    };
  }, [
    formlargeWidth,
    formlargePosition,
    formlargeTop,
    formlargeLeft,
    formlargeHeight,
  ]);

  return (
    <div
      className="w-[390px] max-w-full h-[86px] overflow-hidden text-left text-base text-gray-800 font-h1"
      style={formlargeStyle}
    >
      <div className="absolute top-[0px] left-[0px] leading-[160%]">
        {label}
      </div>
      <div className="absolute h-[calc(100%_-_34px)] w-full top-[34px] right-[0px] bottom-[0px] left-[0px] rounded bg-gray-200 box-border overflow-hidden text-gray-600 border-[1px] border-solid border-gray-400">
        <div className="absolute top-[13px] left-[16px] leading-[160%]">
          {placeholder}
        </div>
      </div>
    </div>
  );
};

export default Formlarge;
