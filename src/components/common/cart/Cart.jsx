import React from "react";
import EmptyCart from "../../modules/empty-cart/EmptyCart";
import NotLoginUser from "../login/not-login-user/NotLoginUser";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "../../../store/slices/authslice/authSlice";

export const Cart = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  return (
    <>
      <header>
        <PageHeader PageName={"سبد خرید"} />
      </header>
      <main className=" flex flex-col items-center justify-center pt-16">
        {isAuthenticated ? (
          <>
            <div></div>
          </>
        ) : (
          <NotLoginUser />
        )}
        <EmptyCart emptyMsg={"سبد خرید شما خالی است!"} />
      </main>
    </>
  );
};
