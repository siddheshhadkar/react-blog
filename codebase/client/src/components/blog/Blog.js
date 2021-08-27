import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "../../services/axiosConfig";

export default function Blog() {
  const [blog, setBlog] = useState({});
  let params = useParams();
  let history = useHistory();

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`,
    };
    let response = await axios.get(`/article/${params.id}`, { headers });
    if (response.data.success) {
      setBlog(response.data.data);
    } else {
      alert("no blog with that id exists");
      history.push("/");
    }
  };

  return (
    <div>
      <h2 className="mb-3">{blog.title}</h2>
      <cite className="lead">-- {blog.author_name}</cite>
      <br />
      <span className="text-secondary">{blog.date}</span>
      <hr />
      <p className="lead my-3">{blog.content}</p>
    </div>
  );
}
