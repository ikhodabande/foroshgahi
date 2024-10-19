import React from 'react'

export const SearchSection = () => {
  return (
    <>
     <div className='w-[150px] h-[150px] border bg-webcom-gradient rounded-xl relative'>
      <p className='text-white mt-4 mx-2 text-sm w-full'>محصولات فروشگاهی</p>
      <p className='text-white mx-2 text-lg font-iranyekanBold'>وبکام </p>
        <div className='w-[90px] h-6 rounded-full bg-white absolute bottom-2 right-1 shadow-lg '>
           <p className='text-xs w-full text-center font-iranyekanBold hover:cursor-pointer '>بیشتر ببینید</p>
        </div>
     </div>
    </>
  )
}
