import { fetchPosts } from "@/lib/fetchPosts";

export default async function sitemap() {
  const posts = await fetchPosts();

  const postEntries = posts.flatMap((post) => [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${post.id}`, // IT
      lastModified: new Date(post.created_at).toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blog/${post.id}`, // EN
      lastModified: new Date(post.created_at).toISOString(),
    },
  ]);

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
      lastModified: new Date("2025-01-01T10:00:12Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/about`,
      lastModified: new Date("2025-01-01T10:00:12Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      lastModified: new Date("2025-03-01T12:30:06Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/blog`,
      lastModified: new Date("2025-03-01T12:30:06Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contatti`,
      lastModified: new Date("2025-02-20T09:15:43Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/contatti`,
      lastModified: new Date("2025-02-20T09:15:43Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/traduzione-intervista`,
      lastModified: new Date("2025-04-10T18:00:22Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/traduzione-intervista`,
      lastModified: new Date("2025-04-10T18:00:22Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/guide/viaggio-ucraina`,
      lastModified: new Date("2025-06-22T14:17:19Z").toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/en/guide/viaggio-ucraina`,
      lastModified: new Date("2025-06-22T14:17:19Z").toISOString(),
    },
    ...postEntries,
  ];
}
