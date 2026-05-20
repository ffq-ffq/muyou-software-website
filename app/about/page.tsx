import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlassCard } from "@/components/ui/GlassCard";
import { PageHero } from "@/components/ui/PageHero";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { stats, team } from "@/lib/data";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "了解木又软件开发有限公司的公司故事、AI开发理念、团队能力与服务数据。"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="关于木又软件"
        description="我们相信下一代软件公司不是更大的人力工厂，而是更聪明的AI原生工程团队。"
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <ScrollReveal>
            <SectionTitle
              align="left"
              eyebrow="Story"
              title="AI开发时代的先行者"
              description="木又软件诞生于企业数字化与AI应用爆发的交汇点。我们用更轻、更快、更透明的协作方式，帮助企业把想法变成可以运行的系统。"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 leading-8 text-slate-300 backdrop-blur-xl">
              我们把AI工具深度嵌入需求分析、架构设计、代码生成、测试、部署与运营监控。
              这不是简单地“用AI写代码”，而是用AI把工程流程重新组织，让团队把更多精力投入到业务理解、系统设计和质量把控。
              <p className="mt-5 text-xl font-extrabold text-white">
                让每一行代码都经AI之手，让每一个项目都快人一步。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white/[0.015] py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.08}>
                <GlassCard className="text-center">
                  <div className="text-4xl font-extrabold tracking-tight text-white">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </div>
                  <p className="mt-3 text-sm text-slate-400">{item.label}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Team"
            title="团队介绍"
            description="由产品、全栈工程、AI架构与自动化交付组成的小而强团队。"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member, index) => (
              <ScrollReveal key={member.name} delay={index * 0.08}>
                <GlassCard className="h-full">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-[8px]"
                  />
                  <h3 className="mt-5 text-xl font-bold text-white">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-cyanGlow">{member.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{member.bio}</p>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
