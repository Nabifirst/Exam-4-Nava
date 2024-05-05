import Btnoutlinelarge from "./Btnoutlinelarge";

const Header8 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[653px] text-left text-sm text-white font-h1">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[653px] overflow-hidden"
        alt=""
        src="/background23.svg"
      />
      <div className="absolute top-[481px] left-[775px] flex flex-row items-center justify-start gap-[40px]">
        <Btnoutlinelarge
          largeButton="Start now"
          btnoutlinelargeBorder="1px solid #fff"
          btnoutlinelargePosition="unset"
          btnoutlinelargeTop="unset"
          btnoutlinelargeLeft="unset"
          btnoutlinelargeWidth="unset"
          largeButtonColor="#fff"
        />
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
        We offer more than services. Our agency provides solutions to your
        top-priority concerns, involving customer targeting, email performance
        and sales growth. If there is no existing solution readily available, we
        create one, specifically to suit your business.
      </div>
      <div className="absolute top-[213px] left-[750px] text-53xl tracking-[1px] leading-[130%] font-black text-center">
        Our services
      </div>
      <div className="absolute top-[152px] left-[910px] overflow-hidden flex flex-row items-center justify-start gap-[8px]">
        <img className="w-4 relative h-4" alt="" src="/home.svg" />
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%] opacity-[0.6]">Services</div>
      </div>
    </div>
  );
};

export default Header8;
