"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Avoid hydration errors
    setShowVideo(true);
  }, []);

  return (
    <section className="relative w-full overflow-hidden flex items-center justify-center aspect-[1440/1024] md:aspect-[4/3] lg:aspect-[16/9] min-h-[700px]">

      {/* Background collage */}
      <Image
        src="/hero/hero_grouped.png"
        alt="Collage background"
        fill
        priority
        className="object-cover object-center -z-5"
      />
      {/* Cloud animation */}
      {showVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-[400px] object-cover -z-10 pointer-events-none"
        >
          <source src="/hero/bg-clouds.mp4" type="video/mp4" />
        </video>
      )}
      {/* central content */}
      <div className="relative z-10 mx-6 max-w-xl text-center text-black -mt-10 md:-mt-90">
        <h1
          className="mb-6 text-xl sm:text-xl md:text-[30px] font-bold pb-4"
          style={{ fontFamily: "var(--font-offbit)" }}
        >
          Designing clean, user friendly products.
        </h1>

        <p
          className="mb-10 text-3xl leading-relaxed text-gray-800"
          style={{ fontFamily: "var(--font-aeonik)" }}
        >
          Accessible layouts, readable typography and flows that empower users.
        </p>

        {/* Resume button + Social icons */}
        <div className="mb-10 flex justify-center items-center gap-6">
          {/* Resume Button */}
          <Link
            href="/Yash_CV.pdf"
            target="_blank"
            className="rounded-lg px-8 py-3 text-white font-bold text-lg
                       bg-gradient-to-b from-[#5670FB] to-[#2144FF]
                       border border-[#536AF0]
                       shadow-[0_4px_3px_#426B85]
                       [box-shadow:inset_0_5px_5px_rgba(255,255,255,0.25)]"
          >
            Resume
          </Link>

          {/* Email Icon */}
          <Link
            href="mailto:hello@yash.design"
            className="relative grid h-12 w-12 place-items-center rounded-[10px] bg-black 
                       before:absolute before:inset-0 before:rounded-[8px] 
                       before:shadow-[inset_0_4px_4px_rgba(255,255,255,0.68),inset_0_-4px_4px_rgba(255,255,255,0.47)]"
            aria-label="Email"
          >
            <Image
              src="/icons/material-symbols_mail.png"
              alt="email"
              width={30}
              height={30}
            />
          </Link>

          {/* LinkedIn Icon */}
          <Link
            href="https://linkedin.com/in/yash"
            target="_blank"
            rel="noopener noreferrer"
            className="relative grid h-12 w-12 place-items-center rounded-[10px] bg-black 
                       before:absolute before:inset-0 before:rounded-[8px] 
                       before:shadow-[inset_0_4px_4px_rgba(255,255,255,0.68),inset_0_-4px_4px_rgba(255,255,255,0.47)]"
            aria-label="LinkedIn"
          >
            <Image
              src="/icons/pixel_linkedin.png"
              alt="linkedin"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      {/* résumé button */}{" "}
      <Link
        href="/Yash_CV.pdf"
        target="_blank"
        className="absolute bottom-6 right-6 z-20 rounded-lg px-10 py-3 text-white font-bold text-xl bg-gradient-to-b from-[#5670FB] to-[#2144FF] border-[#536AF0] shadow-[0_4px_3px_#426B85] [box-shadow:inset_0_5px_5px_rgba(255,255,255,0.25)]"
      >
        {" "}
        View Work{" "}
      </Link>
    </section>
  );
}
