const Dau = ({ circle, prop, openRate }) => {
  return (
    <div className="overflow-hidden flex flex-row items-center justify-start gap-[20px] text-left text-13xl text-gray-900 font-h1">
      <img
        className="w-20 relative h-20 overflow-hidden shrink-0"
        alt=""
        src={circle}
      />
      <div className="overflow-hidden flex flex-col items-start justify-start">
        <div className="relative leading-[130%] font-black">{prop}</div>
        <div className="relative text-xl leading-[150%]">{openRate}</div>
      </div>
    </div>
  );
};

export default Dau;
