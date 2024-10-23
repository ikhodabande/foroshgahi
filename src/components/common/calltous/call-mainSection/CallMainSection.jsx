import React from "react";
import { Card, Typography, Row, Col } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function CallMainSection() {
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4 px-4">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12}>
          <Card
            bordered
            className="w-[95vw] h-[150px] flex flex-col items-center justify-center shadow"
          >
            <PhoneOutlined className="text-menu-lg text-logo" />
            <Title level={5} className="mt-2 font-iranyekanBold">
              تماس با پشتیبانی
            </Title>
            <Paragraph>شماره تماس: 021-12345678</Paragraph>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card
            bordered
            className="w-[95vw] h-[150px] flex flex-col items-center justify-center shadow"
          >
            <MailOutlined className="text-menu-lg text-logo" />
            <Title level={5} className="mt-2 font-iranyekanBold">
              تماس با ایمیل
            </Title>
            <Paragraph>ایمیل: support@example.com</Paragraph>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24}>
          <Card
            bordered
            className="w-[95vw] h-[200px] shadow flex flex-col items-center justify-center"
          >
            <Title level={5}>ساعات تماس با پشتیبانی</Title>
            <Paragraph>
              روزهای کاری: شنبه تا چهارشنبه <br />
              ساعات تماس: ۹ صبح تا ۵ عصر
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} justify="center">
        <Col xs={24}>
          <Card
            bordered
            className="w-[95vw] h-[150px] flex flex-col items-center justify-center shadow"
          >
            <Title level={5}>سایر اطلاعات تماس</Title>
            <Paragraph>آدرس: تهران، خیابان ولیعصر، پلاک ۱۲۳</Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
