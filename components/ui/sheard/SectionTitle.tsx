import { SectionTitleProps } from "@/types";


export default function SectionTitle({ heading, subHeading}: SectionTitleProps) {
  return (
    <section className="flex items-center flex-col py-6">
      
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-foreground">
        {heading}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 md:text-xl text-xs max-w-2xl mx-auto">{subHeading}</p>
    </section>
  );
}
