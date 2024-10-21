import React from "react";

export default function PageHeader({PageName}) {
  return (
    <p className="w-full fixed bg-white  text-sm text-center py-4 font-iranyekanBold border-b-2 border-logo">
      {PageName}
    </p>
  );
}
