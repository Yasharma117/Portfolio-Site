'use client';

import Image from 'next/image';
import inspLabel from '../assets/insp-label.png'; // INSPIRATION label
import mockupTop from '../assets/insp-top.png';   // right/top mockup
import mockupBottom from '../assets/insp-bottom.png'; // left/bottom mockup

export default function Inspiration() {
  return (
    <section className="min-h-screen w-full bg-[#FF9C0B] py-2 px-6 md:px-16 lg:px-24 text-[#fffaf2] overflow-visible">
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-start">
        
        {/* === TOP LEFT: Intro Text === */}
        <div className="relative z-[2] lg:pr-8 mt-8" style={{ fontFamily: 'var(--font-aeonik)' }}>
          <p className="text-xl md:text-2xl">
            Each card feels like a story fragment —{' '}
            <span className="font-medium">“Berries and Egg Breakfast Bowl”</span>{' '}
            isn’t just a name; it’s a narrative invitation linked back to the user’s real pantry data.
          </p>
        </div>

        {/* === TOP RIGHT: Top Mockup === */}
        <div className="relative flex justify-end lg:justify-end mt-10 lg:mt-0 z-[1]">
          <Image
            src={mockupTop}
            alt="PantryPal top mockup"
            className="object-contain rounded-lg"
            width={300}
            height={300}
          />
        </div>

        {/* === MIDDLE LEFT: Bottom Mockup === */}
        <div className="relative flex justify-start mt-[-5rem] lg:mt-[-7rem] z-[1]">
          <Image
            src={mockupBottom}
            alt="PantryPal bottom mockup"
            className="object-contain rounded-lg"
            width={300}
            height={300}
            
          />

          {/* === Inspiration Label — moved up === */}
          <div className="absolute right-[-10rem] top-[-6rem] z-[3]">
            <Image
              src={inspLabel}
              alt="INSPIRATION label"
              className="w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* === BOTTOM RIGHT: Description Text (below label + mockups) === */}
        <div className="relative mt-10 lg:mt-[4rem] z-[2]" style={{ fontFamily: 'var(--font-aeonik)' }}>
          <p className="text-xl md:text-2xl  mb-4 max-w-3xl">
            Recipes are categorised by AI Suggested, Favourites, and Quick & Easy Meals,
            creating layered discovery for different moods.
          </p>
          <p className="text-xl md:text-2xl  max-w-3xl">
            Colour-coded tags for Urgency, Difficulty, and Time simplify decisions at a glance.
          </p>
        </div>
      </div>
    </section>
  );
}
