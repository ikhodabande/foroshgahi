import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";
import {
  RiShoppingBag4Line,
  RiShoppingBag4Fill,
  RiProfileLine,
  RiProfileFill,
} from "react-icons/ri";
import { RiShoppingCartLine } from "react-icons/ri";

import { Link } from "react-router-dom";

export const Menu = () => {
  const data = [
    {
      name: "خانه",
      icon: <RiHome2Line className="text-menu-lg" />,
      link: "",
    },
    {
      name: "دسته بندی",
      icon: <TbCategory className="text-menu-lg" />,
      link: "",
    },
    {
      name: "سبد خرید",
      icon: <RiShoppingCartLine  className="text-menu-lg" />,
      link: "",
    },
    {
      name: "سفارشات",
      icon: <RiShoppingBag4Line className="text-menu-lg" />,
      link: "",
    },
    {
      name: "پروفایل",
      icon: <RiProfileLine className="text-menu-lg" />,
      link: "",
    },
  ];
  return (
    <div className="h-[60px] sm:max-w-[370px] mx-auto flex items-center justify-around py-1 bg-white border-t-2">
      {data.map((item) => (
        <Link className="flex flex-col gap-1 items-center text-gray-500">
          <i>{item.icon}</i>
          <p className="text-xxs text-gray-500 font-iranyekanBold">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};
