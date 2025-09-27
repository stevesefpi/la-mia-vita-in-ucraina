export const dynamic = "force-dynamic";

import { Link } from "@/src/i18n/navigation";
import { fetchPosts } from "lib/fetchPosts";

import styles from "./page.module.css";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (locale === "en") {
    return {
      title: "Blog",
      description: "Discover all the blog posts: personal experiences, daily stories, and reflections on life in Ukraine.",
    };
  }

  return {
    title: "Blog",
    description:"Scopri tutti gli articoli del blog: esperienze personali, storie quotidiane e riflessioni sulla vita in Ucraina.",
  };
}


export default async function BlogPage({ params }) {
  const { locale } = await params;
  const posts = (await fetchPosts(locale)).reverse();

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

