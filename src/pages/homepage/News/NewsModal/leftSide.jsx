import React from "react";
import Calendar from "assets/images/CalendarGray.png";
import H1 from "components/HeadTags/H1/index";
import H3 from "components/HeadTags/H3/index";
import { NEWS_SUBTITLE, NEWS_TEXT, NEWS_TITLE } from "helper/newsConstants";
import Image from "components/Image/index";
import P from "components/HeadTags/P/index";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="display-flex date">
        <Image src={Calendar} />
        <H3>{"23.MAI 2021"}</H3>
      </div>
      <H1>{NEWS_TITLE}</H1>
      <H3>{NEWS_SUBTITLE}</H3>
      <div className="horizontal-line" />
      <P className="color-gray">{NEWS_TEXT}</P>
      <P className="color-gray">{NEWS_TEXT}</P>
    </div>
  );
};

export default LeftSide;
