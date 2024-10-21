import React from "react";
import ButtonModule from "../../../modules/button-module/ButtonModule";

export default function HomeBtnItems() {
    const data = [
        {
            name:"کالاهای پرفروش"
        },
        {
            name: "کالاهای تخفیف دار"
        },
        {
            name: "کالاهای جدید"
        },
        {
            name: "کالاهای محبوب"
        }
    ]
  return (
    <>
      <div className="max-w-[96vw] pr-[80px] flex items-center justify-center overflow-x-scroll">
        {data.map((item, index)=>
        <ButtonModule key={index} name={item.name}  />)}
        
      </div>
    </>
  );
}
