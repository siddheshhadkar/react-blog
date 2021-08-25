import React, { useState } from "react";
import validator from "validator";

export default function LoginForm() {
  const [emailValue, setEmailValue] = useState(null);
  const [passwordValue, setPasswordValue] = useState(null);

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const validateFields = () => {
    if (!validator.isEmail(emailValue)) {
      alert("Please enter valid email");
    } else if (passwordValue.length < 8) {
      alert("Password should contain more than 8 characters");
    } else {
      loginUser(emailValue, passwordValue);
    }
  };

  const loginUser = (email, password) => {
    // Login logic here
  };

  return (
    <div className="w-50 my-5 mx-auto">
      <div className="mb-3">
        <label htmlFor="emailAddress" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="emailAddress"
          placeholder="e.g: example@email.com"
          onChange={handleEmailChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="passwordField" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordField"
          placeholder="password"
          onChange={handlePasswordChange}
        />
      </div>

      <div className="d-grid mb-3">
        <button
          className="btn btn-primary"
          type="button"
          onClick={validateFields}
        >
          Log In
        </button>
      </div>
    </div>
  );
}
