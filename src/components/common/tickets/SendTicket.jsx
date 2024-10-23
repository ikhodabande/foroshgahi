import React from "react";
import PageHeader from "../../modules/pageHeader-module/PageHeader";
import SendTicketMainSection from "./sendTicket-mainSection/SendTicketMainSection";
import { useSendTicket } from "../../../api/useMutation/SendTicket";
import { message } from "antd";

export default function SendTicket() {
  const { mutate: sendTicket } = useSendTicket();

  const handleSendTicket = (value) => {
    const formData = {
      FldId: "", // Assign appropriate values
      FldCApp: "", // Modify according to your needs
      FldMobile: "", // Same here
      FldCode: "", // Example field
      FldOnvan: value.subject, // Map to form field
      FldOlaviat: value.priority, // Map to form field
      FldTozihat: value.description, // Map to form field
      FldDate: "", // You can add current date here
      FldTime: "", // Add time if necessary
      FldVaziat: "",
      FldAnswer: "",
      FldDateAnswer: "",
      FldTimeAnswer: "",
      FldAtachImg: "",
    };
    sendTicket(formData, {
      onSuccess: () => message.success(<p>ارسال تیکت با موفقیت انجام شد.</p>),
      onError: () => message.error(<p>ارسال تیکت با خطا مواجه شد.</p>),
    });
  };

  return (
    <>
      <header>
        <PageHeader PageName={" ارسال تیکت به مدیریت"} />
      </header>
      <main>
        <SendTicketMainSection onFinish={handleSendTicket} />
      </main>
    </>
  );
}
