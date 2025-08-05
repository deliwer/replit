import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Leaf, Users } from "lucide-react";
import { openWhatsAppSupport } from "@/lib/whatsapp";
import aquacafeCardImage from "@assets/Aquacafe_byDeliWer_Card_Corners_1754265835182.png";

export function CombinedRewardsSection() {
  const scrollToApplication = () => {
    const element = document.getElementById('trade-application');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bookPickup = () => {
    openWhatsAppSupport("Hi! I would like to book a pickup at Bakers Kitchen Restaurant.");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-dubai-sand to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Double Your Rewards</h2>
          <p className="text-xl text-gray-600">AquaCafe Water Systems + Free Bakers Kitchen Meals</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* AquaCafe Rewards */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover">
            <div className="h-64 relative overflow-hidden">
              <img 
                src={aquacafeCardImage} 
                alt="AquaCafe by DeliWer Loyalty Card" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold drop-shadow-lg">AQUA CAFE</h3>
                <p className="text-sm drop-shadow-md">by DeliWer</p>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">AquaCafe Loyalty Rewards</h4>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="text-dirham-green mr-3 w-5 h-5" />
                  Hair Shower Filter FREE Gift with Membership
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-dirham-green mr-3 w-5 h-5" />
                  Sleek Design and Chrome Finish
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-dirham-green mr-3 w-5 h-5" />
                  20% Discount on Water Filtration Systems
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-dirham-green mr-3 w-5 h-5" />
                  FREE Kangen Water Demo
                </li>
              </ul>
              
              <Button 
                asChild 
                className="w-full bg-aqua-primary text-white hover:bg-aqua-secondary"
              >
                <a 
                  href="https://www.deliwer.com/products/aquacafe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Order AquaCafe Starter Kit
                </a>
              </Button>
            </div>
          </div>
          
          {/* Bakers Kitchen Bonus */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover">
            <div className="h-64 bg-gradient-to-r from-orange-400 to-red-500 relative flex items-center justify-center">
              <div className="text-center text-white">
                <Users className="w-16 h-16 mb-4 mx-auto opacity-80" />
                <h3 className="text-3xl font-bold">Bakers Kitchen</h3>
                <p className="text-lg">Restaurant Partner</p>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Free Meal Voucher</h4>
              <div className="bg-dirham-green text-white p-4 rounded-lg mb-6">
                <p className="text-2xl font-bold">AED 100 Value</p>
                <p className="text-sm opacity-90">When your friend signs up</p>
              </div>
              
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center">
                  <MapPin className="text-orange-500 mr-3 w-5 h-5" />
                  Collection Point in Dubai
                </li>
                <li className="flex items-center">
                  <Leaf className="text-orange-500 mr-3 w-5 h-5" />
                  Healthy Meal Options
                </li>
                <li className="flex items-center">
                  <Users className="text-orange-500 mr-3 w-5 h-5" />
                  Community Dining Experience
                </li>
              </ul>
              
              <Button 
                onClick={bookPickup}
                className="w-full bg-orange-500 text-white hover:bg-orange-600"
              >
                Book Pickup at Bakers Kitchen
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">Absolutely FREE: AED 300+ value in combined rewards!</p>
          <Button 
            onClick={scrollToApplication}
            size="lg"
            className="bg-dubai-gold text-gray-900 hover:bg-yellow-500 text-lg px-8 py-4"
          >
            Start Your Trade-in Journey
          </Button>
        </div>
      </div>
    </section>
  );
}
