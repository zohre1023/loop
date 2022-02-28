import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import Logo from "assets/images/logo.png";
import Image from "components/Image/index";
import Articles from "./articles";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";
import SocialIcons from "./socialIcons";
const NewsModal = ({ isModalVisible, setIsModalVisible }) => {
  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal visible={isModalVisible}>
      <div className="news-modal">
        <div className="display-flex-end">
          <Image src={Logo} />
        </div>
        <div className="display-flex">
          <LeftSide />
          <RightSide />
          <SocialIcons handleClose={handleClose} />
        </div>

        <Articles />
      </div>
    </Modal>
  );
};
NewsModal.propTypes = {
  isModalVisible: PropTypes.bool,
  setIsModalVisible: PropTypes.func,
};
export default NewsModal;
