import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const SearchSection = () => {
  return (
    <>
     <div className='w-[150px] h-[150px] border bg-webcom-gradient rounded-xl relative shadow-lg shadow-orange-500/10'>
      <p className='text-white mt-4 mx-2 text-sm w-full'>محصولات فروشگاهی</p>
      <p className='text-white mx-2 text-lg font-iranyekanBold'>وبکام </p>
       <Link to={"/products"}>
       <Button className='w-[90px] h-6 rounded-full bg-white absolute bottom-2 right-1 shadow-lg text-center'>
           <span className='text-xxs font-iranyekanBold'>بیشتر ببینید</span>
        </Button></Link>
     </div>
    </>
  )
}
