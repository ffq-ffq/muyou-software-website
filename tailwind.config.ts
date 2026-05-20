import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0f",
        cyanGlow: "#22d3ee"
      },
      fontFamily: {
        sans: [
          "Inter",
          "SF Pro Display",
          "PingFang SC",
          "Microsoft YaHei",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        glow: "0 0 40px rgba(99, 102, 241, 0.28)",
        cyan: "0 0 34px rgba(34, 211, 238, 0.22)"
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
        "mesh-gradient":
          "radial-gradient(circle at 15% 20%, rgba(34, 211, 238, 0.18), transparent 28%), radial-gradient(circle at 85% 10%, rgba(168, 85, 247, 0.18), transparent 30%), radial-gradient(circle at 50% 80%, rgba(99, 102, 241, 0.14), transparent 34%)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "0.85" }
        }
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        "pulse-line": "pulseLine 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
