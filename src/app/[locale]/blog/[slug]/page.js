import { fetchPost } from "lib/fetchPost";
import { fetchPosts } from "lib/fetchPosts";
import ImageCarousel from "components/ImageCarousel";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const locales = ["it", "en"];
  let allParams = [];

  for (const locale of locales) {
    const posts = await fetchPosts(locale);
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

  const post = await fetchPost(locale, slug);

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
  const post = await fetchPost(locale, slug);

  if (!post) {
    return <h1>Invalid Post</h1>;
  }

  return (
    <div>
      {/* Cover Image with Title Overlay */}
      <div
        className={styles.coverImage}
        style={{ backgroundImage: `url(${post.cover_image})` }}
      >
        <h1 className={styles.title}>{post.title}</h1>
      </div>

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
