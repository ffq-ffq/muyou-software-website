import type { Metadata } from "next";
import { ArrowRight, Bot, CheckCircle2, Code2, Layers3, Network } from "lucide-react";
import { FAQ } from "@/components/services/FAQ";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "服务详情",
  description:
    "木又软件提供企业级软件开发、Web应用、小程序、SaaS平台、AI智能体、RAG知识库和企业私有化AI部署服务。"
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="我们的服务"
        description="围绕企业增长、效率和AI转型，提供从软件定制到智能体落地的一站式技术服务。"
      />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          {services.slice(0, 2).map((service, index) => {
            const Icon = index === 0 ? Code2 : Bot;
            return (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <GlassCard className="h-full p-7 sm:p-8">
                  <Icon className="h-10 w-10 text-cyanGlow" />
                  <h2 className="mt-7 text-3xl font-extrabold tracking-tight text-white">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-slate-300">{service.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.tags?.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/[0.06] px-3 py-1.5 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 space-y-3">
                    {service.deliverables?.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-sm text-slate-400">
                        <CheckCircle2 className="h-4 w-4 text-cyanGlow" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-[8px] border border-white/10 bg-black/20 p-4">
                    <p className="text-sm font-semibold text-white">报价模式</p>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      支持固定项目制、阶段里程碑、月度技术伙伴与企业AI转型顾问服务。
                    </p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section className="bg-white/[0.015] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Agent Architecture"
            title="AI智能体应用架构"
            description="从企业知识库到多智能体协作，把AI能力嵌入真实业务流程。"
          />
          <ScrollReveal className="mt-12">
            <div className="grid gap-4 rounded-[8px] border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl md:grid-cols-5">
              {["业务系统", "RAG知识库", "Agent编排", "工具调用", "结果回写"].map((item, index) => (
                <div key={item} className="relative rounded-[8px] border border-white/10 bg-black/20 p-5 text-center">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-primary-gradient text-white">
                    {index === 0 ? <Layers3 className="h-5 w-5" /> : <Network className="h-5 w-5" />}
                  </div>
                  <p className="mt-4 text-sm font-semibold text-white">{item}</p>
                  {index < 4 && (
                    <ArrowRight className="absolute -right-5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-cyanGlow md:block" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="FAQ" title="常见问题" />
          <FAQ />
        </div>
      </section>
    </>
  );
}
