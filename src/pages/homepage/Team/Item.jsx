import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image/index";
import P from "components/HeadTags/P/index";
import H3 from "components/HeadTags/H3/index";

const Item = ({ item }) => {
  return (
    <div className="item" key={item.id}>
      <div>
        <Image src={item.image} />
      </div>
      <div className="item-hover">
        <H3>{item.name}</H3>
        <P>{item.duties}</P>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.object,
};
export default Item;
