import { Menu } from "antd";
import PropTypes from "prop-types";
import React from "react";

const MenuComponent = ({ items, selectedKeys }) => {
  return (
    <Menu mode="horizontal" selectedKeys={selectedKeys}>
      {items.map((item) => (
        <Menu.Item onClick={item?.onClick} key={item.key}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

MenuComponent.propTypes = {
  items: PropTypes.array,
  selectedKeys: PropTypes.array,
};
export default MenuComponent;
