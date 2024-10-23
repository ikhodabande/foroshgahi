import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import NotificationsCard from "./notifications-card/NotificationsCard";
import { useFetchNotifications } from "../../../api/useMutation/GetNotifications";
import { Button, Result } from "antd";
import Skeleton from "react-loading-skeleton";

export default function Notifications() {
  const {
    data: GetNotifications,
    isLoading: NotificationsLoading,
    isError: NotificationsError,
    refetch: NotificationsReftch,
  } = useFetchNotifications();

  if (NotificationsError) {
    return (
      <Result
        className="mt-[50%]"
        status="error"
        title={<p className="text-display-lg">خطا در پردازش اطلاعات</p>}
        subTitle={<p className="text-sm">لطفاً مجدد تلاش کنید</p>}
        extra={<Button onClick={NotificationsReftch}>تلاش دوباره</Button>}
      />
    );
  }
  return (
    <>
      <header>
        <PageHeader PageName={"اعلانات"} />
      </header>
      <main className="p-4">
        {NotificationsLoading ? (
          <>
            <div className="pt-12">
              <Skeleton
                count={5}
                height={100}
                width={"90vw"}
                style={{ marginBottom: 5 }}
              />
            </div>
          </>
        ) : (
          <NotificationsCard data={GetNotifications} />
        )}
      </main>
    </>
  );
}
