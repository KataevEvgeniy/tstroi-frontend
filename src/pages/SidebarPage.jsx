import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import HeaderBar from "../components/header/HeaderBar.jsx";
const SidebarPage = () => {
  return (
    <>
      <HeaderBar />
      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
};

export default SidebarPage;
