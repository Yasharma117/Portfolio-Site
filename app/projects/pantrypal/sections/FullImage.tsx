'use client';

import Image from 'next/image';
import flowImage from '../assets/full-image.png'; // full combined section image

export default function FullImageSection() {
  return (
    <section className="relative w-full bg-black flex justify-center items-center overflow-hidden">
      <Image
        src={flowImage}
        alt="Full image section"
        className="w-full h-auto object-contain"
        priority
      />
    </section>
  );
}
