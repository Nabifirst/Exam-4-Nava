const Header4 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[661px] text-left text-xl text-white font-h1">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[661px] overflow-hidden"
        alt=""
        src="/background15.svg"
      />
      <div className="absolute top-[541px] left-[345px] flex flex-row items-center justify-start gap-[94px]">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[20px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src="/icchart.svg"
          />
          <b className="relative leading-[150%]">SEO Content Strategy</b>
        </div>
        <div className="w-px relative box-border h-[41px] opacity-[0.4] border-r-[1px] border-solid border-divider-gradient" />
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[20px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src="/icspeaker.svg"
          />
          <b className="relative leading-[150%]">Content Marketing</b>
        </div>
        <div className="w-px relative box-border h-[41px] opacity-[0.4] border-r-[1px] border-solid border-divider-gradient" />
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[20px]">
          <img
            className="w-10 relative h-10 overflow-hidden shrink-0"
            alt=""
            src="/iccomputer.svg"
          />
          <b className="relative leading-[150%]">{`Website & Social Media Marketing`}</b>
        </div>
      </div>
      <div className="absolute top-[331px] left-[555px] leading-[150%] text-center inline-block w-[810px] opacity-[0.6]">{`Our agency has been successfully operating in digital marketing since 2012. We are proud to offer you quality and exemplary service. We help our clients get better results with our creative and data-driven approach to online advertising. `}</div>
      <div className="absolute top-[213px] left-[804px] text-53xl tracking-[1px] leading-[130%] font-black text-center">
        About Us
      </div>
      <div className="absolute top-[152px] left-[910px] overflow-hidden flex flex-row items-center justify-start gap-[8px] text-sm font-regular-regular">
        <img className="w-4 relative h-4" alt="" src="/home.svg" />
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%] opacity-[0.6]">About us</div>
      </div>
    </div>
  );
};

export default Header4;
