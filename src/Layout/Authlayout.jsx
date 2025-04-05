import React from "react";
import { Outlet } from "react-router-dom";
import LoginNav from "../components/loginnav";
const AuthLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <LoginNav/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout;