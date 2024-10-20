import React from 'react'

export const CategoriesCard = ({categorieItems}) => {
  return (
    <div className='flex flex-col  items-center'>
        <div className='w-[80px] h-[80px] border rounded-full m-2 bg-webcom-gradient'></div>
        <p className='text-sm'>{categorieItems}</p>
    </div>
  )
}
