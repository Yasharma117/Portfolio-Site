'use client';

import Image from 'next/image';
import designProcessImage from '../assets/design-process-img.png';

export default function DesignProcess() {
  return (
    <section className="relative w-full min-h-screen bg-[#485BC4] text-white py-6 overflow-hidden">
      {/* Centered Title */}
      <h2
        className="text-4xl md:text-5xl font-normal mb-12 text-center"
        style={{ fontFamily: 'var(--font-aeonik)' }}
      >
        The Design Process
      </h2>

      {/* Content Wrapper */}
      <div className="relative max-w-8xl flex flex-col lg:flex-row items-start justify-between md:px-16 lg:px-24">
        {/* Left Text Section */}
        <div
          className="z-10 w-full lg:w-1/2 space-y-6 md:text-xl"
          style={{ fontFamily: 'var(--font-aeonik)' }}
        >
          {/* Step 1 */}
          <div>
            <h3 className="font-semibold text-xl mb-2">
              Step 1: Understanding Context
            </h3>
            <p>
              Mapped user journeys around meal planning and shopping. <br />
              Identified emotional friction: guilt over waste, stress during
              meal prep, and decision fatigue in shopping.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="font-semibold text-xl mb-2">
              Step 2: Information Architecture
            </h3>
            <p>Organised tasks around awareness → action → reward:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Awareness:</strong> Inventory freshness, expiring soon.
              </li>
              <li>
                <strong>Action:</strong> Recipes, shopping list.
              </li>
              <li>
                <strong>Reward:</strong> Reduced waste, effortless cooking.
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="font-semibold text-xl mb-2">
              Step 3: Visual and Interaction Design
            </h3>
            <p>Focused on contrast, feedback, and delight:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Dark mode for premium calmness.</li>
              <li>Bright accents for energy and guidance.</li>
              <li>
                Warm palette for emotional balance between data and empathy.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Image on the right edge */}
      <div className="absolute top-0 right-0 w-[500px] h-full z-0">
        <Image
          src={designProcessImage}
          alt="The Design Process mockups"
          className="object-contain w-full h-full"
          priority
        />
      </div>
    </section>
  );
}
