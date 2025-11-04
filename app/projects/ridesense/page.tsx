"use client";

import Image from "next/image";

export default function RideSensePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-6">
      <Image
        src="/curatedWork/ridesense-thumbnail.png"
        alt="RideSense placeholder"
        width={400}
        height={250}
        className="rounded-lg mb-8 opacity-70"
      />

      <h1 className="text-4xl font-bold mb-4">RideSense Case Study</h1>
      <p className="text-xl text-gray-300 max-w-2xl mb-8">
        🚧 This page is currently under construction. The full case study will be live soon —
        stay tuned as I fine-tune the details and visuals for a smooth ride ahead!
      </p>

      <div className="w-48 h-1 bg-gray-700 overflow-hidden rounded-full">
        <div className="animate-pulse bg-white h-full w-1/3 rounded-full"></div>
      </div>

      <p className="mt-10 text-sm text-gray-500">
        Meanwhile, check out other case studies from my curated work section.
      </p>
    </main>
  );
}
