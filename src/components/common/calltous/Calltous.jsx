import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import CallMainSection from "./call-mainSection/CallMainSection";

export default function Calltous() {
  return (
    <>
      <header>
        <PageHeader PageName={"تماس با ما"} />
      </header>
      <main>
        <CallMainSection />
      </main>
    </>
  );
}
