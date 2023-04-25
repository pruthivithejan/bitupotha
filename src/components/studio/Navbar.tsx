import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Navbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/blog" className="text-slate-900 flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-slate-900" />
          ආපසු වෙබ් අඩවියට
        </Link>

        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 inline">
          අපගේ{" "}
          <svg
            className="w-5 h-5 inline"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
              clip-rule="evenodd"
            />
          </svg>
          සේවාදායකය හා සම්බන්ධ වන්න{" "}
          <a
            href="https://discord.gg/4eeurUVvTy"
            className="font-semibold text-indigo-600"
            target="_blank"
          >
            <span className="absolute inset-0" aria-hidden="true" />
            මෙතැනින් <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default Navbar;
