import React from 'react';
import { CategoriesCard } from './categories-card/CategoriesCard';
import SearchModule from '../../modules/search-module/SearchModule';

export const Categories = () => {
  // Sample category data
  const categories = [
    { id: 1, name: 'نوشیدنی' },
    { id: 2, name: 'خوراکی' },
    { id: 3, name: 'پوشاک' },
    { id: 4, name: 'لوازم خانگی' },
    { id: 5, name: 'الکترونیک' },
    { id: 6, name: 'کتاب' },
  ];

  return (
    <>
      <header className="fixed top-0 w-full h-16 flex items-center justify-center bg-white z-10 mb-4">
        <SearchModule companyName={"وبکام"} />
      </header>
      <main className=' pt-16 grid grid-cols-3 gap-3 mr-4 pb-20'>
        {categories.map((category) => (
          <CategoriesCard key={category.id} categorieItems={category.name} />
        ))}
      </main>
    </>
  );
};
