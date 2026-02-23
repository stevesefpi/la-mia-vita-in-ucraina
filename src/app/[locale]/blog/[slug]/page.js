import { getCachedPost } from "@/lib/cachedPost";
import { fetchAllPosts } from "lib/fetchPosts";
import ImageCarousel from "components/ImageCarousel";
import styles from "./page.module.css";
import { setRequestLocale } from "next-intl/server";

export async function generateStaticParams() {
  const locales = ["it", "en"];
  let allParams = [];

  for (const locale of locales) {
    const posts = await fetchAllPosts(locale);
    allParams = allParams.concat(
      posts.map((post) => ({
        locale,
        slug: post.id,
      }))
    );
  }

  return allParams;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;

  const post = await getCachedPost(locale, slug);

  if (!post) {
    return {
      title: "Post not found",
      description: "The post you are looking for is not available.",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPost({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = await getCachedPost(locale, slug);

  if (!post) {
    return <h1>Invalid Post</h1>;
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale === "it" ? "it-IT" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div>
      {/* Cover Image - no overlay */}
      <div
        className={styles.coverImage}
        style={{ backgroundImage: `url(${post.cover_image})` }}
      />

      {/* Header Card with date, title, and summary */}
      <div className={styles.headerCard}>
        <p className={styles.date}>{formatDate(post.created_at)}</p>
        <h1 className={styles.title}>{post.title}</h1>
        {post.description && (
          <p className={styles.summary}>{post.description}</p>
        )}
      </div>

      {/* Blog Content */}
      {Array.isArray(post.content) ? (
        post.content
          .filter((block) => block.type === "text")
          .map((block, index) => {
            const paragraphImages = post.images?.filter(
              (img) => img.paragraph_index === index
            );

            return (
              <div key={index} className={styles.paragraphContainer}>
                {/* Text Block */}
                {block.title && (
                  <h3 className={styles.paragraphTitle}>{block.title}</h3>
                )}
                {/* <p className={styles.paragraph}>{block.content}</p> */}
                {block.content.split("\n").map((line, idx) => (
                  <p key={idx} className={styles.paragraph}>
                    {line}
                  </p>
                ))}
                {/* Only Render Images If They Exist */}
                {paragraphImages && paragraphImages.length > 0 ? (
                  <ImageCarousel images={paragraphImages} />
                ) : null}
              </div>
            );
          })
      ) : (
        <p>Error: Post content is not formatted correctly</p>
      )}
    </div>
  );
}
