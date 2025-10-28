"use client";

import React from "react";

export const Philosophy = () => {
  return (
    <section className="min-h-screen w-full bg-black text-white px-6 py-20 flex flex-col items-center justify-center text-center">
      <h2
        className="text-3xl md:text-4xl font-normal font-display mb-12"
        style={{ fontFamily: "var(--font-spicyrice)" }}
      >
        Here’s the Philosophy I came up with
      </h2>

      <div className="max-w-3xl text-xl md:text-2xl">
        <p
          className="italic font-bold mb-2"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Strip It Down, Then Rebuild It Emotionally
        </p>
        <p
          className="mb-12 font-light"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          The original onboarding was fragmented, community onboarding in one
          place, user preferences in another. It was logically sound, but
          emotionally disjointed. My first move was to consolidate everything
          into a single, unified experience. Not just to reduce the number of
          steps, but to tell a coherent, user-centred story.
        </p>

        <div
          className="text-center italic text-lg md:text-xl"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          <p className="">Each screen became a chapter:</p>
          <ul className="list-disc text-left mx-auto inline-block space-y-1">
            <li>Who you are (with aliases)</li>
            <li>Where you are in your journey</li>
            <li>Where you want to go</li>
            <li>What you'd like to see</li>
            <li>And why all of this matters</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
