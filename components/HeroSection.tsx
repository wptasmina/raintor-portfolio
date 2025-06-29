"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative py-24 px-6 md:px-16 bg-white overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-white
       to-white z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Side Social */}
        <div className="absolute left-6 top-24 flex flex-col items-center gap-4">
          <div className="rotate-90 text-sm font-semibold text-gray-700">@williamwoy</div>
          <div className="flex flex-col gap-2">
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-4 h-4" /></a>
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black max-w-3xl mb-8">
          Trusted
          <span className="bg-black text-white px-2 rounded-lg">Partner</span>
          for Your Website
          <span className="bg-black text-white px-2 rounded-lg">Develop.</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-700 text-lg mb-8 max-w-2xl">
          Building the world&apos;s best marketing websites for over a decade. <br />
          Your trusted partner for strategy, design, and dev.
        </p>



        {/* Button & Avatar */}
        <div className="flex items-center gap-6">
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 shadow">
            📞 Schedule a Call
          </button>

          <div className="flex items-center -space-x-2">
            <Image
              src="/avatars/user1.jpg"
              alt="User 1"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
            <Image
              src="/avatars/user2.jpg"
              alt="User 2"
              width={32}
              height={32}
              className="rounded-full border-2 border-white"
            />
            <span className="bg-purple-500 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full border-2 border-white">
              5
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
