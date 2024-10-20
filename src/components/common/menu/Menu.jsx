import React, { useState } from "react";
import {
  RiHome2Line,
  RiHome2Fill,
  RiShoppingBag4Line,
  RiShoppingBag4Fill,
  RiProfileLine,
  RiProfileFill,
  RiShoppingCartLine,
  RiShoppingCartFill ,
} from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoPersonOutline, IoPerson  } from "react-icons/io5";

export const Menu = () => {
  // State to track the active menu item
  const [activeMenu, setActiveMenu] = useState("خانه");

  const data = [
    {
      name: "خانه",
      icon:
        activeMenu === "خانه" ? (
          <RiHome2Fill className="text-menu-lg" />
        ) : (
          <RiHome2Line className="text-menu-lg" />
        ),
      link: "/",
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
      icon: activeMenu === "سبد خرید" ? (<RiShoppingCartFill  className="text-menu-lg"/>) : (<RiShoppingCartLine className="text-menu-lg"/>) , // No filled icon available, remains the same
      link: "/cart",
    },
    {
      name: "سفارشات",
      icon:
        activeMenu === "سفارشات" ? (
          <RiShoppingBag4Fill className="text-menu-lg" />
        ) : (
          <RiShoppingBag4Line className="text-menu-lg" />
        ),
      link: "/order",
    },
    {
      name: "پروفایل",
      icon:
        activeMenu === "پروفایل" ? (
          <IoPerson className="text-menu-lg" />
        ) : (
          <IoPersonOutline className="text-menu-lg" />
        ),
      link: "/profile",
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
