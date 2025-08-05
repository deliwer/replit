
import { Button } from "@/components/ui/button";
import { Gift, Calculator, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

interface AquaCafeHeroProps {
  heroImage?: string;
  bonusBadge?: string;
  heading?: string;
  highlightText?: string;
  subheading?: string;
  primaryButtonLabel?: string;
  primaryButtonLink?: string;
  secondaryButtonLabel?: string;
  secondaryButtonLink?: string;
}

export function AquaCafeHero({
  heroImage = "/mobile-water-purification-hero.jpg",
  bonusBadge = "Welcome Bonus: D 1000+ Value",
  heading = "Dubai's First iPhone-to-Water Trade Service",
  highlightText = "iPhone-to-Water",
  subheading = "Get D 1000+ CASHBACK in filtered water systems + meal vouchers | Free pickup anywhere in Dubai with instant WhatsApp valuation.",
  primaryButtonLabel = "Get My iPhone Value Now →",
  primaryButtonLink = "#calculator",
  secondaryButtonLabel = "WhatsApp Quote",
  secondaryButtonLink = "https://wa.me/971567148381?text=Hi%20DeliWer!%20I%20want%20to%20learn%20more%20about%20the%20trade-in%20program."
}: AquaCafeHeroProps) {
  
  const handlePrimaryClick = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    openWhatsApp("971567148381", "Hi DeliWer! I want to learn more about the trade-in program.");
  };

  const renderHeading = () => {
    if (highlightText && heading.includes(highlightText)) {
      const parts = heading.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="text-dubai-gold">{highlightText}</span>
          {parts[1]}
        </>
      );
    }
    return heading;
  };

  return (
    <section className="aquacafe-hero relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="aquacafe-hero__container relative w-full max-w-6xl mx-auto px-8 z-10">
        {/* Background Image */}
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Mobile water purification" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/90 to-blue-600/90"></div>
          </div>
        )}

        <div className="relative text-center text-white z-10 animate-fadeIn">
          {/* Bonus Badge */}
          {bonusBadge && (
            <div className="mb-8 animate-slideUp">
              <span className="inline-flex items-center gap-2 bg-dubai-gold text-gray-900 text-sm font-semibold px-6 py-3 rounded-full">
                <Gift className="w-4 h-4" />
                {bonusBadge}
              </span>
            </div>
          )}

          {/* Main Heading */}
          {heading && (
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-slideUp animation-delay-200">
              {renderHeading()}
            </h1>
          )}

          {/* Subheading */}
          {subheading && (
            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-4xl mx-auto text-gray-100 animate-slideUp animation-delay-400">
              {subheading}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-slideUp animation-delay-600">
            {primaryButtonLabel && (
              <Button
                onClick={handlePrimaryClick}
                className="bg-dubai-gold hover:bg-yellow-400 text-gray-900 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 min-w-72"
              >
                <Calculator className="w-5 h-5 mr-2" />
                {primaryButtonLabel}
              </Button>
            )}

            {secondaryButtonLabel && (
              <Button
                onClick={handleWhatsAppClick}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg min-w-72 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {secondaryButtonLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
