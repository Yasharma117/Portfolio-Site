"use client";

import Image from "next/image";
import assistImage from "../assets/assist-img.png";

export default function AssistSection() {
  return (
    <section className="relative w-full bg-[#F7B9A3] text-[#1e1e1e] px-6 py-20 md:px-16 overflow-hidden">
      {/* Top heading + subheading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2
          className="text-4xl md:text-5xl font-normal mb-4"
          style={{ fontFamily: "var(--font-aeonik)" }}
        >
          Assist, Don’t Automate
        </h2>
        <p
          className="italic text-lg md:text-xl font-light"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          PantryPal’s AI is designed to support user choice, not override it.
          <br />
          It recommends, guides, and adapts but the user always stays in charge.
        </p>
      </div>

      {/* Text Content */}
      <div
        className="relative z-10 max-w-5xl mx-auto flex flex-col gap-8 lg:gap-12"
        style={{ fontFamily: "var(--font-aeonik)" }}
      >
        <div>
          <h3 className="font-bold text-2xl text-black mb-2">Principles:</h3>
          <ol className="list-decimal list-inside space-y-1 text-2xl text-black">
            <li>
              <span className="underline decoration-dotted underline-offset-4">
                Transparency
              </span>{" "}
              – Show why the system suggests something.
            </li>
            <li>
              <span className="underline decoration-dotted underline-offset-4">
                Agency
              </span>{" "}
              – Always let the user decide.
            </li>
            <li>
              <span className="underline decoration-dotted underline-offset-4">
                Empathy
              </span>{" "}
              – Use warmth, tone, and feedback to make tasks feel meaningful.
            </li>
          </ol>
        </div>

        <div>
          <h3
            className="font-bold text-2xl text-black mb-2"
            style={{ fontFamily: "var(--font-aeonik)" }}
          >
            PantryPal unifies three interconnected areas:
          </h3>
          <ul className="list-disc list-inside space-y-1 text-2xl text-black">
            <li>
              <span className="underline decoration-dotted underline-offset-4">
                Inventory
              </span>{" "}
              → Tracks freshness and expiry dynamically.
            </li>
            <li>
              <span className="underline decoration-dotted underline-offset-4">
                Recipes
              </span>{" "}
              → Suggests meals using available ingredients.
            </li>
            <li>
              <span className="underline decoration-dotted underline-offset-4">
                Shopping
              </span>{" "}
              → Smartly builds and optimises grocery lists across stores.
            </li>
          </ul>
        </div>

        <p
          className="italic text-2xl text-black"
          style={{ fontFamily: "var(--font-cooperlt)" }}
        >
          Each area uses AI to predict, suggest, or automate routine actions but
          always in dialogue with the user.
        </p>
      </div>

      {/* Bottom-right Image */}
      <div className="absolute bottom-0 right-0 z-0 ">
        <Image
          src={assistImage}
          alt="Assist, Don't Automate visual"
          className=""
          width={400}
          height={500}
          placeholder="blur"
          priority
        />
      </div>
    </section>
  );
}
