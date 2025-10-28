"use client";

import Image from "next/image";
import hero from "../assets/hero.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:pl-24 lg:pr-0 pt-20 bg-[#FFFEF5] text-black overflow-hidden">
      <div className="absolute top-8 left-0 w-full flex justify-between items-center px-6 lg:px-16">
        {/* Back Button */}
        <Link
          href="/"
          className="border border-black rounded-lg px-6 py-2 text-lg font-medium hover:bg-black hover:text-white transition-colors duration-300"
          style={{ fontFamily: "var(--font-aeonik)" }}
        >
          Back
        </Link>

        {/* Title */}
        <h1
          className="text-2xl md:text-3xl font-extrabold underline decoration-2 underline-offset-4"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Onboarding Concept Redesign
        </h1>

        {/* Spacer div for symmetrical alignment */}
        <div className="w-[92px]" />
      </div>
      
      {/* Left Content */}
      <div className="flex flex-col gap-4 max-w-xl">
        <h1
          className="text-3xl md:text-2xl font-bold leading-tight italic"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Personalized Onboarding <br />
          <br /> Not just filling details, but your story first.
        </h1>

        <p
          className="text-2xl mt-4 text-black font-bold"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Get personalised community recommendations based on where you are in
          your career and what your needs are.
        </p>

        <p
          className="mt-6 text-2xl text-black font-light"
          style={{ fontFamily: "var(--font-aeonik)" }}
        >
          An onboarding journey to tell your story. A personalised experience
          and a community for you.
        </p>

        <div
          className="mt-4 flex items-center gap-3 text-2xl text-black font-bold italic underline"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          <span className="font-bold">AmbitionBox</span>
          <span>•</span>
          <span>Concept Redesign 2025</span>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative flex justify-end items-center w-full lg:w-[55%] h-full overflow-hidden">
        <div className="relative w-full h-auto flex justify-end">
          <Image
            src={hero}
            alt="Hero Visual"
            priority
            className="w-full h-auto max-w-none object-contain lg:object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
