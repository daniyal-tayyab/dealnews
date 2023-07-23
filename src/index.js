import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { UserProvider } from "./context/user.context";
import { SubmenuProvider } from "./context/submenu.context";
import { ProductsProvider } from "./context/products.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductsProvider>
        <SubmenuProvider>
          <App />
        </SubmenuProvider>
      </ProductsProvider>
    </UserProvider>
  </React.StrictMode>
);
