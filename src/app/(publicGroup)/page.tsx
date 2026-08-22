import CategorySection from "@/components/home/CategorySection";
import { HeroSection } from "@/components/home/Hero";
import NewsletterSection from "@/components/home/NewsletterSection";
import TrendingNow from "@/components/home/TrendingNow";


import WhyGearUpSection from "@/components/home/WhyGearup";

export default function HomePage() {
  return (
    <main>
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
      <WhyGearUpSection></WhyGearUpSection>
      <TrendingNow></TrendingNow>
      <NewsletterSection></NewsletterSection>
    </main>
  );
}
