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
    <div className={styles.container}>
      <div
        className={styles.heroSection}
        style={{ backgroundImage: "url('/about-1.png')" }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.heroText}>
              <h1>{t("title")}</h1>
              <p className={styles.heroParagraph}>{t("intro")}</p>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.heroText}>
              <h1>{t("guide_title")}</h1>
              <p className={styles.heroParagraph}>{t("guide_text")}</p>
              <Link href={`/${locale}/guide`} className={styles.linkButton}>
                {t("guide_button")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sectionBox}>
        <h2 className={styles.sectionTitle}>{t("objectives_title")}</h2>
        <p className={styles.sectionParagraph}>{t("objectives_text")}</p>
      </div>

      <div className={styles.blackSection}>
        <p>{t("space")}</p>
      </div>

      <div
        className={styles.sectionOverlay}
        style={{ backgroundImage: "url('/about-2.png')" }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroText}>
          <h2>{t("discover_title")}</h2>
          <p className={styles.heroParagraph}>{t("discover_text")}</p>
          <Link href="/blog" className={styles.linkButton}>
            {t("discover_button")}
          </Link>
        </div>
      </div>

      <div className={styles.copyrightSection}>
        <div className={styles.copyrightBackground}>
          <h2 className={styles.copyrightTitle}>{t("copyright_title")}</h2>
          <p className={styles.copyrightParagraph}>{t("copyright_text")}</p>
        </div>
      </div>
    </div>
  );
}
