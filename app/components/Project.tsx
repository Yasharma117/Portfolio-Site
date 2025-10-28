// components/Project.tsx
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface ProjectProps {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  video: string
}

export const Project = ({ title, description, technologies, image, video }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
      />

      <div className="absolute bottom-0 bg-black/60 text-white p-6 w-full">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm mb-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span key={tech} className="text-xs bg-white/10 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
