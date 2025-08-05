import { Header } from "@/components/header";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { CombinedRewardsSection } from "@/components/sections/combined-rewards";
import { BenefitsSection } from "@/components/sections/benefits";
import { TradeCalculatorSection } from "@/components/sections/trade-calculator";
import { TradeApplicationSection } from "@/components/sections/trade-application";
import { PartnershipBenefitsSection } from "@/components/sections/partnership-benefits";
import { FoundersSection } from "@/components/sections/founders";
import { CollectionPointsSection } from "@/components/sections/collection-points";
import { CommunityContactSection } from "@/components/sections/community-contact";
import { FooterSection } from "@/components/sections/footer";
import { AIChatWidget } from "@/components/ai-chat-widget";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <CombinedRewardsSection />
      <BenefitsSection />
      <TradeCalculatorSection />
      <TradeApplicationSection />
      <PartnershipBenefitsSection />
      <FoundersSection />
      <CollectionPointsSection />
      <CommunityContactSection />
      <FooterSection />
      <AIChatWidget />
    </div>
  );
}
