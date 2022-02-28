import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image/index";
import classNames from "classnames/index";

const ImageContent = ({ item, setIsModalVisible }) => {
  return (
    <div
      className={classNames("image-content", {
        "small-image-content": item?.type === "smallImageContent",
      })}
      onClick={() => setIsModalVisible(true)}
    >
      <div>
        <Image src={item.src} />
      </div>
    </div>
  );
};

ImageContent.propTypes = {
  item: PropTypes.object,
  setIsModalVisible: PropTypes.func,
};
export default ImageContent;
