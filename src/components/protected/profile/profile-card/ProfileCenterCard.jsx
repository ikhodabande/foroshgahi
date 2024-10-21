import React from "react";
import { BiChevronLeft, BiSupport } from "react-icons/bi";

export default function ProfileCenterCard() {
  return (
    <div className="w-[97vw] h-[70px] shadow-md rounded-lg border flex items-center justify-between px-4">
      <div className="flex items-center ">
        <BiSupport className="mx-2 text-menu-lg" />
        <p className="font-iranyekanBold">پشتیبانی</p>
      </div>
      <div>
        <BiChevronLeft className="text-menu-lg" />
      </div>
    </div>
  );
}
