import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Back() {
  return (
    <>
      {/* Back Button - Fixed Position */}
      <Link
        href="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-4 bg-black/60 backdrop-blur-sm hover:bg-black/80 text-white rounded-full transition-all duration-300 group"
      >
        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        {/* <span className="font-medium">Back</span> */}
      </Link>
    </>
  );
}
