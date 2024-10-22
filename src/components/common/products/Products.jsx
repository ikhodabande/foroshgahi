import React, { useEffect, useState } from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import { ProductsCard } from "./products-card/ProductsCard";
import SearchModule from "../../modules/search-module/SearchModule";
import { Pagination, message } from "antd";
import { useParams } from "react-router-dom";
import { useGetArticleByGroupPaging } from "../../../api/useMutation/GetArticleByGroupPaging";

export const Products = () => {
  const { sCode, mCode } = useParams();

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12); // Adjust the number of products per page as needed
  const [totalProducts, setTotalProducts] = useState(0); // Total product count from the API

  const {
    mutate: getProducts,
    isLoading,
    isError,
  } = useGetArticleByGroupPaging();

  // Fetch products using the API with the page and size
  const fetchProducts = (page, size) => {
    const formData = {
      mainGroupId: mCode,
      subGroupId: sCode,
      pageId: page.toString(),
      sizeOfPage: size.toString(),
      inStock: "false",
      haveDiscount: "false",
    };

    getProducts(formData, {
      onSuccess: (data) => {
        setProducts(data); // Assuming the data contains the products array
        setTotalProducts(data.totalCount); // Adjust this if the total count is returned separately
        message.success(<p className="font-iranyekan">کالاها با موفقیت دریافت شدند.</p>);
      },
      onError: () => {
        message.error(<p>مشکل در دریافت کالاها، لطفا بعدا تلاش کنید.</p>);
      },
    });
  };

  // UseEffect to load products when the page or page size changes
  useEffect(() => {
    fetchProducts(currentPage, pageSize);
  }, [currentPage, pageSize, mCode, sCode]); // Include mCode and sCode in dependencies in case they change

  // Handle pagination change
  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  return (
    <>
      <header>
        <PageHeader PageName={"محصولات"} />
      </header>
      <main>
        <div className="flex items-center justify-center pt-16 pb-4 sticky top-0">
          <SearchModule companyName={"محصولات وبکام"} />
        </div>
        <div className="grid grid-cols-3 gap-2 max-w-[100vw] pb-16 mx-auto overflow-x-auto snap-mandatory snap-x px-4 scroll-px-6">
          {products.map((product) => (
            <ProductsCard
              key={product.fldId}
              customeClass={"min-w-[90px] min-h-[90px]"}
              imgH={90}
              imgW={95}
              imgSrc={product.fldLink}
              productName={product.fldN_Kala}
              price={product.fldFee}
              inStock={product.fldMande} // Assuming 'fldMande' represents stock count
            />
          ))}
        </div>
        {/* Ant Design Pagination */}
        <div className="flex justify-center py-4">
          <Pagination
            current={currentPage}
            pageSize={pageSize}
            total={totalProducts}
            onChange={handlePageChange}
            showSizeChanger
          />
        </div>
      </main>
    </>
  );
};
