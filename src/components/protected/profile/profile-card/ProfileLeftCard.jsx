import React from "react";
import { FaInstagram } from "react-icons/fa";


export default function ProfileLeftCard() {
  return (
    <div className="w-[39vw] h-[150px] rounded-lg border shadow-lg flex flex-col items-center justify-center  bg-white">
      <div className="w-[90%] h-[90%]  rounded-lg shadow flex flex-col items-center justify-center">
        <FaInstagram className="text-red-500 text-xl drop-shadow-lg shadow-red-500/50"/>
        <p className="text-xs my-1">اینستاگرام</p>
      </div>
    </div>
  );
}
