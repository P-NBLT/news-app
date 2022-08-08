import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import searchpic from "../../Media/search.png";
import "./NavBar.css";

const NavBarStyle = ({ action, getKeyword }) => {
  const [keyword, setKeyword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let val = e.target.textContent;

    switch (val) {
      case "Home":
        val = "general";
        break;
      case "Economics":
        val = "business";
        break;
      case "Tech":
        val = "technology";
        break;
      case "Sport":
        val = "sports";
        break;
      case "Health":
        val = "health";
        break;
    }
    console.log("query is " + val);
    action(val);
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    getKeyword(document.getElementById("form").value);
    document.getElementById("form").value = "";
  };
  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getKeyword(document.getElementById("form").value);
      document.getElementById("form").value = "";
    }
  };

  const keywordQuery = () => {
    if (!document.getElementById("form").value) return;
    else setKeyword(document.getElementById("form").value);
  };

  return (
    <div className="NavBar container">
      <p onClick={handleClick}>
        <NavLink to="/" className="navlink home">
          Home
        </NavLink>
      </p>
      <div className="break"></div>
      <p onClick={handleClick}>
        <NavLink to="/economics" className="navlink">
          Economics
        </NavLink>
      </p>
      <div className="break"></div>
      <p onClick={handleClick}>
        <NavLink to="/tech" className="navlink">
          Tech
        </NavLink>
      </p>
      <div className="break"></div>
      <p onClick={handleClick}>
        <NavLink to="/health" className="navlink">
          Health
        </NavLink>
      </p>
      <div className="break"></div>
      <p onClick={handleClick}>
        <NavLink to="/sport" className="navlink">
          Sport
        </NavLink>
      </p>
      <div className="break"></div>
      <div className="searchBar">
        <form className="form">
          <input
            type="text"
            className="inputform"
            id="form"
            placeholder="insert keyword"
            onChange={keywordQuery}
            onKeyDown={handleEnter}
          />{" "}
        </form>

        <button className="buttonSearch" onClick={handleClick2}>
          <Link to={`search?q=${keyword}`}>
            <img src={searchpic} />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default NavBarStyle;
