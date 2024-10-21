import React, { useEffect, useState } from "react";
import {
  RiHome2Line,
  RiHome2Fill,
  RiShoppingBag4Line,
  RiShoppingBag4Fill,
  RiProfileLine,
  RiProfileFill,
  RiShoppingCartLine,
  RiShoppingCartFill,
} from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { BiSolidCategory } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { IoPersonOutline, IoPerson } from "react-icons/io5";

export const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const { pathname } = useLocation();

  const data = [
    {
      name: "خانه",
      icon: activeMenu === "/" ? <RiHome2Fill className="text-menu-lg" /> : <RiHome2Line className="text-menu-lg" />,
      link: "/",
    },
    {
      name: "دسته بندی",
      icon: activeMenu === "/categories" ? <BiSolidCategory className="text-menu-lg" /> : <TbCategory className="text-menu-lg" />,
      link: "/categories",
    },
    {
      name: "سبد خرید",
      icon: activeMenu === "/cart" ? <RiShoppingCartFill className="text-menu-lg" /> : <RiShoppingCartLine className="text-menu-lg" />,
      link: "/cart",
    },
    {
      name: "سفارشات",
      icon: activeMenu === "/order" ? <RiShoppingBag4Fill className="text-menu-lg" /> : <RiShoppingBag4Line className="text-menu-lg" />,
      link: "/order",
    },
    {
      name: "پروفایل",
      icon: activeMenu === "/profile" ? <IoPerson className="text-menu-lg" /> : <IoPersonOutline className="text-menu-lg" />,
      link: "/profile",
    },
  ];

  useEffect(() => {
    // Set active menu based on the current pathname
    setActiveMenu(pathname);
  }, [pathname]);

  return (
    <div className="h-[60px] sm:max-w-[370px] mx-auto flex items-center justify-around py-1 bg-white border-t-2">
      {data.map((item) => (
        <Link
          to={item.link}
          key={item.name}
          onClick={() => setActiveMenu(item.link)}
          className={`flex flex-col gap-1 items-center py-3 px-4 ${activeMenu === item.link ? "text-black" : "text-gray-500"}`}
        >
          <i>{item.icon}</i>
          <p className="text-xxs font-iranyekanBold">{item.name}</p>
        </Link>
      ))}
    </div>
  );
};
