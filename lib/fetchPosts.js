import { supabase } from "./supabase";
import { cacheLife, cacheTag } from "next/cache";

export async function fetchPosts(locale = "it") {
  "use cache";

  cacheLife("days");
  cacheTag(`posts:${locale}`);

  const tableName = locale === "en" ? "posts_english" : "posts";
  const { data, error } = await supabase
    .from(tableName)
    .select("id, title, cover_image, created_at")
    .order("created_at", { ascending: false});

  if (error) {
    console.error("Error fetching posts: ", error.message);
    return [];
  }

  return data;
}
