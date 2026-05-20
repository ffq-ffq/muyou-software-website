import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function GlassCard({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass rounded-[8px] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyanGlow/40 hover:shadow-glow",
        className
      )}
    >
      {children}
    </div>
  );
}
