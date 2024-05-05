import { useMemo } from "react";

const Tab = ({
  socialMedia,
  tabPosition,
  tabBorder,
  tabWidth,
  socialMediaLeft,
  socialMediaColor,
}) => {
  const tabStyle = useMemo(() => {
    return {
      position: tabPosition,
      border: tabBorder,
      width: tabWidth,
    };
  }, [tabPosition, tabBorder, tabWidth]);

  const socialMediaStyle = useMemo(() => {
    return {
      left: socialMediaLeft,
      color: socialMediaColor,
    };
  }, [socialMediaLeft, socialMediaColor]);

  return (
    <div
      className="w-[246px] rounded box-border h-[46px] overflow-hidden text-center text-base text-primary font-h1 border-[1px] border-solid border-primary"
      style={tabStyle}
    >
      <b
        className="absolute top-[calc(50%_-_13px)] left-[calc(50%_-_46px)] leading-[160%]"
        style={socialMediaStyle}
      >
        {socialMedia}
      </b>
    </div>
  );
};

export default Tab;
