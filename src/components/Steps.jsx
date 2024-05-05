const Steps = () => {
  return (
    <div className="absolute top-[2708px] left-[555px] w-[810px] h-[716px] text-right text-xs text-gray-700 font-h1">
      <img
        className="absolute top-[125px] left-[401px] w-2 h-[591px]"
        alt=""
        src="/line6.svg"
      />
      <div className="absolute top-[580px] left-[0px] overflow-hidden flex flex-col items-end justify-start gap-[8px]">
        <div className="overflow-hidden flex flex-col items-end justify-start gap-[2px]">
          <div className="relative leading-[150%] font-black">STEP 4</div>
          <b className="w-[285px] relative text-xl leading-[150%] flex text-gray-900 items-center h-[30px] shrink-0">
            Content Marketing
          </b>
        </div>
        <div className="w-[361px] relative text-base leading-[160%] inline-block">
          Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada
          dui auctor. Faucibus in leo, nulla odio nulla imperdiet quis faucibus
          neque.
        </div>
      </div>
      <div className="absolute top-[418px] left-[449px] overflow-hidden flex flex-col items-start justify-start gap-[8px] text-left">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[2px]">
          <div className="relative leading-[150%] font-black">STEP 3</div>
          <b className="w-[285px] relative text-xl leading-[150%] flex text-gray-900 items-center h-[30px] shrink-0">
            Usability Check
          </b>
        </div>
        <div className="w-[361px] relative text-base leading-[160%] inline-block">{`Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. Varius praesent pretium in leo, accumsan, in ultricies. `}</div>
      </div>
      <div className="absolute top-[256px] left-[0px] overflow-hidden flex flex-col items-end justify-start gap-[8px]">
        <div className="overflow-hidden flex flex-col items-end justify-start gap-[2px]">
          <div className="relative leading-[150%] font-black">STEP 2</div>
          <b className="w-[285px] relative text-xl leading-[150%] flex text-gray-900 items-center h-[30px] shrink-0">
            Technical SEO Optimizations
          </b>
        </div>
        <div className="w-[361px] relative text-base leading-[160%] inline-block">
          Facilisis pellentesque quis accumsan ultricies. Eu egestas eget
          feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl
          orci auctor et fames. Vestibulum viverra faucibus faucibus et
          convallis.
        </div>
      </div>
      <div className="absolute top-[120px] left-[449px] overflow-hidden flex flex-col items-start justify-start gap-[8px] text-left">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[2px]">
          <div className="relative leading-[150%] font-black">STEP 1</div>
          <b className="w-[285px] relative text-xl leading-[150%] flex text-gray-900 items-center h-[30px] shrink-0">
            Off-Site SEO Analysis
          </b>
        </div>
        <div className="w-[361px] relative text-base leading-[160%] inline-block">
          Aliquam turpis viverra quam sit interdum blandit posuere pellentesque.
          Nisl, imperdiet gravida massa neque.
        </div>
      </div>
      <div className="absolute top-[0px] left-[201px] text-27xl leading-[130%] font-black text-gray-900 text-center">
        That’s how it works
      </div>
    </div>
  );
};

export default Steps;
