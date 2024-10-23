import React from "react";
import { Form, Input, Button, Typography, notification } from "antd";

const { Title } = Typography;

export default function SendTicketMainSection() {
  const onFinish = (values) => {
    // Handle form submission, e.g., send values to an API
    console.log("Ticket submitted: ", values);
    notification.success({
      message: "تیکت ارسال شد",
      description: "تیکت شما با موفقیت ارسال شد.",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20 px-4">
      {/* <Title level={4} className="font-iranyekanBold mb-4">ارسال تیکت جدید</Title> */}
      <Form
        name="send_ticket"
        layout="vertical"
        onFinish={onFinish}
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
          label="توضیحات"
          name="description"
          rules={[{ required: true, message: "لطفاً توضیحات تیکت را وارد کنید!" }]}
        >
          <Input.TextArea
            rows={12}
            placeholder="توضیحات تیکت خود را وارد کنید"
          />
        </Form.Item>

        <Form.Item className="absolute z-20 bottom-0 w-[80vw]">
          <Button type="primary" htmlType="submit" className="w-full ">
            ارسال تیکت
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
