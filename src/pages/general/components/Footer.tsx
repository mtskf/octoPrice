// import * as React from "react";
import styles from "./styles.module.scss";
import { ReactComponent as LogoIcon } from 'assets/img/icon.svg';

const Footer = () => {
  return (
    <footer className={styles.OctoFooter}>
      <div className={styles.Container}>
        <LogoIcon className="logoIcon" />
        <p>Footer placeholder</p>
      </div>
    </footer>
  );
};
export default Footer;