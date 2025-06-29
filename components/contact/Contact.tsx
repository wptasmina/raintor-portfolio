import { MoveDown } from "lucide-react";
import Login from "./Login";


export default function Contact() {
  return (
        <section className="bg-white dark:bg-[#141414] text-black dark:text-gray-300 border dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-start mb-12">
          <button className="flex items-center justify-center h-10 w-10 border border-gray-600 rounded-full hover:bg-gray-800 transition-colors duration-300">
            <MoveDown className="w-4 h-4" />
          </button>
          <button className="flex items-center space-x-2 border border-gray-600 rounded-full px-4 py-2 text-sm md:text-base hover:bg-gray-800 transition-colors duration-300">
            <span>Contact</span>
          </button>
        </div>

        {/* Main content area */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
          {/* Left side: title */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Interested in <br/><span className="bg-black text-white px-2 rounded-lg">work</span> together?
            </h1>

            <p className="text-gray-800 dark:text-gray-300 text-base md:text-lg mb-8 max-w-md pb-6 pt-4">
              We start every new client interaction with an in-depth discovery call where
              we get to know each other.
            </p>
          </div>

          {/* Right side: Description and navigation arrows */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end text-left md:text-right">
    
            <Login />

          </div>
        </div>

      </div>
    </section>
  )
}
