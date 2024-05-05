import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Navbarlight from "../components/Navbarlight";

const Contacts = () => {
  return (
    <div className="w-full relative bg-white h-[2305px] overflow-hidden">
      <Footer
        footerPosition="absolute"
        footerTop="1797px"
        footerLeft="0px"
        sIGNUPTORight="31px"
        servicesLeft="calc(50% - 84px)"
        linksLeft="calc(50% - 48px)"
      />
      <img
        className="absolute top-[834px] left-[1145px] w-[604.8px] h-[672.5px]"
        alt=""
        src="/illustration5.svg"
      />
      <ContactForm />
      <Header />
      <Navbarlight
        navbarlightPosition="absolute"
        navbarlightMarginTop="unset"
        navbarlightTop="20px"
        navbarlightLeft="345px"
        servicesOpacity="0.6"
        caseStudiesOpacity="0.6"
        aboutUsOpacity="0.6"
        blogOpacity="0.6"
        contactsOpacity="unset"
      />
    </div>
  );
};

export default Contacts;
