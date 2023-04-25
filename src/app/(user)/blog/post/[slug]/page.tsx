import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { groq } from "next-sanity";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { TextComponents } from "@/components/TextComponets";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3600; // Revalidate every hour.

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
  *[_type=='post' && slug.current == $slug][0]
  {
    ...,
    author->,
    categories[]->,
  } 
  `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28 min-h-screen mt-24">
      <section className="space-y-2 text-slate-900 border border-slate-700 rounded-xl">
        <div className="relative min-h-56 felx flex-col md:flex-row justify-between ">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              src={urlFor(post.mainImage).url()}
              className="object-cover object-center mx-auto"
              alt={post.title}
              fill
            />
          </div>

          <section className="p-5 bg-emerald-500 rounded-xl w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p>
                  {new Date(post._createdAt).toLocaleDateString("si-LK", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src={urlFor(post.author.image).url()}
                  className="rounded-full"
                  alt={post.author.name}
                  width={40}
                  height={40}
                />

                <div className="w-64">
                  <h3 className="text-lg font-bold">{post.author.name}</h3>
                  <div></div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="pt-10">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className="text-white bg-slate-700 px-3 py-1 rounded-full text-sm font-semibold mt-4"
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={TextComponents} />
    </article>
  );
};

export default Post;
