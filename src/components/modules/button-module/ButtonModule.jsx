import React from "react";
import { Button } from "antd";

const ButtonModule = ({ name, type, size, hidden, id }) => (
  <Button
    id={id}
    hidden={hidden}
    className={` w-[${size}] rounded-xl snap-center shadow-md my-2 mx-1 text-xs px-2`}
    type={type}
  >
    {name}
  </Button>
);
export default ButtonModule;
