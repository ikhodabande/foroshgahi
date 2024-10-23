import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import TicketsCard from "./tickets-card/TicketsCard";
import { useFetchTickets } from "../../../api/useMutation/GetTickets";
import { Button, Result } from "antd";
import Skeleton from "react-loading-skeleton";

export default function Tickets() {
  const {
    data: tickets, // Changed to plural for clarity
    isLoading: ticketsLoading, // Consistent naming convention
    isError: ticketsError,
    refetch: ticketsRefetch,
  } = useFetchTickets();

  // Handle error state
  if (ticketsError) {
    return (
      <Result
        className="mt-[50%]"
        status="error"
        title={<p className="text-display-lg">خطا در پردازش اطلاعات</p>}
        subTitle={<p className="text-sm">لطفاً مجدد تلاش کنید</p>}
        extra={<Button onClick={ticketsRefetch}>تلاش دوباره</Button>}
      />
    );
  }

  return (
    <>
      <header>
        <PageHeader PageName={"تیکت های من"} />
      </header>
      <main className="p-4">
        {" "}
        {/* Added padding for better spacing */}
        {ticketsLoading ? (
          // Show skeleton loading state while data is being fetched
          <div className="pt-12">
            <Skeleton
              count={5}
              height={100}
              width={"90vw"}
              style={{ marginBottom: 5 }}
            />
          </div>
        ) : (
          // Render the TicketsCard with fetched data
          <TicketsCard data={tickets} />
        )}
      </main>
    </>
  );
}
