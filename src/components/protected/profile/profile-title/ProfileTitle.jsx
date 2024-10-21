import { Avatar } from 'antd';
import React from 'react'
import { HiOutlineBellAlert } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";

export default function ProfileTitle() {
  return (
    <div className="w-[97vw] h-[120px] border mx-auto mt-3 rounded shadow-lg flex gap-2 items-center justify-between px-3 bg-white">
          <div className="h-[100px] w-[100px] rounded-full border shadow-lg shadow-orange-600/60 flex flex-col items-center justify-center ">
            <Avatar className='bg-webcom-gradient ' size={90} icon={<LuUser2 />}/>
          </div>
          <div>
            <p className="text-sm font-iranyekanBold">وبکام مشتری</p>
            <p className="text-xs text-gray-500">
              موجودی: <span>200هزارتومان</span>
            </p>
          </div>
          <div>
            <HiOutlineBellAlert className="text-menu-lg text-yellow-500 " />
          </div>
          
        </div>
  )
}
