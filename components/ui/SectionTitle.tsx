import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center"
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <ScrollReveal>
      <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyanGlow">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">{description}</p>
        )}
      </div>
    </ScrollReveal>
  );
}
