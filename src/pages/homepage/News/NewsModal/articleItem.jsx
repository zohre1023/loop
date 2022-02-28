import React from "react";
import PropTypes from "prop-types";
import H3 from "components/HeadTags/H3/index";
import P from "components/HeadTags/P/index";
import Image from "components/Image/index";

const ArticleItem = ({ article }) => {
  return (
    <div className="article-item">
      <Image src={article?.src} />
      <H3>{article?.title}</H3>
      <P>{article?.content}</P>
    </div>
  );
};
ArticleItem.propTypes = {
  article: PropTypes?.object,
};
export default ArticleItem;
