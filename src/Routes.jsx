import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { LoginPage } from "./pages/login/LoginPage";
import CategoriesPage from "./pages/categories/CategoriesPage";
import ProductsPage from "./pages/products/ProductsPage";
import PrivateRoute from "./auth/PrivateRoute";
import ProfilePage from "./pages/profile/ProfilePage";
import CartPage from "./pages/cart/CartPage";
import NotFound from "./pages/404/NotFound";
import OrderPage from "./pages/order/OrderPage";
import CalltousPage from "./pages/calltous/CalltousPage";
import RulesPage from "./pages/rules/RulesPage";
import NotificationsPage from "./pages/notifications/NotificationsPage";
import TicketsPage from "./pages/tickets/TicketsPage";
import SupportPage from "./pages/support/SupportPage";
import SendTicketPage from "./pages/tickets/SendTicketPage";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage/>} />
      <Route path="/order" element={<OrderPage/>} />
      <Route path="/call" element={<CalltousPage/>} />
      <Route path="/rulls" element={<RulesPage/>} />
      <Route path="/notifications" element={<NotificationsPage/>} />
      <Route path="/tickets" element={<TicketsPage/>} />
      <Route path="/support" element={<SupportPage/>} />
      <Route path="/send-ticket" element={<SendTicketPage/>} />
      <Route 
        path="/profile" 
        element={<PrivateRoute element={<ProfilePage />} />} 
      />
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
};
