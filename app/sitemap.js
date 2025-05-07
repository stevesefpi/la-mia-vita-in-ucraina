import { fetchPosts } from "@/lib/fetchPosts";

export default async function sitemap() {
  const posts = await fetchPosts();

  const postEntries = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${post.id}`,
    lastModified: new Date(post.created_at).toISOString(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date("2025-01-01T10:00:00Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date("2025-03-01T12:30:00Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contatti`,
      lastModified: new Date("2025-02-20T09:15:00Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/traduzione-intervista`,
      lastModified: new Date("2025-04-10T18:00:00Z").toISOString(),
    },
    ...postEntries,
  ];
}
