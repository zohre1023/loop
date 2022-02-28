import React from "react";
import PropTypes from "prop-types";
import Image from "components/Image/index";
import Close from "assets/images/close.png";
import Facebook from "assets/images/facebook.png";
import Google from "assets/images/google+.png";
import Twitter from "assets/images/twitter.png";

const SocialIcons = ({ handleClose }) => {
  return (
    <div className="social-icons">
      <div className="item background-bgWhite" onClick={() => handleClose()}>
        <div>
          <Image src={Close} />
        </div>
      </div>
      <div className="item background-black">
        <div>
          <Image src={Facebook} />
        </div>
      </div>
      <div className="item background-black">
        <div>
          <Image src={Twitter} />
        </div>
      </div>
      <div className="item background-black">
        <div>
          <Image src={Google} />
        </div>
      </div>
    </div>
  );
};
SocialIcons.propTypes = {
  handleClose: PropTypes.func,
};
export default SocialIcons;
