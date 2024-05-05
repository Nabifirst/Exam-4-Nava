import { useMemo } from "react";

const Formlargelight = ({ yourWorkingEmail, label, propLeft }) => {
  const formlargelightStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="absolute top-[100px] left-[315px] w-[285px] h-[86px] overflow-hidden text-left text-base text-white font-h1"
      style={formlargelightStyle}
    >
      <div className="absolute h-[calc(100%_-_34px)] w-full top-[34px] right-[0px] bottom-[0px] left-[0px] rounded bg-gray1-200 box-border overflow-hidden border-[1px] border-solid border-gray1-100">
        <div className="absolute top-[13px] left-[16px] leading-[160%] opacity-[0.6]">
          {yourWorkingEmail}
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] leading-[160%]">
        {label}
      </div>
    </div>
  );
};

export default Formlargelight;
