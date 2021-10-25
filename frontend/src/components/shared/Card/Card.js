import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../Button/Button";
import style from "./Card.module.css";

const Card = ({ title, icon, children }) => {
  const [underline, setUnderline] = useState(false);

  const history = useHistory();

  const signInLinkStyle = {
    color: "#1758a1",
    fontSize: "1rem",
    fontWeight: "bold",
    marginLeft: "0.5rem",
    textDecoration: underline ? "underline" : "none",
  };

  const startRegister = () => {
      history.push('/register');
  }
 
  return (
    <div className={`${style.card}`}>
      <div className={`${style.headingWrapper}`}>
        <img src={`/images/${icon}.png`} alt={`${icon}`} />
        <span>{title}</span>
      </div>
      {children}
      <Button text="Get your username"  onClick={startRegister} />
      <div className={`${style.inviteTextWrapper}`}>
        <span>have an invite text</span>
        <Link
          to="/login"
          style={signInLinkStyle}
          onMouseEnter={() => {
            setUnderline(true);
          }}
          onMouseLeave={() => {
            setUnderline(false);
          }}
        >
          <span>Sign in</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
