import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <main className="pt-16 px-4">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
