"use client";

import { useTranslations } from "next-intl";
import styles from "./Explainer.module.css";

export default function Explainer() {
  const t = useTranslations('Explainer');
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{t('title')}</h1>
      <hr className={styles.divider} />
      <p className={styles.subtitle}>{t('text')}</p>
    </section>
  );
}
