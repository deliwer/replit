import { Header } from "@/components/header";
import { AquaCafeHero } from "@/components/aquacafe-hero";
import { HowItWorksSection } from "@/components/how-it-works";
import { BakersKitchenBonus } from "@/components/bakers-kitchen-bonus";
import { BenefitsSection } from "@/components/benefits-section";
import { TradeCalculator } from "@/components/trade-calculator";
import { TradeApplicationForm } from "@/components/trade-application-form";
import { MembershipSection } from "@/components/membership-section";
import { FoundersSection } from "@/components/founders-section";
import { CollectionPoints } from "@/components/collection-points";
import { CommunityContact } from "@/components/community-contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AquaCafeHero />
      <HowItWorksSection />
      <BakersKitchenBonus />
      <BenefitsSection />
      <TradeCalculator />
      <div id="trade-application">
        <TradeApplicationForm />
      </div>
      <MembershipSection />
      <FoundersSection />
      <CollectionPoints />
      <CommunityContact />
      <Footer />
    </div>
  );
}
