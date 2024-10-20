import React from "react";
import EmptyCart from "./empty-cart/EmptyCart";
import NotLoginUser from "../login/not-login-user/NotLoginUser";

export const Cart = () => {
  return (
    <>
      <header>
        <p  className="w-full text-center my-4">سبد خرید</p>
      </header>
      <main className=" flex flex-col items-center justify-center">
        <NotLoginUser/>
        <EmptyCart />
      </main>
    </>
  );
};
