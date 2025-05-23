import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


function MainRoutes() {
  return (
    <>
      <Header />
      <div className="body_top">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainRoutes;
