"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/services", label: "服务" },
  { href: "/cases", label: "案例" },
  { href: "/about", label: "关于" },
  { href: "/contact", label: "联系我们" }
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink/78 shadow-glow backdrop-blur-lg"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="木又软件首页">
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-cyan">
            <span className="absolute inset-0 bg-primary-gradient opacity-70 transition-transform duration-500 group-hover:scale-125" />
            <span className="relative text-lg font-black text-white">木</span>
          </span>
          <span className="leading-tight">
            <span className="block text-base font-extrabold tracking-tight text-white">
              木又软件
            </span>
            <span className="block text-xs uppercase text-slate-400">Muyou Software</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/[0.06] hover:text-white",
                pathname === item.href && "bg-white/[0.08] text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:13566802517"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyanGlow/50 hover:text-white"
          >
            <Phone className="h-4 w-4" />
            13566802517
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-primary-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.03]"
          >
            免费咨询
          </Link>
        </div>

        <button
          aria-label={open ? "关闭导航菜单" : "打开导航菜单"}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-0 top-20 z-40 bg-ink/96 px-6 py-8 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-2xl border border-white/8 px-5 py-4 text-lg font-semibold text-slate-200",
                    pathname === item.href && "border-cyanGlow/40 bg-cyanGlow/10 text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:13566802517"
                className="mt-4 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-primary-gradient px-5 py-3 font-semibold text-white shadow-glow"
              >
                <Phone className="h-5 w-5" />
                免费咨询
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
