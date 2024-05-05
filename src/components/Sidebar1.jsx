const Sidebar1 = () => {
  return (
    <div className="absolute top-[695px] left-[1185px] w-[390px] h-[678px] text-left text-sm text-gray-900 font-h1">
      <div className="absolute top-[648px] left-[0px] flex flex-row items-center justify-start gap-[12px] text-xl">
        <b className="relative leading-[150%]">Share:</b>
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <img className="w-5 relative h-5" alt="" src="/facebook1.svg" />
          <img className="w-5 relative h-5" alt="" src="/twitter1.svg" />
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/linkedin2.svg"
          />
        </div>
      </div>
      <div className="absolute top-[568px] left-[0px] flex flex-row items-center justify-start gap-[12px] text-gray-700">
        <div className="rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
          <b className="relative leading-[150%]">#SEO</b>
        </div>
        <div className="rounded overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 border-[1px] border-solid border-gray-400">
          <b className="relative leading-[150%]">#research</b>
        </div>
        <div className="rounded bg-primary overflow-hidden flex flex-col items-center justify-start py-[5.5px] px-4 text-white">
          <b className="relative leading-[150%]">#payed_traffic</b>
        </div>
      </div>
      <img
        className="absolute top-[600px] left-[244px] w-[22px] h-[21px] object-cover"
        alt=""
        src="/cursor@2x.png"
      />
      <div className="absolute top-[0px] right-[0px] w-[390px] h-[520px] text-gray-800">
        <div className="absolute top-[0px] right-[0px] rounded bg-gray-200 w-[390px] h-[520px]" />
        <div className="absolute top-[343px] left-[32px] w-[326px] overflow-hidden flex flex-col items-start justify-start gap-[8px] text-center">
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark2.svg" />
            <div className="relative leading-[150%]">Remarketing</div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark2.svg" />
            <div className="relative leading-[150%]">
              Conversion Rate Optimization
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark2.svg" />
            <div className="relative leading-[150%]">User Testing</div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark2.svg" />
            <div className="relative leading-[150%]">PPC Management</div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[12px]">
            <img className="w-4 relative h-4" alt="" src="/mark2.svg" />
            <div className="relative leading-[150%]">Usability Testing</div>
          </div>
        </div>
        <b className="absolute top-[300px] left-[32px] text-5xl leading-[130%] text-gray-900">
          Services rendered
        </b>
        <div className="absolute top-[255px] left-[32px] leading-[150%]">
          Electric company - B2B
        </div>
        <b className="absolute top-[212px] left-[32px] text-5xl leading-[130%] text-gray-900">
          Industry
        </b>
        <div className="absolute top-[83px] left-[32px] leading-[150%] inline-block w-[326px]">
          At facilisi sapien posuere eget nunc senectus proin nullam. Tortor
          senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing
          eget diam nisi. Orci, consectetur vulputate metus ornare pharetra,
          neque, fermentum.
        </div>
        <b className="absolute top-[40px] left-[32px] text-5xl leading-[130%] text-gray-900">
          About the client
        </b>
      </div>
    </div>
  );
};

export default Sidebar1;
