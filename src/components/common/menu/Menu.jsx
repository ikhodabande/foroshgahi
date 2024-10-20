import React, { useState } from "react";
import {
  RiHome2Line,
  RiShoppingBag4Line,
  RiShoppingBag4Fill,
  RiProfileLine,
  RiProfileFill,
  RiShoppingCartLine,
} from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Menu = () => {
  // State to track the active menu item
  const [activeMenu, setActiveMenu] = useState("خانه");

  const data = [
    {
      name: "خانه",
      icon:
        activeMenu === "خانه" ? (
          <RiHome2Line className="text-menu-lg fill-current" />
        ) : (
          <RiHome2Line className="text-menu-lg" />
        ),
      link: "",
    },
    {
      name: "دسته بندی",
      icon:
        activeMenu === "دسته بندی" ? (
          <BiSolidCategory className="text-menu-lg" />
        ) : (
          <TbCategory className="text-menu-lg" />
        ),
      link: "/categories",
    },
    {
      name: "سبد خرید",
      icon: <RiShoppingCartLine className="text-menu-lg" />, // No filled icon available, remains the same
      link: "",
    },
    {
      name: "سفارشات",
      icon:
        activeMenu === "سفارشات" ? (
          <RiShoppingBag4Fill className="text-menu-lg" />
        ) : (
          <RiShoppingBag4Line className="text-menu-lg" />
        ),
      link: "",
    },
    {
      name: "پروفایل",
      icon:
        activeMenu === "پروفایل" ? (
          <RiProfileFill className="text-menu-lg" />
        ) : (
          <RiProfileLine className="text-menu-lg" />
        ),
      link: "",
    },
  ];

  // Handle menu item click
  const handleMenuClick = (name) => {
    setActiveMenu(name);
  };

  return (
    <div className="h-[60px] sm:max-w-[370px] mx-auto flex items-center justify-around py-1 bg-white border-t-2">
      {data.map((item) => (
        <Link
          to={item.link}
          key={item.name}
          onClick={() => handleMenuClick(item.name)}
          className={`flex flex-col gap-1 items-center ${
            activeMenu === item.name ? "text-black" : "text-gray-500"
          }`}
        >
          <i>{item.icon}</i>
          <p className="text-xxs font-iranyekanBold">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};
