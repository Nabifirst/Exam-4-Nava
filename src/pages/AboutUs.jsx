import Footer from "../components/Footer";
import Btnsolidlarge from "../components/Btnsolidlarge";
import Careers1 from "../components/Careers1";
import FAQ from "../components/FAQ";
import Team from "../components/Team";
import Clients from "../components/Clients";
import CTA from "../components/CTA";
import Awards from "../components/Awards";
import Gallery from "../components/Gallery";
import Values from "../components/Values";
import Figure from "../components/Figure";
import Header4 from "../components/Header4";
import Navbarlight from "../components/Navbarlight";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-white h-[8392px] overflow-hidden text-left text-base text-gray-900 font-h1">
      <Footer
        footerPosition="absolute"
        footerTop="7884px"
        footerLeft="0px"
        sIGNUPTORight="31px"
        servicesLeft="calc(50% - 84px)"
        linksLeft="calc(50% - 48px)"
      />
      <img
        className="absolute top-[965px] left-[0px] w-[1920px] h-[6919px] overflow-hidden"
        alt=""
        src="/background13.svg"
      />
      <div className="absolute top-[7197px] left-[345px] w-[1230px] h-[507px]">
        <div className="absolute top-[0px] left-[840px] w-[390px] h-[507px]">
          <div className="absolute bottom-[0px] left-[0px] overflow-hidden flex flex-row items-center justify-start gap-[8px]">
            {/* <h1 className="relative leading-[160%]">Read more</h1> */}
            <img className="w-6 relative h-6" alt="" src="/right1.svg" />
          </div>
          <div className="absolute bottom-[42px] left-[0px] flex flex-col items-start justify-start gap-[8px] text-sm text-gray-700">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[12px]">
              <div className="relative leading-[150%]">Marketing</div>
              <div className="w-px relative box-border h-[13px] border-r-[1px] border-solid border-gray-700" />
              <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
                <img className="w-4 relative h-4" alt="" src="/clock.svg" />
                <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
                  July 2, 2020
                </div>
              </div>
              <div className="w-px relative box-border h-[13px] border-r-[1px] border-solid border-gray-700" />
              <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/profile.svg"
                />
                <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
                  By Diane Mccoy
                </div>
              </div>
            </div>
            <b className="w-[390px] relative text-xl leading-[150%] inline-block text-gray-900">
              The Basics of Blogging Search Engine Optimization.
            </b>
            <div className="w-[390px] relative text-base leading-[160%] text-gray-800 inline-block">
              Mauris tincidunt sollicitudin tristique odio eget volutpat.
              Fringilla viverra amet, mi interdum blandit...
            </div>
          </div>
          <img
            className="absolute h-[59.17%] w-full top-[0%] right-[0%] bottom-[40.83%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pic@2x.png"
          />
        </div>
        <div className="absolute top-[0px] left-[420px] w-[390px] h-[507px]">
          <div className="absolute bottom-[0px] left-[0px] overflow-hidden flex flex-row items-center justify-start gap-[8px]">
            <p className="relative leading-[160%]">Read more</p>
            <img className="w-6 relative h-6" alt="" src="/right1.svg" />
          </div>
          <div className="absolute bottom-[42px] left-[0px] flex flex-col items-start justify-start gap-[8px] text-sm text-gray-700">
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[12px]">
              <div className="relative leading-[150%]">SEO</div>
              <div className="w-px relative box-border h-[13px] border-r-[1px] border-solid border-gray-700" />
              <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
                <img className="w-4 relative h-4" alt="" src="/clock.svg" />
                <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
                  July 5, 2020
                </div>
              </div>
              <div className="w-px relative box-border h-[13px] border-r-[1px] border-solid border-gray-700" />
              <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
                <img
                  className="w-4 relative h-4 overflow-hidden shrink-0"
                  alt=""
                  src="/profile.svg"
                />
                <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
                  By Diane Mccoy
                </div>
              </div>
            </div>
            <b className="w-[390px] relative text-xl leading-[150%] inline-block text-gray-900">
              How to Maximize Your ROI Through Scientific SEM?
            </b>
            <div className="w-[390px] relative text-base leading-[160%] text-gray-800 inline-block">
              Vulputate vitae pellentesque scelerisque luctus consequat mattis
              pellentesque dui odio...
            </div>
          </div>
          <img
            className="absolute h-[59.17%] w-full top-[0%] right-[0%] bottom-[40.83%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/pic@2x.png"
          />
        </div>
        <Btnsolidlarge
          largeButton="Go to blog"
          btnsolidlargePosition="absolute"
          btnsolidlargeTop="250px"
          btnsolidlargeLeft="0px"
          btnsolidlargeWidth="180px"
          btnsolidlargeRight="unset"
        />
        <div className="absolute top-[100px] left-[0px] text-xl leading-[150%] text-gray-800 inline-block w-[285px]">
          Check more posts in our blog for featured news and advertising
          insights
        </div>
        <div className="absolute top-[0px] left-[0px] text-27xl leading-[130%] font-black">
          Latest news
        </div>
      </div>
      <Careers1 />
      <FAQ />
      <Team />
      <Clients />
      <CTA />
      <Awards />
      <Gallery />
      <Values />
      <img
        className="absolute top-[1090px] left-[345px] w-[1230px] h-[500px]"
        alt=""
        src="/video.svg"
      />
      <div className="absolute top-[781px] left-[592px] w-[736px] h-[189px] text-center text-13xl">
        <div className="absolute top-[0px] left-[588px] overflow-hidden flex flex-col items-center justify-start gap-[20px]">
          <div className="w-[148px] relative h-[148px] overflow-hidden shrink-0">
            <div className="absolute top-[calc(50%_-_74px)] left-[calc(50%_-_74px)] rounded-[50%] box-border w-[148px] h-[148px] border-[6px] border-solid border-success" />
            <div className="absolute top-[calc(50%_-_21px)] left-[calc(50%_-_42px)] leading-[130%] font-black">
              100%
            </div>
          </div>
          <div className="w-[148px] relative text-sm leading-[150%] text-gray-800 inline-block">
            Happy clients
          </div>
        </div>
        <Figure
          ellipse="/ellipse.svg"
          prop="540+"
          projects="Projects"
          propLeft="392px"
          propBorder="6px solid #5a87fc"
          propLeft1="calc(50% - 38px)"
        />
        <Figure
          ellipse="/ellipse1.svg"
          prop="45"
          projects="Awards"
          propLeft="196px"
          propBorder="6px solid #f52f6e"
          propLeft1="calc(50% - 20px)"
        />
        <Figure
          ellipse="/ellipse2.svg"
          prop="10"
          projects="Years of experience"
          propLeft="0px"
          propBorder="6px solid #f89828"
          propLeft1="calc(50% - 20px)"
        />
      </div>
      <Header4 />
      <Navbarlight
        navbarlightPosition="absolute"
        navbarlightMarginTop="unset"
        navbarlightTop="20px"
        navbarlightLeft="345px"
        servicesOpacity="0.6"
        caseStudiesOpacity="0.6"
        aboutUsOpacity="unset"
        blogOpacity="0.6"
        contactsOpacity="0.6"
      />
    </div>
  );
};

export default AboutUs;
