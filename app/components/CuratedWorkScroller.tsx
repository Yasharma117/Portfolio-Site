"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const curatedProjects = [
  {
    id: "ridesense",
    title: "🚧 CaseStudy under construction, coming Soon 🚧",
    subtitle: "🚧 CaseStudy under construction, coming Soon 🚧",
    date: "July 2025",
    description:
      "Owning the full product roadmap at RideSense, from concept to creation and launch! Designing the best experience for bike riders.",
    thumbnail: "/curatedWork/ridesense-thumbnail.png",
    preview: "/projects/ridesense/preview.mp4"
  },
  {
    id: "pantrypal",
    title: "PantryPal",
    subtitle: "Concept app design",
    date: "Feb 2025",
    description:
      "A kitchen inventory management and cooking app, allowing you to track the health of the items in your pantry",
    thumbnail: "/curatedWork/pantrypal-thumbnail.png",
    preview: "/projects/pantrypal/preview.mp4"
  },
  {
    id: "ambition",
    title: "Ambition",
    subtitle: "Concept app design",
    date: "Apr 2025",
    description:
      "A career vision-building app that allows users to break down ambitious goals into actionable steps",
    thumbnail: "/curatedWork/ambition-thumbnail.png",
    preview: "/curatedWork/ambition.gif"
  }
]

export default function CuratedWorkScroller() {
  const router = useRouter()

  return (
    <div className="relative h-screen bg-black text-white overflow-hidden">
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 bg-black flex justify-between items-center w-full  py-2 mt-6">
        <Image
          src="/curatedWork/banner-title.png"
          alt="left banner"
          width={450}
          height={400}
          className="object-contain"
        />
        <h2 className="text-3xl italic font-light">Curated Work</h2>
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
            className="snap-start h-screen flex flex-col justify-center items-center px-6 py-10 cursor-pointer transition-all hover:scale-[1.01]"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center max-w-4xl"
            >
              <p className="mb-4 text-lg">{project.subtitle}</p>

              <HoverPreview
                imageSrc={project.thumbnail}
                videoSrc={project.preview}
              />

              <p className="italic text-lg mt-6 mb-2">~ {project.date}</p>
              <p className="text-md max-w-xl mx-auto leading-relaxed">{project.description}</p>

              {/* 👇 Link Button */}
              <Link
                href={`/projects/${project.id}`}
                className="inline-block mt-6 px-4 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-all"
              >
                View Case Study →
              </Link>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  )
}

function HoverPreview({ imageSrc, videoSrc }: { imageSrc: string; videoSrc: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative w-[700px] h-[400px] rounded-xl overflow-hidden mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={imageSrc}
        alt="thumbnail"
        fill
        className={`object-cover transition-opacity duration-500 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}
