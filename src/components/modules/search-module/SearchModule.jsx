import React, { useState } from "react";
import { Button, Input, Drawer } from "antd";
import { IoSearch } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { LuArrowRight } from "react-icons/lu";

const SearchModule = ({ companyName }) => {
  // States for search value and drawer visibility
  const [searchValue, setSearchValue] = useState("");
  const [drawerVisible, setDrawerVisible] = useState(false);

  // Handle input change and update the state
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  // Show the drawer when the search button is clicked
  const showDrawer = () => {
    setDrawerVisible(true);
  };

  // Close the drawer
  const closeDrawer = () => {
    setDrawerVisible(false);
    setSearchValue(""); // Optionally reset the search input when closing the drawer
  };

  return (
    <div>
      <div onClick={showDrawer} className="w-[92vw] sm:w-[370px] h-11 border-gray-300 rounded-3xl flex items-center bg-background">
        <div  className="w-9 h-9 bg-background flex items-center justify-center rounded-full">
          <IoSearch className="text-menu-lg mr-3 text-gray-400" />
        </div>
        <button
         
          className="w-full flex-1 outline-none border-none h-full rounded-full px-2  bg-background font-iranyekanBold flex text-start justify-start items-center"
        >
          <p className="text-gray-400 ml-1 text-sm">جستجو در</p>
          <span className="font-iranyekanBold text-logo text-md mb-[0.5px]">
            {companyName}
          </span>
        </button>
      </div>

      {/* Bottom Drawer for search */}
      <Drawer
        placement="bottom"
        onClose={closeDrawer}
        open={drawerVisible}
        height={"100vh"}
        closeIcon={null}
        className="!bg-background"
        styles={{ padding: "20px", backgroundColor: "#f0f2f5" }}
      >
        <div className="w-full h-12 border-gray-300  rounded-3xl flex items-center bg-white relative">
          <div
          onClick={closeDrawer} className="w-10 h-10 bg-white flex items-center justify-center rounded-full ">
            <LuArrowRight  className="text-menu-lg mr-3 text-gray-400 "  />
          </div>
          <input
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder=" جستجو در همه کالاها"
            className="w-full flex-1 outline-none border-none h-full rounded-full px-2 text-sm bg-white font-iranyekanBold"
          />
        </div>
        {searchValue && (  <div
          onClick={()=> setSearchValue("")} className="w-10 h-10 bg-white flex items-center justify-center rounded-full absolute left-8 top-6 ">
            <IoMdClose  className="text-menu-lg mr-3 text-gray-400 "  />
          </div>)}
      </Drawer>
    </div>
  );
};

export default SearchModule;
