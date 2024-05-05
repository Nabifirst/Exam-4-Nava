import Footer from "../components/Footer";
import Btnsolidlarge from "../components/Btnsolidlarge";
import CaseCard from "../components/CaseCard";
import CaseCardhover from "../components/CaseCardhover";
import SliderControlshover from "../components/SliderControlshover";
import Testimonial from "../components/Testimonial";
import Checkboxchecked from "../components/Checkboxchecked";
import Formlargelight from "../components/Formlargelight1";
import Sidebar1 from "../components/Sidebar1";
import List from "../components/List";
import Diagram from "../components/Diagram";
import Figures from "../components/Figures";
import Header5 from "../components/Header5";
import Navbarlight from "../components/Navbarlight";

const CaseStudy = () => {
  return (
    <div className="w-full relative bg-white h-[6077px] overflow-hidden text-left text-9xl text-gray-900 font-h1">
      <Footer
        footerPosition="absolute"
        footerTop="5569px"
        footerLeft="0px"
        sIGNUPTORight="31px"
        servicesLeft="calc(50% - 84px)"
        linksLeft="calc(50% - 48px)"
      />
      <img
        className="absolute top-[3943px] left-[0px] w-[1920px] h-[1626px] overflow-hidden"
        alt=""
        src="/background16.svg"
      />
      <div className="absolute top-[4767px] left-[339px] w-[1242px] h-[622px]">
        <div className="absolute top-[570px] left-[315px] overflow-hidden flex flex-row items-center justify-start gap-[40px]">
          <b className="relative leading-[150%]">Explore more case studies</b>
          <Btnsolidlarge
            largeButton="View all case studies"
            btnsolidlargePosition="unset"
            btnsolidlargeTop="unset"
            btnsolidlargeLeft="unset"
            btnsolidlargeWidth="unset"
            btnsolidlargeRight="unset"
          />
        </div>
        <CaseCard
          circle="/circle.svg"
          prop="70%"
          engagement="Open Rate"
          circle1="/circle1.svg"
          prop1="200%"
          deliverability="Growth in sales"
          createxSEOAgencyHelpedNat="We helped Sunset company break through a noisy industry and better understand their buyer's journey."
          charityOrganisation="Personal care"
          clientLogo="/clientlogo@2x.png"
          caseCardPosition="absolute"
          caseCardTop="120px"
          caseCardLeft="840px"
        />
        <CaseCardhover
          image="/image@2x.png"
          circle="/circle2.svg"
          prop="200%"
          engagement="Growth in sales"
          prop1="1,400"
          deliverability="Target investors"
          createxSEOAgencyHelpedNat="With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate."
          charityOrganisation="Oil and natural resources"
          clientLogo="/clientlogo@2x.png"
          showCircleIcon={false}
          caseCardhoverPosition="absolute"
          caseCardhoverTop="120px"
          caseCardhoverLeft="419px"
          imageIconBorderRadius="unset"
        />
        <CaseCard
          circle="/circle4.svg"
          prop="90%"
          engagement="Engagement"
          circle1="/circle3.svg"
          prop1="100%"
          deliverability="Deliverability"
          createxSEOAgencyHelpedNat="Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%."
          charityOrganisation="Charity organisation"
          clientLogo="/clientlogo@2x.png"
          caseCardPosition="absolute"
          caseCardTop="120px"
          caseCardLeft="0px"
        />
        <img
          className="absolute top-[456px] left-[744px] w-[22px] h-[21px] object-cover"
          alt=""
          src="/cursor@2x.png"
        />
        <SliderControlshover
          sliderControlshoverPosition="absolute"
          sliderControlshoverTop="24px"
          sliderControlshoverLeft="1158px"
        />
        <div className="absolute top-[0px] left-[0px] text-27xl leading-[130%] font-black">
          Check out our other case studies
        </div>
      </div>
      <div className="absolute top-[4123px] left-[345px] w-[1242px] h-[558px] text-27xl">
        <img
          className="absolute top-[68px] left-[105px] w-[1020px] h-[490px] overflow-hidden"
          alt=""
          src="/background17.svg"
        />
        <div className="absolute top-[120px] left-[105px] w-[1020px] h-[344px]">
          <div className="absolute top-[0px] left-[0px] shadow-[0px_80px_80px_-20px_rgba(154,_156,_165,_0.08),_0px_30px_24px_-10px_rgba(154,_156,_165,_0.05),_0px_12px_10px_-6px_rgba(154,_156,_165,_0.04),_0px_4px_4px_-4px_rgba(30,_33,_44,_0.03)] rounded bg-white w-[1020px] h-[344px]" />
          <Testimonial
            image="/image@2x.png"
            testimonialPosition="absolute"
            testimonialTop="64px"
            testimonialLeft="105px"
          />
        </div>
        <img
          className="absolute top-[268px] left-[0px] w-[1242px] h-[57px]"
          alt=""
          src="/slidercontrols.svg"
        />
        <div className="absolute top-[0px] left-[402px] leading-[130%] font-black">
          What our clients say
        </div>
      </div>
      <div className="absolute top-[3387px] left-[0px] w-[1920px] h-[556px] text-base text-white">
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
        className="absolute top-[843px] left-[0px] w-[1920px] h-[2180px] overflow-hidden"
        alt=""
        src="/background18.svg"
      />
      <Sidebar1 />
      <div className="absolute top-[695px] left-[245px] w-[859.2px] h-[2512px] text-13xl">
        <List
          maurisDignissimBlanditCur="Mauris dignissim blandit cursus imperdiet accumsan lorem vel, tortor."
          quisMaurisVelFelisConvall="Quis mauris vel felis convallis nulla dignissim."
          cursusSitPlateaAcPosuereN="Cursus sit platea ac posuere non interdum in."
          mattisPellentesqueVelVene="Mattis pellentesque vel, venenatis, urna, quis ut."
        />
        <div className="absolute top-[2330px] left-[100px] leading-[130%] font-black">
          Results
        </div>
        <div className="absolute top-[2124px] left-[100px] flex flex-col items-start justify-start gap-[4px] text-center text-base text-gray-800">
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Bibendum malesuada mauris, id nisl enim diam.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Nam id in non sed cras purus nunc et.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Neque tortor, pellentesque amet est, eu accumsan condimentum
              nulla.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Mauris orci, cursus nisl odio est adipiscing gravida magna eget.
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[16px]">
            <img className="w-4 relative h-4" alt="" src="/mark.svg" />
            <div className="relative leading-[160%]">
              Sit turpis sit ultrices viverra adipiscing malesuada.
            </div>
          </div>
        </div>
        <div className="absolute top-[2058px] left-[100px] leading-[130%] font-black">
          Resieved goals
        </div>
        <img
          className="absolute top-[1339px] left-[0px] w-[859.2px] h-[706.5px] object-contain"
          alt=""
          src="/shape.svg"
        />
        <div className="absolute top-[1437px] left-[100px] w-[705px] h-[541px]">
          <img
            className="absolute h-[34.82%] w-[50.57%] top-[3.86%] right-[17.29%] bottom-[61.31%] left-[32.14%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group2.svg"
          />
          <div className="absolute h-[32.59%] w-[26.37%] top-[0%] right-[16.82%] bottom-[67.41%] left-[56.81%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle.svg"
            />
            <div className="absolute h-[67.5%] w-[76.65%] top-[16.22%] right-[12.1%] bottom-[16.28%] left-[11.24%]">
              <img
                className="absolute h-[68.24%] w-[56.84%] top-[15.88%] right-[13.26%] bottom-[15.88%] left-[29.89%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group3.svg"
              />
              <img
                className="absolute h-[36.47%] w-[30.46%] top-[31.76%] right-[26.46%] bottom-[31.76%] left-[43.09%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group4.svg"
              />
              <img
                className="absolute h-full w-[83.37%] top-[0%] right-[0.07%] bottom-[0%] left-[16.56%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group5.svg"
              />
              <div className="absolute h-[7.48%] w-[52.07%] top-[0.17%] right-[47.93%] bottom-[92.35%] left-[0%]">
                <img
                  className="absolute h-full w-[26.42%] top-[0%] right-[73.58%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group6.svg"
                />
                <img
                  className="absolute h-[37.08%] w-[67.25%] top-[25.84%] right-[0%] bottom-[37.08%] left-[32.75%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group7.svg"
                />
              </div>
              <div className="absolute h-[7.39%] w-[51.72%] top-[15.13%] right-[47.86%] bottom-[77.48%] left-[0.42%]">
                <img
                  className="absolute h-full w-[25.78%] top-[0%] right-[74.22%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group8.svg"
                />
                <img
                  className="absolute h-[37.5%] w-[67.71%] top-[50%] right-[0.14%] bottom-[12.5%] left-[32.16%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/group9.svg"
                />
              </div>
              <img
                className="absolute h-[7.39%] w-[39.93%] top-[56.39%] right-[55.16%] bottom-[36.22%] left-[4.91%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/group10.svg"
              />
            </div>
          </div>
          <img
            className="absolute h-[54.58%] w-[43.39%] top-[27.91%] right-[56.61%] bottom-[17.5%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group11.svg"
          />
          <img
            className="absolute h-[31.37%] w-[51.62%] top-[32.59%] right-[-3.12%] bottom-[36.04%] left-[51.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group12.svg"
          />
          <img
            className="absolute h-[32.38%] w-[59.15%] top-[67.62%] right-[20.41%] bottom-[0%] left-[20.44%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group13.svg"
          />
        </div>
        <div className="absolute top-[1227px] left-[100px] text-base leading-[160%] text-gray-800 inline-block w-[705px]">
          Enim, vel massa odio diam. Blandit massa gravida feugiat elementum
          id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur
          volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur
          neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices
          fames augue mattis tortor est justo, pharetra nibh risus. Facilisi
          at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis
          sagittis curabitur tellus convallis eget netus vitae.
        </div>
        <List
          maurisDignissimBlanditCur="Gravida elit et libero, varius congue risus quisque enim."
          quisMaurisVelFelisConvall="Sit quis vitae, gravida aliquam condimentum."
          cursusSitPlateaAcPosuereN="Praesent et facilisis nam mus senectus massa dignissim."
          mattisPellentesqueVelVene="Fermentum diam elementum viverra proin."
          propTop="1087px"
        />
        <div className="absolute top-[1021px] left-[100px] leading-[130%] font-black">
          Strategies
        </div>
        <Diagram />
        <div className="absolute top-[304px] left-[100px] text-base leading-[160%] text-gray-800 inline-block w-[705px]">
          At facilisi sapien posuere eget nunc senectus proin nullam. Tortor
          senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing
          eget diam nisi. Orci, consectetur vulputate metus ornare pharetra,
          neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat
          leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.
        </div>
        <b className="absolute top-[160px] left-[100px] text-xl leading-[150%] inline-block w-[705px]">{`The Company has been with us for 3 months. They are in our optimal package for SEO & our premium package for SEM plus Ad spend ($1,000). The client’s goal was to get growth in sales. We helped exceeding the client’s goals in generating new clients.`}</b>
        <Figures />
      </div>
      <Header5 />
      <Navbarlight
        navbarlightPosition="absolute"
        navbarlightMarginTop="unset"
        navbarlightTop="20px"
        navbarlightLeft="345px"
        servicesOpacity="0.6"
        caseStudiesOpacity="unset"
        aboutUsOpacity="0.6"
        blogOpacity="0.6"
        contactsOpacity="0.6"
      />
    </div>
  );
};

export default CaseStudy;
