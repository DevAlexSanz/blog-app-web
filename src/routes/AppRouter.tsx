import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "@pages/Home";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
