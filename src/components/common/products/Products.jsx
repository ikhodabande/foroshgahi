import React, { useEffect, useState } from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import { ProductsCard } from "./products-card/ProductsCard";
import SearchModule from "../../modules/search-module/SearchModule";
import { message } from "antd";
import { useParams } from "react-router-dom";
import { useGetArticleByGroupPaging } from "../../../api/useMutation/GetArticleByGroupPaging";

export const Products = () => {
  const { sCode, mCode } = useParams();
  const [showBtns, setShowBtn] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Number of products per page
  const [totalProducts, setTotalProducts] = useState(0); // Total product count from API
  const [isFetching, setIsFetching] = useState(false); // To avoid multiple fetches

  const { mutate: getProducts } = useGetArticleByGroupPaging();

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

    setIsFetching(true); // Set fetching state
    getProducts(formData, {
      onSuccess: (data) => {
        if (Array.isArray(data)) {
          // Ensure correct structure
          setTotalProducts(data.length || 0); // Set total products correctly
          setProducts((prevProducts) => [...prevProducts, ...data]); // Append new products
          message.success(
            <p className="font-iranyekan">کالاها با موفقیت دریافت شدند.</p>
          );
        } else {
          message.error(<p>Data format is incorrect</p>);
        }
        setIsFetching(false); // Stop fetching
      },
      onError: () => {
        setIsFetching(false); // Stop fetching
        message.error(<p>مشکل در دریافت کالاها، لطفا بعدا تلاش کنید.</p>);
      },
    });
  };

  // Infinite scroll - Detect when the user reaches the bottom of the page
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    if (!isFetching) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // Fetch products whenever the current page changes
    fetchProducts(currentPage, pageSize);
  }, [currentPage, pageSize, mCode, sCode]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching, products]);

  return (
    <>
      <header>
        <PageHeader PageName={"محصولات"} />
      </header>
      <main>
        <div className="flex items-center justify-center pt-14 pb-4 sticky top-0">
          <SearchModule companyName={"محصولات وبکام"} />
        </div>
        <div className="grid grid-cols-1 gap-2 max-w-[100vw] pb-16 mx-auto overflow-x-auto snap-mandatory snap-x px-4 scroll-px-6">
          {products?.map((product, index) => (
            <ProductsCard
              key={index}
              customeClass={"min-w-[90px] min-h-[350px]"}
              imgH={250}
              imgW={325}
              productId={product.fldId}
              productImg={product.fldLink}
              productName={product.fldN_Kala}
              productPrice={product.fldFee.toLocaleString()}
              productInventory={product.fldMande}
              productUnit={product.fldN_Vahed}
              inStock={product.fldMande} // Assuming 'fldMande' represents stock count
              showBtns={showBtns}
            />
          ))}
        </div>
        {/* {isFetching && <p>Loading more products...</p>} */}
      </main>
    </>
  );
};
