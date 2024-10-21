import React from 'react'

export const CategoriesCard = ({categorieItems}) => {
  return (
    <div className='flex flex-col  items-center'>
        <div className='w-[150px] h-[120px] shadow-lg border rounded-2xl m-2 bg-white'></div>
        <p className='text-xs font-iranyekanBold'>{categorieItems}</p>
    </div>
  )
}
