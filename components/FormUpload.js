"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { createPost } from "@/lib/createPost";
import { uploadImage } from "@/lib/uploadImage";
import styles from "./FormUpload.module.css";

export default function FormUpload({ user }) {
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [paragraphs, setParagraphs] = useState([
    { title: "", content: "", images: [] },
  ]);
  const [imageFiles, setImageFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Define allowed admin emails
  const adminEmails = ["stevenfabio95@gmail.com"];
  if (!user || !adminEmails.includes(user.email)) {
    return <p>Unauthorized</p>; // Show message instead of redirecting
  }

  const handleCoverImageUpload = (event) => {
    setCoverImage(event.target.files[0]);
  };

  const handleParagraphChange = (index, field, value) => {
    const newParagraphs = [...paragraphs];
    newParagraphs[index][field] = value;
    setParagraphs(newParagraphs);
  };

  const handleImageUpload = (event, index) => {
    const files = Array.from(event.target.files);

    // Update imageFiles state
    setImageFiles((prev) => [
      ...prev,
      ...files.map((file) => ({ file, paragraphIndex: index })),
    ]);

    // Ensure paragraph exists in state before setting images
    setParagraphs((prev) => {
      const newParagraphs = [...prev];
      if (!newParagraphs[index]) {
        newParagraphs[index] = { title: "", content: "", images: [] };
      }
      newParagraphs[index].images = [
        ...(newParagraphs[index].images || []),
        ...files,
      ];
      return newParagraphs;
    });
  };

  const addParagraph = () => {
    setParagraphs([...paragraphs, { title: "", content: "" }]);
  };

  // ✅ Using `createPost` function from lib
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload

    if (!title) {
      alert("Title is required");
      return;
    }

    try {
      setLoading(true);

      // Upload cover image if it exists
      let coverImageUrl = null;
      if (coverImage) {
        coverImageUrl = await uploadImage(coverImage);
      }

      // Upload all images for paragraphs
      let uploadedImages = [];
      for (let { file, paragraphIndex } of imageFiles) {
        const imageUrl = await uploadImage(file);
        if (imageUrl) {
          uploadedImages.push({ imageUrl, paragraphIndex });
        }
      }

      // Create post
      await createPost(title, paragraphs, uploadedImages, coverImageUrl);

      alert("Post created successfully!");
      setTitle("");
      setParagraphs([{ title: "", content: "", images: [] }]);
      setImageFiles([]);
      setCoverImage(null);
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Create a New Blog Post</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
          Title:
          <input
            className={styles.input}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className={styles.label}>
          Cover Image:
          <input
            className={styles.fileInput}
            type="file"
            accept="image/*"
            onChange={handleCoverImageUpload}
          />
        </label>

        {paragraphs.map((paragraph, index) => (
          <div key={index} className={styles.paragraphContainer}>
            <label className={styles.label}>
              Paragraph {index + 1} Title:
              <input
                className={styles.input}
                type="text"
                value={paragraph.title || ""}
                onChange={(e) =>
                  handleParagraphChange(index, "title", e.target.value)
                }
                required
              />
            </label>
            <label className={styles.label}>
              Paragraph Content:
              <textarea
                className={styles.textarea}
                value={paragraph.content || ""}
                onChange={(e) =>
                  handleParagraphChange(index, "content", e.target.value)
                }
                required
              />
            </label>

            {/* ✅ Add Image Upload Button */}
            <label className={styles.label}>
              Upload Images:
              <input
                className={styles.fileInput}
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleImageUpload(e, index)}
              />
            </label>

            {/* ✅ Show Uploaded Images */}
            {paragraph.images && paragraph.images.length > 0 && (
              <div className={styles.imagePreview}>
                {paragraph.images.map((file, i) => (
                  <span key={i}>{file.name}</span>
                ))}
              </div>
            )}
          </div>
        ))}

        <button className={styles.button} type="button" onClick={addParagraph}>
          Add Paragraph
        </button>
        <button
          className={styles.submitButton}
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
