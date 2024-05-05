import { useMemo } from "react";

const Teamhover = ({
  position,
  name1,
  image,
  teamhoverPosition,
  teamhoverTop,
  teamhoverLeft,
}) => {
  const teamhoverStyle = useMemo(() => {
    return {
      position: teamhoverPosition,
      top: teamhoverTop,
      left: teamhoverLeft,
    };
  }, [teamhoverPosition, teamhoverTop, teamhoverLeft]);

  return (
    <div
      className="w-[285px] h-[416px] text-center text-base text-gray-700 font-h1"
      style={teamhoverStyle}
    >
      <div className="absolute w-full top-[93.75%] left-[0%] leading-[160%] inline-block">
        {position}
      </div>
      <b className="absolute w-full top-[85.58%] left-[0%] text-xl leading-[150%] inline-block text-gray-800">
        {name1}
      </b>
      <img
        className="absolute h-[81.73%] w-full top-[0%] right-[0%] bottom-[18.27%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={image}
      />
      <div className="absolute h-[81.73%] w-full top-[0%] right-[0%] bottom-[18.27%] left-[0%] rounded [background:linear-gradient(180deg,_rgba(30,_33,_44,_0)_43.9%,_rgba(30,_33,_44,_0.03)_55.21%,_rgba(30,_33,_44,_0.33)_68.73%,_rgba(30,_33,_44,_0.56)_76.17%,_rgba(30,_33,_44,_0.77)_83.75%,_rgba(30,_33,_44,_0.92)_91.49%,_#1e212c)]" />
      <div className="absolute top-[300px] left-[181px] flex flex-row items-center justify-start gap-[12px]">
        <img
          className="w-5 relative h-5 opacity-[0.6]"
          alt=""
          src="/facebook4.svg"
        />
        <img
          className="w-5 relative h-5 overflow-hidden shrink-0 opacity-[0.6]"
          alt=""
          src="/instagram2.svg"
        />
        <img
          className="w-5 relative h-5 overflow-hidden shrink-0"
          alt=""
          src="/linkedin4.svg"
        />
      </div>
    </div>
  );
};

export default Teamhover;
