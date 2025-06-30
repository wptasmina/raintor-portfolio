"use client";

import {
  Code2,
  Rocket,
  Shield,
  Brush,
  Smartphone,
  Settings,
  ArrowLeft,
  ArrowRight,
  MoveDown,
} from "lucide-react";
import { ReactNode, useRef } from "react";

type FeatureItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const features: FeatureItem[] = [
    {
      icon: <Rocket className="w-10 h-10 text-indigo-500 mb-4" />,
      title: "Shooting Stars",
      description: "Launch your project with blazing speed using modern tools.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-indigo-500 mb-4" />,
      title: "The Catalyzer",
      description: "Code that scales—clean, efficient, and built for growth.",
    },
    {
      icon: <Shield className="w-10 h-10 text-indigo-500 mb-4" />,
      title: "The 400 Blows",
      description: "Security-first development practices for reliability.",
    },
    {
      icon: <Brush className="w-10 h-10 text-indigo-500 mb-4" />,
      title: "Creative UI",
      description: "Stunning, accessible, user-first interfaces and systems.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-indigo-500 mb-4" />,
      title: "Responsive Design",
      description: "Optimized for all screens — mobile, tablet, desktop.",
    },
    {
      icon: <Settings className="w-10 h-10 text-indigo-500 mb-4" />,
      title: "Custom Integrations",
      description: "APIs and automation built for your exact workflow.",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-black text-white border border-gray-800 rounded-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Header */}
        <div className="flex justify-start mb-12">
          <button className="flex items-center justify-center h-10 w-10 border border-gray-600 rounded-full hover:bg-gray-800 transition-colors duration-300">
            <MoveDown className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-2 border border-gray-600 rounded-full px-4 py-2 text-sm md:text-base hover:bg-gray-800 transition-colors duration-300">
            <span>Why Choose me</span>
          </button>
        </div>

        {/* Title and Arrows */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              My Extensive <br /> List of Skills
            </h1>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-md border-b border-gray-900 pb-2">
              Building the world&apos;s best marketing. Your trusted partner for
              strategy, design, and dev.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => scroll("left")}
                className="p-3 border border-gray-600 rounded-full hover:bg-gray-800 transition"
              >
                <ArrowLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-3 border border-gray-600 rounded-full hover:bg-gray-800 transition"
              >
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Scrollable Cards */}
        <div className="relative pt-10">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="snap-start shrink-0 min-w-[280px] sm:min-w-[320px] md:min-w-[33.333%] bg-[#141414] rounded-lg p-6 shadow hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col h-full">
                  {feature.icon}
                  <h2 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h2>
                  <p className="text-base text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
