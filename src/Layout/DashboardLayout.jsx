import React from "react";
import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      {/* <Sidebar/> */}
      <main className="pt-16 px-4">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
