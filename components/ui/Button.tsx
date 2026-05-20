import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const variants = {
  primary:
    "bg-primary-gradient text-white shadow-glow hover:scale-[1.03] hover:shadow-cyan",
  secondary:
    "border border-white/12 bg-white/[0.03] text-white hover:border-cyanGlow/50 hover:bg-white/[0.07]",
  ghost: "text-slate-300 hover:bg-white/[0.06] hover:text-white"
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const buttonClass = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:primary-focus",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} {...props}>
      {children}
    </button>
  );
}
