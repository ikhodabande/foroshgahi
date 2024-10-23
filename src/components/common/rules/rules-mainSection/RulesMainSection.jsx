import React from "react";
import { Collapse, Card, Typography } from "antd";

const { Title } = Typography;
const { Panel } = Collapse;

export default function RulesMainSection() {
  const rulesData = [
    {
      title: "قانون 1: استفاده از خدمات",
      content:
        "تمام کاربران باید قبل از استفاده از خدمات سایت، قوانین استفاده را مطالعه کرده و آن‌ها را رعایت کنند.",
    },
    {
      title: "قانون 2: حریم خصوصی",
      content:
        "اطلاعات شخصی کاربران نزد ما محفوظ است و تنها با رضایت کاربر به اشتراک گذاشته می‌شود.",
    },
    {
      title: "قانون 3: شرایط پرداخت",
      content:
        "پرداخت‌ها به صورت آنلاین و از طریق درگاه‌های معتبر صورت می‌گیرد. عدم رعایت قوانین مالی ممکن است منجر به تعلیق حساب شود.",
    },
    {
      title: "قانون 4: بازگشت وجه",
      content:
        "در صورت عدم رضایت، امکان درخواست بازگشت وجه در مدت زمان مشخص شده طبق قوانین وجود دارد.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center pt-20 px-4 gap-4">
      <Card className="w-full max-w-[800px]">
        <Collapse accordion>
          {rulesData.map((rule, index) => (
            <Panel header={rule.title} key={index}>
              <p>{rule.content}</p>
            </Panel>
          ))}
        </Collapse>
      </Card>
    </div>
  );
}
