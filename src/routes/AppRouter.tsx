import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "@layouts/AppLayout";
import Register from "@pages/Register";
import Home from "@pages/Home";

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
