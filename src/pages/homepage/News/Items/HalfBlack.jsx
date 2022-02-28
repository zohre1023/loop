import Image from "components/Image/index";
import React from "react";
import NewsPaperSrc from "assets/images/Newspaper.png";
import H2 from "components/HeadTags/H2/index";
import PropTypes from "prop-types";

const HalfBlack = ({ item }) => {
  return (
    <div className="half-black">
      <div className="content">
        <Image src={NewsPaperSrc} />
        <H2 className="color-white">{item.title}</H2>
        <H2 className="color-white">{item.subtitle}</H2>
      </div>
    </div>
  );
};

HalfBlack.propTypes = {
  item: PropTypes.object,
};
export default HalfBlack;
