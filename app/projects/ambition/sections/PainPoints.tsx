'use client'

import Image from 'next/image'
import painpointScreens from '../assets/painpoint-screens.png'

export default function PainPoints() {
  return (
    <section className="w-full min-h-screen bg-[#5670FB] px-2 py-8 flex flex-col items-center justify-center text-white">
      <div className="max-w-screen-xl w-full">
        <div className=" flex justify-center mb-12">
          <Image
            src={painpointScreens}
            alt="AmbitionBox Onboarding Screens"
            className="rounded-md w-full max-w-4xl h-auto object-contain"
            priority
          />
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-normal text-white mb-6"
        style={{ fontFamily: "var(--font-spicyrice)" }}>
          Pain Points in Current AmbitionBox Onboarding :
        </h2>

    

        <ul className="text-lg md:text-xl space-y-2 text-white font-light"
        style={{ fontFamily: "var(--font-aeonik)" }}>
          <li>
            <span className="font-bold underline">1. Fragmented Experience:</span>{' '}
            The flow felt disjointed.
            <ul className="pl-6 list-disc">
              <li>
                Users weren’t guided contextually; each step felt like a separate module,
                not a journey.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold underline">2. Heavy Reliance on Static Screens:</span>{' '}
            No interactive or dynamic elements to hold attention.
            <ul className="pl-6 list-disc">
              <li>
                Information was presented in static blocks of text or images.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold underline">3. Low Motivation to Complete:</span>{' '}
            Users felt they were giving data without immediate clarity on the reward.
          </li>
          <li>
            <span className="font-bold underline">4. Weak Visual Hierarchy:</span>{' '}
            Screens looked generic, with no clear focal points guiding the user’s eye.
            <ul className="pl-6 list-disc">
              <li>
                Key CTAs (call-to-actions) weren’t distinct, making the flow less
                conversion-friendly.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold underline">5. Lack of Emotional Hook:</span>{' '}
            The tone was functional but not motivating.
            <ul className="pl-6 list-disc">
              <li>
                No use of delight factors (micro-interactions, or storytelling) that make
                onboarding feel rewarding.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}
