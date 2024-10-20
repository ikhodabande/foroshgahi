import React from 'react'

export const CategoriesCard = ({categorieItems}) => {
  return (
    <div className='flex flex-col  items-center'>
        <div className='w-[80px] h-[100px] shadow-lg border rounded-2xl m-2 bg-webcom-gradient'></div>
        <p className='text-sm'>{categorieItems}</p>
    </div>
  )
}
