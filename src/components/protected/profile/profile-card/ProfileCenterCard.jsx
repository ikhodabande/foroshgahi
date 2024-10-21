import React from "react";
import { BiChevronLeft, BiRuler, BiSupport } from "react-icons/bi";
import { MdErrorOutline } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";
import { IoLogOutOutline } from "react-icons/io5";
import { TiMessage } from "react-icons/ti";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { PiPhoneCall } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { RiMailSendLine } from "react-icons/ri";

export default function ProfileCenterCard() {
  const data = [
    {
      name: "ارسال تیکت به مدیریت",
      icon: <RiMailSendLine className="mx-2 text-menu-lg" />,
      link: "/send-ticket",
    },
    {
      name: "تیکت ها",
      icon: <TiMessage className="mx-2 text-menu-lg" />,
      link: "/tickets",
    },
    {
      name: "اعلانات",
      icon: <HiOutlineBellAlert className="mx-2 text-menu-lg" />,
      link: "/notifications",
    },
    {
      name: "پشتیبانی",
      icon: <BiSupport className="mx-2 text-menu-lg" />,
      link: "/support",
    },
    {
      name: "قوانین و مقررات",
      icon: <MdErrorOutline className="mx-2 text-menu-lg" />,
      link: "/rulls",
    },
    {
      name: "اینستاگرام",
      icon: <FaInstagram className="mx-2 text-menu-lg" />,
      link: "",
    },
    {
      name: "تماس با ما",
      icon: <PiPhoneCall className="mx-2 text-menu-lg" />,
      link: "/call",
    },

    {
      name: "خروج از حساب کاربری",
      icon: <IoLogOutOutline className="mx-2 text-display-lg" />,
      link: "/login",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <Link to={item.link} key={index}>
          <Button className="w-[97vw] h-[70px] shadow-md rounded-lg border flex items-center justify-between my-1 px-4  ">
            <div className="flex items-center ">
              {item.icon}
              <p className="font-iranyekanBold text-sm">{item.name}</p>
            </div>
            <div>
              <BiChevronLeft className="text-menu-lg" />
            </div>
          </Button>
        </Link>
      ))}
    </>
  );
}
