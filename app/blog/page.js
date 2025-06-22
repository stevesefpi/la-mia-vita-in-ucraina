export const dynamic = "force-static";

import Link from "next/link";
import { fetchPosts } from "@/lib/fetchPosts";

import styles from "./page.module.css";

export const metadata = {
  title: "Blog",
  description:
    "Scopri tutti gli articoli del blog: esperienze personali, storie quotidiane e riflessioni sulla vita in Ucraina dal 2020.",
};

export default async function BlogPage() {
  const posts = (await fetchPosts()).reverse();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Blog</h1>
      <div className={styles.grid}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
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
    </div>
  );
}

