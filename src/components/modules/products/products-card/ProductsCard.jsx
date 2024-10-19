import React from 'react'

export const ProductsCard = ({productName, productPrice, productImg}) => {
  return (
    <>
    <div className='min-w-[150px] min-h-[150px] mx-2 border rounded-lg shadow'>
      <img className='h-[80%] bg-black' src={productImg} alt="" />
     <div className='flex items-center justify-between px-2'>
     <p>{productName}</p>
     <p>{productPrice}</p>
     </div>
    </div>
    </>
  )
}
