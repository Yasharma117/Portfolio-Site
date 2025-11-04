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
          Designing clean, user friendly products.
        </h1>

        <p
          className="mb-10 text-2xl md:text-3xl text-gray-800 max-w-xl mx-auto font-light italic"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Accessible layouts, readable typography and flows that empower users.
        </p>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {/* Resume */}
          <Link
            href="https://drive.google.com/file/d/167030nGEZKvaReJmDTMrEsrOltUc7uLf/view?usp=sharing"
            target="_blank"
            className="rounded-lg px-8 py-3 text-white font-bold text-lg
                       bg-gradient-to-b from-[#5670FB] to-[#2144FF]
                       border border-[#536AF0]
                       shadow-[0_4px_3px_#426B85]
                       [box-shadow:inset_0_5px_5px_rgba(255,255,255,0.25)]"
          >
            Resume
          </Link>

          {/* LinkedIn */}
          <Link
            href="http://www.linkedin.com/in/yashsharma71102"
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

          {/* Email */}
          <Link
            href="mailto:yash.republic@gmail.com"
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
        </div>
      </div>

      {/* Bottom-right "View Work" button */}
      <Link
        href="/Yash_CV.pdf"
        target="_blank"
        className="absolute bottom-10 right-10 z-30 rounded-lg px-10 py-3 text-white font-bold text-lg bg-gradient-to-b from-[#5670FB] to-[#2144FF]
                   border border-[#536AF0]
                   shadow-[0_4px_3px_#426B85]
                   [box-shadow:inset_0_5px_5px_rgba(255,255,255,0.25)]"
      >
        View Work
      </Link>
    </section>
  );
}
