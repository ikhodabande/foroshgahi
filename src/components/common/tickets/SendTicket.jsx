import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import SendTicketMainSection from "./sendTicket-mainSection/SendTicketMainSection";

export default function SendTicket() {
  return (
    <>
      <header>
        <PageHeader PageName={" ارسال تیکت به مدیریت"} />
      </header>
      <main>
        <SendTicketMainSection/>
      </main>
    </>
  );
}
