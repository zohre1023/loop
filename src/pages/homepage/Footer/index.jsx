import MenuComponent from "components/Menu/index";
import React from "react";
import { TwitterOutlined, FacebookOutlined } from "@ant-design/icons";
import { COPY_RIGHT_CONTENT } from "helper/constants";
import P from "components/HeadTags/P/index";
import { footerMenuItems } from "helper/arrayConstants";

const Footer = () => {
  return (
    <div className="footer display-flex">
      <div className="footer-item">
        <P className="color-gray">{COPY_RIGHT_CONTENT}</P>
      </div>
      <div className="footer-item display-flex-center">
        <TwitterOutlined />
        <FacebookOutlined />
      </div>
      <div className="footer-item footer-menu">
        <MenuComponent items={footerMenuItems} />
      </div>
    </div>
  );
};

export default Footer;
