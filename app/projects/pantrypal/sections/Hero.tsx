"use client";

import Image from "next/image";
import heroBg from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-[#343434] to-[#272727] text-white relative overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden bg-[#2d2d2d]">
        <Image
          src={heroBg}
          alt="Pantry Pal Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Foreground Text Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-md"
        style={{ fontFamily: "var(--font-aeonik)" }}>
          PANTRY PAL: Designing an AI kitchen assistant for smarter grocery
          living
        </h1>
        <p className="text-xl md:text-xl max-w-xl text-white"
        style={{ fontFamily: "var(--font-aeonik)" }}>
          Exploring how AI can help users manage pantry freshness, plan meals,
          and shop intelligently, without losing the joy of human
          decision-making.
        </p>
      </div>
    </section>
  );
}
