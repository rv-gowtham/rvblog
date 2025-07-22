import React from "react";
import CustomNavbar from "./component/nav/CustomNavbar";
import Footer from "./component/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <CustomNavbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
