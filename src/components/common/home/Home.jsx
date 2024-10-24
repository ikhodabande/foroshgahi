import React, { useEffect, useState } from "react";
import SearchModule from "../../modules/search-module/SearchModule";
import { HomeTitleSection } from "./hometitle-section/HomeTitleSection";
import { AvatarModule } from "../../modules/avatar-module/AvatarModule";
import HomeBtnItems from "./home-btn-items/HomeBtnItems";
import { BestSellField } from "../products/BestSell-field/BestSellField";
import { useFetchGroups } from "../../../api/useQuery/GetGroups";
import { useFetchStartData2 } from "../../../api/useMutation/StartData2";
import { useFetchRelations } from "../../../api/useMutation/GetRelations";
import { Result, Button } from "antd";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles

const SkeletonAvatar = () => (
  <div className="flex flex-col items-center justify-center">
    <Skeleton width={80} height={80} circle />
    <Skeleton width={70} height={20} />
  </div>
);

const SkeletonButtonGroup = () => (
  <div className="flex items-center gap-2 mt-2 mx-2">
    {[1, 2, 3].map((_, i) => (
      <Skeleton key={i} width={100} height={40} />
    ))}
  </div>
);

const SkeletonProductList = () => (
  <div>
    <Skeleton width={120} height={30} className="mt-6" />
    <div className="flex justify-start  gap-2 max-w-[90vw] overflow-x-scroll">
      {[1, 2, 3].map((_, i) => (
        <Skeleton key={i} width={"40vw"} height={150} />
      ))}
    </div>
  </div>
);

export const Home = () => {
  const [timer, setTimer] = useState(false);
  const {
    data: groups,
    isLoading: groupsLoading,
    isError: groupsError,
    refetch: refetchGroups,
  } = useFetchGroups();
  const {
    data: startData2,
    isLoading: startData2Loading,
    isError: startData2Error,
    refetch: refetchStartData2,
  } = useFetchStartData2();
  const {
    data: relations,
    isLoading: relationsLoading,
    isError: relationsError,
    refetch: refetchRelations,
  } = useFetchRelations();
  // const { data: startData, isLoading: startDataLoading, isError: startDataError} = useFetchStartData()

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimer(true);
  //   }, 2000);
  // }, []);

  const HomeLoading = groupsLoading || startData2Loading || relationsLoading ;
  const HomeError = groupsError || startData2Error || relationsError;

  if (HomeError) {
    const handleRetry = () => {
      refetchGroups();
      refetchStartData2();
      refetchRelations();
    };

    return (
      <Result
        className="mt-[50%]"
        status="error"
        title={<p className="text-display-lg">خطا در بارگزاری اطلاعات</p>}
        subTitle={<p className="text-sm">لطفاً دوباره تلاش کنید.</p>}
        extra={
          <Button type="primary" onClick={handleRetry}>
            تلاش دوباره
          </Button>
        }
      />
    );
  }



  return (
    <>
      <header className="sticky -top-10 w-full flex flex-col items-center justify-center bg-white z-10 mb-4">
        <div className="h-10 bg-logo flex items-center justify-center w-full">
          <p className="font-iranyekanBold text-white text-sm">
            {startData2?.setting.fldEtelaResani ||
              "با وبکام همیشه آنلاین باشید"}
          </p>
        </div>
        <div className="h-16 flex items-center justify-center">
          {HomeLoading ? (
            <Skeleton width={"90vw"} height={40} />
          ) : (
            <SearchModule companyName={relations?.[0]?.fldN_Shobe} />
          )}
        </div>
      </header>

      <main className="w-[100vw] flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col items-center justify-center bg-white pb-2 h-full">
          <div className="flex items-center justify-center w-[100vw] pr-4">
            <div>
              {HomeLoading ? (
                <Skeleton width={150} height={150} />
              ) : (
                <HomeTitleSection
                  icon={startData2?.setting.fldImageSliderLink}
                />
              )}
            </div>
            <div className="flex items-center justify-center pr-16 overflow-x-scroll snap-proximity snap-x scroll-smooth">
              {HomeLoading ? (
                <div className="flex gap-2 ml-[90px] mb-10">
                  <SkeletonAvatar />
                  <SkeletonAvatar />
                </div>
              ) : (
                <AvatarModule />
              )}
            </div>
          </div>
          <div className="w-[100vw] flex items-center justify-start px-2">
            {HomeLoading ? (
              <SkeletonButtonGroup />
            ) : (
              <HomeBtnItems data={groups?.mGroup} />
            )}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full sm:max-w-[370px] pb-20">
          {HomeLoading ? (
            <>
              <SkeletonProductList />
              <SkeletonProductList />
              <SkeletonProductList />
            </>
          ) : (
            groups?.mGroup.map((item, index) => (
              <BestSellField
                key={index}
                data={item}
                groups={groups}
              />
            ))
          )}
        </div>
      </main>
    </>
  );
};
