import React from "react";
import PropTypes from "prop-types";
import H2 from "components/HeadTags/H2/index";
import Image from "components/Image/index";
import Calendar from "assets/images/Calendar.png";

const BlackPart = ({ item }) => {
  return (
    <div className="black-part color-white">
      <div className="content">
        <Image src={Calendar} />
        <H2 className="color-white">{item.title}</H2>
        <H2 className="color-white">{item.subtitle}</H2>
      </div>
    </div>
  );
};

BlackPart.propTypes = {
  item: PropTypes.object,
};
export default BlackPart;
