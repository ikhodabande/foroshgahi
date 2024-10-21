import React from "react";
import { IoPerson } from "react-icons/io5";

export const AvatarModule = () => {
  const data = [
    {
      name: "کفش",
    },
    {
      name: "کفش",
    },
    {
      name: "کفش",
    },
    {
      name: "کفش",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className="w-[80px] h-[150px] snap-end flex flex-col items-center justify-center mx-1  ">
          <div className="w-[60px] h-[60px] rounded-full bg-white shadow-lg flex items-center justify-center">
            <div className="w-[90%] h-[90%] rounded-full bg-webcom-gradient shadow-lg flex items-center justify-center">
              <IoPerson className="text-menu-lg text-white" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center my-3">
            <p className="text-sm">{item.name}</p>
          </div>
        </div>
      ))}
    </>
  );
};
