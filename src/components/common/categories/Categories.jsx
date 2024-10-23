import React, { useState } from "react";
import { CategoriesCard } from "./categories-card/CategoriesCard";
import SearchModule from "../../modules/search-module/SearchModule";
import { useFetchGroups } from "../../../api/useQuery/GetGroups";
import { FiArrowRight } from "react-icons/fi";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export const Categories = () => {
  const { data: groups, isLoading, isError, refetch } = useFetchGroups(); // Added refetch for retry
  const [selectedGroupId, setSelectedGroupId] = useState(null); // State to track the selected mGroup
  const navigate = useNavigate();

  // Handle clicking on an mGroup item
  const handleGroupClick = (groupId) => {
    setSelectedGroupId(groupId); // Set the clicked mGroup's id
  };

  // Filter sGroup items based on the selected mGroup
  const filteredSGroups = selectedGroupId
    ? groups?.sGroup.filter(
        (sGroup) => sGroup?.fldC_M_GroohKala === selectedGroupId
      )
    : [];

  // Handle errors for any of the fetches
  if (isError) {
    return (
      <Result
        className="mt-[50%]"
        status="error"
        title={<p className="font-iranyekan text-display-lg">خطا در بارگزاری اطلاعات</p>}
        subTitle={<p className="font-iranyekan text-sm">لطفاً دوباره تلاش کنید.</p>}
        extra={
          <Button type="primary" onClick={() => refetch()}>
            تلاش دوباره
          </Button>
        }
      />
    );
  }

  return (
    <>
      <header className="fixed top-0 w-full h-16 flex items-center justify-center bg-white z-10 mb-4">
        {selectedGroupId ? (
          <div className="w-full text-end px-3">
            <Button
              onClick={() => setSelectedGroupId(null)}
              className="flex items-center justify-end px-2 gap-1 flex-row-reverse"
            >
              <p className="text-sm">بازگشت</p>
              <FiArrowRight className="mt-1" />
            </Button>
          </div>
        ) : (
          <SearchModule companyName={"وبکام"} />
        )}
      </header>

      <main className="grid grid-cols-2 gap-2 px-4 py-20">
        {/* Render mGroup items */}
        {isLoading ? (
          Array(6).fill("").map((_, idx) => (
            <div key={idx} className="w-full">
              <Skeleton height={120} />
              <Skeleton width="80%" />
            </div>
          ))
        ) : (
          groups?.mGroup.map((category) => (
            <CategoriesCard
              id={category.groupId}
              imgSrc={category.link}
              key={category.id}
              categorieItems={category.groupName}
              onClick={() => handleGroupClick(category.groupId)}
            />
          ))
        )}
      </main>

      {selectedGroupId && (
        <div className="fixed top-20 left-[50%] -translate-x-[50%] w-full bg-white grid grid-cols-2 gap-2 px-2">
          {/* Render filtered sGroup items */}
          {filteredSGroups?.length > 0 ? (
            filteredSGroups.map((sGroup) => (
              <CategoriesCard
                id={sGroup.fldId}
                imgSrc={sGroup.link}
                key={sGroup.fldId}
                categorieItems={sGroup.fldN_S_GroohKala}
                onClick={() =>
                  navigate(
                    `/products/${sGroup?.fldC_M_GroohKala}/${sGroup?.fldC_S_GroohKala}`
                  )
                }
              />
            ))
          ) : (
            isLoading && (
              Array(6).fill("").map((_, idx) => (
                <div key={idx} className="w-full">
                  <Skeleton height={120} />
                  <Skeleton width="80%" />
                </div>
              ))
            )
          )}
        </div>
      )}
    </>
  );
};
