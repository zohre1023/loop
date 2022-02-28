import React from "react";
import { newsInformation } from "./data";
import BgColor from "./Items/BgColor";
import BgImage from "./Items/BgImage";
import BlackPart from "./Items/BlackPart";
import HalfBlack from "./Items/HalfBlack";
import ImageContent from "./Items/ImageContent";

const News = () => {
  return (
    <div className="news">
      <div className="display-flex first-row">
        {newsInformation.map((item) => {
          if (item.type === "bgWhite" || item.type === "bgBlack") {
            return <BgColor item={item} />;
          }
          return null;
        })}

        {newsInformation.map((item) => {
          if (item.type === "bgImage") {
            return <BgImage item={item} />;
          }
          return null;
        })}
      </div>

      <div className="display-flex">
        {newsInformation.map((item) => {
          if (item.type === "imageContent") {
            return <ImageContent item={item} />;
          }
          return null;
        })}
        <div className="multiple-part">
          {newsInformation.map((item) => {
            if (item.type === "secondBgImage") {
              return <BgImage item={item} />;
            }
            return null;
          })}

          <div className="display-flex">
            {newsInformation.map((item) => {
              if (item.type === "smallImageContent") {
                return <ImageContent item={item} />;
              }
            })}
          </div>
        </div>
      </div>
      {newsInformation.map((item) => {
        if (item.type === "halfBlack") {
          return <HalfBlack item={item} />;
        }
      })}
      {newsInformation.map((item) => {
        if (item.type === "blackPart") {
          return <BlackPart item={item} />;
        }
      })}
    </div>
  );
};

export default News;
