"use client";

import { Code2, Rocket, Shield } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type FeatureItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function FeatureSection() {
  const features: FeatureItem[] = [
    {
      icon: <Rocket className="w-10 h-10 text-indigo-500 mb-4" />,
      title: "Shooting Stars",
      description:
        "Launch your project with blazing speed and efficiency using modern tools and workflows.",
    },
    {
      icon: <Code2 className="w-10 h-10 text-indigo-500 mb-4" />,
      title: "The Catalyzer",
      description:
        "Empower your business with code that scales—clean, efficient, and built for growth.",
    },
    {
      icon: <Shield className="w-10 h-10 text-indigo-500 mb-4" />,
      title: "The 400 Blows",
      description:
        "Robust security and protection ensure your applications remain safe and reliable.",
    },
  ];

  return (
    <section className="bg-black dark:bg-gray-950 text-white dark:text-gray-300 border dark:border-gray-800 rounded-2xl overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col justify-">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <div>
            <h1 className="sm:w-2/5 text-whitefont-medium title-font text-2xl mb-2 sm:mb-0">
              My Extensive List of Skills
            </h1>
            </div>
            <div>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-gray-600 dark:text-gray-400 border-b pb-2">
             Building the worlds best marketing Your trusted partner for strategy, design, and dev.
            </p>
            </div>
            
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
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
                  <Link
                    href="#"
                    className="text-indigo-500 dark:text-indigo-400 inline-flex items-center mt-auto"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
