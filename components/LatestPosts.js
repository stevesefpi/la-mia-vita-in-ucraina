import Link from "next/link";
import { fetchPosts } from "lib/fetchPosts";
import { getTranslations } from "next-intl/server";
import styles from '../src/app/[locale]/page.module.css';

export default async function LatestPosts({ locale }) {
  const t = await getTranslations({ locale, namespace: "HomePage" });
  const { posts } = await fetchPosts(locale, 1, 3);

  if (posts.length === 0) return null;

  return (
    <section className={styles.latestSection}>
      <div className={styles.latestHeader}>
        <div className={styles.latestHeaderText}>
          <h2>{t("latest_title")}</h2>
          <p>{t("latest_subtitle")}</p>
        </div>
        <Link href={`/${locale}/blog`} className={styles.viewAllLink}>
          {t("view_all")} &rarr;
        </Link>
      </div>

      <div className={styles.latestGrid}>
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/${locale}/blog/${post.id}`}
            className={styles.articleCard}
          >
            <img
              src={post.cover_image}
              alt={post.title}
              className={styles.articleCardImage}
            />
            <div className={styles.articleCardBody}>
              <h3 className={styles.articleCardTitle}>{post.title}</h3>
              {post.description && (
                <p className={styles.articleCardDescription}>
                  {post.description}
                </p>
              )}
              <span className={styles.readMoreLink}>
                {t("read_more")} &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
