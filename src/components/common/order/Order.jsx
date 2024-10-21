import React from "react";
import EmptyCart from "../../modules/empty-cart/EmptyCart";
import NotLoginUser from "../login/not-login-user/NotLoginUser";
import PageHeader from "../../modules/pageHeader-module/PageHeader";

export default function Order() {
  return (
    <>
      <header>
        <PageHeader PageName={"سفارش های من"} />
      </header>
      <main className=" flex flex-col items-center justify-center pt-16">
        <NotLoginUser />
        <EmptyCart emptyMsg={"سبد سفارش شما خالی است!"} />
      </main>
    </>
  );
}
