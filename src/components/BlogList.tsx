import urlFor from "@/lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientRoute from "./ClientRoute";
type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-400 lg:my-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts.map((post) => (
          <ClientRoute key={post._id} route={`/blog/post/${post.slug.current}`}>
            <div key={post._id} className="felx flex-col cursor-pointer group">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  src={urlFor(post.mainImage).url()}
                  className="object-cover object-left lg:object-center"
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold"> {post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("si-LK", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map((category) => (
                      <div className="text-center text-black bg-emerald-500 px-3 py-1 rounded-full text-sm font-semibold">
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="text-lg font-bold">
                  <span className="underline">{post.title}</span>
                  &nbsp;&#8901;&nbsp;
                  <span className="underline">{post.author.name}</span>
                </p>
                <p className="line-clamp-2 text-gray-500">{post.description}</p>
              </div>
              <p className="mt-5 font-bold flex items-center group-hover:underline">
                කියවන්න
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
            </div>
          </ClientRoute>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
