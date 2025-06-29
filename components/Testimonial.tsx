// "use client";

// import React, { useEffect, useRef } from "react";
// import Glide from "@glidejs/glide";
// import "@glidejs/glide/dist/css/glide.core.min.css"; // Import glide styles

// type Testimonial = {
//   initials: string;
//   name: string;
//   title: string;
//   message: string;
//   gradient: string;
// };

// const testimonials: Testimonial[] = [
//   {
//     initials: "JD",
//     name: "John Doe",
//     title: "CEO, TechCorp",
//     message: "This service transformed our business.",
//     gradient: "from-purple-500 to-pink-600",
//   },
//   {
//     initials: "AS",
//     name: "Alice Smith",
//     title: "Marketing Director",
//     message: "We saw a 300% increase in engagement.",
//     gradient: "from-blue-500 to-teal-400",
//   },
//   {
//     initials: "RJ",
//     name: "Robert Johnson",
//     title: "Founder, Startup",
//     message: "The team understood our vision perfectly.",
//     gradient: "from-amber-500 to-red-500",
//   },
// ];

// export default function TestimonialSlider() {
//   const glideRootRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!glideRootRef.current) return;

//     const glideInstance = new Glide(glideRootRef.current, {
//       type: "carousel",
//       perView: 3,
//       focusAt: "center",
//       gap: 35,
//       autoplay: 3000,
//       hoverpause: true,
//       animationDuration: 300,
//       peek: { before: 0, after: 100 },
//       breakpoints: {
//         1024: { perView: 2, peek: 0 },
//         768: { perView: 1, peek: { before: 50, after: 50 } },
//         576: { perView: 1, peek: { before: 24, after: 24 } },
//       },
//     });

//     glideInstance.mount();

//     return () => {
//       glideInstance.destroy();
//     };
//   }, []);

//   return (
//     <section className="py-20 bg-white dark:bg-black">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <p className="inline-block bg-gray-100 dark:bg-gray-900 px-5 py-2 rounded-full text-xs uppercase text-gray-600 dark:text-gray-300 mb-4">
//             Testimonial
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
//             Elevate Your Brand with Our Expert Solutions
//           </h2>
//         </div>

//         <div ref={glideRootRef} className="glide relative">
//           <div className="glide__track" data-glide-el="track">
//             <ul className="glide__slides">
//               {testimonials.map((t, i) => (
//                 <li key={i} className="glide__slide px-5 my-10">
//                   <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
//                     <div className="flex items-center mb-4">
//                       <div
//                         className={`w-14 h-14 rounded-full bg-gradient-to-r ${t.gradient} flex items-center justify-center text-lg font-bold text-white mr-4`}
//                       >
//                         {t.initials}
//                       </div>
//                       <div>
//                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                           {t.name}
//                         </h3>
//                         <p className="text-sm text-gray-500 dark:text-gray-400">
//                           {t.title}
//                         </p>
//                       </div>
//                     </div>
//                     <p className="italic text-gray-700 dark:text-gray-300">
//                       "{t.message}"
//                     </p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div
//             className="glide__arrows hidden md:flex absolute top-1/2 -translate-y-1/2 w-full justify-between px-4"
//             data-glide-el="controls"
//           >
//             <button
//               className="glide__arrow glide__arrow--left bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-3 rounded-full text-black dark:text-white"
//               data-glide-dir="<"
//             >
//               ‹
//             </button>
//             <button
//               className="glide__arrow glide__arrow--right bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 p-3 rounded-full text-black dark:text-white"
//               data-glide-dir=">"
//             >
//               ›
//             </button>
//           </div>

//           <div
//             className="glide__bullets flex justify-center gap-2 mt-8"
//             data-glide-el="controls[nav]"
//           >
//             {testimonials.map((_, idx) => (
//               <button
//                 key={idx}
//                 className="glide__bullet h-3 w-3 rounded-full bg-gray-400 dark:bg-gray-600"
//                 data-glide-dir={`=${idx}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
