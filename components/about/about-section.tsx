"use client";

import { MoveDown} from "lucide-react";

// type FeatureItem = {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
// };

export default function About() {

  return (
    <section className="bg-white dark:bg-gray-950 text-black dark:text-gray-300  dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-end mb-12 max-w-7xl mx-auto">
          <button className="flex items-center justify-center h-10 w-10 border border-gray-600 rounded-full hover:bg-gray-800 transition-colors duration-300">
            <MoveDown className="w-4 h-4" />
          </button>
          {/* <ChevronDown className="w-4 h-4" /> */}
          <button className="flex items-center space-x-2 border border-gray-600 rounded-full px-4 py-2 text-sm md:text-base hover:bg-gray-800 transition-colors duration-300">
            <span>About</span>
          </button>
        </div>

        {/* Main content area */}
        <div className="flex flex-col items-start md:items-center justify-between gap-8 md:gap-16">
          {/* Left side: title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight">
              I&apos;ve been <span className="bg-black text-white px-2 rounded-lg">Developing</span> 
              <br/> Websites since <span className="bg-black text-white px-2 rounded-lg">2013</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg mb-8 md:max-w-3xl text-center">
              We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.
            </p>

        </div>

        {/* batton  */}
      </div>
    </section>
  );
}
