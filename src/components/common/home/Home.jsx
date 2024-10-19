import React from "react";
import SearchModule from "../../modules/search-module/SearchModule";
import { SearchSection } from "../../modules/search-module/search-section/SearchSection";
import { AvatarModule } from "../../modules/avatar-module/AvatarModule";

export const Home = () => {
  return (
    <>
      <header className="w-full flex items-center justify-center my-4  mx-2">
        <SearchModule />
      </header>
      <main>
        <div className="w-full flex items-center justify-between sm:justify-center">
          <div className="flex">
            <AvatarModule />
            <AvatarModule />
          </div>
          <SearchSection />
        </div>
      </main>
    </>
  );
};
