import React, { useState } from "react";

export default function CreateBlog() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const validateFields = (e) => {
    if (title !== "" && content !== "") {
      this.validateUser(title, content);
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
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
