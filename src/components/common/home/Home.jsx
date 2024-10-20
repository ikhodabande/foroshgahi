import React from "react";
import SearchModule from "../../modules/search-module/SearchModule";
import { SearchSection } from "../../modules/search-module/search-section/SearchSection";
import { AvatarModule } from "../../modules/avatar-module/AvatarModule";
import ButtonModule from "../../modules/button-module/ButtonModule";
import { SearchField } from "../../modules/search-module/search-field/SearchField";
import { CategoriesField } from "../categories/categories-field/CategoriesField"; 

export const Home = () => {
  return (
    <>
      {/* <header className="fixed top-0 w-full h-16 flex items-center justify-center bg-white z-10 mb-4">
        <SearchModule companyName="وبکام" />
      </header> */}
      <main className="flex flex-col items-center justify-center pt-20 w-full">
        <div className="flex flex-col items-center justify-center bg-white pb-2 mr-4 h-full">
          <div className="flex items-center justify-between sm:justify-center w-full">
            <SearchSection />
            <div className="flex items-center justify-center">
              <AvatarModule />
              <AvatarModule />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ButtonModule name="جستجو" size="150px" />
            <div className="flex items-center justify-center">
              <ButtonModule name="دمو" type="primary" size="80px" />
              <ButtonModule name="لیست" size="80px" />
            </div>
          </div>
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
