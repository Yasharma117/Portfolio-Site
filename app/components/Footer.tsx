"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white px-6 md:px-24 py-10 font-light overflow-hidden">
      {/* Top Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-16">
        {/* Left: Message box */}
        <div className="bg-white text-black rounded-lg px-6 py-8 w-full max-w-3xl flex gap-6 items-start">
          <Image
            src="/footer/looneytunes.gif"
            alt="Looney Tune"
            width={300}
            height={300}
            className="rounded-md"
          />
          <div className="text-md italic font-semibold max-w-[500px]">
            <p>Liked something on here?</p>
            <p>Or maybe it was too cluttered and annoying?</p>
            <p>Curious about the stuff I’ve put on here?</p>
            <p className="mt-3 font-bold text-gray-700">
              Come say hi:
              <br />
              yash.republic@gmail.com
            </p>
          </div>
        </div>

        {/* Right: Contact icons and Receipt */}
        <div className="flex flex-col items-end gap-8">
          {/* <div className="flex gap-10 items-center">
            <a href="mailto:yash.republic@gmail.com">
              <div className="bg-white rounded-lg px-6 py-4 flex items-center gap-24 text-black">
                <div className="text-s italic font-semibold leading-tight">
                  Reach
                  <br />
                  Out
                </div>
                <Image
                  src="/icons/gmail_color.png"
                  alt="Gmail"
                  width={50}
                  height={50}
                />
              </div>
            </a>
        
            <a href="http://www.linkedin.com/in/yashsharma71102">
              <div className="bg-white rounded-lg p-2">
                <Image
                  src="/icons/linkedin_color.png"
                  alt="LinkedIn"
                  width={50}
                  height={50}
                />
              </div>
            </a>


            <a href="http://www.linkedin.com/in/yashsharma71102">
              <div className="bg-white rounded-lg p-2">
                <Image
                  src="/icons/discord_color.png"
                  alt="Discord"
                  width={50}
                  height={50}
                />
              </div>
            </a>
          </div> */}

          {/* Receipt Section (now placed below icons) */}
          <div className="flex flex-col items-center justify-center ">
            <p className="text-white font-mono text-sm tracking-widest mb-4">
              DON’T FORGET YOUR RECEIPT
            </p>
            <Image
              src="/footer/receipt.png"
              alt="Receipt"
              width={380}
              height={550}
              className="rounded-sm"
            />
          </div>
        </div>
      </div>

      {/* Background: Digital Finger Touch Image */}
      <div className="absolute bottom-0 left-0 w-full h-[220px] md:h-[300px] mt-4">
        <Image
          src="/footer/footer_banner.png"
          alt="Digital Creation Touch"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="opacity-40"
        />
      </div>
    </footer>
  );
}
