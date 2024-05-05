import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Contacts from "./pages/Contacts";
import SinglePost from "./pages/SinglePost";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import CaseStudy from "./pages/CaseStudy";
import CaseStudies from "./pages/CaseStudies";
import Service from "./pages/Service";
import Services from "./pages/Services";
import Home from "./pages/Home";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/single-post":
        title = "";
        metaDescription = "";
        break;
      case "/blog":
        title = "";
        metaDescription = "";
        break;
      case "/careers":
        title = "";
        metaDescription = "";
        break;
      case "/about-us":
        title = "";
        metaDescription = "";
        break;
      case "/case-study":
        title = "";
        metaDescription = "";
        break;
      case "/case-studies":
        title = "";
        metaDescription = "";
        break;
      case "/service":
        title = "";
        metaDescription = "";
        break;
      case "/services":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/single-post" element={<SinglePost />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/case-study" element={<CaseStudy />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/service" element={<Service />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}
export default App;
