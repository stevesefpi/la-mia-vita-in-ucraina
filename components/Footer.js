import styles from "./Footer.module.css";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {

  const t = useTranslations('Footer');

  return (
    <>
      <div className={styles.footerContainer}>
        <div className={styles.footerMain}>
          <div className={styles.column}>
            <h2>{t('name')}</h2>
            <h3>{t('contact')}</h3>
            <p>lamiavitainucraina@gmail.com</p>
          </div>
          <div className={styles.column}>
            <a
              className={styles.link}
              href="https://www.facebook.com/profile.php?id=61566181132367"
              target="_blank"
              rel="noopener noreferrer"
            ><Facebook /></a>
            <a
            className={styles.link}
              href="https://www.facebook.com/profile.php?id=61566181132367"
              target="_blank"
              rel="noopener noreferrer"
            ><Instagram /></a>
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
