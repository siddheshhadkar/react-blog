import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";

import LoggedInHeaderLinks from "./LoggedInHeaderLinks";
import LoggedOutHeaderLinks from "./LoggedOutHeaderLinks";

export default function Header() {
  const context = useContext(UserContext);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          React Blog
        </Link>

        <button
          className="custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navmenu"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`${isCollapsed ? "collapse" : ""} navbar-collapse`}
          id="navmenu"
        >
          <ul className="navbar-nav ms-auto">
            {context ? <LoggedInHeaderLinks /> : <LoggedOutHeaderLinks />}
          </ul>
        </div>
      </div>
    </nav>
  );
}
