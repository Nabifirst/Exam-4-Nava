import Teamidle from "./Teamidle";
import Teamhover from "./Teamhover";

const Team = () => {
  return (
    <div className="absolute top-[4659px] left-[345px] w-[1230px] h-[1012px] text-center text-27xl text-gray-900 font-h1">
      <Teamidle
        position="Director of SEO"
        name1="Soham Alexander"
        image="/-image@2x.png"
        teamidlePosition="absolute"
        teamidleTop="596px"
        teamidleLeft="945px"
      />
      <Teamidle
        position="Digital Marketing Manager"
        name1="Jane Cooper"
        image="/-image@2x.png"
        teamidlePosition="absolute"
        teamidleTop="596px"
        teamidleLeft="630px"
      />
      <Teamidle
        position="Director of PPC"
        name1="Shawn Edwards"
        image="/-image@2x.png"
        teamidlePosition="absolute"
        teamidleTop="596px"
        teamidleLeft="315px"
      />
      <Teamidle
        position="Account Director"
        name1="Floyd Simmmons"
        image="/-image@2x.png"
        teamidlePosition="absolute"
        teamidleTop="596px"
        teamidleLeft="0px"
      />
      <Teamidle
        position="Cheaf Marketing Officer"
        name1="Judith Warren"
        image="/-image@2x.png"
        teamidlePosition="absolute"
        teamidleTop="120px"
        teamidleLeft="945px"
      />
      <Teamhover
        position="Lead Digital PR Strategist"
        name1="Diane Mccoy"
        image="/image@2x.png"
        teamhoverPosition="absolute"
        teamhoverTop="120px"
        teamhoverLeft="630px"
      />
      <Teamidle
        position="Director of Client Services"
        name1="Johnny Lane"
        image="/-image@2x.png"
        teamidlePosition="absolute"
        teamidleTop="120px"
        teamidleLeft="315px"
      />
      <Teamidle
        position="Founder and CEO"
        name1="Courtney Alexander"
        image="/-image@2x.png"
        teamidlePosition="absolute"
        teamidleTop="120px"
        teamidleLeft="0px"
      />
      <img
        className="absolute top-[435px] left-[882px] w-[22px] h-[21px] object-cover"
        alt=""
        src="/cursor@2x.png"
      />
      <div className="absolute top-[0px] left-[315px] leading-[130%] font-black inline-block w-[600px]">
        Meet our team
      </div>
    </div>
  );
};

export default Team;
