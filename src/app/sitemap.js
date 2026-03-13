import { fetchAllPosts } from "@/lib/fetchPosts";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const posts = await fetchAllPosts();

  const postEntries = posts.flatMap((post) => [
    {
      url: `${baseUrl}/blog/${post.id}`, // IT
      lastModified: new Date(post.created_at).toISOString(),
    },
    {
      url: `${baseUrl}/en/blog/${post.id}`, // EN
      lastModified: new Date(post.created_at).toISOString(),
    },
  ]);

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2025-01-01T10:00:12Z").toISOString(),
    },
    {
      url: `${baseUrl}/en/about`,
      lastModified: new Date("2025-01-01T10:00:12Z").toISOString(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date("2025-03-01T12:30:06Z").toISOString(),
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date("2025-03-01T12:30:06Z").toISOString(),
    },
    {
      url: `${baseUrl}/contatti`,
      lastModified: new Date("2025-02-20T09:15:43Z").toISOString(),
    },
    {
      url: `${baseUrl}/en/contatti`,
      lastModified: new Date("2025-02-20T09:15:43Z").toISOString(),
    },
    {
      url: `${baseUrl}/traduzione-intervista`,
      lastModified: new Date("2025-04-10T18:00:22Z").toISOString(),
    },
    {
      url: `${baseUrl}/en/traduzione-intervista`,
      lastModified: new Date("2025-04-10T18:00:22Z").toISOString(),
    },
    {
      url: `${baseUrl}/guide/viaggio-ucraina`,
      lastModified: new Date("2025-06-22T14:17:19Z").toISOString(),
    },
    {
      url: `${baseUrl}/en/guide/viaggio-ucraina`,
      lastModified: new Date("2025-06-22T14:17:19Z").toISOString(),
    },
    ...postEntries,
  ];
}
