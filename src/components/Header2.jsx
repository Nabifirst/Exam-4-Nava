import Inputlargelight from "./Inputlargelight";

const Header2 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[623px] text-center text-base text-white font-h1">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[623px] overflow-hidden"
        alt=""
        src="/background9.svg"
      />
      <div className="absolute top-[451px] left-[660px] w-[600px] h-[52px]">
        <Inputlargelight
          placeholder="Search the blog"
          showDownChevronIcon={false}
          inputlargelightWidth="100%"
          inputlargelightPosition="absolute"
          inputlargelightTop="0px"
          inputlargelightRight="0%"
          inputlargelightLeft="0%"
        />
        <div className="absolute top-[0px] right-[0px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary overflow-hidden flex flex-col items-end justify-start py-0 px-10">
          <b className="relative tracking-[0.5px] leading-[52px]">Search</b>
        </div>
      </div>
      <div className="absolute top-[331px] left-[555px] text-xl leading-[150%] inline-block w-[810px] opacity-[0.6]">
        Thoughts, trends and up-to-date news in search and digital marketing.
        Subsribe to our blog and receive latest news weekly.
      </div>
      <div className="absolute top-[213px] left-[885px] text-53xl tracking-[1px] leading-[130%] font-black">
        Blog
      </div>
      <div className="absolute top-[152px] left-[921px] overflow-hidden flex flex-row items-center justify-start gap-[8px] text-left text-sm font-regular-regular">
        <img className="w-4 relative h-4" alt="" src="/home.svg" />
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%] opacity-[0.6]">Blog</div>
      </div>
    </div>
  );
};

export default Header2;
