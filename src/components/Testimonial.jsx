import { useMemo } from "react";

const Testimonial = ({
  image,
  testimonialPosition,
  testimonialTop,
  testimonialLeft,
}) => {
  const testimonialStyle = useMemo(() => {
    return {
      position: testimonialPosition,
      top: testimonialTop,
      left: testimonialLeft,
    };
  }, [testimonialPosition, testimonialTop, testimonialLeft]);

  return (
    <div
      className="max-w-full overflow-hidden flex flex-row items-start justify-start gap-[30px] text-left text-xl text-gray-800 font-h1"
      style={testimonialStyle}
    >
      <img className="w-7 relative h-5" alt="" src="/braces.svg" />
      <div className="overflow-hidden flex flex-col items-start justify-start gap-[24px]">
        <div className="w-[752px] relative leading-[150%] inline-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet
          lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed
          purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue
          tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu
          diam maecenas diam integer in.
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[20px] text-base text-gray-900">
          <img
            className="w-[72px] relative rounded-[50%] h-[72px] object-cover"
            alt=""
            src={image}
          />
          <div className="overflow-hidden flex flex-col items-start justify-start gap-[4px]">
            <b className="relative leading-[160%]">Courtney Alexander</b>
            <div className="w-[151px] relative text-sm leading-[150%] text-gray-700 inline-block h-5 shrink-0">
              Position, Company name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
