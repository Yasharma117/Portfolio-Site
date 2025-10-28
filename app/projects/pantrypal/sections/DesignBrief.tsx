"use client";

export default function DesignBrief() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-20 w-full min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col gap-24">
        {/* Design Brief Section */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start"
        style={{ fontFamily: "var(--font-aeonik)" }}>
          <h2 className="text-2xl md:text-4xl font-light text-left">
            The Design Brief :-
          </h2>
          <p className="text-lg md:text-xl font-bold  text-left">
            Designing a conceptual AI-driven pantry and grocery management app
            that assists users in tracking ingredients, planning meals, and
            purchasing groceries based on freshness, availability, and price —
            all through an intuitive, emotionally aware experience.
          </p>
        </div>

        {/* Core AI Goals Section */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start"
        style={{ fontFamily: "var(--font-aeonik)" }}>
          <h2 className="text-2xl md:text-4xl font-light text-left">
            Core AI Goals :-
          </h2>
          <ul className="list-disc text-lg md:text-xl font-bold ml-5">
            <li>Predictive pantry tracking (know what’s expiring soon).</li>
            <li>Smart grocery list generation from meal habits.</li>
            <li>Real-time price and availability comparison across stores.</li>
            <li>Voice-assisted cooking and contextual recipe suggestions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
