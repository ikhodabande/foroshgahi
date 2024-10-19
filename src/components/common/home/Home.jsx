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
      <header className="w-full flex items-center justify-center my-4  fixed z-10">
        <SearchModule />
      </header>
      <main className="w-full flex flex-col items-center justify-center absolute top-16 left-[50%] -translate-x-[50%] mx-2 ">
       <div className="flex flex-col sticky top-16 ">
       <div className="w-full flex items-center justify-between sm:justify-center">
          <div className="flex">
            <AvatarModule />
            <AvatarModule />
          </div>
          <SearchSection />
        </div>
        <div className="w-full flex items-center justify-center ">
          <div className="flex items-center justify-center mx-3">
            <ButtonModule name={"دمو"} type={"primary"} size={"80px"} />
            <ButtonModule name={"لیست"} type={""} size={"80px"} />
          </div>
          <ButtonModule name={"جستجو"} type={""} size={"150px"} />
        </div>
       </div>

        <div className="w-full flex items-center justify-center px-2">
          <SearchField />
        </div>
        <div className="w-full flex items-center justify-center px-2">
          <CatagoriesField/>
        </div>
      </main>
    </>
  );
};
