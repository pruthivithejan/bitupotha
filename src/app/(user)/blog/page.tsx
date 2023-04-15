import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity.client";
import PreviewSuspense from "@/components/PreviewSuspense";
import PreviewBlogPost from "@/components/PreviewBlogPost";
import BlogList from "@/components/BlogList";

export const revalidate = 3600; // Revalidate every hour.
const query = groq`
 *[_type=='post']{
  ...,
  author->,
  categories[]->,
 } | order(_createdAt desc)
`;

export default async function Blog() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-slate-800">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogPost query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <main className="min-h-screen max-w-7xl mx-auto">
      <div className="mt-24">
        <BlogList posts={posts} />
      </div>
    </main>
  );
}
