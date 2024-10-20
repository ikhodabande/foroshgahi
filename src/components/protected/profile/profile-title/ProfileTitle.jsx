import React from 'react'
import { HiOutlineBellAlert } from "react-icons/hi2";

export default function ProfileTitle() {
  return (
    <div className="w-[95vw] h-[120px] border mx-auto mt-8 rounded shadow-lg flex gap-2 items-center justify-between px-3">
          <div className="h-[100px] w-[100px] rounded-full border shadow-lg"></div>
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
