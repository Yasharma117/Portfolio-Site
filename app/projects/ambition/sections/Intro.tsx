'use client'

import Image from 'next/image'
import introBg from '../assets/bg-intro.png'

export default function Intro() {
  return (
    <section
      className="min-h-screen w-full text-white py-24 px-6 md:px-16 flex flex-col items-center text-center"
      style={{
        backgroundImage: `url(${introBg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-4xl space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold"
        style={{ fontFamily: "var(--font-cooperlt)" }}>
          Designing Belonging: Rethinking <br />
          AmbitionBox’s Onboarding from the Inside Out
        </h2>

        <a
          href="#"
          className="text-white underline text-2xl flex justify-center items-center gap-1"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Disclaimer
          <span role="img" aria-label="gear">
            ⚙️
          </span>
        </a>

        <p className="text-xl md:text-2xl font-light leading-relaxed"
        style={{ fontFamily: "var(--font-cooperlt)" }}>
          This project was created as a conceptual redesign exercise under a given design
          brief from AmbitionBox. The goal was to unify two fragmented onboarding flows
          into one cohesive, emotionally intelligent journey for first-time users. This
          case study focuses on experience design thinking, storytelling, and visual
          design craft. With this scope defined, I wanted to go beyond collecting data and
          start building belonging.
        </p>

        <p className="text-xl md:text-2xl font-light leading-relaxed"
        style={{ fontFamily: "var(--font-cooperlt)" }}>
          When I first looked at AmbitionBox’s onboarding experience, it felt like a
          polite handshake: informative, structured, and brief. But it didn’t feel like an
          invitation. It lacked emotional resonance and the kind of warm, intentional
          storytelling that makes a user think, “This is for me.”
        </p>
      </div>
    </section>
  )
}
