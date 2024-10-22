import React from "react";
import { ProductsCard } from "../products-card/ProductsCard";
import Item from "antd/es/list/Item";

export const BestSellField = ({data}) => {
  // const data = [
  //   {
  //     name: "کفش",
  //     price: "200",
  //     image: "https://picsum.photos/150/140",
  //   },
  //   {
  //     name: "لباس",
  //     price: "200",
  //     image: "https://picsum.photos/150/140",
  //   },
  //   {
  //     name: "پیراهن",
  //     price: "200",
  //     image: "https://picsum.photos/150/140",
  //   },
  //   {
  //     name: "فرش",
  //     price: "200",
  //     image: "https://picsum.photos/150/140",
  //   },
  //   {
  //     name: "موبایل",
  //     price: "200",
  //     image: "https://picsum.photos/150/140",
  //   },
  // ];
  return (
    <>
      <div className="w-full my-2 mx-2 ">
        <p className="mb-4 mx-4 font-iranyekanBold">{data.groupName} </p>
        <div className="flex  items-center flex-nowrap overflow-x-auto snap-mandatory snap-x px-2  scroll-px-6">
          
            {/* <ProductsCard
              customeClass={"min-w-[150px] min-h-[150px]"}
              productImg={data.groupName}
              productPrice={item.price}
              productName={item.name}
              key={index}
              imgH={140}
              imgW={149}
            /> */}
       
        </div>
      </div>
    </>
  );
};
