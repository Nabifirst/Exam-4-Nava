import { useMemo } from "react";

const UpBtn = ({ upBtnPosition }) => {
  const upBtnStyle = useMemo(() => {
    return {
      position: upBtnPosition,
    };
  }, [upBtnPosition]);

  return (
    <div className="w-10 h-10" style={upBtnStyle}>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-primary" />
      <img
        className="absolute h-3/5 w-3/5 top-[20%] right-[20%] bottom-[20%] left-[20%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/upchevron.svg"
      />
    </div>
  );
};

export default UpBtn;
