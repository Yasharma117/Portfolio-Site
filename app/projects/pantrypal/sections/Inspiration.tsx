'use client';

import Image from 'next/image';
import inspLabel from '../assets/insp-label.png'; // INSPIRATION label
import mockupTop from '../assets/insp-top.png';   // right/top mockup
import mockupBottom from '../assets/insp-bottom.png'; // left/bottom mockup

export default function Inspiration() {
  return (
    <section className="relative w-full bg-[#f4a63c] py-24 px-6 md:px-16 lg:px-24 text-[#fffaf2] overflow-visible">
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-start">
        
        {/* === TOP LEFT: Intro Text === */}
        <div className="relative z-[2] lg:pr-8">
          <p className="text-xl md:text-2xl leading-relaxed">
            Each card feels like a story fragment —{' '}
            <span className="font-medium">“Berries and Egg Breakfast Bowl”</span>{' '}
            isn’t just a name; it’s a narrative invitation linked back to the user’s real pantry data.
          </p>
        </div>

        {/* === TOP RIGHT: Top Mockup === */}
        <div className="relative flex justify-center lg:justify-start mt-10 lg:mt-0 z-[1]">
          <Image
            src={mockupTop}
            alt="PantryPal top mockup"
            className="w-full max-w-md h-auto object-contain rounded-lg"
            priority
          />
        </div>

        {/* === MIDDLE LEFT: Bottom Mockup === */}
        <div className="relative flex justify-center mt-[-5rem] lg:mt-[-7rem] z-[1]">
          <Image
            src={mockupBottom}
            alt="PantryPal bottom mockup"
            className="w-full max-w-md h-auto object-contain rounded-lg"
            priority
          />

          {/* === Inspiration Label — moved up === */}
          <div className="absolute right-[-7rem] top-[1rem] w-64 z-[3]">
            <Image
              src={inspLabel}
              alt="INSPIRATION label"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* === BOTTOM RIGHT: Description Text (below label + mockups) === */}
        <div className="relative mt-8 lg:mt-[2rem] z-[2]">
          <p className="text-base md:text-lg leading-relaxed mb-4 max-w-xl">
            Recipes are categorised by AI Suggested, Favourites, and Quick & Easy Meals,
            creating layered discovery for different moods.
          </p>
          <p className="text-base md:text-lg leading-relaxed max-w-xl">
            Colour-coded tags for Urgency, Difficulty, and Time simplify decisions at a glance.
          </p>
        </div>
      </div>
    </section>
  );
}
