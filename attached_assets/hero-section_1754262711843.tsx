import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Calculator, MessageCircle, Gift } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import mobileHeroImage from "@assets/mobile-water-purification-hero_1754062934320.jpg";

export function HeroSection() {
  const handleCalculatorClick = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    openWhatsApp("971567148381", "Hi DeliWer! I want to learn more about the trade-in program.");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-aqua">
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${mobileHeroImage})`
        }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-aqua-primary/90 to-aqua-secondary/90"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto fade-in">
        <div className="mb-6">
          <Badge className="bg-dubai-gold text-gray-900 text-sm font-semibold mb-4 px-4 py-2">
            <Gift className="w-4 h-4 mr-2" />
            Welcome Bonus: د.إ 1000+ Value
          </Badge>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight slide-up">
          Dubai's First <span className="text-dubai-gold">iPhone-to-Water</span><br />
          Trade Service
        </h1>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto leading-relaxed slide-up">
          Get <strong className="text-dubai-gold">د.إ 1000+ CASHBACK</strong> in filtered water systems + meal vouchers | 
          Free pickup anywhere in Dubai with instant WhatsApp valuation.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 slide-up">
          <Button 
            onClick={handleCalculatorClick}
            size="lg"
            className="bg-dubai-gold text-gray-900 hover:bg-yellow-500 text-lg px-8 py-6 rounded-lg font-semibold transform transition-all hover:scale-105 shadow-lg"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Get My iPhone Value Now →
          </Button>
          <Button 
            onClick={handleWhatsAppClick}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-aqua-primary text-lg px-8 py-6 rounded-lg font-semibold"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Quote
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm slide-up">
          {["iPhone 13 Pro", "Samsung Galaxy S22", "MacBook Air", "iPad Pro"].map((device) => (
            <Badge key={device} variant="secondary" className="bg-white/20 text-white border-0">
              {device}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
