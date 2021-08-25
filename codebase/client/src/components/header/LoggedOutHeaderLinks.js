import React from "react";
import { Link } from "react-router-dom";

export default function LoggedOutHeaderLinks() {
  return (
    <>
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
    </>
  );
}
