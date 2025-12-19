// React Imports
import type { SVGAttributes } from "react";
import { BookOpen } from "lucide-react";
import Link from "next/link";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity" />
        <div className="relative bg-gradient-to-r from-blue-500 to-indigo-500 p-2 rounded-lg">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
      </div>
      <div>
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          ZipJap
        </span>
        <div className="text-xs text-slate-500 -mt-1">Learn Japanese Fast</div>
      </div>
    </Link>
  );
};

export default Logo;
