"use client";

import Link from "next/link";

export function GoBack() {
  return (
    <Link href="/">
      <button type="button"
        className="
          relative
          px-4
          py-2
          mb-6
          bg-gradient-to-b
          from-neutral-900
          to-neutral-800
          dark:from-black
          dark:to-neutral-900
          rounded-lg
          border
          border-neutral-700
          dark:border-neutral-800
          shadow-[2px_2px_10px_rgba(0,0,0,0.2)]
          dark:shadow-[2px_2px_10px_rgba(0,0,0,0.4)]
          transform
          transition-all
          duration-200
          hover:scale-110
          active:scale-95
          text-sm
          font-medium
          text-neutral-200
          dark:text-neutral-100
        "
      >
        ← Back
      </button>
    </Link>
  );
}