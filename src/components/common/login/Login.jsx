import React, { useState, useEffect } from "react";
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
  const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Button state
  const [codeVerificationLoading, setCodeVerificationLoading] = useState(false);
  const [againCode, setAgainCode] = useState(null);
  const [countdown, setCountdown] = useState("60"); // Countdown timer
  const { mutate: sendSms, isLoading, isPending } = useSendSms();

  const onChangeCheckBox = (e) => {
    setCheckboxIsChecked(e.target.checked);
  };

  const handelSendSms = () => {
    const formData = new FormData();
    formData.append("phoneNumber", phoneNumber);
    setAgainCode(false);
    setCountdown("60");
    sendSms(formData, {
      onSuccess: () => {
        message.success(
          <p className="font-iranyekan">کد فعال سازی ارسال شد.</p>
        );
        setStep(2); // Move to step 2 if SMS is sent
        setIsButtonDisabled(false); // Re-enable the button
      },
      onError: () => {
        message.error(
          <p className="font-iranyekan">ارسال کد فعال سازی با مشکل مواجه شد.</p>
        );
      },
    });
  };

  // useEffect(() => {
  //   if (phoneNumber.length === 11 && checkboxIsChecked) {
  //     // Automatically send SMS when phone number is complete and checkbox is checked
  //     const formData = new FormData();
  //     formData.append("phoneNumber", phoneNumber);

  //     setIsButtonDisabled(true); // Disable the button while SMS is being sent
  //     sendSms(formData, {
  //       onSuccess: () => {
  //         message.success(
  //           <p className="font-iranyekan">کد فعال سازی ارسال شد.</p>
  //         );
  //         setStep(2); // Move to step 2 if SMS is sent
  //         setIsButtonDisabled(false); // Re-enable the button
  //       },
  //       onError: () => {
  //         message.error(
  //           <p className="font-iranyekan">
  //             ارسال کد فعال سازی با مشکل مواجه شد.
  //           </p>
  //         );
  //         setIsButtonDisabled(false); // Re-enable the button if there's an error
  //       },
  //     });
  //   }
  // }, [phoneNumber, checkboxIsChecked]); // Re-run when phone number or checkbox changes

  useEffect(() => {
    if (verificationCode.length === 6) {
      setCodeVerificationLoading(true);
      // Automatically submit the code when it's fully entered
      if (verificationCode === "123456") {
        message.success("کد تایید شد");
        setTimeout(() => {
          setStep(3); // Move to step 3
          setCodeVerificationLoading(false);
        }, 1000);
      } else {
        message.error("کد وارد شده صحیح نمی باشد.");
        setCodeVerificationLoading(false);
      }
    }
  }, [verificationCode]); // Re-run when verification code changes

  useEffect(() => {
    let timer;
    if (!againCode) {
      // Start the countdown if againCode is false
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            setAgainCode(true); // Enable the button after countdown
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer); // Clean up the timer
  }, [againCode]);

  const handleNextStep = () => {
    if (step === 1) {
      if (phoneNumber.length === 11 && checkboxIsChecked) {
        // Automatically send SMS when phone number is complete and checkbox is checked
        const formData = new FormData();
        formData.append("phoneNumber", phoneNumber);

        // setIsButtonDisabled(true); // Disable the button while SMS is being sent
        sendSms(formData, {
          onSuccess: () => {
            message.success(
              <p className="font-iranyekan">کد فعال سازی ارسال شد.</p>
            );
            setStep(2); // Move to step 2 if SMS is sent
            setIsButtonDisabled(false); // Re-enable the button
            setAgainCode(false);
          },
          onError: () => {
            message.error(
              <p className="font-iranyekan">
                ارسال کد فعال سازی با مشکل مواجه شد.
              </p>
            );
            setAgainCode(false)
            setStep(2); // Move to step 2 if SMS is sent////////////////////////////////for develop mode
            setIsButtonDisabled(false); // Re-enable the button if there's an error
          },
        });
      } else {
        message.error(
          <p className="font-iranyekan">
            لطفاً گزینه پذیرفتن شرایط را انتخاب نمایید.
          </p>
        );
      }
    } else if (step === 2) {
      if (verificationCode.length === 6) {
        setCodeVerificationLoading(true);

        // Automatically submit the code when it's fully entered
        if (verificationCode === "123456") {
          message.success("کد تایید شد");
          setTimeout(() => {
            setStep(3); // Move to step 3
            setCodeVerificationLoading(false);
          }, 1000);
        } else {
          message.error("کد وارد شده صحیح نمی باشد.");
          setCodeVerificationLoading(false);
        }
      }
    }
    if (step === 3) {
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
                  onClick={handleNextStep}
                  type="primary"
                  className="text-xs w-[47vw] shadow-lg"
                  disabled={isButtonDisabled || phoneNumber.length < 11}
                  loading={isLoading || isPending}
                >
                  {isLoading || isPending
                    ? "در حال ارسال..."
                    : "شماره تماس را تایید میکنم"}{" "}
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
            <div className="text-center flex flex-col items-center justify-center">
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
                onClick={handleNextStep}
                type="primary"
                className="text-xs w-[47vw] shadow-lg"
                disabled={verificationCode.length < 6}
                loading={codeVerificationLoading}
              >
                {codeVerificationLoading ? "در حال تایید..." : "تایید کد"}
              </Button>
              <Button
                onClick={handelSendSms}
                type="primary"
                disabled={!againCode}
                className="text-xs my-2 w-[47vw] text-center"
              >
              {againCode ? "دریافت مجدد کد تایید" : `صبر کنید... (${countdown}ثانیه)`}
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
