import Articlesmall2 from "./Articlesmall2";
import Articlesmall1 from "./Articlesmall1";

const Articles = () => {
  return (
    <div className="absolute top-[1296px] left-[345px] w-[810px] h-[1763px] text-left text-base text-gray-900 font-h1">
      <div className="absolute top-[1737px] left-[0px] overflow-hidden flex flex-row items-center justify-start gap-[20px] text-gray-800">
        <b className="relative leading-[160%] text-primary">1</b>
        <b className="relative leading-[160%]">2</b>
        <b className="relative leading-[160%]">3</b>
        <b className="relative leading-[160%]">4</b>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
          <b className="relative leading-[160%]">Next</b>
          <img className="w-6 relative h-6" alt="" src="/right3.svg" />
        </div>
      </div>
      <div className="absolute top-[1688.5px] left-[-0.5px] box-border w-[811px] h-px border-t-[1px] border-solid border-gray-300" />
      <Articlesmall2
        tag="Ad Tips"
        march182020="March 18, 2020"
        byJaneCooper="By Jane Cooper"
        theBasicsOfBloggingSearch="12 Simple Tips to Creating an Effective Ad."
        maurisTinciduntSollicitud="Imperdiet risus consectetur dignissim lorem sollicitudin eget bibendum pellentesque nec. Adipiscing viverra in non euismod. Amet nulla aliquam nulla magna..."
        pic="/pic@2x.png"
      />
      <Articlesmall2
        tag={`Media & Press`}
        march182020="June 3, 2020"
        byJaneCooper="By Shawn Edwards"
        theBasicsOfBloggingSearch="How to Create Content That Gets Linked and Shared."
        maurisTinciduntSollicitud="Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae.."
        pic="/pic@2x.png"
        propTop="64.32%"
        propBottom="6.92%"
        propRight="51.85%"
        propLeft="0%"
      />
      <Articlesmall2
        tag="Paid Search"
        march182020="April 25, 2020"
        byJaneCooper="By Diane Mccoy"
        theBasicsOfBloggingSearch="10 Seriously Underused Paid Search Strategies."
        maurisTinciduntSollicitud="Euismod congue faucibus diam etiam diam netus vitae ornare vitae. Cursus sollicitudin posuere venenatis..."
        pic="/pic@2x.png"
        propTop="32.16%"
        propBottom="39.08%"
        propRight="0%"
        propLeft="51.85%"
      />
      {/* <Articlesmall1
        tag="SEO"
        may12020="May 1, 2020"
        byShawnEdwards="By Shawn Edwards"
        theBasicsOfBloggingSearch="The Best Practices to Optimize Your Website for Mobile."
        maurisTinciduntSollicitud="Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida..."
        pic="/pic@2x.png"
      /> */}
      <Articlesmall2
        tag="Ad Tips"
        march182020="June 6, 2020"
        byJaneCooper="By Shawn Edwards"
        theBasicsOfBloggingSearch="How to Evaluate and Compare Social Media Tools Today."
        maurisTinciduntSollicitud="Eu donec pellentesque et aliquet. Fringilla morbi etiam turpis nisl nunc, quis sagittis ut. Pulvinar amet vitae.."
        pic="/pic@2x.png"
        propTop="0%"
        propBottom="71.24%"
        propRight="0%"
        propLeft="51.85%"
      />
      {/* <Articlesmall1
        tag="Marketing"
        may12020="June 12, 2020"
        byShawnEdwards="By Soham Alexander"
        theBasicsOfBloggingSearch="Digital Marketing Game: What You Need to Know to Stay Ahead?"
        maurisTinciduntSollicitud="Nunc nulla vestibulum nunc quam arcu tristique convallis. Posuere augue pellentesque mauris gravida..."
        pic="/pic@2x.png"
        propTop="0%"
        propBottom="71.24%"
      /> */}
    </div>
  );
};

export default Articles;
