import React, { useState, useEffect } from "react";

export default function Blog() {
  const [blog, setBlog] = useState({
    title: "",
    author: "",
    date: "",
    body: "",
  });

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = () => {
    // fetch logic here
  };

  return (
    <div>
      <h2 className="mb-3">{blog.title}</h2>
      <cite className="lead">-- {blog.author}</cite>
      <br />
      <span className="text-secondary">{blog.date}</span>
      <p className="lead my-3">{blog.body}</p>
    </div>
  );
}
