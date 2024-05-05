import Footer from "../components/Footer";
import Subscribe1 from "../components/Subscribe1";
import Sidebar from "../components/Sidebar";
import Articles from "../components/Articles";
import LatestPosts from "../components/LatestPosts";
import Header2 from "../components/Header2";
import Navbarlight from "../components/Navbarlight";

const Blog = () => {
  return (
    <div className="w-full relative bg-white h-[4207px] overflow-hidden">
      <Footer
        footerPosition="absolute"
        footerTop="3701px"
        footerLeft="0px"
        sIGNUPTORight="31px"
        servicesLeft="calc(50% - 84px)"
        linksLeft="calc(50% - 48px)"
      />
      <Subscribe1 />
      <img
        className="absolute top-[1373px] left-[0px] w-[1920px] h-[1620px] overflow-hidden"
        alt=""
        src="/background8.svg"
      />
      <Sidebar />
      <Articles />
      <LatestPosts />
      <Header2 />
      <Navbarlight
        navbarlightPosition="absolute"
        navbarlightMarginTop="unset"
        navbarlightTop="20px"
        navbarlightLeft="345px"
        servicesOpacity="0.6"
        caseStudiesOpacity="0.6"
        aboutUsOpacity="0.6"
        blogOpacity="unset"
        contactsOpacity="0.6"
      />
    </div>
  );
};

export default Blog;
