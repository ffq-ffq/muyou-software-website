import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import { MobileCallButton } from "@/components/ui/MobileCallButton";
import "./globals.css";

const siteUrl = "https://muyou-software.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "木又软件开发有限公司 | AI 原生软件开发与智能体搭建",
    template: "%s | 木又软件"
  },
  description:
    "木又软件专注企业级软件开发、AI智能体定制、RAG知识库、多智能体协作和企业私有化AI部署，全流程AI驱动，交付速度提升3-5倍。",
  keywords: [
    "木又软件",
    "AI智能体开发",
    "软件开发",
    "RAG知识库",
    "企业管理系统",
    "SaaS平台",
    "台州软件公司"
  ],
  openGraph: {
    title: "木又软件开发有限公司",
    description:
      "AI原生开发团队，专注软件定制与企业AI智能体搭建。",
    url: siteUrl,
    siteName: "木又软件",
    locale: "zh_CN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <MobileCallButton />
      </body>
    </html>
  );
}
