import React from "react";
import { ProductsCard } from "../../products/products-card/ProductsCard";

export const SearchField = () => {
  return (
    <>
      <div className="w-full my-1 ">
        <p className="mb-2 mx-2">جستجو</p>
        <div className="flex justify-around flex-nowrap overflow-x-auto">
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <ProductsCard key={index} />
            ))}
        </div>
      </div>
    </>
  );
};
