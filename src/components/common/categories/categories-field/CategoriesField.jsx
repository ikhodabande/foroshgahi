import React from 'react'
import { ProductsCard } from '../../../modules/products/products-card/ProductsCard'

export const CategoriesField = () => {
  return (
    <>
    <div className='w-full flex flex-col '>
    <p className='mx-4 my-2 font-iranyekanBold'>دسته بندی</p>
    <div className="flex justify-center gap-2 flex-wrap overflow-x-auto pb-20">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <ProductsCard key={index} />
            ))}
        </div>
    </div>
    </>
  )
}
