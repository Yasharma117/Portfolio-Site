// components/CuratedWork.tsx
"use client"

import { Project } from "./Project"
import Image from "next/image"

const curatedItems = [
  {
    id: "pantrypal",
    title: "PantryPal",
    description: "AI kitchen assistant that auto-generates recipes from your pantry.",
    technologies: ["Next.js", "OpenAI", "Framer Motion"],
    image: "/images/pantrypal-thumb.png",
    video: "/videos/pantrypal-preview.mp4"
  },
  {
    id: "ambition",
    title: "Ambition",
    description: "Personal growth tracker that helps visualize your goals.",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "/images/ambition-thumb.png",
    video: "/videos/ambition-preview.mp4"
  }
]

export default function CuratedWork() {
  return (
    <div className="relative">
      {/* Sticky Banner */}
      <div className="sticky top-0 z-10 bg-black text-white py-8 flex justify-between items-center px-6">
        <Image
          src="/curatedWork/banner-title.png"
          alt="left banner"
          width={300}
          height={100}
          className="object-contain"
        />
        <h2 className="text-4xl italic font-light">Curated Work</h2>
        <Image
          src="/curatedWork/banner-title.png"
          alt="right banner"
          width={300}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Scroll Snap Sections */}
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        {curatedItems.map(item => (
          <section
            key={item.id}
            className="h-screen snap-start flex items-center justify-center bg-black text-white px-4"
          >
            <div className="w-full max-w-5xl">
              <Project
                id={item.id}
                title={item.title}
                description={item.description}
                technologies={item.technologies}
                image={item.image}
                video={item.video}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
