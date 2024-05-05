import Btnsolidlarge from "./Btnsolidlarge";
import CaseCard from "./CaseCard";
import CaseCardhover from "./CaseCardhover";

const CaseStudies1 = () => {
  return (
    <div className="absolute top-[4486px] left-[0px] w-[1920px] h-[782px] text-left text-9xl text-gray-900 font-h1">
      <div className="absolute top-[0px] left-[0px] bg-gray-200 w-[1920px] h-[782px]" />
      <div className="absolute top-[650px] left-[588px] overflow-hidden flex flex-row items-center justify-start gap-[40px]">
        <b className="relative leading-[150%]">
          Explore more our clients' case studies
        </b>
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
        caseCardTop="200px"
        caseCardLeft="1185px"
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
        caseCardhoverTop="200px"
        caseCardhoverLeft="764px"
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
        caseCardTop="200px"
        caseCardLeft="345px"
      />
      <img
        className="absolute top-[536px] left-[1089px] w-[22px] h-[21px] object-cover"
        alt=""
        src="/cursor@2x.png"
      />
      <div className="absolute top-[80px] left-[660px] text-27xl leading-[130%] font-black text-center inline-block w-[600px]">
        Related case studies
      </div>
    </div>
  );
};

export default CaseStudies1;
