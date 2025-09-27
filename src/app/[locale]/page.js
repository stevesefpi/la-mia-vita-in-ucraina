"use client";

import Explainer from "components/Explainer";
import styles from "./page.module.css";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

import Link from "next/link";

import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {

  const t = useTranslations('HomePage');
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className={styles.first}>
        <h1 className={styles.header}>{t('title')}</h1>
        <div className={styles.paragraphContainer}>
          <p data-aos="zoom-in" className={`${styles.text} ${styles.heroText}`}>
            {t('intro_one')}
          </p>

          <p data-aos="zoom-in" className={`${styles.text} ${styles.heroText}`}>
            {t('intro_two')}
          </p>

          <p data-aos="zoom-in" className={`${styles.text} ${styles.heroText}`}>
            {t('intro_three')}
          </p>
          <p data-aos="zoom-in" className={`${styles.text} ${styles.heroText}`}>
            {t('intro_four')}
          </p>
        </div>
        <Link className={styles.buttonLink} href="/blog">
          <button data-aos="zoom-in" className={styles.button_one}>
            {t('visit_button')}
          </button>
        </Link>
      </div>

      <div data-aos="fade-right" className={styles.flexContainer}>
        <div className={styles.column}>
          <h2 data-aos="zoom-in" className={styles.infoBoxTitle}>
            {t('donate_title')}
          </h2>
          <p data-aos="zoom-in" className={styles.text}>
            {t.rich('donate_text', {
              b: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
          <Link className={styles.buttonLink} href="https://u24.gov.ua/">
            <button data-aos="zoom-in" className={styles.button_two}>
              {t('donate_button')}
            </button>
          </Link>
        </div>
        <div data-aos="fade-left" className={styles.column}>
          <h2 data-aos="zoom-in" className={styles.infoBoxTitle}>
            {t('funds_title')}
          </h2>
          <p data-aos="zoom-in" className={styles.text}>
            {t('funds_text')}
          </p>
        </div>
      </div>
      <Explainer />
    </>
  );
}