"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";

import {
  Paintbrush2,
  FileCode,
  LayoutTemplate,
  Braces,
  Atom,
  Component,
  MoveDown,
} from "lucide-react";

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureSection() {

const features: FeatureItem[] = [
  {
    icon: <FileCode className="w-10 h-10 text-indigo-500 mb-4" />,
    title: "HTML",
    description: "Semantic, accessible markup for robust web structure.",
  },
  {
    icon: <Paintbrush2 className="w-10 h-10 text-indigo-500 mb-4" />,
    title: "CSS",
    description: "Modern styling with Flexbox, Grid, and responsive design.",
  },
  {
    icon: <Braces className="w-10 h-10 text-indigo-500 mb-4" />,
    title: "JavaScript",
    description: "Powerful scripting for dynamic and interactive experiences.",
  },
  {
    icon: <Atom className="w-10 h-10 text-indigo-500 mb-4" />,
    title: "React.js",
    description: "Component-based UI library for building fast interfaces.",
  },
  {
    icon: <Component className="w-10 h-10 text-indigo-500 mb-4" />,
    title: "Next.js",
    description: "Full-stack React framework with SSR and routing.",
  },
  {
    icon: <LayoutTemplate className="w-10 h-10 text-indigo-500 mb-4" />,
    title: "Vue.js",
    description: "Lightweight reactive framework for modular UIs.",
  },
];


  return (
    <section className="bg-black dark:bg-gray-950 text-white dark:text-gray-300 border dark:border-gray-800 rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-start mb-12">
          <button className="flex items-center justify-center h-10 w-10 border border-gray-600 rounded-full hover:bg-gray-800 transition-colors duration-300">
            <MoveDown className="w-4 h-4" />
          </button>
          {/* <ChevronDown className="w-4 h-4" /> */}
          <button className="flex items-center space-x-2 border border-gray-600 rounded-full px-4 py-2 text-sm md:text-base hover:bg-gray-800 transition-colors duration-300">
            <span>Why Choose me</span>
          </button>
        </div>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
          {/* Left side: title */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              My Extensive <br /> List of Skills
            </h1>
          </div>

          {/* Right side: Description and navigation arrows */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md border-b border-gray-900 pb-2">
              Building the world&apos;s best marketing. Your trusted partner for
              strategy, design, and dev.
            </p>

            {/* Navigation Arrows */}
            <div className="flex space-x-4">
              <button className="p-3 border border-gray-600 cursor-pointer rounded-full hover:bg-gray-800 transition-colors duration-300">
                <ArrowLeft className="w-5 h-5 text-gray-400" />
                {/* Left arrow icon */}
              </button>
              <button className="p-3 border border-gray-600 cursor-pointer rounded-full hover:bg-gray-800 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 text-gray-400" />
                {/* Right arrow icon */}
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 pt-10">
          {features.map((feature, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 h-full shadow hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-start">
                  {feature.icon}
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
