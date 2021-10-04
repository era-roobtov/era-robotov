import { useState } from "react";
import PropTypes from "prop-types";
import Header from "@/components/Header";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  const [burgerStatus, setBurgerStatus] = useState("loading");

  const handleClickBurger = () => {
    switch (burgerStatus) {
      case "loading": {
        setBurgerStatus("open");
        break;
      }
      case "open": {
        setBurgerStatus("closed");
        break;
      }
      case "closed": {
        setBurgerStatus("open");
        break;
      }
    }
  };

  return (
    <div className="container">
      <Header
        burger={burgerStatus}
        handler={handleClickBurger}
      />
      <div
          id='layout'
        className={`${styles.layout} ${
          burgerStatus === "open" ? styles.layout__open : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  headerText: PropTypes.string,
};

export default Layout;
