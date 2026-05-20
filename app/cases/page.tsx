import type { Metadata } from "next";
import { CasesFilter } from "@/components/cases/CasesFilter";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "案例展示",
  description:
    "查看木又软件在AI智能体、企业系统、SaaS平台、数据可视化等方向的精选项目案例。"
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cases"
        title="案例展示"
        description="用真实业务结果证明AI原生开发的速度、质量和落地价值。"
      />
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <CasesFilter />
        </div>
      </section>
    </>
  );
}
