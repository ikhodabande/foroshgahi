import React from "react";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchModule = () => (
  //   <Search className="w-[340px]" allowClear placeholder="جستجو ..." onSearch={onSearch} enterButton />
  <div>
    <div className="w-[95vw] sm:w-[350px] h-10 border-2 rounded-3xl flex items-center bg-background ">
      <div className="w-10 h-10 bg-background flex items-center justify-center  rounded-full">
        <CiSearch className="text-display-lg  " />
      </div>
      <input
        type="text"
        placeholder="جستجو ..."
        className="w-full flex-1 outline-none border-none h-full rounded-full px-2 text-sm"
      />
    </div>
  </div>
);
export default SearchModule;
