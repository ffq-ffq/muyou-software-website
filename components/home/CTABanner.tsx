import { Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { company } from "@/lib/data";

export function CTABanner() {
  return (
    <section className="px-5 py-10 sm:px-6 sm:py-16 lg:px-8">
      <ScrollReveal>
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-white/10 bg-primary-gradient px-6 py-16 text-center shadow-glow sm:px-10 lg:py-20">
          <div className="absolute inset-0 grid-mask opacity-55" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              准备好用 AI 加速你的项目了吗？
            </h2>
            <p className="mt-5 text-base leading-8 text-indigo-50/82 sm:text-lg">
              立即联系我们，获取免费技术咨询与方案评估。
            </p>
            <a
              href={`tel:${company.phone}`}
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-base font-bold text-indigo-700 shadow-cyan transition hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5" />
              📞 免费咨询：{company.phone}
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
