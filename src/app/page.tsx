import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";
import { HelpButton } from "@/components/HelpButton";
import { HeroProduct } from "@/components/HeroProduct";
import { TrendingGrid } from "@/components/TrendingGrid";
import { WhyReloos } from "@/components/WhyReloos";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main>
        <HeroProduct />
        <TrendingGrid />
        <WhyReloos />
        <CTA />
      </main>
      <HelpButton />
    </>
  );
}
