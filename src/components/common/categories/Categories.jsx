import React from "react";
import { CategoriesCard } from "./categories-card/CategoriesCard";
import SearchModule from "../../modules/search-module/SearchModule";
import { useFetchGroups } from "../../../api/useQuery/GetGroups";

export const Categories = () => {
  // Sample category data
  const categories = [
    { id: 1, name: "نوشیدنی" },
    { id: 2, name: "خوراکی" },
    { id: 3, name: "پوشاک" },
    { id: 4, name: "لوازم خانگی" },
    { id: 5, name: "الکترونیک" },
    { id: 6, name: "کتاب" },
  ];

  const { data: groups, isLoading, isError } = useFetchGroups();

  return (
    <>
      <header className="fixed top-0 w-full h-16 flex items-center justify-center bg-white z-10 mb-4">
        <SearchModule companyName={"وبکام"} />
      </header>
      <main className="grid grid-cols-2 gap-2 px-4  py-20">
        {groups.mGroup.map((category) => (
          <CategoriesCard
            id={category.groupId}
            imgSrc={category.link}
            key={category.id}
            categorieItems={category.groupName}
          />
        ))}
      </main>
    </>
  );
};
