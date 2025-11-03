"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);
  useEffect(() => {
    setShowVideo(true);
  }, []);
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center justify-center min-h-[900px] md:min-h-[1000px] bg-[#FFFEF5]">
      {/* Cloud animation (video background) */}
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/hero/bg-clouds.mp4" type="video/mp4" />
        </video>
      )}
      {/* Collage background */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image
          src="/hero/hero_grouped.png"
          alt="Collage background"
          fill
          priority
          className="object-cover object-center -z-5"
        />
      </div>
      {/* Foreground content */}
      <div className="relative z-20 px-6 text-center -mt-42">
        <h1
          className="mb-8 text-4xl md:text-[40px] lg:text-[40px] font-bold text-black"
          style={{ fontFamily: "var(--font-offbit)" }}
        >
          Designing fun, user friendly products.
        </h1>
        <p
          className="mb-10 text-2xl md:text-3xl text-gray-800 max-w-xl mx-auto font-light italic"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Accessible layouts, readable typography and flows that empower users.
        </p>
        <Link
          href="/work"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-[#7B68EE] rounded-full shadow-md hover:bg-[#6452CC] transition-colors"
          style={{ fontFamily: "var(--font-offbit)" }}
        >
          View my work
        </Link>
      </div>
    </section>
  );
}
