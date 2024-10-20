import React from "react";
import { HiOutlineLogin } from "react-icons/hi";
import { FaChevronLeft } from "react-icons/fa";

export default function NotLoginUser() {
  return (
    <div className="w-[85vw] h-[120px] flex flex-col justify-center border rounded shadow-lg my-10">
      <div className="flex items-center  justify-between  px-2">
        <div className="flex items-center justify-center ">
          <HiOutlineLogin className="text-menu-lg mx-1 text-logo" />
          <p className="text-sm font-iranyekanBold">ورود به حساب کاربری</p>
        </div>
        <FaChevronLeft className="text-display-lg text-gray-400" />
      </div>
      <p className="text-xs px-10 text-gray-500">برای مشاهده محصولات داخل سبد خرید وارد حساب کاربری خود شوید.</p>
    </div>
  );
}
