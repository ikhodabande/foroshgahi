import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import NotificationsCard from "./notifications-card/NotificationsCard";

export default function Notifications() {
  return (
    <>
      <header>
        <PageHeader PageName={"اعلانات"} />
      </header>
      <main>
        <NotificationsCard />
      </main>
    </>
  );
}
