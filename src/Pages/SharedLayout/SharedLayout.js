import React, { useState } from "react";
import NavBarStyle from "../NavBar/NavBarStyle";
import { Outlet, Link } from "react-router-dom";
import searchpic from "../../Media/search.png";
import "./SharedLayout.css";

const SharedLayout = ({ action, getKeyword }) => {
  return (
    <div>
      <div className="header">Nouvelle D'Ailleurs</div>
      <div className="navSearchContainer">
        <NavBarStyle
          action={action}
          className="NavBar"
          getKeyword={getKeyword}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default SharedLayout;
