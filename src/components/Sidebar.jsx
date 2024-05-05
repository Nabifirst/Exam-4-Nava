import Post2 from "./Post2";
import Tags from "./Tags";

const Sidebar = () => {
  return (
    <div className="absolute top-[1296px] left-[1233px] w-[342px] h-[905px] text-left text-sm text-gray-700 font-h1">
      <div className="absolute top-[311px] left-[0px] flex flex-col items-start justify-start gap-[24px]">
        <b className="relative text-5xl leading-[130%] text-gray-900">
          Now Trending
        </b>
        <Post2
          image="/image@2x.png"
          july52020="July 5, 2020"
          surprisingWaysToCombineCo="5 Surprising Ways to Combine Content Marketing with PPC"
        />
        <Post2
          image="/image@2x.png"
          july52020="April 9, 2020"
          surprisingWaysToCombineCo="Why SEO Is All About Content Marketing?"
          propHeight="100px"
          propWidth="220px"
        />
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[20px]">
          <img
            className="w-[100px] relative rounded h-[100px] object-cover"
            alt=""
            src="/image@2x.png"
          />
          <div className="w-[220px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[4px]">
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
              <img className="w-4 relative h-4" alt="" src="/clock.svg" />
              <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
                March 12, 2020
              </div>
            </div>
            <b className="w-[222px] relative text-base leading-[160%] inline-block text-gray-900">
              <span className="capitalize">{`10 tips for `}</span>a
              <span className="capitalize">
                {" "}
                small business digital marketing strategy
              </span>
            </b>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] w-[342px] h-[251px] text-base text-gray-800">
        <div className="absolute top-[55px] left-[323px] flex flex-col items-end justify-start gap-[8px] text-right">
          <div className="relative leading-[160%]">25</div>
          <div className="relative leading-[160%]">3</div>
          <div className="relative leading-[160%]">7</div>
          <div className="relative leading-[160%] text-primary">4</div>
          <div className="relative leading-[160%]">9</div>
          <div className="relative leading-[160%]">2</div>
        </div>
        <div className="absolute top-[55px] left-[0px] flex flex-col items-start justify-start gap-[8px]">
          <b className="relative leading-[160%]">All</b>
          <b className="relative leading-[160%]">{`Media & Press`}</b>
          <b className="relative leading-[160%]">Ad Tips</b>
          <b className="relative leading-[160%] text-primary">Marketing</b>
          <b className="relative leading-[160%]">SEO</b>
          <b className="relative leading-[160%]">Paid Search</b>
        </div>
        <b className="absolute top-[0px] right-[172px] text-5xl leading-[130%] text-gray-900">
          Blog Categories
        </b>
      </div>
      <Tags propTop="774px" />
    </div>
  );
};

export default Sidebar;
