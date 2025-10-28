"use client";

import React from "react";

export default function LearningSection() {
  return (
    <section className="w-full min-h-screen bg-[#5670FB] text-white flex flex-col items-center justify-center text-center px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-normal mb-6 font-display"
      style={{ fontFamily: "var(--font-spicyrice)" }}>
        My learning
      </h2>
      <div className="max-w-3xl text-2xl md:text-3xl"
      style={{ fontFamily: "var(--font-cooperlt)" }}>
        <p>
          This redesign wasn’t about increasing completion rates or reducing
          friction. It was about <span className="italic font-bold underline">trust.</span>
          It was about helping users feel that{" "}
          <span className="italic font-bold underline">their story matters</span>, and that
          they{" "}
          <span className="italic font-bold underline">
            control how much of that story they want to share
          </span>. I didn’t redesign onboarding to make it efficient.
          I redesigned it so that, finally, it could say:
          <br />
          <span className="block text-2xl mt-4 font-extrabold underline italic">
            “Welcome. We see you.”
          </span>
        </p>
      </div>
    </section>
  );
}
