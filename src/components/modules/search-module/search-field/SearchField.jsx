import React from "react";
import { ProductsCard } from "../../products/products-card/ProductsCard";

export const SearchField = () => {
  const data = [
    {
      name: "کفش",
      price: "200",
      image: "https://picsum.photos/150/150",
    },
    {
      name: "لباس",
      price: "200",
      image: "https://picsum.photos/150/150",
    },
    {
      name: "پیراهن",
      price: "200",
      image: "https://picsum.photos/150/150",
    },
    {
      name: "فرش",
      price: "200",
      image: "https://picsum.photos/150/150",
    },
    {
      name: "موبایل",
      price: "200",
      image: "https://picsum.photos/150/150",
    },
  ];
  return (
    <>
      <div className="w-full my-1 mx-2">
        <p className="mb-2 mx-2">جستجو</p>
        <div className="flex  items-center flex-nowrap overflow-x-auto ">
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
};
