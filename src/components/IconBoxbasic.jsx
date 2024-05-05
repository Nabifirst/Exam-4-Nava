const IconBoxbasic = ({
  icCart,
  eCommerceWebsites,
  aeneanUrnaDictumAdipiscin,
}) => {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-start gap-[24px] text-center text-xl text-gray-900 font-h1">
      <img
        className="w-12 relative h-12 overflow-hidden shrink-0"
        alt=""
        src={icCart}
      />
      <div className="w-60 overflow-hidden flex flex-col items-center justify-start gap-[8px]">
        <b className="w-60 relative leading-[150%] inline-block">
          {eCommerceWebsites}
        </b>
        <div className="w-60 relative text-base leading-[160%] text-gray-700 inline-block">
          {aeneanUrnaDictumAdipiscin}
        </div>
      </div>
    </div>
  );
};

export default IconBoxbasic;
