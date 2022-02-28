import React from "react";
import ImageSrc from "assets/images/about-img.png";
import Image from "components/Image/index";

const ImagePart = () => {
  return (
    <div className="about-us-image">
      <Image src={ImageSrc} />
    </div>
  );
};

export default ImagePart;
