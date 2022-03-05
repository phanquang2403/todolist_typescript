import * as React from "react";
import clsx from "clsx";
import style from "./style.module.css";

type Prods = {
  handleSubmit: Function;
  success: boolean;
  children: string;
};

const Button = ({ handleSubmit, success, children }: Prods) => {
  return (
    <button
      onClick={() => handleSubmit()}
      className={clsx(style.todo__button, success ? style.success : "")}
    >
      {children}
    </button>
  );
};
export default Button;
