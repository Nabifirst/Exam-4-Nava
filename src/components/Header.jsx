const Header = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[586px] text-left text-sm text-white font-h1">
      <img
        className=" mt-[-190px] ml-[-190px]"
        alt=""
        src="/background4.svg"
      />
      <div className="absolute top-[387px] left-[345px] flex flex-row items-start justify-start gap-[69px]">
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src="/pinoutline.svg"
          />
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-[150%] opacity-[0.6]">Visit us</b>
            <div className="w-[178px] relative text-base leading-[160%] flex items-center">
              <span className="w-full">
                <p className="m-0">2464 Royal Ln. Mesa,</p>
                <p className="m-0">New Jersey 45463, USA</p>
                <p className="m-0 text-primary">See on the map</p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-px relative box-border h-[100px] opacity-[0.4] border-r-[1px] border-solid border-divider-gradient" />
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <img className="w-10 relative h-10" alt="" src="/iphone1.svg" />
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-[150%] opacity-[0.6]">Call us</b>
            <div className="w-[126px] relative text-base leading-[160%] flex items-center">
              <span className="w-full">
                <p className="m-0">(405) 555-0128</p>
                <p className="m-0">(603) 555-0123</p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-px relative box-border h-[100px] opacity-[0.4] border-r-[1px] border-solid border-divider-gradient" />
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[12px]">
          <img className="w-10 relative h-10" alt="" src="/chat.svg" />
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <b className="relative leading-[150%] opacity-[0.6]">Talk to us</b>
            <a
              className="w-[151px] relative text-base leading-[160%] text-[inherit] flex items-center [text-decoration:none]"
              href="mailto:hello@createx.com"
              target="_blank"
            >
              hello@createx.com
            </a>
          </div>
        </div>
        <div className="w-px relative box-border h-[100px] opacity-[0.4] border-r-[1px] border-solid border-divider-gradient" />
        <div className="flex flex-row items-start justify-start gap-[12px]">
          <img className="w-10 relative h-10" alt="" src="/clock1.svg" />
          <div className="flex flex-col items-start justify-start">
            <b className="relative leading-[150%] opacity-[0.6]">
              Working Hours
            </b>
            <div className="relative text-base leading-[160%]">
              <p className="m-0">Mon-Fri: 9 am — 6 pm</p>
              <p className="m-0">Sat-Sun: days off</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[213px] left-[calc(50%_-_151px)] text-53xl tracking-[1px] leading-[130%] font-black text-center">
        Contacts
      </div>
      <div className="absolute top-[152px] left-[calc(50%_-_52px)] overflow-hidden flex flex-row items-center justify-start gap-[8px] font-regular-regular">
        <img className="w-4 relative h-4" alt="" src="/home.svg" />
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%] opacity-[0.6]">Contacts</div>
      </div>
    </div>
  );
};

export default Header;
