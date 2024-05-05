import Checkboxchecked from "./Checkboxchecked";

const Subscribe = () => {
  return (
    <div className="absolute top-[2817px] left-[0px] w-[1920px] h-[496px] text-left text-27xl text-white font-h1">
      <img
        className="absolute top-[0px] left-[0px] w-[1920px] h-[496px]"
        alt=""
        src="/background6.svg"
      />
      <img
        className="absolute top-[54px] left-[1016px] w-[559px] h-[374px]"
        alt=""
        src="/illustration6.svg"
      />
      <div className="absolute top-[80px] left-[345px] w-[495px] h-[336px]">
        <div className="absolute top-[0px] left-[0px] leading-[130%] font-black inline-block w-[495px]">
          Subsribe to our blog
        </div>
        <div className="absolute top-[100px] left-[0px] flex flex-col items-start justify-start gap-[32px] text-base">
          <div className="w-[495px] relative text-xl leading-[150%] flex items-center">
            And receive latest trends in search, marketing, digital and news.
          </div>
          <div className="w-[495px] relative h-[86px] overflow-hidden shrink-0">
            <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[86px] overflow-hidden">
              <div className="absolute h-[calc(100%_-_34px)] w-full top-[34px] right-[0px] bottom-[0px] left-[0px] rounded bg-gray1-200 box-border overflow-hidden border-[1px] border-solid border-gray1-100">
                <div className="absolute top-[13px] left-[16px] leading-[160%] opacity-[0.6]">
                  Your working email
                </div>
              </div>
              <div className="absolute top-[0px] left-[0px] leading-[160%]">
                Email
              </div>
            </div>
            <div className="absolute top-[34px] right-[0px] rounded-tl-none rounded-tr rounded-br rounded-bl-none bg-primary overflow-hidden flex flex-col items-end justify-start py-0 px-10 text-center">
              <b className="relative tracking-[0.5px] leading-[52px]">
                Subscribe
              </b>
            </div>
          </div>
          <div className="w-[451px] relative h-[26px]">
            <div className="absolute top-[0px] left-[28px] leading-[160%]">
              I agree to receive communications from Createx SEO Agency
            </div>
            <Checkboxchecked
              checkboxcheckedWidth="3.55%"
              checkboxcheckedHeight="61.54%"
              checkboxcheckedPosition="absolute"
              checkboxcheckedTop="19.23%"
              checkboxcheckedRight="96.45%"
              checkboxcheckedBottom="19.23%"
              checkboxcheckedLeft="0%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
