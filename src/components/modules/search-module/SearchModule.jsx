import React from "react";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchModule = () => (
    <Search className="w-[340px] shadow-lg " allowClear placeholder="جستجو ..." onSearch={onSearch} enterButton />
  // <div>
  //   <div className="w-[95vw] sm:w-[370px] h-10 border-2 border-gray-300 rounded-3xl flex items-center bg-background ">
  //     <div className="w-9 h-9 bg-background flex items-center justify-center  rounded-full">
  //       <IoSearch className="text-display-lg  text-gray-600" />
  //     </div>
  //     <input
  //       type="text"
  //       placeholder="جستجو ..."
  //       className="w-full flex-1 outline-none border-none h-full rounded-full px-2 text-sm bg-background"
  //     />
  //   </div>
  // </div>
);
export default SearchModule;
