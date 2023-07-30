import React, { useContext, useState } from "react";

import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

import { UserContext } from "../../../context/user.context";

import "../signup-form/signup.css";
import axios from "axios";
import { useSnackbar } from "notistack";

const defaultFormFields = {
  email: "",
  password: "",
};

const LoginForm = ({ handleType, handleClose }) => {
  const { setUser } = useContext(UserContext);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
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
        "https://dealnews-server-a6d51b37a008.herokuapp.com/api/user/signin",
        formFields
      );
      const token = response.data.token;

      if (!token) {
        let variant = "error";
        enqueueSnackbar("Un-Authorized User", { variant });
      }

      let variant = "success";
      enqueueSnackbar("User Login successfully", { variant });

      Cookies.set("jwtToken", token, { expires: 1 * 3600 * 1000 });
      const user = jwt_decode(token).user_name;
      setUser(user);
      resetFormFields();
      handleClose();
    } catch (err) {
      let variant = "error";
      enqueueSnackbar("Wrong email or password", { variant });
    }
  };

  return (
    <div class="form-box">
      <form class="form">
        <span class="title">Sign in</span>
        <span class="subtitle">Sign in to your acount with email</span>
        <div class="form-container">
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
        <button onClick={handleSubmit}>Sign in</button>
      </form>
      <div class="form-section">
        <p>
          Haven't an account?
          <span onClick={() => handleType("signup")}> Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
