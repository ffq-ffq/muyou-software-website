import { CasesSection } from "@/components/home/CasesSection";
import { CTABanner } from "@/components/home/CTABanner";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TechStack } from "@/components/home/TechStack";
import { WhyUsSection } from "@/components/home/WhyUsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhyUsSection />
      <ProcessTimeline />
      <CasesSection />
      <TechStack />
      <CTABanner />
    </>
  );
}
