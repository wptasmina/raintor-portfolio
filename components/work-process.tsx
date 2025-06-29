"use client";

import { MoveDown } from "lucide-react";

export default function WorkProcess() {
  const features = [
    {
      title: "HTML",
      description: "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
    },
    {
      title: "CSS",
      description: "Every end-to-end project of ours begins with a tEspoke pre-build strateu. From brand ID consultation to in-depth ccxle reviews we're here to set the stage for success.",
    },
    {
      title: "JavaScript",
      description: "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
    },
    {
      title: "React.js",
      description: "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    },
  ];

  return (
    <section className="bg-black dark:bg-gray-950 text-white border dark:border-gray-800 rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top header buttons */}
        <div className="flex items-center gap-4 mb-8">
          <button className="flex items-center justify-center h-10 w-10 border border-gray-600 rounded-full hover:bg-gray-800 transition">
            <MoveDown className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-2 border border-gray-600 rounded-full px-4 py-2 text-sm md:text-base hover:bg-gray-800 transition">
            <span>Why Choose Me</span>
          </button>
        </div>

        {/* Section title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            My Work Process
          </h1>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300"
            >
              <span className="inline-block bg-sky-500 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                {feature.title}
              </span>
              <h2 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h2>
              <p className="text-base text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
