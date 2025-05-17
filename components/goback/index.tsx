"use client";

import Link from "next/link";

export function GoBack() {
  return (
    <Link href="/">
      <button
        type="button"
        className="relative mb-6 transform rounded-lg border border-neutral-700 bg-gradient-to-b from-neutral-900 to-neutral-800 px-4 py-2 font-medium text-neutral-200 text-sm shadow-[2px_2px_10px_rgba(0,0,0,0.2)] transition-all duration-200 hover:scale-110 active:scale-95 dark:border-neutral-800 dark:from-black dark:to-neutral-900 dark:text-neutral-100 dark:shadow-[2px_2px_10px_rgba(0,0,0,0.4)] "
      >
        ← Back
      </button>
    </Link>
  );
}
