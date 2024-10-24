import { Button } from "antd";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

export const HomeTitleSection = ({Notif, icon, }) => {
  return (
    <>
      <div className="w-full h-full sm:w-[160px] sm:h-[150px]   bg-white text-logo rounded-xl relative shadow-lg  flex flex-col items-center">
       <img src={icon} className="object-cover w-full h-full rounded-lg shadow-lg" alt="" />
        {/* <p className=" mt-4  text-sm ">مجصولات </p> */}
        {/* <p className=" px-6 text-lg w-full text-start font-iranyekanBold">
          وبکام
        </p> */}
        {/* <Link to={"/products"}>
          <Button className=" h-6 rounded-full text-white absolute bottom-0 right-4 shadow-lg text-center bg-logo ">
            <span className="text-xxs font-iranyekanBold ">
              مشاهده محصولات
            </span>
            <span>
              <BiChevronLeft />
            </span>
          </Button>
        </Link> */}
      </div>
    </>
  );
};
