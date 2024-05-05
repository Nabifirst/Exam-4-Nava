import { useMemo } from "react";

const Figure = ({
  ellipse,
  prop,
  projects,
  propLeft,
  propBorder,
  propLeft1,
}) => {
  const figureStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const ellipseStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  const divStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className="absolute top-[0px] left-[980px] overflow-hidden flex flex-col items-center justify-start gap-[20px] text-center text-13xl text-gray-900 font-h1"
      style={figureStyle}
    >
      <div className="w-[148px] relative h-[148px] overflow-hidden shrink-0">
        <div
          className="absolute top-[calc(50%_-_74px)] left-[calc(50%_-_74px)] rounded-[50%] box-border w-[148px] h-[148px] opacity-[0.3] border-[6px] border-solid border-info"
          style={ellipseStyle}
        />
        <img
          className="absolute top-[calc(50%_-_74px)] left-[calc(50%_-_74px)] w-[148px] h-[148px]"
          alt=""
          src={ellipse}
        />
        <div
          className="absolute top-[calc(50%_-_21px)] left-[calc(50%_-_38px)] leading-[130%] font-black"
          style={divStyle}
        >
          {prop}
        </div>
      </div>
      <div className="w-[148px] relative text-sm leading-[150%] text-gray-800 inline-block">
        {projects}
      </div>
    </div>
  );
};

export default Figure;
