"use client";

import styles from "./page.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutPage() {

  const t = useTranslations("Info");
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.container}>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: "url('/about-1.png')" }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.heroText}>
              <h1 data-aos="zoom-in">{t("title")}</h1>
              <p data-aos="zoom-in" className={styles.heroParagraph}>
                {t("intro")}
              </p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.heroText}>
              <h1 data-aos="zoom-in">{t("guide_title")}</h1>
              <p data-aos="zoom-in" className={styles.heroParagraph}>
                {t("guide_text")}
              </p>
              <Link
                href="/guide"
                className={styles.linkButton}
                data-aos="zoom-in"
              >
                {t("guide_button")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionBox}>
        <h2 data-aos="zoom-in" className={styles.sectionTitle}>
          {t("objectives_title")}
        </h2>
        <p data-aos="zoom-in" className={styles.sectionParagraph}>
          {t("objectives_text")}
        </p>
      </div>

      <div className={styles.blackSection}>
        <p data-aos="zoom-in">{t("space")}</p>
      </div>

      <div
        className={styles.sectionOverlay}
        style={{ backgroundImage: "url('/about-2.png')" }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroText}>
          <h2 data-aos="zoom-in">{t("discover_title")}</h2>
          <p data-aos="zoom-in" className={styles.heroParagraph}>
            {t("discover_text")}
          </p>
          <Link href="/blog" className={styles.linkButton} data-aos="zoom-in">
            {t("discover_button")}
          </Link>
        </div>
      </div>

      <div className={styles.copyrightSection}>
        <div className={styles.copyrightBackground}>
          <h2 data-aos="zoom-in" className={styles.copyrightTitle}>{t("copyright_title")}</h2>
          <p data-aos="zoom-in" className={styles.copyrightParagraph}>{t('copyright_text')}</p>
        </div>
      </div>
    </div>
  );
}
