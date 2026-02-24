import { cacheLife } from "next/cache";

import styles from "./page.module.css";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function AboutPage({ params }) {
  "use cache";

  cacheLife("days");

  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Info" });

  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerContent}>
          <h1 className={styles.bannerTitle}>{t("banner_title")}</h1>
          <p className={styles.bannerSubtitle}>{t("banner_subtitle")}</p>
        </div>
      </div>

      {/* Section 1: Intro with about-1.png background */}
      <section className={styles.introSection}>
        <div
          className={styles.introBg}
          style={{ backgroundImage: "url('/about-1.png')" }}
        />
        <div className={styles.introOverlay} />
        <div className={styles.introContent}>
          <h2 className={styles.introTitle}>{t("title")}</h2>
          <p className={styles.introText}>{t("intro")}</p>
        </div>
      </section>

      {/* Section 2: Card Grid */}
      <section className={styles.cardSection}>
        <div className={styles.cardGrid}>
          {/* Guides Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{t("guide_title")}</h3>
            <p className={styles.cardText}>{t("guide_text")}</p>
            <Link href={`/${locale}/guide`} className={styles.cardButton}>
              {t("guide_button")}
            </Link>
          </div>

          {/* Objectives Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{t("objectives_title")}</h3>
            <p className={styles.cardText}>{t("objectives_text")}</p>
          </div>

          {/* Discover Blog Card */}
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{t("discover_title")}</h3>
            <p className={styles.cardText}>{t("discover_text")}</p>
            <Link href={`/${locale}/blog`} className={styles.cardButton}>
              {t("discover_button")}
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Closing with about-2.png background */}
      <section className={styles.closingSection}>
        <div
          className={styles.closingBg}
          style={{ backgroundImage: "url('/about-2.png')" }}
        />
        <div className={styles.closingOverlay} />
        <div className={styles.closingContent}>
          <p className={styles.closingText}>{t("space")}</p>
        </div>
      </section>

      {/* Copyright */}
      <section className={styles.copyrightSection}>
        <div className={styles.copyrightContent}>
          <h2 className={styles.copyrightTitle}>{t("copyright_title")}</h2>
          <p className={styles.copyrightParagraph}>{t("copyright_text")}</p>
        </div>
      </section>
    </>
  );
}
