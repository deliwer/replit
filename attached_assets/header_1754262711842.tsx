import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, MapPin, MessageCircle } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWhatsAppClick = () => {
    openWhatsApp("971567148381", "Hi DeliWer! I want to learn more about the trade-in program.");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-aqua-primary">DeliWer</div>
            <span className="text-sm text-gray-500 hidden sm:block">Shopping Metaverse</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-aqua-primary transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-gray-700 hover:text-aqua-primary transition-colors"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('calculator')}
              className="text-gray-700 hover:text-aqua-primary transition-colors"
            >
              Calculator
            </button>
            <button 
              onClick={() => scrollToSection('membership')}
              className="text-gray-700 hover:text-aqua-primary transition-colors"
            >
              Membership
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600 hidden sm:flex items-center">
              <MapPin className="w-4 h-4 text-aqua-primary mr-1" />
              Dubai, UAE
            </div>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white hover:bg-green-600"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            
            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-6 mt-8">
                  <button 
                    onClick={() => scrollToSection('how-it-works')}
                    className="text-left text-lg hover:text-aqua-primary transition-colors"
                  >
                    How It Works
                  </button>
                  <button 
                    onClick={() => scrollToSection('benefits')}
                    className="text-left text-lg hover:text-aqua-primary transition-colors"
                  >
                    Benefits
                  </button>
                  <button 
                    onClick={() => scrollToSection('calculator')}
                    className="text-left text-lg hover:text-aqua-primary transition-colors"
                  >
                    Calculator
                  </button>
                  <button 
                    onClick={() => scrollToSection('membership')}
                    className="text-left text-lg hover:text-aqua-primary transition-colors"
                  >
                    Membership
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
