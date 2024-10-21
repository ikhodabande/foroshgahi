import { Button } from "antd";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";
import { Link } from "react-router-dom";

export const HomeTitleSection = () => {
  return (
    <>
      <div className="w-[180px] sm:w-[350px] h-[150px]  border bg-white text-logo rounded-xl relative shadow-lg shadow-orange-500/10 flex flex-col items-center">
        <p className=" mt-4  text-sm ">محصولات فروشگاهی</p>
        <p className=" px-6 text-lg w-full text-start font-iranyekanBold">
          وبکام
        </p>
        <Link to={"/products"}>
          <Button className=" h-6 rounded-full text-white absolute bottom-2 right-4 shadow-lg text-center bg-logo ">
            <span className="text-xxs font-iranyekanBold ">
              مشاهده محصولات
            </span>
            <span>
              <BiChevronLeft />
            </span>
          </Button>
        </Link>
      </div>
    </>
  );
};
