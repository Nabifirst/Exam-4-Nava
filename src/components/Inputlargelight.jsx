import { useMemo } from "react";

const Inputlargelight = ({
  placeholder,
  showDownChevronIcon,
  inputlargelightWidth,
  inputlargelightPosition,
  inputlargelightTop,
  inputlargelightRight,
  inputlargelightLeft,
}) => {
  const inputlargelightStyle = useMemo(() => {
    return {
      width: inputlargelightWidth,
      position: inputlargelightPosition,
      top: inputlargelightTop,
      right: inputlargelightRight,
      left: inputlargelightLeft,
    };
  }, [
    inputlargelightWidth,
    inputlargelightPosition,
    inputlargelightTop,
    inputlargelightRight,
    inputlargelightLeft,
  ]);

  return (
    <div
      className="w-[390px] rounded bg-gray1-200 box-border max-w-full h-[52px] overflow-hidden text-left text-base text-white font-h1 border-[1px] border-solid border-gray1-100"
      style={inputlargelightStyle}
    >
      <div className="absolute top-[13px] left-[16px] leading-[160%] opacity-[0.6]">
        {placeholder}
      </div>
      {showDownChevronIcon && (
        <img
          className="absolute top-[calc(50%_-_10px)] right-[16px] w-5 h-5"
          alt=""
          src="/downchevron.svg"
        />
      )}
    </div>
  );
};

export default Inputlargelight;
