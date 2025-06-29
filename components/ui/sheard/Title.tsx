import { TitleProps } from "@/types";

export default function Title({ heading}: TitleProps) {
  return (
    <section className="py-6">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
        {heading}
      </h1>
    </section>
  );
}