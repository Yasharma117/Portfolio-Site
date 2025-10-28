"use client";

import Image from "next/image";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import hifi01 from "../assets/hifi-01.png";
import hifi02 from "../assets/hifi-thumbail-02.png";
import hifi03 from "../assets/hifi-thumbnail-03.png";
import hifi04 from "../assets/hifi-thumbnail-04.png";

export default function HiFiSection() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-20 space-y-16">
      {/* 01 - Image Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen gap-10">
        {/* Section Number */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
          <h2
            className="text-[80px] md:text-[100px] font-mono font-semibold leading-none"
            style={{ fontFamily: "var(--font-tourney)" }}
          >
            01
          </h2>
        </div>

        {/* Left Text */}
        <div className="flex-1 space-y-4 z-20 max-w-xl">
          <h3
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-cooperlt)" }}
          >
            Anonymity That Feels Empowering, Not Just Hidden
          </h3>

          <p
            className="text-xl "
            style={{ fontFamily: "var(--font-cooperlt)" }}
          >
            AmbitionBox is built on anonymity. But anonymity alone isn’t
            compelling.
          </p>

          <p className="text-xl" style={{ fontFamily: "var(--font-cooperlt)" }}>
            So I built a system around:
          </p>

          <ul
            className="list-disc list-inside text-xl space-y-1"
            style={{ fontFamily: "var(--font-cooperlt)" }}
          >
            <li>Aliases and randomized usernames</li>
            <li>Emoji avatars that felt expressive</li>
            <li>Clear messaging like: “Only your alias will be visible.”</li>
          </ul>

          <p
            className="text-xl mt-2"
            style={{ fontFamily: "var(--font-cooperlt)" }}
          >
            This gave users a way to show up, contribute, and belong.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full flex justify-center z-20">
          <Image
            src={hifi01}
            alt="HiFi 01 Screenshot"
            width={500}
            height={700}
            className="rounded-lg object-contain"
          />
        </div>
      </div>

      {/* 02 - Video Section */}
      <div className="relative flex flex-col lg:flex-row items-start justify-between min-h-screen">
        {/* Section Number */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <h2
            className="text-[90px] md:text-[110px] font-semibold leading-none"
            style={{ fontFamily: "var(--font-tourney)" }}
          >
            02
          </h2>
        </div>

        {/* Left Text */}
        <div className="flex-1 space-y-4 z-20 max-w-xl mt-36 ml-12">
          <p className="text-xl" style={{ fontFamily: "var(--font-cooperlt)" }}>
            Each screen became a chapter:
          </p>

          <ul
            className="list-disc list-inside text-xl space-y-1 italic"
            style={{ fontFamily: "var(--font-aeonik)" }}
          >
            <li>Who you are</li>
            <li>Where you are in your journey</li>
            <li>Where you want to go</li>
            <li>What you'd like to see</li>
            <li>And why all of this matters</li>
          </ul>

          <p className="text-xl" style={{ fontFamily: "var(--font-cooperlt)" }}>
            Every line of copy was rewritten for empathy.
            <br />
            These small shifts show users that the product understands them and
            helps them say “This is so me!”
          </p>
        </div>

        {/* Right Video */}
        <div className="flex-1 flex justify-center z-20 mt-16">
          <VideoPlayer
            className="h-[500px] w-[700px]"
            src="/projects/caseStudyAmbition/hifi-02.mp4"
            poster={hifi02.src}
          />
        </div>
      </div>

      {/* 03 - Video Section */}
      <div className="relative flex flex-col lg:flex-row items-start justify-between min-h-screen">
        {/* Section Number */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <h2
            className="text-[90px] md:text-[110px] font-semibold leading-none"
            style={{ fontFamily: "var(--font-tourney)" }}
          >
            03
          </h2>
        </div>

        {/* Left Text */}
        <div className="flex-1 space-y-4 z-20 max-w-xl mt-36 ml-12">
          <p className="text-xl" style={{ fontFamily: "var(--font-cooperlt)" }}>
            I didn’t want onboarding to feel like a form. I wanted it to feel
            like a moment of self-recognition. So I introduced a metaphor-based
            visual identity system tied to Years of Experience (YOE).
          </p>

          <p className="text-xl" style={{ fontFamily: "var(--font-cooperlt)" }}>
            Instead of a plain slider, users chose from stylised 3D characters:
          </p>

          <ul
            className="list-disc list-inside text-lg space-y-1 italic"
            style={{ fontFamily: "var(--font-aeonik)" }}
          >
            <li>
              A seedling holding a golden key{" "}
              <span className="not-italic">(just starting out)</span>
            </li>
            <li>A lighthouse-bearing team lead</li>
            <li>A telescope-carrying strategist</li>
            <li>A chess-knight mentor in modern robes</li>
          </ul>

          <p className="text-xl" style={{ fontFamily: "var(--font-cooperlt)" }}>
            These weren’t just aesthetic. They were identity scaffolds, helping
            users say, “That’s me.”
          </p>
        </div>

        {/* Right Video */}
        <div className="flex-1 flex justify-center z-20 mt-16">
          <VideoPlayer
            className="h-[500px] w-[700px]"
            src="/projects/caseStudyAmbition/hifi-03.mp4"
            poster={hifi03.src}
          />
        </div>
      </div>

      {/* 04 - Video Section */}
      <div className="relative flex flex-col lg:flex-row items-start justify-between min-h-screen">
        {/* Section Number */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
          <h2
            className="text-[90px] md:text-[110px] font-mono font-semibold leading-none"
            style={{ fontFamily: "var(--font-tourney)" }}
          >
            04
          </h2>
        </div>

        {/* Left Text */}
        <div className="flex-1 space-y-4 z-20 max-w-xl mt-36 ml-12">
          <p className="text-xl" style={{ fontFamily: "var(--font-cooperlt)" }}>
            It’s not only about taking in a user’s preferences but also allowing
            them to go through the experience without making it feel like
            filling a form or an application.
          </p>

          <p className="text-xl" style={{ fontFamily: "var(--font-cooperlt)" }}>
            A character card at the end serves as a sharable item that the user
            can savour as well :)
          </p>
        </div>

        {/* Right Video */}
        <div className="flex-1 flex justify-center z-20 mt-16">
          <VideoPlayer
            className="h-[500px] w-[700px]"
            src="/projects/caseStudyAmbition/hifi-04.mp4"
            poster={hifi04.src}
          />
        </div>
      </div>
    </section>
  );
}
