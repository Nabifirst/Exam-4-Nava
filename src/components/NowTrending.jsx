import Post1 from "./Post1";
import Post from "./Post";

const NowTrending = () => {
  return (
    <div className="absolute top-[319px] left-[0px] w-[342px] h-[403px] text-left text-sm text-gray-700 font-h1">
      <Post1 />
      <Post
        image="/image@2x.png"
        april92020="April 9, 2020"
        whySEOIsAllAboutContentMa="Why SEO Is All About Content Marketing?"
      />
      <Post
        image="/image@2x.png"
        april92020="July 5, 2020"
        whySEOIsAllAboutContentMa="5 Surprising Ways to Combine Content Marketing with PPC"
        propTop="55px"
        propHeight="unset"
        propWidth="unset"
        propColor="#1e212c"
      />
      <img
        className="absolute top-[228px] left-[264px] w-[22px] h-[21px] object-cover"
        alt=""
        src="/cursor@2x.png"
      />
      <b className="absolute top-[0px] right-[191px] text-5xl leading-[130%] text-gray-900">
        Now Trending
      </b>
    </div>
  );
};

export default NowTrending;
