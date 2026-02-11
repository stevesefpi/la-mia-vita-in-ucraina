import Link from "next/link";
import { fetchPosts } from "lib/fetchPosts";
import styles from "./page.module.css";

const PER_PAGE = 3;

export default async function BlogGrid({ locale, page }) {
  "use cache";

  const { posts, total } = await fetchPosts(locale, page, PER_PAGE);
  const totalPages = Math.ceil(total / PER_PAGE);

  return (
    <>
      <div className={styles.grid}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post.id}
              href={`/${locale}/blog/${post.id}`}
              className={styles.card}
            >
              <div
                className={styles.imageOverlay}
                style={{ backgroundImage: `url(${post.cover_image})` }}
              >
                <div className={styles.textContainer}>
                  <h2 className={styles.blogTitle}>{post.title}</h2>
                  <time className={styles.blogDate} dateTime={post.created_at}>
                    {new Date(post.created_at).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </Link>
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
