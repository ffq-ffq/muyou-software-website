"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 460);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[80] h-0.5 bg-gradient-to-r from-cyanGlow via-indigo-400 to-fuchsia-500"
        animate={{ width: loading ? "78%" : "100%", opacity: loading ? 1 : 0 }}
        initial={{ width: 0, opacity: 0 }}
        transition={{ duration: loading ? 0.36 : 0.22, ease: "easeOut" }}
      />
      <main className="min-h-screen overflow-hidden">{children}</main>
    </>
  );
}
