import { Phone } from "lucide-react";

export function MobileCallButton() {
  return (
    <a
      href="tel:13566802517"
      className="fixed bottom-4 left-4 right-4 z-40 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-gradient px-5 py-3 text-sm font-semibold text-white shadow-glow md:hidden"
    >
      <Phone className="h-4 w-4" />
      免费咨询：13566802517
    </a>
  );
}
