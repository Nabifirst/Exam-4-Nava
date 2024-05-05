// import Articlesmall from "./Articlesmall";
import SliderControlshover from "./SliderControlshover";

const RelatedPostsCarousel = () => {
  return (
    <div className="absolute h-[13.21%] w-[64.69%] top-[72.3%] right-[17.34%] bottom-[14.49%] left-[17.97%] text-left text-base text-gray-900 font-h1">
      <Articlesmall
        tag={`Media & Press`}
        june32020="June 3, 2020"
        byShawnEdwards="By Shawn Edwards"
        theBasicsOfBloggingSearch="How to Create Content That Gets Linked and Shared."
        maurisTinciduntSollicitud="Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae.."
        pic="/pic@2x.png"
      />
      <Articlesmall
        tag="Paid Search"
        june32020="April 25, 2020"
        byShawnEdwards="By Diane Mccoy"
        theBasicsOfBloggingSearch="10 Seriously Underused Paid Search Strategies."
        maurisTinciduntSollicitud="Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus sollicitudin posuere venenatis..."
        pic="/pic@2x.png"
        propRight="34.78%"
        propLeft="33.82%"
      />
      <Articlesmall
        tag="SEO"
        june32020="May 1, 2020"
        byShawnEdwards="By Shawn Edwards"
        theBasicsOfBloggingSearch="The Best Practices to Optimize Your Website for Mobile."
        maurisTinciduntSollicitud="Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida..."
        pic="/pic@2x.png"
        propRight="68.6%"
        propLeft="0%"
      />
      <SliderControlshover
        sliderControlshoverPosition="absolute"
        sliderControlshoverTop="24px"
        sliderControlshoverLeft="1158px"
      />
      <div className="absolute top-[0px] left-[0px] text-27xl leading-[130%] font-black">
        You may also like
      </div>
    </div>
  );
};

export default RelatedPostsCarousel;
