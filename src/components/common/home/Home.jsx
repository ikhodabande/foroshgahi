import React from "react";
import SearchModule from "../../modules/search-module/SearchModule";
import { SearchSection } from "../../modules/search-module/search-section/SearchSection";
import { AvatarModule } from "../../modules/avatar-module/AvatarModule";
import HomeBtnItems from "./home-btn-items/HomeBtnItems";
import { BestSellField } from "../products/BestSell-field/BestSellField";
import { TrendSellField } from "../products/TrendSell-field/TrendSellField";
import NewProductsField from "../products/newProducts-field/NewProductsField";
import AllProducts from "../products/all-products/AllProducts";

export const Home = () => {
  return (
    <>
      <header className="fixed top-0 w-full h-16 flex items-center justify-center bg-white z-10 mb-4">
        <SearchModule companyName="وبکام" />
      </header>
      <main className="w-[100vw] flex flex-col items-center justify-center pt-20 mx-auto ">
        <div className="flex flex-col items-center justify-center bg-white pb-2  h-full">
          <div className="flex items-center justify-center w-[100vw] px-2">
            <div>
              <SearchSection />
            </div>
            <div className="flex items-center justify-center pr-16 overflow-x-scroll snap-proximity snap-x scroll-smooth">
              <AvatarModule />
            </div>
          </div>
          <HomeBtnItems />
        </div>

        <div className="flex flex-col items-center justify-center w-full sm:max-w-[370px] pb-20">
          <BestSellField />
          <TrendSellField />
          <NewProductsField/>
          <AllProducts/>
        </div>
      </main>
    </>
  );
};
