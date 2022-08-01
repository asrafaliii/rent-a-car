import React from "react";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h3>RENTACAR</h3>
        <button>Share A Car</button>
      </div>
    </div>
  );
};

export default Footer;
