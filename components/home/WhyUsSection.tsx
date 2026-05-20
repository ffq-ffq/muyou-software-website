import { BadgeCheck, CircleDollarSign, Gauge, RefreshCcw } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { advantages } from "@/lib/data";

const icons = [Gauge, CircleDollarSign, BadgeCheck, RefreshCcw];

export function WhyUsSection() {
  return (
    <section className="bg-white/[0.015] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="AI Driven"
          title="AI 驱动，不只是口号"
          description="全流程 AI 驱动开发，从需求分析、架构设计、编码实现、测试到部署，把速度和可靠性同时拉高。"
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item, index) => {
            const Icon = icons[index];
            return (
              <ScrollReveal key={item.title} delay={index * 0.08}>
                <GlassCard className="h-full">
                  <Icon className="h-8 w-8 text-cyanGlow" />
                  <div className="mt-8 text-4xl font-extrabold tracking-tight text-white">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </div>
                  <p className="mt-2 text-sm font-semibold text-cyanGlow">{item.label}</p>
                  <h3 className="mt-6 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
