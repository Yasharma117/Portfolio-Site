"use client"

import React from "react"

const Empathy = () => {
  return (
    <section className="w-full min-h-screen px-6 py-20 md:px-12 flex flex-col items-center justify-center bg-[#5670FB] text-white text-center">
      {/* Main Heading */}
      <h2 className="text-white text-2xl md:text-4xl font-normal mb-10"
      style={{ fontFamily: "var(--font-spicyrice)" }}>
        What role does Empathy play in an Onboarding Journey ?
      </h2>

      {/* Subheading Text */}
      <p className="max-w-4xl text-base md:text-3xl  mb-16 font-medium"
      style={{ fontFamily: "var(--font-aeonik)" }}>
        For a platform which acts as a space of safety and shared purpose, having an onboarding that{" "}
        <span className="italic font-semibold">let’s the users tell their story creates a frictionless path</span>{" "}
        from telling their story to joining a community that provides them the support they need in their careers.
      </p>

      {/* Quote at the bottom */}
      <p className="max-w-5xl  text-white text-xl font-light"
      style={{ fontFamily: "var(--font-cooperlt)" }}>
        AmbitionBox is more than just data. It’s people talking about real work, real salaries, and real struggles,
        and doing so anonymously. That’s powerful. That’s rare. I wanted the onboarding flow to reflect that
        sense of psychological safety, authenticity, and shared purpose right from the first tap.
      </p>
    </section>
  )
}

export default Empathy
