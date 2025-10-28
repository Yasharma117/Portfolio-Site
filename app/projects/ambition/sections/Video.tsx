export default function Video() {
  return (
    <section className="w-full min-h-screen bg-[#FFFCF5] px-6 lg:px-24 py-16 flex flex-col items-center text-black">
      <h2
        className="text-4xl font-normal mb-8 text-center"
        style={{ fontFamily: "var(--font-spicyrice)" }}
      >
        Watch the loom video (~5 mins)
      </h2>

      {/* Embedded Loom Video */}
      <div className="relative w-full max-w-[800px] aspect-video rounded-3xl overflow-hidden shadow-md">
        <iframe
          src="https://www.loom.com/embed/a3d62e396d344994aead39ee4ccc29c3?sid=785831aa-8851-4640-9c45-ac6fe7d1565f"
          allowFullScreen
          className="w-full h-full rounded-3xl"
        />
      </div>
    </section>
  );
}

