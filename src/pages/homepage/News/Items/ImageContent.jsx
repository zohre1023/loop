import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image/index";
import classNames from "classnames/index";

const ImageContent = ({ item }) => {
  return (
    <div
      className={classNames("image-content", {
        "small-image-content": item?.type === "smallImageContent",
      })}
    >
      <div>
        <Image src={item.src} />
      </div>
    </div>
  );
};

ImageContent.propTypes = {
  item: PropTypes.object,
};
export default ImageContent;
