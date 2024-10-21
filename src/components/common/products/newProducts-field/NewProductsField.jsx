import React from "react";
import { ProductsCard } from "../products-card/ProductsCard";

export default function NewProductsField() {
  const data = [
    {
      name: "کفش",
      price: "200",
      image: "https://picsum.photos/150/140",
    },
    {
      name: "لباس",
      price: "200",
      image: "https://picsum.photos/150/140",
    },
    {
      name: "پیراهن",
      price: "200",
      image: "https://picsum.photos/150/140",
    },
    {
      name: "فرش",
      price: "200",
      image: "https://picsum.photos/150/140",
    },
    {
      name: "موبایل",
      price: "200",
      image: "https://picsum.photos/150/140",
    },
  ];
  return (
    <>
      <div className="w-full my-2 mx-2">
        <p className="mb-4 mx-4 font-iranyekanBold  ">جدیدترین کالاها</p>
        <div className="flex  items-center flex-nowrap overflow-x-auto snap-mandatory snap-x  scroll-px-6">
          {data.map((item, index) => (
            <ProductsCard
              productImg={item.image}
              productPrice={item.price}
              productName={item.name}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
