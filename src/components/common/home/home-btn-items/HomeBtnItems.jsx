import React from "react";
import ButtonModule from "../../../modules/button-module/ButtonModule";

export default function HomeBtnItems() {
  const data = [
    {
      name: "کالاهای پرفروش",
    },
    {
      name: "کالاهای تخفیف دار",
    },
    {
      name: "کالاهای جدید",
    },
    {
      name: "کالاهای محبوب",
    },
  ];
  return (
    <>
      <div className="max-w-[96vw] pr-[80px] flex items-center justify-center snap-proximity snap-x overflow-x-scroll scroll-smooth my-2">
        {data.map((item, index) => (
          <ButtonModule key={index} name={item.name} />
        ))}
      </div>
    </>
  );
}
