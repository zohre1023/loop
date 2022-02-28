import React from "react";
import { Carousel } from "antd";
import H3 from "components/HeadTags/H3/index";
import { ARTICLE_TITLE } from "helper/newsConstants";
import { articleData } from "./articleData";
import ArticleItem from "./articleItem";
const Articles = () => {
  return (
    <div className="articles">
      <div>
        <H3 className="color-red">{ARTICLE_TITLE}</H3>
      </div>
      <div className="">
        <Carousel swipeToSlide>
          {articleData?.map((article) => (
            <ArticleItem key={article?.id} article={article} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Articles;
