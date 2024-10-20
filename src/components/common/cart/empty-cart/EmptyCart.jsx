import React from "react";
import emptyCart from '../../../../assets/images/static/emptyCart.png'

export default function EmptyCart() {
  return (
    <div className="h-[250px] w-full flex flex-col shadow pb-20 items-center justify-center ">
      <img className="w-[50vw]" src={emptyCart} alt="سبد خرید خالی " />
      <p className="font-iranyekanBold my-2">سبد خرید شما خالی است!</p>
      <p className="text-xs my-">میتوانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
    </div>
  );
}
