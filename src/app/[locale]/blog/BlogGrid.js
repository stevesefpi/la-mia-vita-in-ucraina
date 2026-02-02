import Link from "next/link";
import { fetchPosts } from "lib/fetchPosts";
import styles from "./page.module.css";

export default async function BlogGrid({ locale }) {
  "use cache";

  const posts = await fetchPosts(locale);
  
  return (
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
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>No blog posts found.</p>
      )}
    </div>
  );
}
