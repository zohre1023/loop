import React from "react";
import Logo from "assets/images/logo.png";
import Image from "components/Image/index";
import MenuComponent from "components/Menu";
import { menuItems } from "helper/arrayConstants";

const MenuBar = () => {
  return (
    <div className="menubar">
      <div className="header-menu">
        <MenuComponent items={menuItems} />
      </div>
      <Image src={Logo} />
    </div>
  );
};

export default MenuBar;
