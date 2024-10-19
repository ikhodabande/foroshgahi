import React from "react";
import { IoPerson } from "react-icons/io5";

export const AvatarModule = () => {
  return (
    <>
      <div className="w-[80px] h-[150px]  flex flex-col items-center justify-center mx-1">
        <div className="w-[60px] h-[60px] rounded-full bg-background shadow-lg flex items-center justify-center">
          <IoPerson  className="text-lg"/>
        </div>
        <div className="flex flex-col items-center justify-center m-2">
            <p>کاربر</p>
            <p>33%</p>
        </div>
      </div>
    </>
  );
};
