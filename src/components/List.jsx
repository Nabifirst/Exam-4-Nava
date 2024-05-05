import { useMemo } from "react";

const List = ({
  maurisDignissimBlanditCur,
  quisMaurisVelFelisConvall,
  cursusSitPlateaAcPosuereN,
  mattisPellentesqueVelVene,
  propTop,
}) => {
  const listStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className="absolute top-[2396px] left-[100px] flex flex-col items-start justify-start gap-[4px] text-center text-base text-gray-800 font-h1"
      style={listStyle}
    >
      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
        <img className="w-4 relative h-4" alt="" src="/mark.svg" />
        <div className="relative leading-[160%]">
          {maurisDignissimBlanditCur}
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
        <img className="w-4 relative h-4" alt="" src="/mark.svg" />
        <div className="relative leading-[160%]">
          {quisMaurisVelFelisConvall}
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
        <img className="w-4 relative h-4" alt="" src="/mark.svg" />
        <div className="relative leading-[160%]">
          {cursusSitPlateaAcPosuereN}
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
        <img className="w-4 relative h-4" alt="" src="/mark.svg" />
        <div className="relative leading-[160%]">
          {mattisPellentesqueVelVene}
        </div>
      </div>
    </div>
  );
};

export default List;
