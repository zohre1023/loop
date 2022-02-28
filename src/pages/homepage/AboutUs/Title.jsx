import H1 from "components/HeadTags/H1/index";
import H3 from "components/HeadTags/H3/index";
import { ABOUT_US_SUBTITLE, ABOUT_US_TITLE } from "helper/constants";
import React from "react";

const Title = () => {
  return (
    <div className="display-flex-center">
      <div className="align-center">
        <H1>{ABOUT_US_TITLE}</H1>
        <H3 className="align-center">{ABOUT_US_SUBTITLE}</H3>
        <div className="horizon-bolder" />
      </div>
    </div>
  );
};

export default Title;
