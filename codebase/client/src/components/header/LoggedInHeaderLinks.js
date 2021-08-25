import React from "react";
import { Link } from "react-router-dom";

export default function LoggedInHeaderLinks() {
  const logOut = () => {
    // Logout logic here
    console.log("logout");
  };

  return (
    <>
      <li className="nav-item">
        <Link to="/" className="nav-link">
          All Blogs
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/create-blog" className="nav-link">
          Create Blog
        </Link>
      </li>

      <li className="nav-item">
        <Link to="/logout" className="nav-link">
          Logout
        </Link>
      </li>
    </>
  );
}
