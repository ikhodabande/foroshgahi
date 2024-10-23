import React from "react";
import { Card, List, Badge, Typography } from "antd";

const { Title } = Typography;

export default function NotificationsCard() {
  const notifications = [
    {
      title: "پیام جدید از پشتیبانی",
      description: "شما یک پیام جدید از واحد پشتیبانی دریافت کرده‌اید.",
      isRead: false,
    },
    {
      title: "فاکتور جدید ایجاد شد",
      description: "فاکتور جدید برای سفارش شما ایجاد شده است.",
      isRead: true,
    },
    {
      title: "تخفیف ویژه در محصولات",
      description: "برخی از محصولات شامل تخفیف ویژه هستند. خرید خود را تکمیل کنید.",
      isRead: false,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-20 px-4">
      <Card className="w-full max-w-[800px] shadow-lg" >
        <List
          itemLayout="horizontal"
          dataSource={notifications}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Badge dot={!item.isRead} color="red" />
                }
                title={<span className={!item.isRead ? "font-bold" : ""}>{item.title}</span>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
}


//title={<Title level={4} className="font-iranyekanBold">اعلان‌ها</Title>}