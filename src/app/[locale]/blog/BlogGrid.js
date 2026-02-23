import Link from "next/link";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { fetchPosts } from "lib/fetchPosts";
import styles from "./page.module.css";

const PER_PAGE = 6;

export default async function BlogGrid({ locale, page }) {
  "use cache";

  const { posts, total } = await fetchPosts(locale, page, PER_PAGE);
  const totalPages = Math.ceil(total / PER_PAGE);
  const t = await getTranslations({ locale, namespace: "Blog" });

  return (
    <>
      <div className={styles.grid}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <article key={post.id} className={styles.card}>
              <Link href={`/${locale}/blog/${post.id}`} className={styles.cardLink}>
                <div className={styles.cardImage}>
                  <Image
                    src={post.cover_image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1100px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardSummary}>{post.description}</p>
                  <div className={styles.cardFooter}>
                    <time className={styles.cardDate} dateTime={post.created_at}>
                      {new Date(post.created_at).toLocaleDateString(locale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span className={styles.readMore}>{t("read_more")} &rarr;</span>
                  </div>
                </div>
              </Link>
            </article>
          ))
        ) : (
          <p>No blog posts found.</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {page > 1 && (
            <Link
              href={`/${locale}/blog${page > 2 ? `?page=${page - 1}` : ""}`}
              className={styles.pageLink}
            >
              &larr;
            </Link>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/${locale}/blog${p > 1 ? `?page=${p}` : ""}`}
              className={`${styles.pageLink} ${p === page ? styles.pageLinkActive : ""}`}
            >
              {p}
            </Link>
          ))}

          {page < totalPages && (
            <Link
              href={`/${locale}/blog?page=${page + 1}`}
              className={styles.pageLink}
            >
              &rarr;
            </Link>
          )}
        </div>
      )}
    </>
  );
}
