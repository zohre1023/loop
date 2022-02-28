import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import H1 from "components/HeadTags/H1/index";
import H2 from "components/HeadTags/H2/index";
import H3 from "components/HeadTags/H3/index";

const BgImage = ({ item, setIsModalVisible }) => {
  return (
    <div
      className={classNames("background-image", {
        "second-background-image": item?.type === "secondBgImage",
      })}
      onClick={() => setIsModalVisible(true)}
    >
      <div>
        <H1>{item?.date} </H1>
        <H2 className="title color-red">{item?.title}</H2>
        <H3 className="subtitle">{item?.subtitle}</H3>
        <p>{item?.content}</p>
      </div>
    </div>
  );
};

BgImage.propTypes = {
  item: PropTypes.object,
  setIsModalVisible: PropTypes.func,
};
export default BgImage;
