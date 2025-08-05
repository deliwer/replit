import { Button } from "@/components/ui/button";
import { Users, Utensils, CheckCircle, Phone, Mail } from "lucide-react";
import { openWhatsAppSupport } from "@/lib/whatsapp";

export function PartnershipBenefitsSection() {
  const affiliateProgram = {
    icon: <Users className="text-2xl" />,
    title: "Affiliate Agent Program",
    subtitle: "Device aggregation from DeliWer Shopping community",
    color: "bg-dubai-gold",
    textColor: "text-gray-900",
    benefits: [
      "Earn commission on every device trade-in",
      "Access to exclusive pricing and inventory",
      "Marketing support and training provided",
      "Build your own community network"
    ]
  };

  const restaurantProgram = {
    icon: <Utensils className="text-2xl" />,
    title: "Restaurant Partner Program",
    subtitle: "Healthy meal rewards and collection points",
    color: "bg-orange-500",
    textColor: "text-white",
    benefits: [
      "Become a certified collection point",
      "Offer healthy meal vouchers as rewards",
      "Increase foot traffic and customer base",
      "Featured partner in our ecosystem"
    ]
  };

  const joinAffiliate = () => {
    openWhatsAppSupport("Hi! I'm interested in joining the Affiliate Agent Program. Please provide more details.");
  };

  const joinRestaurant = () => {
    openWhatsAppSupport("Hi! I'm interested in becoming a Restaurant Partner. Please provide more details.");
  };

  const callPartnership = () => {
    window.open('tel:+971523946311');
  };

  const emailPartnership = () => {
    window.open('mailto:partnerships@deliwer.com');
  };

  return (
    <section id="partnership" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Partnership Benefits</h2>
          <p className="text-xl opacity-90">Join our ecosystem as an affiliate agent or restaurant partner</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Affiliate/Agent Program */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 card-hover border border-white/30">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 ${affiliateProgram.color} ${affiliateProgram.textColor} rounded-full flex items-center justify-center mr-4`}>
                {affiliateProgram.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{affiliateProgram.title}</h3>
                <p className="opacity-80">{affiliateProgram.subtitle}</p>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {affiliateProgram.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-dubai-gold mr-3 w-5 h-5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={joinAffiliate}
              className="w-full bg-dubai-gold text-gray-900 hover:bg-yellow-500"
            >
              Become an Agent
            </Button>
          </div>
          
          {/* Restaurant Partner Program */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 card-hover border border-white/30">
            <div className="flex items-center mb-6">
              <div className={`w-16 h-16 ${restaurantProgram.color} ${restaurantProgram.textColor} rounded-full flex items-center justify-center mr-4`}>
                {restaurantProgram.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold">{restaurantProgram.title}</h3>
                <p className="opacity-80">{restaurantProgram.subtitle}</p>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {restaurantProgram.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="text-orange-300 mr-3 w-5 h-5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={joinRestaurant}
              className="w-full bg-orange-500 text-white hover:bg-orange-600"
            >
              Partner with Us
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg opacity-90 mb-6">Join the DeliWer Shopping Metaverse ecosystem today</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={callPartnership}
              className="bg-dubai-gold text-gray-900 hover:bg-yellow-500"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call +971 52 394 6311
            </Button>
            <Button 
              onClick={emailPartnership}
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Partnership Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
