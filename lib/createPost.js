import { supabase } from "./supabase";

export async function createPost(title, paragraphs, imageFiles, coverImage) {
  let content = [];
  let uploadedImages = {};
  let coverImageUrl = coverImage || null;

  // Organize images by paragraph index
  imageFiles.forEach(({ imageUrl, paragraphIndex }) => {
    if (!uploadedImages[paragraphIndex]) {
      uploadedImages[paragraphIndex] = [];
    }
    uploadedImages[paragraphIndex].push(imageUrl);
  });

  // Construct the content JSON with titles
  paragraphs.forEach(({ title: paragraphTitle, content: text }, index) => {
    content.push({ type: "text", title: paragraphTitle, content: text });

    if (uploadedImages[index]) {
      content.push({ type: "image", paragraph_index: index });
    }
  });

  // Insert post into Supabase with cover image URL
  const { data: post, error: postError } = await supabase
    .from("posts")
    .insert([{ title, content, cover_image: coverImageUrl }])
    .select("*")
    .single();

  if (postError) {
    console.error("Error creating post:", postError);
    return;
  }

  // Insert valid images into post_images table
  for (let paragraphIndex in uploadedImages) {
    for (let imageUrl of uploadedImages[paragraphIndex]) {
      if (imageUrl) {
        await supabase
          .from("post_images")
          .insert([{ post_id: post.id, paragraph_index: paragraphIndex, image_url: imageUrl }]);
      }
    }
  }

  console.log("Post and images saved successfully!");
}
