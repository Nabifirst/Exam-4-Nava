import { useMemo } from "react";

const Formlargeicon = ({
  label,
  placeholder,
  formlargeiconWidth,
  formlargeiconPosition,
  formlargeiconTop,
  formlargeiconLeft,
}) => {
  const formlargeiconStyle = useMemo(() => {
    return {
      width: formlargeiconWidth,
      position: formlargeiconPosition,
      top: formlargeiconTop,
      left: formlargeiconLeft,
    };
  }, [
    formlargeiconWidth,
    formlargeiconPosition,
    formlargeiconTop,
    formlargeiconLeft,
  ]);

  return (
    <div
      className="w-[390px] max-w-full h-[86px] overflow-hidden text-left text-base text-gray-800 font-h1"
      style={formlargeiconStyle}
    >
      <div className="absolute top-[0px] left-[0px] leading-[160%]">
        {label}
      </div>
      <div className="absolute h-[calc(100%_-_34px)] w-full top-[34px] right-[0px] bottom-[0px] left-[0px] rounded bg-gray-200 box-border overflow-hidden text-gray-600 border-[1px] border-solid border-gray-400">
        <div className="absolute top-[13px] left-[16px] leading-[160%]">
          {placeholder}
        </div>
        <img
          className="absolute top-[16px] right-[16px] w-5 h-5"
          alt=""
          src="/downchevron1.svg"
        />
      </div>
    </div>
  );
};

export default Formlargeicon;
