import React, { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    // fetch logic here
  };

  return (
    <>
      <h1 className="text-center mb-3">All Blogs</h1>
      {blogs.length === 0 ? (
        <h2 className="text-center">No blogs to display</h2>
      ) : (
        blogs.map((blog) => (
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <BlogCard key={blog.docId} blog={blog} />
          </div>
        ))
      )}
    </>
  );
}
