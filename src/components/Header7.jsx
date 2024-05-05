const Header7 = () => {
  return (
    <div className="absolute top-[0px] left-[0px] w-[1920px] h-[645px] text-left text-base text-white font-h1">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[645px] overflow-hidden"
        alt=""
        src="/background22.svg"
      />
      <div className="absolute top-[439px] left-[660px] w-[600px] h-[86px] overflow-hidden">
        <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[86px] overflow-hidden">
          <div className="absolute h-[calc(100%_-_34px)] w-full top-[34px] right-[0px] bottom-[0px] left-[0px] rounded bg-gray1-200 box-border overflow-hidden border-[1px] border-solid border-gray1-100">
            <div className="absolute top-[13px] left-[16px] leading-[160%] opacity-[0.6]">
              http://yoursite.com
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] leading-[160%]">
            Your website URL
          </div>
        </div>
        <div className="absolute top-[34px] right-[0px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary overflow-hidden flex flex-col items-center justify-start py-0 px-10 text-center">
          <b className="relative tracking-[0.5px] leading-[52px]">
            Analyse your site
          </b>
        </div>
      </div>
      <div className="absolute top-[339px] left-[555px] text-xl leading-[150%] text-center inline-block w-[810px] opacity-[0.6]">{`Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer facilisi. Ultrices vitae tempor amet nec euismod non. `}</div>
      <div className="absolute top-[213px] left-[492px] text-53xl tracking-[1px] leading-[130%] font-black text-center">
        Search Engine Optimization
      </div>
      <div className="absolute top-[152px] left-[809px] overflow-hidden flex flex-row items-center justify-start gap-[8px] text-sm">
        <img className="w-4 relative h-4" alt="" src="/home.svg" />
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%]">Services</div>
        <img
          className="w-4 relative h-4 opacity-[0.6]"
          alt=""
          src="/rightchevron.svg"
        />
        <div className="relative leading-[150%] opacity-[0.6]">
          Search Engine Optimization
        </div>
      </div>
    </div>
  );
};

export default Header7;
