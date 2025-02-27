import { supabase } from "./supabase";

export async function fetchPosts() {
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, cover_image, created_at");

    if (error) {
        console.error("Error fetching posts: ", error.message);
        return [];
    }

    return data;
}