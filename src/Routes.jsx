import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import ProductsPage from "./pages/products/ProductsPage";
import PrivateRoute from "./auth/PrivateRoute";
import ProfilePage from "./pages/profile/ProfilePage";
import CartPage from "./pages/cart/CartPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage/>} />
      <Route 
        path="/profile" 
        element={<PrivateRoute element={<ProfilePage />} />} 
      />
    </Routes>
  );
};
