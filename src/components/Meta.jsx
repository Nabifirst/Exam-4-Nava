const Meta = () => {
  return (
    <div className="absolute top-[0px] left-[0px] flex flex-row items-end justify-start gap-[80px] text-left text-base text-gray-700 font-h1">
      <div className="overflow-hidden flex flex-col items-start justify-start gap-[4px]">
        <div className="relative leading-[160%]">Published</div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-xl text-gray-900">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/calendar.svg"
          />
          <b className="relative leading-[150%]">July 5, 2020</b>
        </div>
      </div>
      <div className="overflow-hidden flex flex-col items-start justify-start gap-[4px]">
        <div className="relative leading-[160%]">Reading time</div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px] text-xl text-gray-900">
          <img className="w-5 relative h-5" alt="" src="/clock2.svg" />
          <b className="relative leading-[150%]">4 min</b>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[12px] text-xl text-gray-900">
        <b className="relative leading-[150%]">Share:</b>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img className="w-6 relative h-6" alt="" src="/facebook3.svg" />
          <img className="w-6 relative h-6" alt="" src="/twitter2.svg" />
          <img
            className="w-6 relative h-6 overflow-hidden shrink-0"
            alt=""
            src="/linkedin3.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Meta;
