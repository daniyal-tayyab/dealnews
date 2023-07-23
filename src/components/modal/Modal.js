import { useContext, useState } from "react";
import { UserContext } from "../../context/user.context";

import Dialog from "@mui/material/Dialog";

import SignupForm from "../forms/signup-form/SignupForm";
import LoginForm from "../forms/login-form/LoginForm";

const Modal = ({ open, handleClose }) => {
  const [type, setType] = useState("login");
  const handleType = (type) => setType(type);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        {type === "login" ? (
          <LoginForm handleType={handleType} handleClose={handleClose} />
        ) : (
          <SignupForm handleType={handleType} handleClose={handleClose} />
        )}
      </Dialog>
    </div>
  );
};

export default Modal;
