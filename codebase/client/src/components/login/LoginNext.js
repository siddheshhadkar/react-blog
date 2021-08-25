import React from "react";
import { Redirect } from "react-router-dom";

export default function LoginNext() {
  const token = localStorage.getItem("token");
  console.log("token", token);
  if (token) {
    return <Redirect to="/home"></Redirect>;
  } else if (!token) {
    return <Redirect to="/login"></Redirect>;
  } else {
    return <h3>invalid User Detected! Report Sent!</h3>;
  }
}
