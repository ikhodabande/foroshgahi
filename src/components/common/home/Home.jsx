import React from "react";
import SearchModule from "../../modules/search-module/SearchModule";
import { SearchSection } from "../../modules/search-module/search-section/SearchSection";
import { AvatarModule } from "../../modules/avatar-module/AvatarModule";
import { SearchField } from "../../modules/search-module/search-field/SearchField";
import { CategoriesField } from "../categories/categories-field/CategoriesField"; 
import HomeBtnItems from "./home-btn-items/HomeBtnItems";

export const Home = () => {
  return (
    <>
      <header className="fixed top-0 w-full h-16 flex items-center justify-center bg-white z-10 mb-4">
        <SearchModule companyName="وبکام" />
      </header>
      <main className="flex flex-col items-center justify-center pt-20 w-full">
        <div className="flex flex-col items-center justify-center bg-white pb-2  h-full">
          <div className="flex items-center justify-between sm:justify-center w-full">
            <SearchSection />
            <div className="flex items-center justify-center">
              <AvatarModule />
              <AvatarModule />
            </div>
          </div>
         <HomeBtnItems/>
        </div>

        <div className="flex items-center justify-center w-full sm:max-w-[370px]">
          <SearchField />
        </div>
        <div className="flex items-center justify-center w-full sm:max-w-[370px]">
          <CategoriesField />
        </div>
      </main>
    </>
  );
};
