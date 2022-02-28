import React from "react";
import H1 from "components/HeadTags/H1/index";
import H3 from "components/HeadTags/H3/index";
import { TEAM_MEMBER_SUBTITLE, TEAM_MEMBER_TITLE } from "helper/constants";

const Title = () => {
  return (
    <div className="team-title display-flex-center">
      <div className="">
        <H1 className="color-white align-center clear-margin-bottom">
          {TEAM_MEMBER_TITLE}
        </H1>
        <H3 className="color-white align-center">{TEAM_MEMBER_SUBTITLE}</H3>
        <div className="horizon-border" />
      </div>
    </div>
  );
};

export default Title;
