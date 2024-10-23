import React from "react";
import EmptyCart from "../../modules/empty-cart/EmptyCart";
import NotLoginUser from "../login/not-login-user/NotLoginUser";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../../store/slices/authslice/authSlice";
import PageHeader from "../../modules/pageHeader-module/PageHeader";

export default function Order() {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      <header>
        <PageHeader PageName={"سفارش های من"} />
      </header>
      <main className=" flex flex-col items-center justify-center pt-16">
        {isAuthenticated ? (
          <>
            <div></div>
          </>
        ) : (
          <NotLoginUser />
        )}
        <EmptyCart emptyMsg={"سبد سفارش شما خالی است!"} />
      </main>
    </>
  );
}
