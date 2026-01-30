import { getTranslations } from "next-intl/server";
import styles from "./Explainer.module.css";

export default async function Explainer() {
  const t = await getTranslations('Explainer');
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{t('title')}</h1>
      <hr className={styles.divider} />
      <p className={styles.subtitle}>{t('text')}</p>
    </section>
  );
}
