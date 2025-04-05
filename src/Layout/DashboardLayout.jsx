import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const DashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1 }}>
        <Sidebar/>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;