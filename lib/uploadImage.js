import { supabase } from "./supabase";

export async function uploadImage(file) {
  if (!file) {
    console.error("Skipping upload: No file provided.");
    return null;
  }

  const filePath = `${Date.now()}_${file.name}`;

  const { data, error } = await supabase.storage
    .from("blog-images") 
    .upload(filePath, file);

  if (error) {
    console.error("Image upload failed:", error.message);
    return null;
  }
  const publicUrl = `https://lknobbnnugzhxbcodema.supabase.co/storage/v1/object/public/blog-images/${filePath}`;
  return publicUrl;
}
