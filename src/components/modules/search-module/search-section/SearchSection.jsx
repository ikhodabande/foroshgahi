import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export const SearchSection = () => {
  return (
    <>
      <div className="w-[150px] h-[150px] border bg-white text-logo rounded-xl relative shadow-lg shadow-orange-500/10">
        <p className=" mt-4 mx-2 text-sm w-full">محصولات فروشگاهی</p>
        <p className=" mx-2 text-lg font-iranyekanBold">وبکام </p>
        <Link to={"/products"}>
          <Button className=" h-6 rounded-full text-white absolute bottom-2 right-1 shadow-lg text-center bg-logo ">
            <span  className="text-xxs font-iranyekanBold ">مشاهده محصولات </span>
          </Button>
        </Link>
      </div>
    </>
  );
};
