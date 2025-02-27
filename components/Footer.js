import styles from "./Footer.module.css";
import { Facebook, Instagram, Menu, X } from "lucide-react";

export default function Footer() {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerMain}>
          <div className={styles.column}>
            <h2>La Mia Vita in Ucraina</h2>
            <h3>Contattami</h3>
            <p>lamiavitainucraina@gmail.com</p>
          </div>
          <div className={styles.column}>
            <Facebook />
            <Instagram />
          </div>
        </div>

        <div className={styles.footerBottom}>
          Copyright © 2025 La Mia Vita In Ucraina | Powered by La Mia Vita In
          Ucraina
        </div>
      </div>
    </>
  );
}
