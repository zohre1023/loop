import { Carousel } from "antd";
import React, { useState } from "react";
import P from "components/HeadTags/P/index";
import Image from "components/Image/index";
import { NEWS_TEXT } from "helper/newsConstants";
import { carouselData } from "./carouselData";

const RightSide = () => {
  const [currentImage, setCurrentImage] = useState(0);
  function onChange(current) {
    setCurrentImage(current);
  }

  return (
    <div className="right-side">
      <Carousel arrows swipeToSlide dots={false} afterChange={onChange}>
        {carouselData?.map((item) => (
          <div>
            <Image key={item?.id} src={item?.src} />
          </div>
        ))}
      </Carousel>
      <div>
        {currentImage + 1} / {carouselData?.length}
      </div>
      <P className="color-gray">
        {NEWS_TEXT} {NEWS_TEXT}
      </P>
    </div>
  );
};

export default RightSide;
