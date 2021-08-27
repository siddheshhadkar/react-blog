import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(props) {
  return (
    <div className="col">
      <Link
        to={"/blog/" + props.blog.id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">
              {props.blog.title.substring(0, 20)}...
            </h5>
            <p className="card-text">
              {props.blog.content.substring(0, 100)}...
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{props.blog.author_name}</small>
          </div>
        </div>
      </Link>
    </div>
  );
}
