import { supabase } from "./supabase";
import { cacheLife, cacheTag } from "next/cache";

export async function fetchPosts(locale = "it", page = 1, perPage = 3) {
  "use cache";

  cacheLife("days");
  cacheTag(`posts:${locale}:page:${page}`);

  const tableName = locale === "en" ? "posts_english" : "posts";
  const from = (page - 1) * perPage;
  const to = from + perPage - 1;

  const { data, error, count } = await supabase
    .from(tableName)
    .select("id, title, cover_image, created_at", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    console.error("Error fetching posts: ", error.message);
    return { posts: [], total: 0 };
  }

  return { posts: data, total: count };
}

export async function fetchAllPosts(locale = "it") {
  "use cache";

  cacheLife("days");
  cacheTag(`all-posts:${locale}`);

  const tableName = locale === "en" ? "posts_english" : "posts";
  const { data, error } = await supabase
    .from(tableName)
    .select("id, title, cover_image, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching posts: ", error.message);
    return [];
  }

  return data;
}
