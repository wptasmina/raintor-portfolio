import { TitleProps } from "@/types";

export default function Title({ heading}: TitleProps) {
  return (
    <section className="flex items-center flex-col py-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-foreground">
        {heading}
      </h1>
    </section>
  );
}