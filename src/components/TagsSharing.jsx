const TagsSharing = () => {
  return (
    <div className="absolute top-[1760px] left-[0px] w-[810px] h-20 text-left text-base text-gray-900 font-h1">
      <div className="absolute top-[80px] left-[0px] box-border w-[811px] h-px border-t-[1px] border-solid border-gray-300" />
      <div className="absolute top-[3px] right-[0px] flex flex-row items-center justify-start gap-[12px]">
        <b className="relative leading-[160%]">Share:</b>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img className="w-5 relative h-5" alt="" src="/facebook2.svg" />
          <img className="w-5 relative h-5" alt="" src="/twitter1.svg" />
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/linkedin2.svg"
          />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] flex flex-row items-center justify-start gap-[12px] text-sm text-gray-700">
        <b className="w-9 relative text-base leading-[160%] flex text-gray-900 items-center h-[26px] shrink-0">
          Tags:
        </b>
        <div className="rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
          <b className="relative leading-[150%]">#business</b>
        </div>
        <div className="rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
          <b className="relative leading-[150%]">#PPC</b>
        </div>
        <div className="rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
          <b className="relative leading-[150%]">#targeting</b>
        </div>
      </div>
    </div>
  );
};

export default TagsSharing;
