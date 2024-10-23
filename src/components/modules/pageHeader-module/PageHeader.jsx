import { Divider } from "antd";
import React from "react";

export default function PageHeader({PageName}) {
  return (
    <Divider  className="w-full fixed z-20 bg-white  text-sm text-center py-2 font-iranyekanBold  !border-logo">
      {PageName}
    </Divider>
  );
}
