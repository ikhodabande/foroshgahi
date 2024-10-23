import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import RulesMainSection from "./rules-mainSection/RulesMainSection";

export default function Rules() {
  return (
    <>
      <header>
        <PageHeader PageName={"قوانین و مقررات"} />
      </header>
      <main>
        <RulesMainSection />
      </main>
    </>
  );
}
