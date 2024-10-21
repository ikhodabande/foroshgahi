import React from 'react'
import EmptyCart from "../../modules/empty-cart/EmptyCart";
import NotLoginUser from "../login/not-login-user/NotLoginUser";

export default function Order() {
  return (
    <>
    <header>
       <p  className="w-full text-center text-sm py-4 font-iranyekanBold border-b-2 border-logo ">سفارش های من</p> 
    </header>
    <main className=" flex flex-col items-center justify-center">
        <NotLoginUser/>
        <EmptyCart emptyMsg={"سبد سفارش شما خالی است!"}/>
      </main>
    </>
  )
}
