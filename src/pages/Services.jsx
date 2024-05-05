import Footer from "../components/Footer";
import Btnsolidlarge from "../components/Btnsolidlarge";
import CaseStudiesCarousel from "../components/CaseStudiesCarousel";
import IconBoxes from "../components/IconBoxes";
import Checkboxchecked from "../components/Checkboxchecked";
import Formlargelight from "../components/Formlargelight1";
import Illustration1 from "../components/Illustration1";
import Btnoutlineregular from "../components/Btnoutlineregular";
import Btnsolidregular from "../components/Btnsolidregular";
import Illustration from "../components/Illustration";
import Header8 from "../components/Header8";
import Navbarlight from "../components/Navbarlight";

const Services = () => {
  return (
    <div className="w-full relative bg-white h-[7305px] overflow-hidden text-left text-13xl text-gray-900 font-h1">
      <img
        className="absolute top-[6247.8px] left-[-401px] w-[914.8px] h-[888.7px] object-contain opacity-[0.4]"
        alt=""
        src="/background-lines@2x.png"
      />
      <Footer
        footerPosition="absolute"
        footerTop="6797px"
        footerLeft="0px"
        sIGNUPTORight="31px"
        servicesLeft="calc(50% - 84px)"
        linksLeft="calc(50% - 48px)"
      />
      <div className="absolute top-[6110px] left-[345px] w-[1230px] h-[507px] text-base">
        <div className="absolute top-[0px] left-[840px] w-[390px] h-[507px]">
          <div className="absolute bottom-[0px] left-[0px] overflow-hidden flex flex-row items-center justify-start gap-[8px]">
            <p className="relative leading-[160%]">Read more</p>
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
            <b className="relative leading-[160%]">Read more</b>
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
      <div className="absolute top-[5866px] left-[345px] w-[1230px] h-[74px]">
        <img
          className="absolute top-[0px] left-[1110px] w-[120px] h-16 overflow-hidden object-cover"
          alt=""
          src="/clientlogo@2x.png"
        />
        <img
          className="absolute top-[0px] left-[888px] w-[120px] h-16 overflow-hidden object-cover"
          alt=""
          src="/clientlogo@2x.png"
        />
        <img
          className="absolute top-[0px] left-[666px] w-[120px] h-16 overflow-hidden object-cover"
          alt=""
          src="/clientlogo@2x.png"
        />
        <img
          className="absolute top-[0px] left-[444px] w-[120px] h-16 overflow-hidden object-cover"
          alt=""
          src="/clientlogo@2x.png"
        />
        <img
          className="absolute top-[0px] left-[222px] w-[120px] h-16 overflow-hidden object-cover"
          alt=""
          src="/clientlogo@2x.png"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[120px] h-16 overflow-hidden object-cover"
          alt=""
          src="/clientlogo@2x.png"
        />
        <img
          className="absolute h-[28.38%] w-[1.79%] top-[71.62%] right-[3.09%] bottom-[0%] left-[95.12%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/cursor@2x.png"
        />
      </div>
      <CaseStudiesCarousel />
      <div className="absolute top-[4562px] left-[345px] w-[1230px] h-[282px] text-center text-27xl">
        <IconBoxes />
        <div className="absolute top-[0px] left-[300px] leading-[130%] font-black flex items-center justify-center w-[631px]">
          Markets in which we operate
        </div>
      </div>
      <div className="absolute top-[3826px] left-[0px] w-[1920px] h-[556px] text-base text-white">
        <img
          className="absolute top-[0px] left-[0px] w-[1920px] h-[556px] overflow-hidden"
          alt=""
          src="/background3.svg"
        />
        <img
          className="absolute h-[71.22%] w-[20.68%] top-[14.39%] right-[61.35%] bottom-[14.39%] left-[17.97%] max-w-full overflow-hidden max-h-full object-contain"
          alt=""
          src="/illustration3.svg"
        />
        <div className="absolute top-[80px] left-[975px] w-[600px] h-[396px]">
          <Btnsolidlarge
            largeButton="Get a free analysis"
            btnsolidlargePosition="absolute"
            btnsolidlargeTop="344px"
            btnsolidlargeLeft="380px"
            btnsolidlargeWidth="unset"
            btnsolidlargeRight="unset"
          />
          <div className="absolute w-[calc(100%_-_285px)] top-[344px] right-[285px] left-[0px] h-[52px]">
            <div className="absolute w-[calc(100%_-_28px)] top-[0px] left-[28px] leading-[160%] inline-block">
              I agree to receive communications from Createx SEO Agency
            </div>
            <Checkboxchecked
              checkboxcheckedWidth="5.08%"
              checkboxcheckedHeight="30.77%"
              checkboxcheckedPosition="absolute"
              checkboxcheckedTop="9.62%"
              checkboxcheckedRight="94.92%"
              checkboxcheckedBottom="59.62%"
              checkboxcheckedLeft="0%"
            />
          </div>
          <div className="absolute top-[210px] left-[0px] w-[600px] h-[86px] overflow-hidden">
            <div className="absolute h-[calc(100%_-_34px)] w-full top-[34px] right-[0px] bottom-[0px] left-[0px] rounded bg-gray1-200 box-border overflow-hidden border-[1px] border-solid border-gray1-100">
              <div className="absolute top-[13px] left-[16px] leading-[160%] opacity-[0.6]">
                http://yoursite.com
              </div>
            </div>
            <div className="absolute top-[0px] left-[0px] leading-[160%]">
              Your website URL
            </div>
          </div>
          <Formlargelight
            yourWorkingEmail="Your working email"
            label="Email"
            propLeft="315px"
          />
          <Formlargelight
            yourWorkingEmail="Your name"
            label="Name"
            propLeft="0px"
          />
          <div className="absolute top-[0px] left-[0px] text-27xl leading-[130%] font-black inline-block w-[600px]">
            Get a Free SEO Analysis!
          </div>
        </div>
      </div>
      <img
        className="absolute top-[625px] left-[157px] w-[1643.9px] h-[3168.3px]"
        alt=""
        src="/background-shapes.svg"
      />
      <div className="absolute top-[3244px] left-[345px] w-[1354px] h-[402px]">
        <Illustration1 />
        <div className="absolute top-[70px] left-[0px] w-[575px] h-[262px]">
          <div className="absolute top-[0px] left-[0px] leading-[130%] font-black inline-block w-[575px]">
            Payed Traffic Management
          </div>
          <div className="absolute top-[66px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[48px] text-base text-gray-700">
            <div className="w-[575px] relative leading-[160%] inline-block">
              Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus
              ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut
              mattis dis nullam ultrices amet. Lacus eu neque arcu arcu
              curabitur at sapien. Id sed aliquet id sit nibh ornare massa
              scelerisque.
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[24px]">
              <Btnoutlineregular
                regularButton="Learn more"
                btnoutlineregularPosition="unset"
                btnoutlineregularTop="unset"
                btnoutlineregularLeft="unset"
                btnoutlineregularWidth="unset"
                btnoutlineregularBottom="unset"
              />
              <Btnsolidregular
                regularButton="Try SEO toolkit"
                btnsolidregularPosition="unset"
                btnsolidregularTop="unset"
                btnsolidregularLeft="unset"
                btnsolidregularBackgroundColor="#7772f1"
                btnsolidregularBottom="unset"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2581px] left-[285px] w-[1290px] h-[483px]">
        <div className="absolute top-[124px] left-[715px] w-[575px] h-[236px]">
          <div className="absolute top-[0px] left-[0px] leading-[130%] font-black inline-block w-[575px]">{`Content & PR Service`}</div>
          <div className="absolute top-[66px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[48px] text-base text-gray-700">
            <div className="w-[575px] relative leading-[160%] inline-block">
              Consequat pharetra elit posuere fringilla luctus sit. Curabitur
              accumsan fermentum magna amet. Sed nec amet posuere tellus
              pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet,
              sit aliquet magna in viverra at elit nullam.
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[24px]">
              <Btnoutlineregular
                regularButton="Learn more"
                btnoutlineregularPosition="unset"
                btnoutlineregularTop="unset"
                btnoutlineregularLeft="unset"
                btnoutlineregularWidth="unset"
                btnoutlineregularBottom="unset"
              />
              <Btnsolidregular
                regularButton="Try SEO toolkit"
                btnsolidregularPosition="unset"
                btnsolidregularTop="unset"
                btnsolidregularLeft="unset"
                btnsolidregularBackgroundColor="#7772f1"
                btnsolidregularBottom="unset"
              />
            </div>
          </div>
        </div>
        <Illustration />
      </div>
      <div className="absolute top-[1936px] left-[345px] w-[1262px] h-[465px]">
        <div className="absolute top-[0px] left-[655px] w-[607px] h-[465px]">
          <img
            className="absolute h-[34.82%] w-[50.56%] top-[3.87%] right-[17.3%] bottom-[61.31%] left-[32.14%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group33.svg"
          />
          <div className="absolute h-[32.58%] w-[26.38%] top-[0%] right-[16.82%] bottom-[67.42%] left-[56.8%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle3.svg"
            />
            <div className="absolute h-[67.52%] w-[76.64%] top-[16.24%] right-[12.12%] bottom-[16.24%] left-[11.24%]">
              <img
                className="absolute h-[68.23%] w-[56.81%] top-[15.84%] right-[13.28%] bottom-[15.93%] left-[29.91%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group34.svg"
              />
              <img
                className="absolute h-[36.46%] w-[30.4%] top-[31.77%] right-[26.49%] bottom-[31.77%] left-[43.11%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group35.svg"
              />
              <img
                className="absolute h-full w-[83.37%] top-[0%] right-[0%] bottom-[0%] left-[16.63%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group36.svg"
              />
              <div className="absolute h-[7.43%] w-[52.08%] top-[0.2%] right-[47.92%] bottom-[92.38%] left-[0%]">
                <img
                  className="absolute h-full w-[26.45%] top-[0%] right-[73.55%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group37.svg"
                />
                <img
                  className="absolute h-[36.84%] w-[67.29%] top-[25%] right-[0%] bottom-[38.16%] left-[32.71%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group38.svg"
                />
              </div>
              <div className="absolute h-[7.43%] w-[51.67%] top-[15.05%] right-[47.92%] bottom-[77.52%] left-[0.41%]">
                <img
                  className="absolute h-full w-[25.87%] top-[0%] right-[74.13%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group39.svg"
                />
                <img
                  className="absolute h-[36.84%] w-[67.82%] top-[50%] right-[0%] bottom-[13.16%] left-[32.18%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group40.svg"
                />
              </div>
              <img
                className="absolute h-[7.43%] w-[39.93%] top-[56.4%] right-[55.09%] bottom-[36.17%] left-[4.97%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group41.svg"
              />
            </div>
          </div>
          <img
            className="absolute h-[54.58%] w-[43.38%] top-[27.89%] right-[56.62%] bottom-[17.53%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group42.svg"
          />
          <img
            className="absolute h-[31.35%] w-[51.61%] top-[32.58%] right-[-3.11%] bottom-[36.06%] left-[51.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group43.svg"
          />
          <img
            className="absolute h-[32.39%] w-[59.14%] top-[67.61%] right-[20.41%] bottom-[0%] left-[20.44%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group44.svg"
          />
        </div>
        <div className="absolute top-[115px] left-[0px] w-[575px] h-[236px]">
          <div className="absolute top-[0px] left-[0px] leading-[130%] font-black inline-block w-[575px]">
            Research Service
          </div>
          <div className="absolute top-[66px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[48px] text-base text-gray-700">
            <div className="w-[575px] relative leading-[160%] inline-block">{`Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. `}</div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[24px]">
              <Btnoutlineregular
                regularButton="Learn more"
                btnoutlineregularPosition="unset"
                btnoutlineregularTop="unset"
                btnoutlineregularLeft="unset"
                btnoutlineregularWidth="unset"
                btnoutlineregularBottom="unset"
              />
              <Btnsolidregular
                regularButton="Try SEO toolkit"
                btnsolidregularPosition="unset"
                btnsolidregularTop="unset"
                btnsolidregularLeft="unset"
                btnsolidregularBackgroundColor="#7772f1"
                btnsolidregularBottom="unset"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1337px] left-[214px] w-[1361px] h-[419px]">
        <div className="absolute top-[79px] left-[786px] w-[575px] h-[262px]">
          <div className="absolute top-[0px] left-[0px] leading-[130%] font-black inline-block w-[575px]">
            Search Engine Optimization
          </div>
          <div className="absolute top-[66px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[48px] text-base text-gray-700">
            <div className="w-[575px] relative leading-[160%] inline-block">
              Elementum ipsum lorem tortor morbi quis turpis pellentesque
              ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus,
              eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique
              viverra tincidunt nec proin tempus egestas massa. Quis velit nunc
              nisl sem in tristique.
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[24px]">
              <Btnoutlineregular
                regularButton="Learn more"
                btnoutlineregularPosition="unset"
                btnoutlineregularTop="unset"
                btnoutlineregularLeft="unset"
                btnoutlineregularWidth="unset"
                btnoutlineregularBottom="unset"
              />
              <Btnsolidregular
                regularButton="Try SEO toolkit"
                btnsolidregularPosition="unset"
                btnsolidregularTop="unset"
                btnsolidregularLeft="unset"
                btnsolidregularBackgroundColor="#7772f1"
                btnsolidregularBottom="unset"
              />
            </div>
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[706px] h-[419px]"
          alt=""
          src="/illustration9.svg"
        />
      </div>
      <div className="absolute top-[753px] left-[345px] w-[1367px] h-[404px]">
        <img
          className="absolute top-[0px] left-[655px] w-[712px] h-[404px]"
          alt=""
          src="/illustration10.svg"
        />
        <div className="absolute top-[45px] left-[0px] w-[575px] h-[314px]">
          <div className="absolute top-[0px] left-[0px] leading-[130%] font-black inline-block w-[575px]">
            Social Media Marketing
          </div>
          <div className="absolute top-[66px] left-[0px] overflow-hidden flex flex-col items-start justify-start gap-[48px] text-base text-gray-700">
            <div className="w-[575px] relative leading-[160%] inline-block">
              <p className="m-0">{`Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. `}</p>
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[24px]">
              <Btnoutlineregular
                regularButton="Learn more"
                btnoutlineregularPosition="unset"
                btnoutlineregularTop="unset"
                btnoutlineregularLeft="unset"
                btnoutlineregularWidth="unset"
                btnoutlineregularBottom="unset"
              />
              <Btnsolidregular
                regularButton="Try SEO toolkit"
                btnsolidregularPosition="unset"
                btnsolidregularTop="unset"
                btnsolidregularLeft="unset"
                btnsolidregularBackgroundColor="#7772f1"
                btnsolidregularBottom="unset"
              />
            </div>
          </div>
        </div>
      </div>
      <Header8 />
      <Navbarlight
        navbarlightPosition="absolute"
        navbarlightMarginTop="unset"
        navbarlightTop="20px"
        navbarlightLeft="345px"
        servicesOpacity="unset"
        caseStudiesOpacity="0.6"
        aboutUsOpacity="0.6"
        blogOpacity="0.6"
        contactsOpacity="0.6"
      />
    </div>
  );
};

export default Services;
