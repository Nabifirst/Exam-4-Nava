import { useMemo } from "react";
import Btnsolidlarge from "./Btnsolidlarge";
import { Link } from "react-router-dom";

const Navbarlight = ({
  navbarlightPosition,
  navbarlightMarginTop,
  navbarlightTop,
  navbarlightLeft,
  servicesOpacity,
  caseStudiesOpacity,
  aboutUsOpacity,
  blogOpacity,
  contactsOpacity,
}) => {
  const navbarlightStyle = useMemo(() => {
    return {
      position: navbarlightPosition,
      marginTop: navbarlightMarginTop,
      top: navbarlightTop,
      left: navbarlightLeft,
    };
  }, [
    navbarlightPosition,
    navbarlightMarginTop,
    navbarlightTop,
    navbarlightLeft,
  ]);

  const services1Style = useMemo(() => {
    return {
      opacity: servicesOpacity,
    };
  }, [servicesOpacity]);

  const caseStudiesStyle = useMemo(() => {
    return {
      opacity: caseStudiesOpacity,
    };
  }, [caseStudiesOpacity]);

  const aboutUsStyle = useMemo(() => {
    return {
      opacity: aboutUsOpacity,
    };
  }, [aboutUsOpacity]);

  const blogStyle = useMemo(() => {
    return {
      opacity: blogOpacity,
    };
  }, [blogOpacity]);

  const contactsStyle = useMemo(() => {
    return {
      opacity: contactsOpacity,
    };
  }, [contactsOpacity]);

  return (
    <div
      className="w-[1230px] max-w-full h-[52px] text-left text-base text-white font-h1"
      style={navbarlightStyle}
    >
      <Btnsolidlarge
        largeButton="Talk to a human"
        btnsolidlargePosition="absolute"
        btnsolidlargeTop="calc(50% - 26px)"
        btnsolidlargeLeft="unset"
        btnsolidlargeWidth="unset"
        btnsolidlargeRight="0px"
      />
      <div className="absolute top-[calc(50%_-_13px)] left-[190px] overflow-hidden flex flex-row items-start justify-start gap-[40px]">
        <Link to={"/services"}>
        <div
          className=" text-white overflow-hidden flex flex-row items-center justify-start gap-[8px] opacity-[0.6]"
          style={services1Style}
        >
          <b className="relative leading-[160%]">Services</b>
          <img className="w-4 relative h-4" alt="" src="/down-chevron.svg" />
        </div>
        </Link>
        <Link to={"/case-studies"}>
        <b
          className="relative text-white leading-[160%] opacity-[0.6]"
          style={caseStudiesStyle}
        >
          Case Studies
        </b>
        </Link>
        <Link to={"/about-us"}>
        <b
          className="relative text-white leading-[160%] opacity-[0.6]"
          style={aboutUsStyle}
        >
          About Us
        </b>
        </Link>
        <Link to={"/blog"}>
        <b className="relative text-white leading-[160%] opacity-[0.6]" style={blogStyle}>
          Blog
        </b>
        </Link>
        <Link to={"/"}>
        <b
          className="relative text-white leading-[160%] opacity-[0.6]"
          style={contactsStyle}
        >
          Contacts
        </b>
        </Link>
      </div>
      <img
        className="absolute top-[calc(50%_-_11px)] left-[0px] w-[130px] h-[22px] overflow-hidden"
        alt=""
        src="/logo.svg"
      />
    </div>
  );
};

export default Navbarlight;
