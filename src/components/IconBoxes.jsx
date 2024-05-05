import IconBoxbasic from "./IconBoxbasic";

const IconBoxes = () => {
  return (
    <div className="absolute top-[120px] left-[0px] flex flex-row items-center justify-start gap-[45px]">
      <IconBoxbasic
        icCart="/iccart.svg"
        eCommerceWebsites="E-commerce Websites"
        aeneanUrnaDictumAdipiscin="Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. "
      />
      <div className="w-px relative box-border h-[163px] border-r-[1px] border-solid border-divider-gradient" />
      <IconBoxbasic
        icCart="/icwebsite1.svg"
        eCommerceWebsites="Content-rich Websites"
        aeneanUrnaDictumAdipiscin="Culpa nostrud commodo ea consequat reprehenderit aliquip. "
      />
      <div className="w-px relative box-border h-[163px] border-r-[1px] border-solid border-divider-gradient" />
      <IconBoxbasic
        icCart="/icsuitcase1.svg"
        eCommerceWebsites="B2B /B2C Services"
        aeneanUrnaDictumAdipiscin="Viverra scelerisque consequat net. Adipisicing esse consequat. "
      />
      <div className="w-px relative box-border h-[163px] border-r-[1px] border-solid border-divider-gradient" />
      <IconBoxbasic
        icCart="/icstartup1.svg"
        eCommerceWebsites="Startup Projects"
        aeneanUrnaDictumAdipiscin="Aute eiusmod dolore dolore deserunt veniam ad deserunt. "
      />
    </div>
  );
};

export default IconBoxes;
