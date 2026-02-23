import Link from "next/link";
import Image from "next/image";
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
            <div style={{ position: 'relative', width: '100%', height: '200px' }}>
              <Image
                src={post.cover_image}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.articleCardImage}
                style={{ objectFit: 'cover' }}
              />
            </div>
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
