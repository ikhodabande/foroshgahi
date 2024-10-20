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
      <header className="w-full top-0 h-16 flex items-center justify-center mb-4  bg-white fixed z-10">
        <SearchModule companyName={'وبکام'}/>
      </header>
      <main className="w-full flex flex-col items-center justify-center pt-20  ">
        <div className="flex flex-col items-center justify-center mr-4  bg-white pb-2">
          <div className=" h-full flex items-center justify-between sm:justify-center ">
            <SearchSection />
            <div className="flex items-center justify-center">
              <AvatarModule />
              <AvatarModule />
            </div>
          </div>
          <div className=" flex items-center justify-center  ">
            <ButtonModule name={"جستجو"} type={""} size={"150px"} />
            <div className="flex items-center justify-center ">
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
