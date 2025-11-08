"use client";

import { Features } from "@/components/marketing/features";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { Navigation } from "@/components/marketing/navigation";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const onClick = () => {
    router.push("/setup");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#313338]">
      <Navigation onClick={onClick} />
      <Hero onClick={onClick} />
      <Features />
      <Footer />
    </div>
  );
}
