import { Divider } from "antd";
import React from "react";

export default function PageHeader({PageName}) {
  return (
    <Divider  className="w-full h-14 fixed -top-4 z-20 bg-white  text-sm text-center  font-iranyekanBold  !border-logo">
      {PageName}
    </Divider>
  );
}
