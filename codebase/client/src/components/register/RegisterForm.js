import React, { useState } from "react";
import validator from "validator";
import FormData from "form-data";

import RegisterService from "../../services/RegisterService";

export default function RegisterForm(props) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [phoneNumberValue, setPhoneNumberValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumberValue(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageValue(e.target.files[0]);
  };

  const validateFields = () => {
    if (nameValue === "" || nameValue === null) {
      alert("Name cannot be empty");
    } else if (!validator.isEmail(emailValue)) {
      alert("Please enter valid email");
    } else if (passwordValue.length < 8) {
      alert("Password should contain more than 8 characters");
    } else if (phoneNumberValue.length !== 10) {
      alert("Phone Number needs to have 10 digits");
    } else {
      createUser();
    }
  };

  const createUser = async () => {
    const data = new FormData();
    data.append("name", nameValue);
    data.append("email", emailValue);
    data.append("password", passwordValue);
    data.append("phone", phoneNumberValue);
    if (imageValue !== undefined || imageValue !== "" || imageValue !== null) {
      data.append("profile_picture", imageValue);
    }

    try {
      let response = await RegisterService(data);
      if (response.success && response.data.msg) {
        localStorage.setItem("token", response.data.token);
        props.toggleLogInState();
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="w-50 my-5 mx-auto">
      <div className="mb-3">
        <label htmlFor="nameField" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="nameField"
          placeholder="e.g: John Doe"
          onChange={handleNameChange}
        />
      </div>

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

      <div className="mb-3">
        <label htmlFor="numberField" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="numberField"
          placeholder="e.g: 9876543210"
          onChange={handlePhoneNumberChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="formFile" className="form-label">
          Profile Picture
        </label>
        <input
          className="form-control"
          type="file"
          name="profile_picture"
          id="formFile"
          onChange={handleImageChange}
        />
      </div>

      <div className="d-grid mb-3">
        <button
          className="btn btn-primary"
          type="button"
          onClick={validateFields}
        >
          Register
        </button>
      </div>
    </div>
  );
}
