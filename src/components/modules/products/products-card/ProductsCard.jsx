import React from "react";

export const ProductsCard = ({ productName, productPrice, productImg }) => {
  return (
    <>
      <div className="min-w-[150px] min-h-[150px] mx-2 border rounded-lg shadow">
        <img className="h-[80%] shadow rounded object-cover" src={productImg} alt="" />
        <div className="h-[20%] flex items-center justify-between px-2 py-2">
          <p className="text-sm font-iranyekanBold">{productName}</p>
          <p className="text-xs">{productPrice}هزارتومان</p>
        </div>
      </div>
    </>
  );
};
