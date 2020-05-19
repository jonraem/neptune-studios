import React from "react";
import styles from "./footer.module.css";

const currentYear = new Date().getFullYear();

export default (props) => {
  return (
    <div className={styles.footer}>{`© Neptune Studios ${currentYear}`}</div>
  );
};
