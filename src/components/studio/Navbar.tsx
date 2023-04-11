import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Navbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Link href="/" className="text-slate-900 flex items-center">
          <ArrowUturnLeftIcon className="h-6 w-6 mr-2 text-slate-900" />
          ආපසු වෙබ් අඩවියට
        </Link>

        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          අපගේ Discord සේවාදායකය හා සම්බන්ධ වන්න{" "}
          <a href="#" className="font-semibold text-indigo-600">
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
