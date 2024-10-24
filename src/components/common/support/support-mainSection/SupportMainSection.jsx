import React from "react";
import { Card, Typography, Row, Col, Collapse } from "antd";
import { BiSupport } from "react-icons/bi";
import { MdRecordVoiceOver } from "react-icons/md";

const { Title } = Typography;
const { Panel } = Collapse;

const faqData = [
  {
    question: "چگونه می‌توانم با پشتیبانی تماس بگیرم؟",
    answer:
      "برای تماس با واحد پشتیبانی می‌توانید از شماره تلفن‌های موجود در بخش تماس با ما استفاده کنید.",
  },
  {
    question: "ساعات کاری واحد پشتیبانی چیست؟",
    answer:
      "واحد پشتیبانی ما از شنبه تا چهارشنبه از ساعت ۹ صبح تا ۵ عصر فعال است.",
  },
  {
    question: "چگونه می‌توانم سفارش خود را پیگیری کنم؟",
    answer:
      "برای پیگیری سفارش خود می‌توانید وارد حساب کاربری شده و به بخش سفارشات مراجعه کنید.",
  },
];

export default function SupportMainSection() {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-4 px-4 ">
      <Row gutter={[16, 16]} justify="center">
        <Card
          bordered
          className="w-full h-auto flex flex-col justify-center shadow"
        >
          <Title level={5}>سوالات متداول</Title>
          <Collapse accordion>
            {faqData.map((item, index) => (
              <Panel header={item.question} key={index}>
                <p>{item.answer}</p>
              </Panel>
            ))}
          </Collapse>
        </Card>
        <Col xs={24} sm={12}>
          <Card
            bordered
            className="w-full h-[120px] flex flex-col items-center justify-center shadow-lg border "
          >
            <div className="flex items-center justify-between w-full text-gray-500">
              <BiSupport className="text-menu-lg mx-2 mb-2  " />
              <Title level={5} className="font-iranyekanBold text-gray-500">
                تماس با واحد پشتیبانی
              </Title>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12}>
          <Card
            bordered
            className="w-full h-[120px] flex flex-col items-center justify-center shadow-lg"
          >
            <div className="flex items-center justify-between w-full text-gray-500">
              <MdRecordVoiceOver className="text-menu-lg mx-2 mb-2 " />
              <Title level={5} className="font-iranyekanBold text-gray-500">
                تماس با واحد فروش
              </Title>
            </div>
          </Card>
        </Col>
      </Row>

      {/* FAQ Section */}

      {/* <Card
        bordered
        className="w-full h-[150px] flex flex-col justify-center"
      >
        <Title level={5}>محتوای اضافی</Title>
        <p>این بخش می‌تواند شامل توضیحات بیشتر یا محتوای اضافی باشد.</p>
      </Card> */}
    </div>
  );
}
