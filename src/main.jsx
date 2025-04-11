import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import './index.css'
import Router from "./Routes";
import AppProvider from "./GlobalState/AppProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={Router} />
    </AppProvider>
  </React.StrictMode>
);
