'use client';

import Image from 'next/image';
import recipeDetailsImage from '../assets/recipe-img.png'; // mockup image

export default function RecipeDetails() {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#f9f7f4] to-[#f3efea] py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-x-12 items-center">

        {/* === LEFT COLUMN: Text Content === */}
        <div className="flex flex-col justify-center text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Recipe Details
          </h2>
          <p className="text-base md:text-lg text-[#333] leading-relaxed max-w-md">
            The recipe screens provide users with detailed information about the dish,
            including its nutritional value, and also enable them to adjust the ingredient
            quantities based on the desired serving size.
          </p>
        </div>

        {/* === RIGHT COLUMN: Mockup Image === */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <Image
            src={recipeDetailsImage}
            alt="Recipe details mockup"
            className="w-full max-w-2xl h-auto object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
