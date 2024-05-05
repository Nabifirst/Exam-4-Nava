import Checkboxchecked from "./Checkboxchecked";
import Formdefault from "./Formdefault";

const Subscribe1 = () => {
  return (
    <div className="absolute top-[3179px] left-[0px] w-[1920px] h-[522px] text-left text-sm text-gray-800 font-h1">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[522px]"
        alt=""
        src="/background7.svg"
      />
      <img
        className="absolute top-[56px] left-[1021px] w-[564px] h-[378px]"
        alt=""
        src="/illustration7.svg"
      />
      <div className="absolute top-[381px] left-[345px] overflow-hidden flex flex-row items-center justify-start gap-[12px]">
        <Checkboxchecked
          checkboxcheckedWidth="16px"
          checkboxcheckedHeight="16px"
          checkboxcheckedPosition="relative"
          checkboxcheckedTop="unset"
          checkboxcheckedRight="unset"
          checkboxcheckedBottom="unset"
          checkboxcheckedLeft="unset"
        />
        <div className="relative leading-[150%]">
          I agree to receive communications from Createx SEO Agency.
        </div>
      </div>
      <div className="absolute top-[284px] left-[345px] w-[420px] h-[73px] overflow-hidden text-center text-white">
        <Formdefault
          label="Email"
          placeholder="Your working email"
          formdefaultWidth="100%"
          formdefaultPosition="absolute"
          formdefaultTop="0px"
          formdefaultRight="0%"
          formdefaultLeft="0%"
          labelColor="#424551"
          inputBackgroundColor="#fff"
        />
        <div className="absolute top-[29px] right-[0px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary overflow-hidden flex flex-col items-end justify-start py-0 px-8">
          <b className="relative tracking-[0.5px] leading-[44px]">Subscribe</b>
        </div>
      </div>
      <div className="absolute top-[184px] left-[345px] text-xl leading-[150%] text-gray-700 flex items-center w-[421px]">
        And receive latest trends in search, marketing, digital and news.
      </div>
      <div className="absolute top-[100px] left-[345px] text-27xl leading-[130%] font-black text-gray-900 inline-block w-[420px]">
        Subsribe to our blog
      </div>
    </div>
  );
};

export default Subscribe1;
