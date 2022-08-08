import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = ({ keyword, endpoint, apiKey, retrieveData }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (keyword) {
        const searchData = await fetch(
          `${endpoint}q=${keyword}&apiKey=${apiKey}`
        );
        console.log(searchData);
        const findData = await searchData.json();
        setData(findData.articles.filter((el) => el.content !== null));
        retrieveData(findData.articles.filter((el) => el.content !== null));
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <div className="aticlesContainer">
      {data
        ? data.map((el, idx) => {
            return (
              <Link
                to={`article/${el.title}id=${idx}`}
                key={idx}
                className="Link"
              >
                <div id={idx} className="articleGeneral">
                  <div className="part1">
                    <img src={el.urlToImage} className="image" />
                    <h2 className="title">{el.title}</h2>
                    <h4 className="description">
                      {el.description.slice(0, 80)}...
                    </h4>
                  </div>
                  <div className="part2">
                    <p className="name">{el.source.name}</p>
                  </div>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Search;
