"use client";
import Image from "next/image";
import CTAButton from "./CTAButton";
import WordReveal from "./WordReveal";
import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="relative bg-[#FFFCF5] px-6 md:px-12 py-10 text-black overflow-hidden h-screen">
      {/* About heading */}
      <h2
        className="text-8xl mb-4"
        style={{ fontFamily: "var(--font-lordstory)", lineHeight: "100%" }}
      >
        ABOUT ME
      </h2>

      {/* Curved text note
      <div className="absolute top-0 left-0 w-[300px] md:w-[900px] lg:w-[1200px]">
        <Image
          src="/about/arc_about.png"
          alt="Curved note about music, tech and food"
          width={700}
          height={150}
          className="w-full h-auto"
          priority
        />
      </div> */}

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 ">
        {/* Text content */}
        <div className="flex-1 max-w-[55%]">
          <div
            className="text-2xl leading-[140%] font-normal"
            style={{ fontFamily: "var(--font-aeonik)" }}
          >
            <div>Hi, I’m Yash!</div>

            <div className="">
              My introduction to design occurred as I was completing my BTech
              university applications, where I was drawn to the manner in which
              digital interfaces had the ability to shape behavior and emotion.
              What began as curiosity turned into an all-out passion for UI/UX.
            </div>

            <div className="">
              Throughout my career (which has literally just started as of
              2025), I've had the opportunity to work on a wide range of
              projects, from onboarding flows to dashboards, always striving to
              marry&nbsp;
              <WordReveal word="clarity" imageSrc="/about/clarity.png" />
              &nbsp;with&nbsp;
              <WordReveal word="creativity" imageSrc="/about/creativity.png" />.
              I believe that great design is invisible, intuitive, and
              empathetic.
            </div>

            <div className="">
              I’m always exploring how thoughtful design can make everyday
              interactions more meaningful, and I’d love to be part of projects
              that challenge the&nbsp;
              <WordReveal word="ordinary" imageSrc="/about/ordinary.png" />.
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-6">
            <Link
              href="https://drive.google.com/file/d/167030nGEZKvaReJmDTMrEsrOltUc7uLf/view?usp=sharing"
              target="_blank"
              className="relative grid h-12 px-8 place-items-center rounded-[10px] bg-black text-white font-bold
                         before:absolute before:inset-0 before:rounded-[8px] 
                         before:shadow-[inset_0_4px_4px_rgba(255,255,255,0.68),inset_0_-4px_4px_rgba(255,255,255,0.47)]"
            >
              Resume
            </Link>
            <Link
              href="http://www.linkedin.com/in/yashsharma71102"
              target="_blank"
              className="relative grid h-12 px-8 place-items-center rounded-[10px] bg-black text-white font-bold
                         before:absolute before:inset-0 before:rounded-[8px] 
                         before:shadow-[inset_0_4px_4px_rgba(255,255,255,0.68),inset_0_-4px_4px_rgba(255,255,255,0.47)]"
            >
              LinkedIn
            </Link>
            <Link
              href="mailto:yash.republic@gmail.com"
              className="relative grid h-12 px-8 place-items-center rounded-[10px] bg-black text-white font-bold
                         before:absolute before:inset-0 before:rounded-[8px] 
                         before:shadow-[inset_0_4px_4px_rgba(255,255,255,0.68),inset_0_-4px_4px_rgba(255,255,255,0.47)]"
            >
              Mail
            </Link>
          </div>
        </div>

        {/* Images section */}
        <div className=" w-[40%] min-w-[250px] h-[500px]">
          <Image
            src="/about/polaroid1.png"
            alt="Pinned Yash 1"
            width={370}
            height={370}
            className="absolute top-0 right-5 rotate-[6deg]"
          />
          <Image
            src="/about/polaroid2.png"
            alt="Pinned Yash 2"
            width={370}
            height={370}
            className="absolute top-[300px]  rotate-[-8deg]"
          />
        </div>
      </div>
    </section>
  );
}
