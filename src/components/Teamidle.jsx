import { useMemo } from "react";

const Teamidle = ({
  position,
  name1,
  image,
  teamidlePosition,
  teamidleTop,
  teamidleLeft,
}) => {
  const teamidleStyle = useMemo(() => {
    return {
      position: teamidlePosition,
      top: teamidleTop,
      left: teamidleLeft,
    };
  }, [teamidlePosition, teamidleTop, teamidleLeft]);

  return (
    <div
      className="w-[285px] h-[416px] text-center text-base text-gray-700 font-h1"
      style={teamidleStyle}
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
    </div>
  );
};

export default Teamidle;
