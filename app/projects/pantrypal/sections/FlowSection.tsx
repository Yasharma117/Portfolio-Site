'use client';

import Image from 'next/image';
import mockupGroup from '../assets/flow-img.png'; // grouped mockups

export default function FlowSection() {
  return (
    <section className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* === LEFT: Text Content === */}
      <div className="bg-[#E34E38] text-white px-8 md:px-16 lg:px-24 flex flex-col justify-center">
        <h2 className="italic text-3xl md:text-4xl font-light mb-6" style={{ fontFamily: 'var(--font-cooperlt)' }}>Flow, not friction.</h2>
        <p className="italic text-2xl md:text-3xl mb-10" style={{ fontFamily: 'var(--font-cooperlt)' }}>
          Cooking becomes an act of focus and calm, supported by intelligence that listens,
          adapts, and stays out of the way.
        </p>
        <p className="text-xl md:text-2xl mb-6" style={{ fontFamily: 'var(--font-aeonik)' }}>
          The AutoChef interface uses bold visuals and minimal text to guide users
          step-by-step through recipes.
        </p>
        <p className=" text-xl md:text-2xl mb-6" style={{ fontFamily: 'var(--font-aeonik)' }}>
          Each stage features voice narration, a timer, and a progress bar that keeps users
          in flow without constant interaction.
        </p>
        <p className=" text-xl md:text-2xl " style={{ fontFamily: 'var(--font-aeonik)' }}>
          In fullscreen mode, visuals take center stage while concise instructions and slow,
          deliberate transitions mirror the natural rhythm of real cooking.
        </p>
      </div>

      {/* === RIGHT: Mockup Image === */}
      <div className="bg-black flex justify-center items-center py-16 lg:py-24">
        <Image
          src={mockupGroup}
          alt="PantryPal Flow mockups"
          className=" object-contain"
          width={500}
          height={500}
/>
      </div>
    </section>
  );
}
