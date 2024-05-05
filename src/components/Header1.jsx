const Header1 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[499px] text-center text-37xl text-white font-h1">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[499px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] bg-gray-900 w-[1920px] h-[499px] opacity-[0.6]" />
      <div className="absolute top-[213px] left-[calc(50%_-_510px)] tracking-[1px] leading-[130%] font-black flex items-center justify-center w-[1020px]">
        How to Maximize Your ROI Through Scientific SEM?
      </div>
      <div className="absolute top-[152px] left-[calc(50%_-_213px)] overflow-hidden flex flex-row items-center justify-start gap-[8px] text-left text-sm font-regular-regular">
        <img className="w-4 relative h-4" alt="" src="/home.svg" />
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%]">Blog</div>
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%] opacity-[0.6]">
          How to Increase Your ROI Through Scientific SEM?
        </div>
      </div>
    </div>
  );
};

export default Header1;
