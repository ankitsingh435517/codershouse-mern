import React from "react";
import style from "./Home.module.css";
import Card from "../../components/shared/Card/Card";

const Home = () => {
  return (
    <div className={`${style.cardWrapper}`}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={`${style.text}`}>
          We're working hard to get Codershouse ready for everyone! While we
          wrap up the finishing younches, we're adding people gradually to make
          sure nothing breaks
        </p>
      </Card>
      
    </div>
  );
};

export default Home;
