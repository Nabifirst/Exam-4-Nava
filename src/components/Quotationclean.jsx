import { useMemo } from "react";

const Quotationclean = ({
  quotationcleanPosition,
  quotationcleanTop,
  quotationcleanLeft,
}) => {
  const quotationcleanStyle = useMemo(() => {
    return {
      position: quotationcleanPosition,
      top: quotationcleanTop,
      left: quotationcleanLeft,
    };
  }, [quotationcleanPosition, quotationcleanTop, quotationcleanLeft]);

  return (
    <div
      className="max-w-full overflow-hidden flex flex-row items-start justify-start gap-[30px] text-left text-xl text-gray-900 font-h1"
      style={quotationcleanStyle}
    >
      <img className="w-7 relative h-5" alt="" src="/braces.svg" />
      <b className="w-[752px] relative leading-[150%] inline-block whitespace-pre-wrap shrink-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet
        lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed
        purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue
        tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque,
        ipsum.
      </b>
    </div>
  );
};

export default Quotationclean;
