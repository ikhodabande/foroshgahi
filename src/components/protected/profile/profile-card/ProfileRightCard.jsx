import React from "react";
import ButtonModule from "../../../modules/button-module/ButtonModule";
import { IoGitMerge } from "react-icons/io5";
import { Button } from "antd";

export default function ProfileRightCard() {
  const data = [
    {
      name: " کالاهای پرفروش",
    },
    {
      name: " کالاهای جدید",
    },
    {
      name: "کالاهای محبوب",
    },
  ];
  return (
    <div className="w-[58vw] h-[150px] rounded-lg shadow-lg border bg-white flex flex-col items-center justify-center">
      {data.map((item, index) => (
        <Button
          key={index}
          className="my-[1.5px] w-[95%] h-10 rounded-lg shadow text-xs border-none font-iranyekanBold"
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
}
