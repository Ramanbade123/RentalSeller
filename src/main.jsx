import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css'
import Router from "./Routes";
import { CartProvider } from "./GlobalState/CartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={Router} />
    </CartProvider>
  </React.StrictMode>
);
