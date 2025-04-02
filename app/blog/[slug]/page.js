import { fetchPost } from "@/lib/fetchPost";
import ImageCarousel from "@/components/ImageCarousel";
import styles from "./page.module.css";

export default async function BlogPost({ params }) {
  const { slug } = await params;

  if (!slug) {
    return <h1>Invalid Post</h1>;
  }

  const post = await fetchPost(slug);

  if (!post) {
    return <h1>Post not found</h1>;
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
          .filter((block) => block.type === "text") // Only process text blocks
          .map((block, index) => {
            // Correctly get images linked to this paragraph
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
                {block.content.split('\n').map((line, idx) => (
                  <p key={idx} className={styles.paragraph}>{line}</p>
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
