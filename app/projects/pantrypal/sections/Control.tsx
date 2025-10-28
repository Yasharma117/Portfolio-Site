'use client';

import Image from 'next/image';
import controlLabel from '../assets/control-label.png';
import mockupLeft from '../assets/control-left.png';
import mockupTop from '../assets/control-top.png';
import mockupBottom from '../assets/control-bottom.png';

export default function Control() {
  return (
    <section className="relative w-full min-h-screen bg-[#a7b59b] px-6 md:px-16 lg:px-24 overflow-hidden flex items-center">
      {/* === GRID CONTENT === */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-12 items-start text-[#f5f6f2]">

        {/* === LEFT COLUMN === */}
        <div className="flex flex-col justify-start">
          <div className="flex justify-center mb-8">
            <Image
              src={mockupLeft}
              alt="PantryPal Control section left mockups"
              className="object-contain rounded-lg"
              priority
            />
          </div>

          <p
            className="md:text-lg max-w-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-aeonik)' }}
          >
            The Smart Insights panel at the bottom contextualises inventory — 
            “Here’s what you can cook before it spoils,” bridging the gap between 
            information and action.
          </p>
        </div>

        {/* === CENTER COLUMN === */}
        <div className="flex flex-col text-center items-center">
          <div className="w-64 mb-6">
            <Image
              src={controlLabel}
              alt="Control label"
              className="object-contain"
              priority
            />
          </div>

          <p
            className="text-base md:text-lg max-w-md mb-6"
            style={{ fontFamily: 'var(--font-aeonik)' }}
          >
            Filters like Category and Expiration are upfront and thumb-friendly,
            promoting quick scanning.
          </p>

          <p
            className="italic text-2xl md:text-3xl leading-snug mb-8"
            style={{ fontFamily: 'var(--font-cooperlt)' }}
          >
            The user isn’t just seeing what’s left. <br />
            They’re guided toward what to do next.
          </p>

          <p
            className="md:text-lg max-w-sm leading-relaxed"
            style={{ fontFamily: 'var(--font-aeonik)' }}
          >
            Visual consistency in tags (Use Now, Details) reinforces decision clarity,
            while micro-interactions like tooltip hints or motion affordances keep
            the screen feeling alive.
          </p>
        </div>

        {/* === RIGHT COLUMN (anchored mockups) === */}
        <div className="relative w-full">
          {/* Top mockup anchored to top */}
          <div className="absolute top-0 right-0">
            <Image
              src={mockupTop}
              alt="Top mockup"
              className="object-contain"
              width={230}
              height={320}
              priority
            />
          </div>

          {/* Bottom mockup anchored to bottom */}
          <div className=" right-0">
            <Image
              src={mockupBottom}
              alt="Bottom mockup"
              className="object-contain"
              width={230}
              height={320}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
