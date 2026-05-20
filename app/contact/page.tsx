import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/lib/data";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系木又软件开发有限公司，获取软件开发、AI智能体开发、RAG知识库与企业AI部署咨询。"
};

export default function ContactPage() {
  const contactItems = [
    { icon: Phone, label: "电话", value: company.phone, href: `tel:${company.phone}` },
    { icon: MapPin, label: "地址", value: company.address },
    { icon: Mail, label: "邮箱", value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: "工作时间", value: company.hours }
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="联系我们"
        description="告诉我们你的业务目标，我们会用一场清晰的技术咨询帮你判断路径、周期和预算。"
      />
      <section className="pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <ContactForm />
          <div className="rounded-[8px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-2xl font-extrabold text-white">联系信息</h2>
            <div className="mt-7 space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex gap-4 rounded-[8px] bg-white/[0.04] p-4">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-cyanGlow" />
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="mt-1 text-sm leading-7 text-slate-200">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="block transition hover:scale-[1.01]">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative min-h-[320px] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px]" />
            <div className="relative z-10 flex h-full min-h-[272px] flex-col items-center justify-center text-center">
              <MapPin className="h-10 w-10 text-cyanGlow" />
              <h3 className="mt-4 text-xl font-bold text-white">台州湾新区数字贸易产业创新基地</h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                浙江省台州市台州湾新区数字贸易产业创新基地
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
