import { Hero } from "@/components/hero";


export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
     <div className="mt-20">
      <Hero />
      {/* <About />
      <Skills />
      <Projects />
      <Contact /> */}
     </div>
    </main>
  );
}
