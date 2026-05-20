import { Boxes, Code2, Database, Hexagon, Server, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { techStack } from "@/lib/data";

const icons = [Hexagon, Code2, Sparkles, Server, Boxes, Database];

export function TechStack() {
  const items = [...techStack, ...techStack];

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="Tech Stack" title="我们拥抱的技术生态" />
      </div>
      <div className="mt-14 overflow-hidden border-y border-white/10 bg-white/[0.02] py-6">
        <div className="flex w-max animate-marquee gap-4">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={`${item}-${index}`}
                className="flex min-w-[190px] items-center justify-center gap-3 rounded-[8px] border border-white/10 bg-white/[0.03] px-6 py-4 text-slate-400 transition hover:border-cyanGlow/40 hover:text-white"
              >
                <Icon className="h-5 w-5" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
