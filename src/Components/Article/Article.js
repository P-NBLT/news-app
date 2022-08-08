import React from "react";
import { useParams, Link } from "react-router-dom";

import mando from "../../Media/pic_mando.jpeg";
import "./Article.css";

export default function Article({ data }) {
  const { articleId } = useParams();
  const regex = articleId.replace(/(^.*)(id=)(.*$)/, "$3");
  console.log(articleId, regex);
  return (
    <div>
      {data.length != 0 ? (
        <div className="articleContainer">
          <div className="leftContainer">
            {data[regex].urlToImage ? (
              <img className="imgArticle" src={data[regex].urlToImage} />
            ) : (
              <img className="imgArticle" src={mando} />
            )}
            <h4 className="authorArticle">Author: {data[regex].author}</h4>

            <Link to="/" className="Link">
              <div className="link">Back to home page</div>
            </Link>
          </div>
          <p className="content">{data[regex].content}</p>
        </div>
      ) : null}
    </div>
  );
}
