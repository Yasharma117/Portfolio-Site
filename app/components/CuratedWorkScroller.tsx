"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const curatedProjects = [
  {
    id: "ridesense",
    title: "🚧 CaseStudy under construction, coming Soon 🚧",
    subtitle: "🚧 CaseStudy under construction, coming Soon 🚧",
    date: "July 2025",
    description:
      "Owning the full product roadmap at RideSense, from concept to creation and launch! Designing the best experience for bike riders.",
    thumbnail: "/curatedWork/ridesense-thumbnail.png",
  },
  {
    id: "pantrypal",
    title: "PantryPal",
    subtitle: "Concept app design",
    date: "Feb 2025",
    description:
      "A kitchen inventory management and cooking app, allowing you to track the health of the items in your pantry.",
    thumbnail: "/curatedWork/pantrypal-thumbnail.png",
  },
  {
    id: "ambition",
    title: "Ambition",
    subtitle: "Concept app design",
    date: "Apr 2025",
    description:
      "A career vision-building app that allows users to break down ambitious goals into actionable steps.",
    thumbnail: "/curatedWork/ambition-thumbnail.png",
  },
];

export default function CuratedWorkScroller() {
  const router = useRouter();

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 bg-black flex justify-between items-center w-full pt-6 pb-0">
        <Image
          src="/curatedWork/banner-title.png"
          alt="left banner"
          width={450}
          height={400}
          className="object-contain"
        />
        <h2
          className="text-4xl italic font-light"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Curated Work
        </h2>
        <Image
          src="/curatedWork/banner-title.png"
          alt="right banner"
          width={450}
          height={400}
          className="object-contain"
        />
      </div>

      {/* Scrollable Section */}
      <div className="h-full overflow-y-scroll snap-y snap-mandatory">
        {curatedProjects.map((project) => (
          <section
            key={project.id}
            onClick={() => router.push(`/projects/${project.id}`)}
            className="snap-start h-screen flex flex-col justify-center items-center px-6 cursor-pointer transition-all hover:scale-[1.01]"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center max-w-4xl"
            >
              <p
                className="mb-4 text-2xl"
                style={{ fontFamily: "var(--font-cooperlt)" }}
              >
                {project.subtitle}
              </p>

              {/* Preview Image */}
              <HoverPreview imageSrc={project.thumbnail} />

              <p
                className="text-2xl mt-2 mb-2 max-w-sm mx-auto font-light text-left items-start"
                style={{ fontFamily: "var(--font-cooperlt)" }}
              >
                ~ {project.date}
              </p>
              <p
                className="text-2xl max-w-sm mx-auto font-light text-left items-start"
                style={{ fontFamily: "var(--font-cooperlt)" }}
              >
                {project.description}
              </p>

              {/* View Case Study Button */}
              <Link
                href={`/projects/${project.id}`}
                className="inline-block mt-4 px-4 py-2 border border-white rounded-full text-lg hover:bg-white hover:text-black transition-all"
              >
                View Case Study →
              </Link>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
}

function HoverPreview({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="group transition-transform duration-500 hover:scale-105">
      <div className="relative w-[600px] h-[350px] rounded-xl overflow-hidden mx-auto">
        <Image
          src={imageSrc}
          alt="thumbnail"
          width={600}
          height={350}
          className="object-cover"
        />
      </div>
    </div>
  );
}
