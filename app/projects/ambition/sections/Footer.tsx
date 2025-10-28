"use client"

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold uppercase"
        style={{ fontFamily: "var(--font-mightright)" }}>
          That’s all, folks!
        </h2>
        <p className="mt-4 text-lg md:text-xl font-light"
        style={{ fontFamily: "var(--font-cooperlt)" }}>
          Think I can ship your next game-changing feature?<br />
          Don’t be a stranger!
        </p>
        <p className="mt-6 text-2xl font-bold decoration-white"
        style={{ fontFamily: "var(--font-cooperlt)" }}>
          yash.republic@gmail.com
        </p>
      </div>
    </footer>
  )
}
