import React from 'react'
import { CategoriesCard } from './categories-card/CategoriesCard'
import SearchModule from '../../modules/search-module/SearchModule'

export const Categories = () => {
  return (
    <>
    <header className="fixed top-0 w-full h-16 flex items-center justify-center bg-white z-10 mb-4">
      <SearchModule companyName={"وبکام"}/>
    </header>
    <main>
        <CategoriesCard/>
    </main>
    </>
  )
}
