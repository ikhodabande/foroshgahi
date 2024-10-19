import React from "react";
import SearchModule from "../../modules/search-module/SearchModule";
import { SearchSection } from "../../modules/search-module/search-section/SearchSection";
import { AvatarModule } from "../../modules/avatar-module/AvatarModule";
import ButtonModule from "../../modules/button-module/ButtonModule";
import { SearchField } from "../../modules/search-module/search-field/SearchField";
import { CatagoriesField } from "../categories/categories-field/CatagoriesField";

export const Home = () => {
  return (
    <>
      <header className="w-full top-0 h-16 flex items-center justify-center mb-4 bg-white fixed z-10">
        <SearchModule />
      </header>
      <main className="w-full flex flex-col items-center justify-center absolute top-16 left-[50%] -translate-x-[50%]  ">
        <div className="flex flex-col sticky top-16 w-full px-3 bg-white pb-2">
          <div className="w-full h-full flex items-center justify-between sm:justify-center ">
            <SearchSection />
            <div className="flex ml-2">
              <AvatarModule />
              <AvatarModule />
            </div>
          </div>
          <div className="w-full flex items-center justify-center ">
            <ButtonModule name={"جستجو"} type={""} size={"150px"} />
            <div className="flex items-center justify-center mx-3">
              <ButtonModule name={"دمو"} type={"primary"} size={"80px"} />
              <ButtonModule name={"لیست"} type={""} size={"80px"} />
            </div>
          </div>
        </div>

        <div className="w-full sm:max-w-[370px] flex items-center justify-center">
          <SearchField />
        </div>
        <div className="w-full sm:max-w-[370px] flex items-center justify-center ">
          <CatagoriesField />
        </div>
      </main>
    </>
  );
};
