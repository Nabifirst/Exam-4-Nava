import Btnsolidlarge from "./Btnsolidlarge";
import Formlarge from "./Formlarge";
import Formlargeicon from "./Formlargeicon";

const ContactForm1 = () => {
  return (
    <div className="absolute top-[1703px] left-[345px] w-[1230px] h-[582px] text-left text-base text-gray-800 font-h1">
      <Btnsolidlarge
        largeButton="Send Resume"
        btnsolidlargePosition="absolute"
        btnsolidlargeTop="530px"
        btnsolidlargeLeft="630px"
        btnsolidlargeWidth="unset"
        btnsolidlargeRight="unset"
      />
      <div className="absolute top-[464px] left-[630px] overflow-hidden flex flex-row items-center justify-start gap-[12px]">
        <div className="w-4 relative h-4">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-10xs bg-white box-border border-[1px] border-solid border-gray-500" />
        </div>
        <div className="relative leading-[160%]">
          I want to suscribe to receive information about new vacancies.
        </div>
      </div>
      <div className="absolute top-[406px] left-[630px] flex flex-row items-center justify-start gap-[12px]">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/attach.svg"
        />
        <div className="relative leading-[160%]">Attach your CV*</div>
      </div>
      <Formlarge
        label="Cover letter"
        placeholder="Your cover letter"
        formlargeWidth="600px"
        formlargePosition="absolute"
        formlargeTop="220px"
        formlargeLeft="630px"
        formlargeHeight="162px"
      />
      <Formlargeicon
        label="I am interested in*"
        placeholder="Choose..."
        formlargeiconWidth="285px"
        formlargeiconPosition="absolute"
        formlargeiconTop="110px"
        formlargeiconLeft="945px"
      />
      <Formlarge
        label="Email"
        placeholder="Your working email"
        formlargeWidth="285px"
        formlargePosition="absolute"
        formlargeTop="110px"
        formlargeLeft="630px"
        formlargeHeight="86px"
      />
      <Formlarge
        label="Phone*"
        placeholder="Your phone number"
        formlargeWidth="285px"
        formlargePosition="absolute"
        formlargeTop="0px"
        formlargeLeft="945px"
        formlargeHeight="86px"
      />
      <Formlarge
        label="Name*"
        placeholder="Your name"
        formlargeWidth="285px"
        formlargePosition="absolute"
        formlargeTop="0px"
        formlargeLeft="630px"
        formlargeHeight="86px"
      />
      <div className="absolute top-[160px] left-[0px] text-xl leading-[150%] inline-block w-[495px]">
        Send your CV or subscribe to our newsletter to receive information about
        new vacancies.
      </div>
      <div className="absolute top-[0px] left-[0px] text-27xl leading-[130%] font-black text-gray-900 inline-block w-[495px]">
        Didn’t find what you were looking for?
      </div>
    </div>
  );
};

export default ContactForm1;
