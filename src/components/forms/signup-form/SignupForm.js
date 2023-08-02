import React, { useContext, useState } from "react";
import { useSnackbar } from "notistack";
import Cookies from "js-cookie";

import { UserContext } from "../../../context/user.context";

import "./signup.css";
import axios from "axios";

const defaultFormFields = {
  user_name: "",
  email: "",
  password: "",
};

const SignupForm = ({ handleType, handleClose }) => {
  const { setUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { user_name, email, password } = formFields;
  const { enqueueSnackbar } = useSnackbar();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://dealnews-004572de8762.herokuapp.com/api/user/signup",
        formFields
      );
      const token = response.data.token;
      Cookies.remove("jwtToken");
      setUser(null);
      Cookies.set("jwtToken", token, { expires: 1 * 3600 * 1000 });

      let variant = "success";
      enqueueSnackbar("User created successfully!", { variant });
      setUser(formFields.user_name);
      resetFormFields();
      handleClose();
    } catch (error) {
      console.log("user sign up failed", error);
      let variant = "error";
      enqueueSnackbar("Something wron went!", { variant });
    }
  };

  return (
    <div class="form-box">
      <form class="form">
        <span class="title">Sign up</span>
        <span class="subtitle">Create a free account with your email.</span>
        <div class="form-container">
          <input
            type="text"
            class="input"
            placeholder="Full Name"
            onChange={handleChange}
            name="user_name"
            value={user_name}
          />
          <input
            type="email"
            class="input"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={email}
          />
          <input
            type="password"
            class="input"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <button onClick={handleSubmit}>Sign up</button>
      </form>
      <div class="form-section">
        <p>
          Have an account?{" "}
          <span onClick={() => handleType("login")}>Log in</span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
