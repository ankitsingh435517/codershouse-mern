import React from "react";
import style from './Button.module.css';

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={`${style.button}`}>
      <span>{text}</span>
      <img src="/images/arrow-forward.png" alt="forward arrow" />
    </button>
  );
};

export default Button;
