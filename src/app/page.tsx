import { BassinetsSection } from "@/components/BassinetsSection";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroProduct } from "@/components/HeroProduct";
import { ReadyToJoinSection } from "@/components/ReadyToJoinSection";
import { ShopCollections } from "@/components/ShopCollections";
import { SmarterWaySection } from "@/components/SmarterWaySection";
import { StrollersSection } from "@/components/StrollersSection";
import { ValuePropSection } from "@/components/ValuePropSection";
import { WhyReloos } from "@/components/WhyReloos";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main>
        <HeroProduct />
        <ValuePropSection />
        <WhyReloos />
        <ShopCollections />
        <StrollersSection />
        <BassinetsSection />
        <CTA />
        <SmarterWaySection />
        <ReadyToJoinSection />
      </main>
      <Footer />
    </>
  );
}
