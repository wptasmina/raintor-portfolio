import { Navigation } from "@/components/navigation";
import CustomButton from "@/components/ui/sheard/CustomButton";
import {CircleArrowRight } from "lucide-react";


export default function Home() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
     <Navigation />



<CustomButton
  text="Continue"
  icon={<CircleArrowRight size={40} />}
  iconPosition="right"
/>


    </main>
  );
}
