import About from "@/components/about/about-section";
import Contact from "@/components/contact/Contact";
import FeatureSection from "@/components/Features/FeatureSection";
import { Hero } from "@/components/hero";
import TestimonialSlider from "@/components/Testimonial";
import WorkProcess from "@/components/work-process";





export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
     <div className="mt-20">
      <TestimonialSlider />;
      <Hero />
      <FeatureSection />
      <About />
      <WorkProcess />
      <Contact />
     </div>
    </main>
  );
}
