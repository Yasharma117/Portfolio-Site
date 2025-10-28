'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function WordReveal({
  word,
  imageSrc,
}: {
  word: string;
  imageSrc: string;
}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <span
        className="relative z-10 font-bold underline cursor-pointer"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {word}
      </span>

      {visible && (
        <div
          className="fixed inset-0 z-50 transition-opacity duration-500 opacity-100 pointer-events-none"
          style={{ backgroundColor: 'black' }} // Optional: if you want black fade-in
        >
          <Image
            src={imageSrc}
            alt={word}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-500 opacity-100"
          />
        </div>
      )}
    </>
  );
}
