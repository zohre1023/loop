import React from "react";
import PropTypes from "prop-types";
import { CalendarOutlined } from "@ant-design/icons";
import classNames from "classnames";
import H3 from "components/HeadTags/H3/index";
import P from "components/HeadTags/P/index";

const BgColor = ({ item }) => {
  return (
    <div
      className={classNames("bg-color", {
        "background-black": item?.type === "bgBlack",
      })}
    >
      <div className="date-content">
        <CalendarOutlined className="date-icon" />
        <span className="date-news">{item?.date}</span>
      </div>
      <div>
        <H3 className="color-red">{item?.title}</H3>
        <P>{item?.content}</P>
      </div>
    </div>
  );
};

BgColor.propTypes = {
  item: PropTypes.object,
};
export default BgColor;
