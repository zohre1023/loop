import React from "react";
import ImageSrc from "assets/images/kopieren.png";
import Logo from "assets/images/compass.png";
import Image from "components/Image/index";
import H1 from "components/HeadTags/H1/index";
import H3 from "components/HeadTags/H3/index";
import { MAIN_PICK_CONTENT, MAIN_PICK_TITLE } from "helper/constants";

const MainPick = () => {
  return (
    <div className="main-pick-content">
      <div className="main-image">
        <Image src={ImageSrc} />
      </div>
      <div className="text-content">
        <H1 className="color-red">{MAIN_PICK_TITLE}</H1>
        <H3>{MAIN_PICK_CONTENT}</H3>
      </div>
      <div className="logo-part">
        <Image src={Logo} />
      </div>
    </div>
  );
};

export default MainPick;
