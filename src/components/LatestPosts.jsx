import Articlelarge from "./Articlelarge";

const LatestPosts = () => {
  return (
    <div className="absolute top-[723px] left-[345px] w-[1230px] h-[525px]">
      <div className="absolute top-[524.5px] left-[-0.5px] box-border w-[1231px] h-px border-t-[1px] border-solid border-gray-300" />
      <Articlelarge
        howToMaximizeYourROIThrou="The Basics of Blogging Search Engine Optimization."
        sEO="Marketing"
        july52020="July 2, 2020"
        image="/image@2x.png"
        articlelargePosition="absolute"
        articlelargeTop="0px"
        articlelargeLeft="630px"
      />
      <Articlelarge
        howToMaximizeYourROIThrou="How to Maximize Your ROI Through Scientific SEM?"
        sEO="SEO"
        july52020="July 5, 2020"
        image="/image@2x.png"
        articlelargePosition="absolute"
        articlelargeTop="0px"
        articlelargeLeft="0px"
      />
    </div>
  );
};

export default LatestPosts;
