import React from "react";
import EmptyCart from "../../modules/empty-cart/EmptyCart";
import NotLoginUser from "../login/not-login-user/NotLoginUser";

export const Cart = () => {
  return (
    <>
      <header>
        <p  className="w-full text-sm text-center py-4 font-iranyekanBold border-b-2 border-logo">سبد خرید</p>
      </header>
      <main className=" flex flex-col items-center justify-center">
        <NotLoginUser/>
        <EmptyCart emptyMsg={"سبد خرید شما خالی است!"} />
      </main>
    </>
  );
};
