"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, CheckCircle2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ParticleBg } from "@/components/ui/ParticleBg";

const codeLines = [
  "const agent = await muyou.build({",
  "  workflow: '需求 → 架构 → 编码 → 测试',",
  "  speed: '5x delivery',",
  "  quality: 'AI reviewed'",
  "});"
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 bg-mesh-gradient" />
      <div className="absolute inset-0 grid-mask" />
      <ParticleBg />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 pb-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-4 py-2 text-sm font-medium text-cyan-100">
            <Bot className="h-4 w-4 text-cyanGlow" />
            🤖 AI-Native 开发团队
          </div>
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            用 AI 重新定义
            <span className="block text-gradient">软件开发的速度与品质</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            木又软件 — 专注 AI 智能体开发搭建与企业级软件定制，全流程 AI
            驱动，交付效率提升 5 倍。
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" className="text-base">
              <Rocket className="h-5 w-5" />
              🚀 免费咨询
            </Button>
            <Button href="/cases" variant="secondary" className="text-base">
              查看案例
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="mt-7 inline-flex items-center gap-2 text-sm text-slate-400">
            <CheckCircle2 className="h-4 w-4 text-cyanGlow" />
            ✨ 已为 50+ 企业提供 AI 开发服务
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-[8px] bg-primary-gradient opacity-20 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[8px] p-4 shadow-glow">
            <div className="flex h-11 items-center gap-2 border-b border-white/10 px-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-amber-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-slate-500">ai-workspace.ts</span>
            </div>
            <div className="grid gap-5 p-5 lg:grid-cols-[1fr_180px]">
              <div className="space-y-4 font-mono text-sm leading-7 text-slate-300">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + index * 0.16 }}
                    className="whitespace-pre-wrap"
                  >
                    <span className="mr-4 text-slate-600">{index + 1}</span>
                    {line}
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="h-5 w-2 bg-cyanGlow"
                />
              </div>
              <div className="relative hidden min-h-[280px] place-items-center lg:grid">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="h-36 w-36 rounded-[8px] border border-cyanGlow/40 bg-cyanGlow/10"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="absolute h-24 w-24 rounded-full border border-fuchsia-400/45 bg-fuchsia-400/10"
                />
                <div className="absolute grid h-16 w-16 place-items-center rounded-[8px] bg-primary-gradient text-lg font-black text-white">
                  AI
                </div>
              </div>
            </div>
            <div className="grid gap-3 border-t border-white/10 p-5 sm:grid-cols-3">
              {["需求分析", "智能编码", "自动测试"].map((item) => (
                <div key={item} className="rounded-[8px] bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
