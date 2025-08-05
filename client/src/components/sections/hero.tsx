import { Button } from "@/components/ui/button";
import { Smartphone, Droplet, Phone } from "lucide-react";
import { openWhatsAppSupport } from "@/lib/whatsapp";
import mobileHeroImage from "@assets/mobile-water-purification-hero_1754265803554.jpg";

export function HeroSection() {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${mobileHeroImage})`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-aqua-primary/90 to-aqua-secondary/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slideIn">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Dubai's First <span className="text-dubai-gold">iPhone-to-Water</span><br />
            Trade Service
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Get <strong className="text-dubai-gold">AED 1000+</strong> in filtered water systems + meal vouchers | 
            Free pickup anywhere in Dubai with instant WhatsApp valuation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToCalculator}
              size="lg"
              className="bg-dubai-gold text-gray-900 hover:bg-yellow-500 text-lg px-8 py-4"
            >
              Get My iPhone Value Now →
            </Button>
            <Button 
              onClick={() => openWhatsAppSupport()}
              size="lg"
              className="bg-green-500 text-white hover:bg-green-600 text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp Quote
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-white/80">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">iPhone 13 Pro</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Samsung Galaxy S22</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">MacBook Air</span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">iPad Pro</span>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 animate-float opacity-60">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Smartphone className="text-white text-2xl" />
        </div>
      </div>
      
      <div className="absolute top-20 right-20 animate-float opacity-60" style={{ animationDelay: '1.5s' }}>
        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Droplet className="text-white text-2xl" />
        </div>
      </div>
    </section>
  );
}
