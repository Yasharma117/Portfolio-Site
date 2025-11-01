'use client';

import Image from 'next/image';
import awarenessLabel from '../assets/awareness-label.png'; // "AWARENESS" handwritten label
import mockupImage from '../assets/aware-img.png'; // screen mockups image

export default function Awareness() {
  return (
    <section className="w-full bg-[#B089EF] text-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* LEFT SECTION */}
        <div className="w-full lg:w-1/2 flex flex-col">
          {/* Quote */}
          <p className="italic text-2xl md:text-3xl mb-8"
          style={{ fontFamily: 'var(--font-cooperlt)' }}>
            Ambient awareness builds routine.<br />
            The user never feels lost. They always<br />
            know where their kitchen stands today.
          </p>

          {/* Awareness Label (RIGHT ALIGNED) */}
          <div className="flex justify-end mb-10 translate-x-28">
            <div className="">
              <Image
                src={awarenessLabel}
                alt="Awareness label"
                className=" object-contain"
                width={450}
                height={500}
                priority
              />
            </div>
          </div>

          {/* Description */}
          <p className="md:text-lg text-white mb-4"
          style={{ fontFamily: 'var(--font-aeonik)' }}>
            The Home screen acts as the command center of the PantryPal ecosystem.
            It gives users a calm, visual sense of how their kitchen is doing — 
            budget, inventory freshness, and what’s expiring soon — all surfaced contextually 
            instead of through cluttered lists.
          </p>

          {/* Bullet Points */}
          <p className="md:text-lg text-white"
          style={{ fontFamily: 'var(--font-aeonik)' }}>
            Every section is designed to promote gentle action:
          </p>
          <ul className="list-disc list-inside text-white/90 md:text-lg"
          style={{ fontFamily: 'var(--font-aeonik)' }}>
            <li>Budget tracker gives a financial snapshot.</li>
            <li>Inventory freshness ring makes health feel tangible.</li>
            <li>
              Expiring Soon carousel and Shopping Reminder card rotate to show what needs attention first.
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className=" flex justify-center">
          <Image
            src={mockupImage}
            alt="PantryPal awareness mockup"
            className="object-contain rounded-lg"
            width={500}
            height={400}
            priority
          />
        </div>
      </div>
    </section>
  );
}
