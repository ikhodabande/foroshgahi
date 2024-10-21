import React, { useState } from "react";
import { login } from "../../../store/slices/authslice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StepModule from "../../modules/step-module/StepModule";
import logo from "../../../assets/images/logo/webcomlogo.png";
import { Button, Input } from "antd";
import CheckboxModule from "../../modules/checkbox-module/CheckboxModule";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Manage steps here

  const handleNextStep = () => {
    if (step === 1) {
      // Perform any logic before moving to the next step
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Dispatch the login action and navigate to the profile page
      dispatch(login());
      navigate("/profile");
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <div className="fixed container h-screen z-20 bg-white">
      <div className="absolute -bottom-20 right-[65vw]">
        <StepModule stepLevel={step.toString()} />
      </div>
      <header className="w-full text-center py-10">
        <p className="text-xs font-iranyekanBold">
          به وب اپلیکیشن{" "}
          <span className="text-display-lg text-logo">فروشگاهی وبکام</span> خوش
          آمدید
        </p>
        <img className="w-[100px] mx-auto my-8" src={logo} alt="logo" />
      </header>

      <motion.main
        className="w-[90vw] flex flex-col items-center justify-center gap-3 mx-auto"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={stepVariants}
        transition={{ duration: 0.5 }}
      >
        {step === 1 ? (
          <>
            <div>
              <p className="text-center text-sm font-iranyekanBold">
                مرحله اول: ورود به سیستم
              </p>
              <p className="text-xs px-14 text-center my-10">
                لطفا برای دریافت کد فعال سازی شماره تلفن خود را وارد نمایید.
              </p>
              <div className="text-center">
                <Input
                  allowClear
                  maxLength={11}
                  type="number"
                  placeholder="شماره تلفن"
                  className="text-sm w-[47vw] text-center my-2"
                />
                <Button
                  type="primary"
                  className="text-xs w-[47vw] shadow-lg"
                  onClick={handleNextStep}
                >
                  شماره تماس را تایید میکنم
                </Button>
              </div>
            </div>
            <CheckboxModule
              checkboxItem={"با ثبت نام در برنامه شرایط و قوانین را می پذیرم"}
            />
          </>
        ) : step === 2 ? (
          <div>
            <p className="text-center text-sm font-iranyekanBold">
              مرحله دوم: کد فعال سازی
            </p>
            <p className="text-xs px-14 text-center my-10">
              لطفا کد فعال سازی که به شماره شما ارسال شده را وارد نمایید.
            </p>
            <div className="text-center">
              <Input
                allowClear
                maxLength={6}
                type="number"
                placeholder="کد فعال سازی"
                className="text-sm my-2 w-[47vw] text-center"
              />
              <Button
                type="primary"
                className="text-xs w-[47vw] shadow-lg"
                onClick={handleNextStep}
              >
                کد را تایید میکنم
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-center text-sm font-iranyekanBold">
              مرحله نهایی: تایید اطلاعات
            </p>
            <p className="text-xs px-14 text-center my-10">
              اطلاعات شما با موفقیت تایید شد. <br/>اکنون وارد پروفایل خود شوید.
            </p>
            <Button
              type="primary"
              className="text-xs w-[47vw] shadow-lg text-center"
              onClick={handleNextStep}
            >
              ورود به پروفایل
            </Button>
          </div>
        )}
      </motion.main>
    </div>
  );
};
