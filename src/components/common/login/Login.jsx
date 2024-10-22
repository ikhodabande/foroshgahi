import React, { useState } from "react";
import { login } from "../../../store/slices/authslice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import StepModule from "../../modules/step-module/StepModule";
import logo from "../../../assets/images/logo/webcomlogo.png";
import { Button, Input, message } from "antd";
import CheckboxModule from "../../modules/checkbox-module/CheckboxModule";
import { useSendSms } from "../../../api/useMutation/SendSms";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // Manage steps here
  const [phoneNumber, setPhoneNumber] = useState(""); // Store phone number
  const [verificationCode, setVerificationCode] = useState(""); // Store verification code
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);

  const { mutate: sendSms, isLoading, data } = useSendSms();

  const onChangeCheckBox = (e) => {
    setCheckboxIsChecked(e.target.checked);
  };

  const handleNextStep = () => {
    if (step === 1) {
      // Validate phone number input
      // if (!phoneNumber) {
      //   message.error(
      //     <p className="font-iranyekan">لطفا شماره تلفن را وارد کنید</p>
      //   );
      //   return;
      // }
      // if (!checkboxIsChecked) {
      //   message.error(
      //     <p className="font-iranyekan">لطفا تیک پذیرفتن شرایط را بزنید</p>
      //   );
      //   return;
      // }
      setStep(2)
      const formData = new FormData();
      formData.append("phoneNumber", phoneNumber);

      // Call the mutate function
      sendSms(formData, {
        onSuccess: () => {
          message.success(
            <p className="font-iranyekan">کد فعال سازی ارسال شد.</p>
          );
          setStep(2); // Move to step 2 if SMS is sent
        },
        onError: () => {
          message.error(
            <p className="font-iranyekan">
              ارسال کد فعال سازی با مشکل مواجه شد.
            </p>
          );
        },
      });
    } else if (step === 2) {
      // Logic for verification code submission
      if (verificationCode === "123456") {
        // Example code validation
        setStep(3);
      } else {
        message.error("کد وارد شده صحیح نمی باشد.");
      }
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
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="شماره تلفن"
                  className="text-sm w-[47vw] text-center my-2"
                />
                <Button
                  type="primary"
                  className="text-xs w-[47vw] shadow-lg"
                  onClick={handleNextStep}
                  loading={isLoading}
                >
                  شماره تماس را تایید میکنم
                </Button>
              </div>
            </div>
            <CheckboxModule
              onChange={onChangeCheckBox}
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
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
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
              اطلاعات شما با موفقیت تایید شد. <br />
              اکنون وارد پروفایل خود شوید.
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
