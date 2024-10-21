import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import { ProductsCard } from "./products-card/ProductsCard";
import SearchModule from "../../modules/search-module/SearchModule";

export const Products = () => {
  return (
    <>
      <header>
        <PageHeader PageName={"محصولات"} />
      </header>
      <main>
        <div className="flex items-center justify-center pt-16 pb-4 sticky top-0">
        <SearchModule companyName={"محصولات وبکام"}/>
        </div>
        <div className="grid grid-cols-3 gap-2 max-w-[100vw] pb-16  mx-auto overflow-x-auto snap-mandatory snap-x px-4 scroll-px-6">
          {Array(20)
            .fill(null)
            .map((_, index) => (
              <ProductsCard
                customeClass={"min-w-[90px] min-h-[90px]"}
                key={index}
                imgH={90}
                imgW={95}
              />
            ))}
        </div>
      </main>
    </>
  );
};
