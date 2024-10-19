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
      icon: <BiSolidCategory className="text-menu-lg" />,
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
    <div className="h-[60px] flex items-center justify-around py-1 bg-background">
      {data.map((item) => (
        <Link className="flex flex-col items-center">
          <i>{item.icon}</i>
          <p className="text-xs">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};
