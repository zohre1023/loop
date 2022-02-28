import P from "components/HeadTags/P/index";
import { ABOUT_US_LEFT_SIDE_CONTENT, ABOUT_US_LEFT_SIDE_CONTENT2, ABOUT_US_RIGHT_SIDE_CONTENT, ABOUT_US_RIGHT_SIDE_CONTENT2 } from "helper/constants";
import React from "react";

const Content = () => {
  return (
    <div className="content">
      <div className="left-side">
        <P>{ABOUT_US_LEFT_SIDE_CONTENT}</P>
        <P>{ABOUT_US_LEFT_SIDE_CONTENT2}</P>
      </div>
      <div className="right-side">
        <P>{ABOUT_US_RIGHT_SIDE_CONTENT}</P>
        <P>{ABOUT_US_RIGHT_SIDE_CONTENT2}</P>
      </div>
    </div>
  );
};

export default Content;
