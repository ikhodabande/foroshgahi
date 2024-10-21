import React from "react";
import { Button } from "antd";

const ButtonModule = ({name, type, size}) => <Button className={` w-[${size}] rounded-xl shadow-md my-2 mx-1 text-xs px-2`} type={type}>{name}</Button>;
export default ButtonModule;
