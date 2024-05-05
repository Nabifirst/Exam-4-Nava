const Author = () => {
  return (
    <div className="absolute top-[104px] left-[0px] w-[276px] h-[171px] text-left text-xl text-gray-800 font-h1">
      <div className="absolute top-[55px] left-[0px] w-[276px] h-[100px]">
        <div className="absolute top-[75px] left-[120px] flex flex-row items-center justify-start gap-[12px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/instagram1.svg"
          />
          <img className="w-5 relative h-5" alt="" src="/facebook1.svg" />
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/linkedin1.svg"
          />
        </div>
        <div className="absolute top-[0px] left-[120px] flex flex-col items-start justify-start gap-[4px]">
          <b className="relative leading-[150%]">Diane Mccoy</b>
          <div className="relative text-sm leading-[150%] text-gray-700">
            Lead Digital PR Strategist
          </div>
        </div>
        <img
          className="absolute h-full w-[36.23%] top-[0%] right-[63.77%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image@2x.png"
        />
      </div>
      <img
        className="absolute top-[150px] left-[191px] w-[22px] h-[21px] object-cover"
        alt=""
        src="/cursor@2x.png"
      />
      <b className="absolute top-[0px] right-[198px] text-5xl leading-[130%] text-gray-900">
        Author
      </b>
    </div>
  );
};

export default Author;
