import React from "react";
import H3 from "components/HeadTags/H3/index";
import { ARTICLE_TITLE } from "helper/newsConstants";
import { articleData } from "./articleData";
import ArticleItem from "./articleItem";
import { Carousel } from "@trendyol-js/react-carousel";
import Image from "components/Image/index";
import Arrow from "assets/images/arrowBlack.png";

const Articles = () => {
  return (
    <div className="articles">
      <div className="title">
        <H3 className="color-red">{ARTICLE_TITLE}</H3>
      </div>

      <Carousel
        show={4}
        slide={3}
        swiping={true}
        rightArrow={
          <div className="right-arrow">
            <Image src={Arrow} />
          </div>
        }
        leftArrow={
          <div className="left-arrow">
            <Image src={Arrow} />
          </div>
        }
      >
        {articleData?.map((article) => (
          <ArticleItem key={article?.id} article={article} />
        ))}
      </Carousel>
    </div>
  );
};

export default Articles;
