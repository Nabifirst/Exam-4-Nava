const Header5 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[595px] text-center text-37xl text-white font-h1">
      <div className="absolute top-[0px] left-[0px] w-[1920px] h-[595px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[595px] object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray-900 w-[1920px] h-[595px] opacity-[0.6]" />
      </div>
      <div className="absolute top-[309px] left-[calc(50%_-_510px)] tracking-[1px] leading-[130%] font-black flex items-center justify-center w-[1020px]">
        200% increase in conversion rate for Lovato Company
      </div>
      <img
        className="absolute top-[205px] left-[885px] w-[150px] h-20 overflow-hidden object-cover"
        alt=""
        src="/clientlogo@2x.png"
      />
      <div className="absolute top-[152px] left-[717px] overflow-hidden flex flex-row items-center justify-start gap-[8px] text-left text-sm">
        <img className="w-4 relative h-4" alt="" src="/home.svg" />
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%]">Case Studies</div>
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%] opacity-[0.6]">
          200% increase in conversion rate for Lovato Company
        </div>
      </div>
    </div>
  );
};

export default Header5;
