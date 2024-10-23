import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import SupportMainSection from "./support-mainSection/SupportMainSection";

export default function Support() {
  return (
    <>
      <header>
        <PageHeader PageName={"پشتیبانی"} />
      </header>
      <main>
        <SupportMainSection/>
      </main>
    </>
  );
}
