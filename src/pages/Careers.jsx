import Footer from "../components/Footer";
import ContactForm1 from "../components/ContactForm1";
import JobOpennings from "../components/JobOpennings";
import Header3 from "../components/Header3";
import Navbarlight from "../components/Navbarlight";

const Careers = () => {
  return (
    <div className="w-full relative bg-white h-[2973px] overflow-hidden">
      <img
        className="absolute top-[1837px] left-[-326px] w-[880.2px] h-[906.1px] object-contain opacity-[0.4]"
        alt=""
        src="/background10@2x.png"
      />
      <Footer
        footerPosition="absolute"
        footerTop="2465px"
        footerLeft="0px"
        sIGNUPTORight="31px"
        servicesLeft="calc(50% - 84px)"
        linksLeft="calc(50% - 48px)"
      />
      <ContactForm1 />
      <JobOpennings />
      <Header3 />
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

export default Careers;
