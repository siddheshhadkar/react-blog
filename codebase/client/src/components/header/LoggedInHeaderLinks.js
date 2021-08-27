import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axiosConfig";

export default function LoggedInHeaderLinks(props) {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState(null);

  const logOut = () => {
    localStorage.removeItem("token");
    props.toggleLogInState();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`,
    };
    let userResponse = await axios.get("/user", { headers });
    if (userResponse.data.success) {
      setUsername(userResponse.data.data.name);
      setImage(userResponse.data.data.profile_picture);
    }
  };

  return (
    <>
      <li className="nav-item">
        <div className="nav-link">
          <img
            src="https://picsum.photos/200/300"
            className="rounded"
            alt="Profile pic"
            style={{
              height: 28,
              width: 28,
            }}
          />
          &nbsp;{username}
        </div>
      </li>
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
        <Link to="/logout" className="nav-link" onClick={logOut}>
          Logout
        </Link>
      </li>
    </>
  );
}
