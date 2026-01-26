import { supabase } from "./supabase";

export async function fetchPosts(locale = "it") {

    const tableName = locale === "en" ? "posts_english" : "posts";

    const { data, error } = await supabase
      .from(tableName)
      .select("id, title, cover_image, created_at");

    if (error) {
        console.error("Error fetching posts: ", error.message);
        return [];
    }

    return data;
}