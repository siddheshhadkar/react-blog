import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../services/axiosConfig";

export default function CreateBlog() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  let history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const validateFields = (e) => {
    if (title !== "" && content !== "") {
      addBlog();
    } else {
      alert("All fields are required");
    }
  };

  const addBlog = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `bearer ${localStorage.getItem("token")}`,
    };
    let userResponse = await axios.get("/user", { headers });
    const data = {
      title,
      content,
      author_id: userResponse.data.data.id,
      author_name: userResponse.data.data.name,
      date: new Date().toDateString(),
    };
    await axios.post("/article", data, { headers });
    history.push("/");
  };

  return (
    <>
      <h1 className="text-center mb-3">Create new Blog</h1>
      <div className="mb-3">
        <label htmlFor="blogTitle" className="form-label">
          Blog title
        </label>
        <input
          type="text"
          className="form-control"
          id="blogTitle"
          placeholder="Blog title"
          onChange={handleTitleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="bodyTextArea" className="form-label">
          Blog body
        </label>
        <textarea
          className="form-control"
          id="bodyTextArea"
          rows="10"
          onChange={handleContentChange}
        ></textarea>
      </div>
      <div className="d-grid mb-3">
        <button
          className="btn btn-primary"
          type="button"
          onClick={validateFields}
        >
          Publish Blog
        </button>
      </div>
    </>
  );
}
