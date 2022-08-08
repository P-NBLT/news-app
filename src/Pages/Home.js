import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import mando from "../Media/pic_mando.jpeg";

const Home = ({ data }) => {
  return (
    <div className="aticlesContainer">
      {data.map((el, idx) => {
        return (
          <Link to={`article/${el.title}id=${idx}`} key={idx} className="Link">
            <div id={idx} className="articleGeneral">
              <div className="part1">
                {el.urlToImage ? (
                  <img src={el.urlToImage} className="image" />
                ) : (
                  <img src={mando} className="image" />
                )}
                <h2 className="title">{el.title}</h2>
                <h4 className="description">{el.description}...</h4>
              </div>
              <div className="part2">
                <p className="name">{el.source.name}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
