const Diagram = () => {
  return (
    <div className="absolute h-[18.03%] w-[calc(100%_-_154.2px)] top-[19.43%] right-[54.2px] bottom-[62.54%] left-[100px] shadow-[0px_80px_80px_-20px_rgba(154,_156,_165,_0.08),_0px_30px_24px_-10px_rgba(154,_156,_165,_0.05),_0px_12px_10px_-6px_rgba(154,_156,_165,_0.04),_0px_4px_4px_-4px_rgba(30,_33,_44,_0.03)] rounded bg-white box-border overflow-hidden text-left text-sm text-gray-800 font-h1 border-[1px] border-solid border-gray-300">
      <div className="absolute w-[calc(100%_-_81px)] top-[108px] right-[24px] left-[57px] h-[280px] overflow-hidden">
        <div className="absolute h-[86.79%] w-[calc(100%_-_3.2px)] top-[-4.11%] right-[0.2px] bottom-[17.32%] left-[3px] overflow-hidden flex flex-col items-center justify-start gap-[48px] opacity-[0.5] mix-blend-normal">
          <img
            className="w-[620.8px] relative h-[0.5px] opacity-[0.76] mix-blend-normal"
            alt=""
            src="/line.svg"
          />
          <img
            className="w-[620.8px] relative h-[0.5px] opacity-[0.76] mix-blend-normal"
            alt=""
            src="/line1.svg"
          />
          <img
            className="w-[620.8px] relative h-[0.5px] opacity-[0.76] mix-blend-normal"
            alt=""
            src="/line2.svg"
          />
          <img
            className="w-[620.8px] relative h-[0.5px] opacity-[0.76] mix-blend-normal"
            alt=""
            src="/line1.svg"
          />
          <img
            className="w-[620.8px] relative h-[0.5px] opacity-[0.76] mix-blend-normal"
            alt=""
            src="/line2.svg"
          />
          <img
            className="w-[620.8px] relative h-[0.5px] opacity-[0.76] mix-blend-normal"
            alt=""
            src="/line3.svg"
          />
        </div>
        <img
          className="absolute h-[calc(100%_-_2px)] top-[1px] bottom-[1px] left-[0.5px] max-h-full w-px"
          alt=""
          src="/line4.svg"
        />
        <img
          className="absolute w-[calc(100%_-_1px)] top-[calc(50%_+_139px)] right-[0px] left-[1px] max-w-full overflow-hidden h-px"
          alt=""
          src="/line5.svg"
        />
      </div>
      <div className="absolute w-[calc(100%_-_121px)] top-[145px] right-[24px] left-[97px] h-[242px] overflow-hidden">
        <div className="absolute top-[65px] left-[20px] overflow-hidden flex flex-row items-end justify-start gap-[2px]">
          <img className="w-10 relative h-[152px]" alt="" src="/bar.svg" />
          <img className="w-10 relative h-[177px]" alt="" src="/bar1.svg" />
        </div>
        <div className="absolute top-[56px] left-[446px] overflow-hidden flex flex-row items-end justify-start gap-[2px]">
          <img className="w-10 relative h-[147px]" alt="" src="/bar2.svg" />
          <img className="w-10 relative h-[186px]" alt="" src="/bar3.svg" />
        </div>
        <div className="absolute top-[25px] left-[304px] overflow-hidden flex flex-row items-end justify-start gap-[2px]">
          <img className="w-10 relative h-[93px]" alt="" src="/bar4.svg" />
          <img className="w-10 relative h-[217px]" alt="" src="/bar5.svg" />
        </div>
        <div className="absolute top-[122px] left-[162px] overflow-hidden flex flex-row items-end justify-start gap-[2px]">
          <img className="w-10 relative h-[120px]" alt="" src="/bar6.svg" />
          <img className="w-10 relative h-[38px]" alt="" src="/bar7.svg" />
        </div>
      </div>
      <b className="absolute top-[395px] left-[16.74%] leading-[150%]">
        Revenue
      </b>
      <b className="absolute top-[395px] left-[36.74%] leading-[150%]">
        Emails in spam
      </b>
      <b className="absolute top-[395px] left-[56.88%] leading-[150%]">
        Conversions
      </b>
      <b className="absolute top-[395px] left-[77.02%] leading-[150%]">ROI</b>
      <div className="absolute top-[103px] left-[24px] overflow-hidden flex flex-col items-start justify-start gap-[24px] text-right text-gray-700">
        <div className="relative leading-[150%]">150</div>
        <div className="relative leading-[150%]">125</div>
        <div className="relative leading-[150%]">100</div>
        <div className="relative leading-[150%]">75</div>
        <div className="relative leading-[150%]">50</div>
        <div className="relative leading-[150%]">25</div>
        <div className="relative leading-[150%]">0</div>
      </div>
      <div className="absolute top-[37px] left-[446px] overflow-hidden flex flex-row items-center justify-start gap-[20px] text-gray-700">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <div className="w-2.5 relative rounded-[50%] bg-primary h-2.5" />
          <div className="relative leading-[150%]">Before Createx</div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <div className="w-2.5 relative rounded-[50%] bg-secondary h-2.5" />
          <div className="relative leading-[150%]">After Createx</div>
        </div>
      </div>
      <b className="absolute top-[32px] left-[24px] text-5xl leading-[130%] text-gray-900 text-center">
        Final Results
      </b>
    </div>
  );
};

export default Diagram;
