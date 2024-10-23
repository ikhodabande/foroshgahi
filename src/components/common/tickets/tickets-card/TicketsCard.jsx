import React from "react";
import { Card, List, Tag, Button, Typography } from "antd";

const { Title } = Typography;

export default function TicketsCard() {
  const tickets = [
    {
      id: "1",
      subject: "مشکل در پرداخت",
      status: "در حال بررسی",
      date: "2024-10-21",
    },
    {
      id: "2",
      subject: "سوال در مورد محصول",
      status: "پاسخ داده شده",
      date: "2024-10-19",
    },
    {
      id: "3",
      subject: "خطا در ثبت سفارش",
      status: "بسته شده",
      date: "2024-10-18",
    },
  ];

  const getStatusTag = (status) => {
    switch (status) {
      case "در حال بررسی":
        return <Tag color="blue">{status}</Tag>;
      case "پاسخ داده شده":
        return <Tag color="green">{status}</Tag>;
      case "بسته شده":
        return <Tag color="red">{status}</Tag>;
      default:
        return <Tag>{status}</Tag>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20 px-4">
      <Card className="w-full max-w-[800px] shadow-lg" >
        <List
          itemLayout="horizontal"
          dataSource={tickets}
          renderItem={(item) => (
            <List.Item
            //   actions={[
            //     <Button type="link" key="view" className="font-iranyekan">مشاهده</Button>,
            //   ]}
            >
              <List.Item.Meta
                title={<span className="font-iranyekanBold">{item.subject}</span>}
                description={<span>تاریخ: {item.date}</span>}
              />
              {getStatusTag(item.status)}
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}

//title={<Title level={4} className="font-iranyekanBold">تیکت‌های پشتیبانی</Title>}