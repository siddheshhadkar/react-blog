import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "../../services/axiosConfig";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`,
    };
    const response = await axios.get("/article", { headers });
    setBlogs(response.data.data);
  };

  return (
    <>
      <h1 className="text-center mb-3">All Blogs</h1>
      {blogs.length === 0 ? (
        <h2 className="text-center">No blogs to display</h2>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </>
  );
}
