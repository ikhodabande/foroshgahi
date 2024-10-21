import React from "react";
import EmptyCart from "../../modules/empty-cart/EmptyCart";
import NotLoginUser from "../login/not-login-user/NotLoginUser";
import PageHeader from "../../modules/pageHeader-module/PageHeader";

export const Cart = () => {
  return (
    <>
      <header>
        <PageHeader PageName={"سبد خرید"}/>
      </header>
      <main className=" flex flex-col items-center justify-center pt-16">
        <NotLoginUser/>
        <EmptyCart emptyMsg={"سبد خرید شما خالی است!"} />
      </main>
    </>
  );
};
