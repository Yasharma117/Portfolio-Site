'use client';

import Image from 'next/image';
import efficiencyLabel from '../assets/efficiency-label.png'; // EFFICIENCY label
import mockupGroup from '../assets/efficiency-img.png'; // group image (both mockups)

export default function Efficiency() {
  return (
    <section className="min-h-screen w-full bg-[#2196F3] py-2 px-6 md:px-16 lg:px-24 text-white overflow-visible">
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-start">

        {/* === LEFT COLUMN === */}
        <div className="relative z-[2] flex flex-col space-y-8 lg:pr-8">

          {/* Efficiency Label - right aligned */}
          <div className="relative w-full flex justify-end mb-12 mt-4 right-[-10rem]">
            <div className="">
              <Image
                src={efficiencyLabel}
                alt="EFFICIENCY label"
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Top Paragraph */}
          <p className="text-xl md:text-2xl max-w-lg" style={{ fontFamily: 'var(--font-aeonik)' }}>
            At the top, the budget tracker remains visible anchoring every action in awareness, not anxiety.
            The Best Buy Option, the AI system that finds optimal prices and availability across grocery
            partners in real time.
          </p>

          {/* Bottom Paragraph */}
          <p className="text-xl md:text-2xl max-w-lg" style={{ fontFamily: 'var(--font-aeonik)' }}>
            Below, the shopping list is structured for clarity and speed: clean cards, visible quantities,
            and inline adjustments reduce mental load. The updated redesign also introduces a live total
            summary, which calculates final spend, discounts, and delivery in one glance.
          </p>
        </div>

        {/* === RIGHT COLUMN (Mockups) === */}
        <div className="relative flex justify-start lg:justify-start mt-34 z-[1]">
          <Image
            src={mockupGroup}
            alt="PantryPal efficiency mockups"
            className="w-full max-w-md h-auto object-contain rounded-lg"
            priority
          />
        </div>

      </div>
    </section>
  );
}