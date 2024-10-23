import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import TicketsCard from "./tickets-card/TicketsCard";

export default function Tickets() {
  return (
    <>
      <header>
        <PageHeader PageName={"تیکت های من"} />
      </header>
      <main>
        <TicketsCard />
      </main>
    </>
  );
}
