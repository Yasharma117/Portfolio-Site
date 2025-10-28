'use client';

import Image from 'next/image';
import onbAssistImage from '../assets/onb-assist.png';

export default function OnboardingAssistant() {
  return (
    <section className="w-full bg-gradient-to-tr from-[#f6efe8] via-[#f8f2ea] to-[#f9f5ee] text-black py-6 px-2 md:px-6 lg:px-2">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Section: Image + Right Text */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 mb-4">
          {/* Image - 4 mockups combined */}
          <div className="flex justify-center">
            <Image
              src={onbAssistImage}
              alt="PantryPal onboarding screens"
              className="rounded-lg"
              width={800}
              height={500}
              priority
            />
          </div>

          {/* Right-side Text */}
          <div className="w-full lg:w-1/3 text-center lg:text-left text-black"
          style={{ fontFamily: "var(--font-cooperlt)" }}>
            <p className="text-lg">
              Users start their PantryPal journey with trust, agency, and a clear sense of value.
              Instead of filling data into a form, it feels like setting the stage together.
            </p>
          </div>
        </div>

        {/* Center Italic Intro Text */}
        <div className="text-center max-w-4xl mb-4"
        style={{ fontFamily: "var(--font-cooperlt)" }}>
          <p className="italic text-lg text-black">
            The onboarding sequence introduces users to the assistant and builds trust before introducing automation.
            <br />
            It turns what could feel like a data-collection form into a guided, conversational moment.
          </p>
        </div>

        {/* Two-column layout for explanations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left max-w-6xl"
        style={{ fontFamily: "var(--font-cooperlt)" }}>
          {/* Left column */}
          <div className='text-black text-sm'>
            <h3 className="text-sm font-semibold mb-3">
              Basic Info & Dietary Goals ~ Making Setup Feel Human
            </h3>
            <p className="mb-4">
              This screen personalises the tone instantly with “What should we call you?”, 
              turning setup into conversation.
            </p>
            <p className="mb-4">
              Dietary goals (Low Carb, Vegan, Gluten Free, etc.) are presented as pills, 
              allowing for quick, visual selection instead of form-filling.
            </p>
            <p>
              The “MasterChef Level” slider gamifies self-assessment with emoji feedback, 
              transforming what could be a cold question (“How often do you cook?”) 
              into a playful reflection of habit and personality.
            </p>
            <p className="text-sm">
              <strong>UX Intent:</strong> Reduce friction and create emotional comfort. 
              The design shows that personalisation isn’t data collection — it’s collaboration.
            </p>
          </div>

          {/* Right column */}
          <div className='text-black'>
            <h3 className="text-sm font-semibold mb-3">
              Preferences & AI Personalisation ~ Transparency and Control
            </h3>
            <p className="mb-4">
              Here, users refine food preferences by tagging ingredients to avoid 
              (Seafood, Nuts, Soy, etc.), which brings inclusivity to dietary 
              restrictions and sensitivities.
            </p>
            <p className=" mb-4">
              A key design decision is the AI Personalisation toggle — a visible consent 
              mechanism explaining how the app learns from behaviour.
            </p>
            <p className="text-sm ">
              <strong>UX Intent:</strong> Build early trust through clear boundaries. 
              Users understand how AI adapts — and that they are the decision-makers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
