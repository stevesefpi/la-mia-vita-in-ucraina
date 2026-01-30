import Explainer from "components/Explainer";

import styles from "./page.module.css";

import { getTranslations } from "next-intl/server";
import { Link } from "@/src/i18n/routing";

export default async function HomePage() {

  const t = await getTranslations('HomePage');

  return (
    <>
      <div className={styles.first}>
        <h1 className={styles.header}>{t('title')}</h1>
        <div className={styles.paragraphContainer}>
          <p className={`${styles.text} ${styles.heroText}`}>
            {t('intro_one')}
          </p>

          <p className={`${styles.text} ${styles.heroText}`}>
            {t('intro_two')}
          </p>

          <p className={`${styles.text} ${styles.heroText}`}>
            {t('intro_three')}
          </p>
          <p className={`${styles.text} ${styles.heroText}`}>
            {t('intro_four')}
          </p>
        </div>
        <Link className={styles.buttonLink} href="/blog">
          <button className={styles.button_one}>
            {t('visit_button')}
          </button>
        </Link>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.column}>
          <h2 className={styles.infoBoxTitle}>
            {t('donate_title')}
          </h2>
          <p className={styles.text}>
            {t.rich('donate_text', {
              b: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
          <Link className={styles.buttonLink} href="https://u24.gov.ua/">
            <button className={styles.button_two}>
              {t('donate_button')}
            </button>
          </Link>
        </div>
        <div className={styles.column}>
          <h2 className={styles.infoBoxTitle}>
            {t('funds_title')}
          </h2>
          <p className={styles.text}>
            {t('funds_text')}
          </p>
        </div>
      </div>
      <Explainer />
    </>
  );
}