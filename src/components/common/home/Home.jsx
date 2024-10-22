import React, { useEffect } from "react";
import SearchModule from "../../modules/search-module/SearchModule";
import { HomeTitleSection } from "./hometitle-section/HomeTitleSection";
import { AvatarModule } from "../../modules/avatar-module/AvatarModule";
import HomeBtnItems from "./home-btn-items/HomeBtnItems";
import { BestSellField } from "../products/BestSell-field/BestSellField";
import { TrendSellField } from "../products/TrendSell-field/TrendSellField";
import NewProductsField from "../products/newProducts-field/NewProductsField";
import AllProducts from "../products/all-products/AllProducts";
import { useFetchGroups } from "../../../api/useQuery/GetGroups";
import { useFetchStartData } from "../../../api/useQuery/StartData";
import { useFetchRelations } from "../../../api/useMutation/GetRelations";

export const Home = () => {
  const { data: groups, isLoading, isError } = useFetchGroups();
  const {
    data: startData,
    isLoading: startDataLoading,
    isError: startDataError,
  } = useFetchStartData();
  const {data: Relations, isLoading: RelationLoading, isError: RelationError} = useFetchRelations();

  if (isLoading) {
    return <div className="text-center">در حال بارگذاری...</div>; // Loading message
  }

  if (isError) {
    return (
      <div className="text-center text-red-500">خطا در بارگذاری داده‌ها</div>
    ); // Error message
  }

  return (
    <>
      <header className=" sticky -top-10 w-full flex flex-col items-center justify-center bg-white z-10 mb-4">
        <div className="h-10 bg-logo flex items-center justify-center w-full">
          <p className="font-iranyekanBold text-white text-sm">{startData?.setting.fldEtelaResani}</p>
        </div>
        <div className="h-16 flex items-center justify-center">
          <SearchModule companyName={Relations[0]?.fldN_Shobe}/>
        </div>
      </header>
      <main className="w-[100vw] flex flex-col items-center justify-center  mx-auto ">
        <div className="flex flex-col items-center justify-center bg-white pb-2 h-full">
          <div className="flex items-center justify-center w-[100vw] pr-4">
            <div>
              <HomeTitleSection icon={startData?.setting.fldImageSliderLink}  />
            </div>
            <div className="flex items-center justify-center pr-24 overflow-x-scroll snap-proximity snap-x scroll-smooth">
              <AvatarModule />
            </div>
          </div>
          <div className="w-[100vw] flex items-center justify-start px-2">
            <HomeBtnItems data={groups.mGroup} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full sm:max-w-[370px] pb-20">
          <BestSellField />
          <TrendSellField />
          <NewProductsField />
          <AllProducts />
        </div>
      </main>
    </>
  );
};
