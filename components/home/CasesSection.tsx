import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { cases } from "@/lib/data";

export function CasesSection() {
  return (
    <section className="bg-white/[0.015] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Selected Work"
          title="精选案例"
          description="覆盖智能客服、ERP、教育AI、数据可视化等多种真实业务场景。"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cases.slice(0, 4).map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.08}>
              <Link
                href="/cases"
                className="group block h-full overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/45 hover:shadow-glow"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded-full bg-cyanGlow/10 px-3 py-1 text-xs text-cyan-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-7 text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyanGlow">
                    查看详情
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
