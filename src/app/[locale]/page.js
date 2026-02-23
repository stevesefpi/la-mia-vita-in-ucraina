import styles from "./page.module.css";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import LatestPosts from "@/components/LatestPosts";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage({ params }) {
  "use cache";

  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return (
    <div>
      <Hero title={t("hero_title")} subtitle={t("hero_text")} />

      <div className={styles.first}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{t("card_one_title")}</h3>
            <p className={styles.cardText}>{t("card_one_text")}</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>{t("card_two_title")}</h3>
            <p className={styles.cardText}>{t("card_two_text")}</p>
          </div>

          <Link href={`/${locale}/guide`} className={`${styles.card} ${styles.cardClickable}`}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
                <line x1="8" y1="2" x2="8" y2="18"/>
                <line x1="16" y1="6" x2="16" y2="22"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>
              {t("card_three_title")}
              <svg className={styles.cardArrow} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </h3>
            <p className={styles.cardText}>{t("card_three_text")}</p>
          </Link>

          <Link href={`/${locale}/blog`} className={`${styles.card} ${styles.cardClickable}`}>
            <div className={styles.cardIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
            </div>
            <h3 className={styles.cardTitle}>
              {t("card_four_title")}
              <svg className={styles.cardArrow} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </h3>
            <p className={styles.cardText}>{t("card_four_text")}</p>
          </Link>
        </div>
      </div>

      <Suspense>
        <LatestPosts locale={locale} />
      </Suspense>

      <div className={styles.flexContainerOuter}>
        <div className={styles.flexContainer}>
          <div className={styles.column}>
            <h2 className={styles.infoBoxTitle}>{t("donate_title")}</h2>
            <p className={styles.text}>
              {t.rich("donate_text", {
                b: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <Link className={`${styles.buttonLink} ${styles.button_two}`} href="https://u24.gov.ua/">
              {t("donate_button")}
            </Link>
          </div>

          <div className={styles.column}>
            <h2 className={styles.infoBoxTitle}>{t("funds_title")}</h2>
            <p className={styles.text}>{t("funds_text")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
