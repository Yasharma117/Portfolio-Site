'use client';

import Image from 'next/image';

const artworks = [
  { src: '/drawings/Daft_Punk.png', alt: 'Drawing 1' },
  { src: '/drawings/Kelly.png', alt: 'Drawing 2' },
  { src: '/drawings/Self_Boom_Boom.png', alt: 'Drawing 3' },
  { src: '/drawings/Mandolorean.png', alt: 'Drawing 4' },
  { src: '/drawings/SIGNAL.png', alt: 'Drawing 5' },
  { src: '/drawings/fairy.png', alt: 'Drawing 6' },
];

export default function Drawings() {
  return (
    <section className="bg-black py-10 px-6 md:px-12 text-white">
      <h2
        className="text-5xl md:text-6xl mb-12 text-white"
        style={{ fontFamily: 'var(--font-mightright)' }}
      >
        I DRAW SOMETIMES...
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artworks.map((art, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={art.src}
              alt={art.alt}
              width={500}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
