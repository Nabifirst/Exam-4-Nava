import { useMemo } from "react";

const Checkboxchecked = ({
  checkboxcheckedWidth,
  checkboxcheckedHeight,
  checkboxcheckedPosition,
  checkboxcheckedTop,
  checkboxcheckedRight,
  checkboxcheckedBottom,
  checkboxcheckedLeft,
}) => {
  const checkboxcheckedStyle = useMemo(() => {
    return {
      width: checkboxcheckedWidth,
      height: checkboxcheckedHeight,
      position: checkboxcheckedPosition,
      top: checkboxcheckedTop,
      right: checkboxcheckedRight,
      bottom: checkboxcheckedBottom,
      left: checkboxcheckedLeft,
    };
  }, [
    checkboxcheckedWidth,
    checkboxcheckedHeight,
    checkboxcheckedPosition,
    checkboxcheckedTop,
    checkboxcheckedRight,
    checkboxcheckedBottom,
    checkboxcheckedLeft,
  ]);

  return (
    <div className="w-4 h-4" style={checkboxcheckedStyle}>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-primary box-border border-[1px] border-solid border-primary" />
      <img
        className="absolute h-3/6 w-[62.5%] top-[25%] right-[18.75%] bottom-[25%] left-[18.75%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/check.svg"
      />
    </div>
  );
};

export default Checkboxchecked;
