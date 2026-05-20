import { ClipboardList, CloudUpload, Code2, LineChart, PenTool, TestTube2 } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { processSteps } from "@/lib/data";

const icons = [ClipboardList, PenTool, Code2, TestTube2, CloudUpload, LineChart];

export function ProcessTimeline() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Workflow"
          title="我们的 AI 开发流程"
          description="每一步都有 AI 参与，但每个关键决策都由有经验的工程团队把关。"
        />
        <div className="relative mt-16">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-cyanGlow via-indigo-400 to-fuchsia-500 md:block lg:left-0 lg:top-16 lg:h-px lg:w-full" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step, index) => {
              const Icon = icons[index];
              return (
                <ScrollReveal key={step.title} delay={index * 0.06}>
                  <div className="group relative h-full rounded-[8px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyanGlow/45 hover:bg-white/[0.055]">
                    <div className="mb-7 grid h-11 w-11 place-items-center rounded-full bg-primary-gradient text-white shadow-glow transition group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Step {index + 1}
                    </span>
                    <h3 className="mt-3 text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
