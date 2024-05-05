import Footer from "../components/Footer";
import RelatedPostsCarousel from "../components/RelatedPostsCarousel";
import Subscribe from "../components/Subscribe";
import Author from "../components/Author";
import NowTrending from "../components/NowTrending";
import Tags from "../components/Tags";
import Inputdefault from "../components/Inputdefault";
import Post1 from "../components/Post1";
import TagsSharing from "../components/TagsSharing";
import Quotationclean from "../components/Quotationclean";
import Meta from "../components/Meta";
import Header1 from "../components/Header1";
import Navbarlight from "../components/Navbarlight";

const SinglePost = () => {
  return (
    <div className="w-full relative bg-white h-[4748px] overflow-hidden text-left text-base text-gray-800 font-h1">
      <Footer
        footerPosition="absolute"
        footerTop="4240px"
        footerLeft="0px"
        sIGNUPTORight="31px"
        servicesLeft="calc(50% - 84px)"
        linksLeft="calc(50% - 48px)"
      />
      <img
        className="absolute top-[499px] left-[0px] w-[1920px] h-[3741px] overflow-hidden"
        alt=""
        src="/background5.svg"
      />
      <RelatedPostsCarousel />
      <Subscribe />
      <div className="absolute top-[599px] left-[1233px] w-[342px] h-[913px]">
        <Author />
        <NowTrending />
        <Tags />
        <Inputdefault
          placeholder="Search the blog"
          downChevron="/search.svg"
          inputdefaultWidth="342px"
          inputdefaultPosition="absolute"
          inputdefaultTop="0px"
          inputdefaultLeft="0px"
          downChevronIconOverflow="hidden"
        />
      </div>
      <div className="absolute top-[599px] left-[345px] w-[810px] h-[2038px]">
        <div className="absolute top-[1888px] left-[0px] w-[810px] h-[150px] text-right text-sm text-gray-700">
          <div className="absolute top-[0px] left-[470px] w-[340px] h-[150px]">
            <div className="absolute top-[50px] left-[0px] h-[100px] overflow-hidden flex flex-row items-start justify-start gap-[20px]">
              <div className="w-[220px] overflow-hidden shrink-0 flex flex-col items-end justify-start gap-[4px]">
                <div className="overflow-hidden flex flex-row items-center justify-start gap-[8px]">
                  <img className="w-4 relative h-4" alt="" src="/clock.svg" />
                  <div className="relative leading-[150%] [-webkit-text-stroke:1px_#787a80]">
                    April 9, 2020
                  </div>
                </div>
                <b className="w-[222px] relative text-base leading-[160%] inline-block text-gray-900">
                  Why SEO Is All About Content Marketing?
                </b>
              </div>
              <img
                className="w-[100px] relative rounded h-[100px] object-cover"
                alt=""
                src="/image@2x.png"
              />
            </div>
            <div className="absolute top-[0px] left-[220px] overflow-hidden flex flex-row items-center justify-start gap-[8px] text-left text-xl text-gray-800">
              <b className="relative leading-[150%]">Next Post</b>
              <img className="w-6 relative h-6" alt="" src="/right3.svg" />
            </div>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[340px] h-[150px] text-left text-xl text-gray-800">
            <Post1 propTop="50px" />
            <div className="absolute top-[0px] left-[0px] overflow-hidden flex flex-row items-center justify-start gap-[8px]">
              <img className="w-6 relative h-6" alt="" src="/prevbtn.svg" />
              <b className="relative leading-[150%]">Prev Post</b>
            </div>
          </div>
        </div>
        <TagsSharing />
        <div className="absolute top-[1596px] left-[0px] leading-[160%] inline-block w-[810px]">
          Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id
          nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur
          volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur
          neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices
          fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at
          porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis
          sagittis curabitur tellus convallis eget netus vitae.
        </div>
        <div className="absolute top-[1456px] left-[0px] flex flex-col items-start justify-start gap-[4px]">
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="w-1 relative rounded-[50%] bg-primary h-1" />
            <div className="relative leading-[160%]">
              Dui, lectus at dui magna vitae vitae egestas sed.
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="w-1 relative rounded-[50%] bg-primary h-1" />
            <div className="relative leading-[160%]">
              Vulputate placerat amet pulvinar lorem nisl.
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="w-1 relative rounded-[50%] bg-primary h-1" />
            <div className="relative leading-[160%]">
              Consequat feugiat habitant gravida quisque elit bibendum id
              adipiscing sed.
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[16px]">
            <div className="w-1 relative rounded-[50%] bg-primary h-1" />
            <div className="relative leading-[160%]">
              Etiam duis lobortis in fames ultrices commodo nibh.
            </div>
          </div>
        </div>
        <div className="absolute top-[1380px] left-[0px] leading-[160%] inline-block w-[810px]">
          Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut
          erat mattis. Vitae mus blandit in neque amet non fringilla blandit:
        </div>
        <div className="absolute top-[1314px] left-[0px] text-13xl leading-[130%] font-black text-gray-900">
          Check your conversion tracking
        </div>
        <Quotationclean
          quotationcleanPosition="absolute"
          quotationcleanTop="1134px"
          quotationcleanLeft="0px"
        />
        <img
          className="absolute h-[17.66%] w-full top-[35.62%] right-[0%] bottom-[46.71%] left-[0%] rounded max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image@2x.png"
        />
        <div className="absolute top-[582px] left-[0px] leading-[160%] inline-block w-[810px]">
          Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id
          nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur
          volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur
          neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices
          fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at
          porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis
          sagittis curabitur tellus convallis eget netus vitae.
        </div>
        <div className="absolute top-[516px] left-[0px] text-13xl leading-[130%] font-black text-gray-900">
          Why SEM Without CRO Is Impossible?
        </div>
        <div className="absolute top-[274px] left-[0px] leading-[160%] inline-block w-[810px]">
          <p className="m-0">
            At facilisi sapien posuere eget nunc senectus proin nullam. Tortor
            senectus in et sagittis, vitae diam cras dignissim. Varius
            adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare
            pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in
            massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra
            risus vel.
          </p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">{`Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus. `}</p>
        </div>
        <b className="absolute top-[160px] left-[0px] text-xl leading-[150%] inline-block text-gray-900 w-[810px]">{`Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. `}</b>
        <div className="absolute top-[0px] left-[0px] w-[810px] h-[100px]">
          <Meta />
          <div className="absolute top-[100px] left-[0px] box-border w-[811px] h-px border-t-[1px] border-solid border-gray-300" />
        </div>
      </div>
      <Header1 />
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

export default SinglePost;
