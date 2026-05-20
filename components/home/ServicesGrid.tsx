import { BrainCircuit, Code2, Cpu, Wrench } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/lib/data";

const icons = [Code2, BrainCircuit, Cpu, Wrench];
const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-4", "lg:col-span-8"];

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Core Services"
          title="我们的核心服务"
          description="从软件定制到 AI 智能体，一站式技术伙伴。"
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {services.map((service, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={service.title} delay={index * 0.08} className={spans[index]}>
                <GlassCard className="group h-full min-h-[240px] overflow-hidden">
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] bg-primary-gradient text-white shadow-glow">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-500 transition group-hover:border-cyanGlow/40 group-hover:text-cyanGlow">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold tracking-tight text-white">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-300">{service.summary}</p>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
