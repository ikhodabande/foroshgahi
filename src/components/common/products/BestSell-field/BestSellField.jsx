import React, { useEffect, useState } from "react";
import { ProductsCard } from "../products-card/ProductsCard";
import { useGetArticleByGroupPaging } from "../../../../api/useMutation/GetArticleByGroupPaging";
import { Link } from "react-router-dom";
import { Skeleton } from "antd"; // Import Ant Design Skeleton

export const BestSellField = ({ data, groups }) => {
  const { mutate: GetArticleByGroup, isPending: GetArticleByGroupPending } =
    useGetArticleByGroupPaging();
  const [articles, setArticles] = useState([]); // State to hold the fetched articles

  useEffect(() => {
    if (data && groups?.sGroup) {
      // Filter the side group based on main group ID
      const sideGroup = groups?.sGroup.filter(
        (item) => item.fldC_M_GroohKala === data?.groupId
      );

      // Prepare the formData for the API request
      const formData = {
        mainGroupId: data?.groupId,
        subGroupId: sideGroup[0]?.fldC_S_GroohKala || null, // Handle side group code
        pageId: "1",
        sizeOfPage: "30",
        inStock: "false",
        haveDiscount: "false",
      };

      // Fetch the articles by group
      GetArticleByGroup(formData, {
        onSuccess: (response) => {
          setArticles(response || []); // Handle missing data
        },
        onError: () => {},
      });
    }
  }, [data, groups, GetArticleByGroup]);

  return (
    <div className="w-full my-2 mx-2">
      <div className="flex items-start justify-between pl-3 w-full">
        <p className="mb-4 mx-4 font-iranyekanBold">{data?.groupName}</p>
        <Link className="text-xs pt-1 text-logo">مشاهده بیشتر</Link>
      </div>

      <div className="flex items-center flex-nowrap overflow-y-hidden overflow-x-auto snap-mandatory snap-x px-2 ">
        {GetArticleByGroupPending ? (
          // Display skeleton loader when pending
          <>
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="min-w-[150px] min-h-[230px] border-b shadow-lg rounded-lg mx-2 "
              >
                <Skeleton.Image active style={{ width: 149, height: 140 }} />
                <Skeleton active paragraph={{ rows: 1 }} title={false} className="mt-3 mx-2" />
                <Skeleton active paragraph={{ rows: 1 }} title={false} className="mt-3 mx-2" />
              </div>
            ))}
          </>
        ) : articles?.length > 0 ? (
          // Render each article inside ProductsCard when data is available
          articles?.map((item) => (
            <ProductsCard
              key={item.fldId}
              customeClass={"min-w-[150px] min-h-[150px]"}
              productImg={item.fldLink || "default_image_link"} // Fallback for missing image
              productPrice={(item.fldFee || 0).toLocaleString()} // Fallback for missing price
              productName={item.fldN_Kala || "نامشخص"} // Fallback for missing name
              imgH={140}
              imgW={149}
            />
          ))
        ) : (
          <p>محصولی یافت نشد</p>
        )}
      </div>
    </div>
  );
};
