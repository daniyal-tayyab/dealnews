import { useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SnackbarProvider, MaterialDesignContent } from "notistack";

import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";

import { UserContext } from "./context/user.context";

import styled from "styled-components";

import Header from "./components/header/Header";
import Home from "./pages/home/Home";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    fontSize: "1.4rem",
  },
  "&.notistack-MuiContent-error": {
    fontSize: "1.4rem",
  },
}));

function App() {
  const { setUser } = useContext(UserContext);
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    const token = Cookies.get("jwtToken");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        setUser(decodedToken.user_name);

        if (decodedToken.exp < currentTime) {
          // Token has expired
          logoutUser();
        }
      } catch (err) {
        console.log("Invalid token format");
        logoutUser();
      }
    }
  };

  const logoutUser = () => {
    setUser(null);
    Cookies.remove("jwtToken");
  };
  return (
    <SnackbarProvider
      preventDuplicate
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;
