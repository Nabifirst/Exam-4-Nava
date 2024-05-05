import Dau from "./Dau";

const Figures = () => {
  return (
    <div className="absolute top-[0px] left-[100px] flex flex-row items-center justify-start gap-[60px] text-left text-13xl text-gray-900 font-h1">
      <Dau circle="/circle6.svg" prop="70%" openRate="Open Rate" />
      <Dau circle="/circle7.svg" prop="200%" openRate="Growth in sales" />
      <div className="overflow-hidden flex flex-col items-start justify-start">
        <div className="relative leading-[130%] font-black">8,000</div>
        <div className="relative text-xl leading-[150%]">DAU</div>
      </div>
    </div>
  );
};

export default Figures;
