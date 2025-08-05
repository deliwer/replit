import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { openWhatsAppSupport } from "@/lib/whatsapp";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Promotional Banner */}
      <div className="bg-dubai-gold text-gray-900 text-center py-2 px-4">
        <p className="text-sm font-medium">
          🎉 Welcome Bonus: Get Bakers Kitchen AED 100 meal voucher with your trade-in! Limited time offer.
        </p>
      </div>

      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-aqua-primary">DeliWer</h1>
              <span className="ml-2 text-sm text-gray-600">Shopping Metaverse</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('calculator')} 
                className="text-gray-700 hover:text-aqua-primary transition-colors"
              >
                Calculator
              </button>
              <button 
                onClick={() => scrollToSection('trade-application')} 
                className="text-gray-700 hover:text-aqua-primary transition-colors"
              >
                Trade-in
              </button>
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="text-gray-700 hover:text-aqua-primary transition-colors"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('partnership')} 
                className="text-gray-700 hover:text-aqua-primary transition-colors"
              >
                Partners
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                onClick={() => openWhatsAppSupport()}
                className="bg-green-500 text-white hover:bg-green-600"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
