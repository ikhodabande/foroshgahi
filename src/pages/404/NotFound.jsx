import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      className="w-full h-full mt-[10vh]"
      subTitle="صفحه ای که به دنبال آن بودید یافت نشد!"
      extra={
        <Button onClick={() => navigate("/")} type="primary">
          برگشت به خانه
        </Button>
      }
    />
  );
}
