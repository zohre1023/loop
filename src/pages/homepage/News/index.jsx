import React, { useState } from "react";
import { newsInformation } from "./data";
import BgColor from "./Items/BgColor";
import BgImage from "./Items/BgImage";
import BlackPart from "./Items/BlackPart";
import HalfBlack from "./Items/HalfBlack";
import ImageContent from "./Items/ImageContent";
import NewsModal from "./NewsModal/index";

const News = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <div className="news">
      <div className="display-flex first-row">
        {newsInformation.map((item) => {
          if (item.type === "bgWhite" || item.type === "bgBlack") {
            return (
              <BgColor item={item} setIsModalVisible={setIsModalVisible} />
            );
          }
          return null;
        })}

        {newsInformation.map((item) => {
          if (item.type === "bgImage") {
            return (
              <BgImage item={item} setIsModalVisible={setIsModalVisible} />
            );
          }
          return null;
        })}
      </div>

      <div className="display-flex">
        {newsInformation.map((item) => {
          if (item.type === "imageContent") {
            return (
              <ImageContent item={item} setIsModalVisible={setIsModalVisible} />
            );
          }
          return null;
        })}
        <div className="multiple-part">
          {newsInformation.map((item) => {
            if (item.type === "secondBgImage") {
              return (
                <BgImage item={item} setIsModalVisible={setIsModalVisible} />
              );
            }
            return null;
          })}

          <div className="display-flex">
            {newsInformation.map((item) => {
              if (item.type === "smallImageContent") {
                return (
                  <ImageContent
                    item={item}
                    setIsModalVisible={setIsModalVisible}
                  />
                );
              }
            })}
          </div>
        </div>
      </div>
      {newsInformation.map((item) => {
        if (item.type === "halfBlack") {
          return (
            <HalfBlack item={item} setIsModalVisible={setIsModalVisible} />
          );
        }
      })}
      {newsInformation.map((item) => {
        if (item.type === "blackPart") {
          return (
            <BlackPart item={item} setIsModalVisible={setIsModalVisible} />
          );
        }
      })}

      <NewsModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </div>
  );
};

export default News;
