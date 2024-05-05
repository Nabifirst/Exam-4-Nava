const Header3 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[619px] text-left text-sm text-white font-h1">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[619px] overflow-hidden"
        alt=""
        src="/background12.svg"
      />
      <div className="absolute top-[451px] left-[731px] flex flex-row items-center justify-start gap-[40px]">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
          <img className="w-10 relative h-10" alt="" src="/chat.svg" />
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <b className="relative leading-[150%] opacity-[0.6]">Talk to us</b>
            <a
              className="relative text-lg leading-[150%] text-[inherit] [text-decoration:none]"
              href="mailto:hello@createx.com"
              target="_blank"
            >
              hello@createx.com
            </a>
          </div>
        </div>
        <div className="w-px relative box-border h-[49px] opacity-[0.4] border-r-[1px] border-solid border-divider-gradient" />
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img className="w-10 relative h-10" alt="" src="/iphone1.svg" />
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-[150%] opacity-[0.6]">Call us</b>
            <div className="relative text-lg leading-[150%]">
              (405) 555-0128
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[331px] left-[555px] text-xl leading-[150%] text-center inline-block w-[810px] opacity-[0.6]">
        We’re looking for extraordinary talents! If you're passionate about SEO
        and digital marketing, we want to hear from you.
      </div>
      <div className="absolute top-[213px] left-[511px] text-53xl tracking-[1px] leading-[130%] font-black text-center">
        Careers at Createx Agency
      </div>
      <div className="absolute top-[152px] left-[808px] overflow-hidden flex flex-row items-center justify-start gap-[8px] font-regular-regular">
        <img className="w-4 relative h-4" alt="" src="/home.svg" />
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%]">About us</div>
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%] opacity-[0.6]">
          Careers at Createx Agency
        </div>
      </div>
    </div>
  );
};

export default Header3;
