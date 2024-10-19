import React from 'react'
import { ProductsCard } from '../../../modules/products/products-card/ProductsCard'

export const CatagoriesField = () => {
  return (
    <>
    <div className='w-full flex flex-col '>
    <p className='mx-2 my-2'>دسته بندی</p>
    <div className="flex justify-center gap-2 flex-wrap overflow-x-auto pb-20">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <ProductsCard key={index} />
            ))}
        </div>
    </div>
    </>
  )
}
