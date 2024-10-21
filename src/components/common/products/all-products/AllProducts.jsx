import React from "react";
import { ProductsCard } from "../products-card/ProductsCard";

export default function AllProducts() {
  return (
    <>
      <div className="w-full flex flex-col my-2">
        <p className="mx-4 my-2 font-iranyekanBold">همه کالاها</p>
        <div className="flex justify-center gap-2 flex-wrap overflow-x-auto ">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <ProductsCard key={index} />
            ))}
        </div>
      </div>
    </>
  );
}
