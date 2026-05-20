import { Github, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const serviceLinks = ["软件开发", "AI智能体开发", "RAG知识库", "企业AI部署"];
const companyLinks = [
  { label: "关于我们", href: "/about" },
  { label: "案例展示", href: "/cases" },
  { label: "联系我们", href: "/contact" }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link href="/" className="mb-5 inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-gradient text-lg font-black text-white">
              木
            </span>
            <span>
              <span className="block font-extrabold text-white">木又软件</span>
              <span className="text-xs uppercase text-slate-500">MooYoo Tech</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-7 text-slate-400">
            AI原生软件开发团队，专注企业级软件定制、智能体搭建与自动化工作流。
          </p>
          <div className="mt-5 flex gap-3 text-slate-400">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10">
              <Github className="h-4 w-4" />
            </span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10">
              <MessageCircle className="h-4 w-4" />
            </span>
            <a
              href="mailto:1091482262@qq.com"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition hover:border-cyanGlow/50 hover:text-white"
              aria-label="发送邮件"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">服务</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {serviceLinks.map((item) => (
              <li key={item}>
                <Link href="/services" className="transition hover:text-white">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">公司</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">联系方式</h3>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-cyanGlow" />
              <a href="tel:13566802517" className="transition hover:text-white">
                13566802517
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-cyanGlow" />
              <a href="mailto:1091482262@qq.com" className="transition hover:text-white">
                1091482262@qq.com
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyanGlow" />
              <span>浙江省台州市台州湾新区数字贸易产业创新基地</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-xs text-slate-500">
        © 2025 木又软件开发有限公司. All rights reserved.
      </div>
    </footer>
  );
}
