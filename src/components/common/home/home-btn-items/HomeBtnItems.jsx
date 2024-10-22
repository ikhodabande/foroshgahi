import React from "react";
import ButtonModule from "../../../modules/button-module/ButtonModule";

export default function HomeBtnItems({data}) {
 
  return (
    <>
      <div className="max-w-[96vw]  flex items-center justify-center snap-proximity snap-x overflow-x-scroll scroll-smooth my-2">
        {data.map((item) => (
          <ButtonModule id={item.groupId}  hidden={!item.show} key={item.id} name={item.groupName} />
        ))}
      </div>
    </>
  );
}
