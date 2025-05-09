import { supabase } from "./supabase";

export async function fetchPost(postId) {

  if (!postId) {
    console.error("Error: Post ID is undefined.");
    return null;
  }

  const { data: post, error: postError } = await supabase
    .from("posts")
    .select("id, title, cover_image, created_at, content, description")
    .eq("id", postId)
    .single();

  if (post?.content) {
    if (typeof post.content === "string") {
      try {
        post.content = JSON.parse(post.content);
      } catch (error) {
        console.error("Error parsing content JSON:", error);
        post.content = [];
      }
    }
  }

  const { data: images, error: imageError } = await supabase
    .from("post_images")
    .select("image_url, paragraph_index")
    .eq("post_id", postId);

  if (postError) {
    console.error("Error fetching post:", postError.message);
    return null;
  }

  return { ...post, images };
}
