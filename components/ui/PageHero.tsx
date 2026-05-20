import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-36 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-mesh-gradient opacity-80" />
      <div className="absolute inset-0 grid-mask" />
      <ScrollReveal className="relative z-10 mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyanGlow">
          {eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      </ScrollReveal>
    </section>
  );
}
