import React, { useState } from "react";
import { Form, Input, Button, Typography, notification, Select } from "antd";

const { Title } = Typography;

export default function SendTicketMainSection({ onFinish }) {
  const handleFinish = (values) => {
    // console.log("Ticket submitted: ", values);
    // Simulate form submission, e.g., API call
    // notification.success({
    //   message: "تیکت ارسال شد",
    //   description: "تیکت شما با موفقیت ارسال شد.",
    // });
    if (onFinish) {
      onFinish(values);
    }
  };

  const priorities = [
    { label: "کم", value: "low" },
    { label: "متوسط", value: "medium" },
    { label: "زیاد", value: "high" },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      <Form
        name="send_ticket"
        layout="vertical"
        onFinish={handleFinish}
        className="w-full max-w-[600px] h-[75vh] shadow-lg p-4 border rounded-lg relative"
      >
        <Form.Item
          label="موضوع تیکت"
          name="subject"
          rules={[{ required: true, message: "لطفاً موضوع تیکت را وارد کنید!" }]}
        >
          <Input placeholder="موضوع تیکت خود را وارد کنید" />
        </Form.Item>

        <Form.Item
          label="الویت"
          name="priority"
          rules={[{ required: true, message: "لطفاً الویت تیکت را مشخص نمایید!" }]}
        >
          <Select placeholder="انتخاب الویت" options={priorities} />
        </Form.Item>

        <Form.Item
          label="توضیحات"
          name="description"
          rules={[{ required: true, message: "لطفاً توضیحات تیکت را وارد کنید!" }]}
        >
          <Input.TextArea
            rows={8}
            placeholder="توضیحات تیکت خود را وارد کنید"
          />
        </Form.Item>

        <Form.Item className="absolute bottom-0 w-full">
          <Button type="primary" htmlType="submit" className="w-[83vw]">
            ارسال تیکت
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
