import React from "react";
import Footer from "@components/Footer";
import { Outlet } from "react-router";

const AppLayout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
