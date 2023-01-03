import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./mainLayout.css"


function MainLayout() {

  return (
    <div className="d-flex flex-column main-layout">
      <Navbar />

      <div className=" container margin-top ">
        <Outlet />
      </div>


      <Footer  />
    </div>
  );
}

export default MainLayout;
