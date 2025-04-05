import React from "react";
import { Outlet } from "react-router-dom";
import LoginNav from "../components/loginnav";
const SellerLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SellerLayout;