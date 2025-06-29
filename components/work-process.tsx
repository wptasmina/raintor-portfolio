"use client";

import { MoveDown } from "lucide-react";
import Link from "next/link";

export default function WorkProcess() {
  const features = [
    {
      title: "Discovery",
      description:
        "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    },
    {
      title: "Strategy",
      description:
        "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    },
    {
      title: "Design",
      description:
        "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page will be designed, reviewed, and given your stamp of approval.",
    },
    {
      title: "Build",
      description:
        "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    },
  ];

  return (
    <section className="bg-[#141414] dark:bg-gray-950 text-white border dark:border-gray-800 rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
     {/* Header buttons and title in one flex container */}
<div className="flex flex-col md:flex-row md:items-center md:justify-center gap-4 mb-12">
  {/* Buttons group */}
  <div className="flex items-center left-0">
    <button className="flex items-center justify-center h-10 w-10 border border-gray-600 rounded-full hover:bg-gray-800 transition">
      <MoveDown className="w-4 h-4" />
    </button>
    <button className="flex items-center space-x-2 border border-gray-600 rounded-full px-4 py-2 text-sm md:text-base hover:bg-gray-800 transition">
      <span>Why Choose Me</span>
    </button>
  </div>

  {/* Title */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center w-full md:w-auto">
    My Work Process
  </h1>
</div>


        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-black hover:bg-[#C5FF41] transform transition duration-300 hover:scale-105 hover:translate-x-2 rounded-xl p-6 shadow hover:shadow-md"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="inline-block bg-[#C5FFEE] group-hover:bg-black text-black text-xs font-medium px-3 py-1 rounded-full group-hover:text-white transition-colors">
                  {feature.title}
                </span>
                <Link
                  href="#"
                  className="text-indigo-400 group-hover:text-black text-sm inline-flex items-center transition-colors"
                >
                  Read More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <p className="text-base text-gray-400 group-hover:text-black transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
