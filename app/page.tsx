import About from "@/components/about/about-section";
import Contact from "@/components/contact/Contact";
import FeatureSection from "@/components/Features/FeatureSection";
import { Hero } from "@/components/hero";
import WorkProcess from "@/components/work-process";


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
     <div className="mt-20">
      <Hero />
      <FeatureSection />
      <About />
      <WorkProcess />
      <Contact />
     </div>
    </main>
  );
}
