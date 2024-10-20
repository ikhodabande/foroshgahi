import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import CategoriesPage from "./pages/categories/CategoriesPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/categories" element={<CategoriesPage/>} />
      </Routes>
    </>
  );
};
