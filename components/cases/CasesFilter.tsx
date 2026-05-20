"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { cases } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = ["全部", "软件开发", "AI智能体", "企业系统"];

export function CasesFilter() {
  const [active, setActive] = useState("全部");
  const [selected, setSelected] = useState<(typeof cases)[number] | null>(null);

  const visibleCases = useMemo(() => {
    if (active === "全部") return cases;
    return cases.filter((item) => item.category === active);
  }, [active]);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={cn(
              "min-h-11 rounded-full border px-5 py-2 text-sm font-semibold transition",
              active === filter
                ? "border-cyanGlow/60 bg-cyanGlow/12 text-white"
                : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white"
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleCases.map((item) => (
          <motion.button
            layout
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.03] text-left backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyanGlow/45 hover:shadow-glow"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-cyanGlow/10 px-3 py-1 text-xs text-cyan-100">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{item.summary}</p>
              <span className="mt-5 inline-flex text-sm font-semibold text-cyanGlow">查看详情</span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] grid place-items-center bg-black/70 p-5 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.24 }}
              className="max-h-[88vh] w-full max-w-3xl overflow-auto rounded-[8px] border border-white/10 bg-[#101019] p-5 shadow-glow"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-2xl font-extrabold text-white">{selected.title}</h2>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300"
                  aria-label="关闭详情弹窗"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="relative mt-5 aspect-[16/9] overflow-hidden rounded-[8px]">
                <Image src={selected.image} alt={selected.title} fill className="object-cover" sizes="768px" />
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-300">{selected.detail}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[8px] bg-white/[0.04] p-4">
                  <p className="text-sm font-semibold text-white">技术栈</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{selected.stack.join(" / ")}</p>
                </div>
                <div className="rounded-[8px] bg-white/[0.04] p-4">
                  <p className="text-sm font-semibold text-white">项目成果</p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{selected.result}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
