'use client'

import { useRef } from 'react'

interface VideoPlayerProps {
  src: string
  poster?: string
  className?: string
}

export const VideoPlayer = ({ src, poster, className }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleMouseEnter = () => {
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      poster={poster}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`rounded-xl  transition-all duration-300 hover:scale-[1.01] ${className || ''}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
