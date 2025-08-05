import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Gem, Percent, FlaskConical, Phone, Gift } from "lucide-react";
import aquacafeCardImage from "@assets/Aquacafe_byDeliWer_Card_Corners_1754062395673.png";

export function MembershipSection() {
  const handleJoinNow = () => {
    const element = document.getElementById('trade-application');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCallUs = () => {
    window.location.href = "tel:+971523946311";
  };

  return (
    <section id="membership" className="py-20 bg-gradient-aqua">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* AquaCafe Card Image */}
          <div className="lg:order-1">
            <img 
              src={aquacafeCardImage} 
              alt="AquaCafe Membership Card by DeliWer" 
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
            />
          </div>
          
          {/* Membership Benefits */}
          <Card className="membership-card lg:order-2">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-aqua-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AquaCafe Loyalty Rewards</h3>
                <p className="text-gray-600">Member Kit</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Droplets className="w-5 h-5 text-aqua-primary flex-shrink-0" />
                  <span className="text-gray-700">Hair Shower Filter FREE Gift with AquaCafe Membership</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Gem className="w-5 h-5 text-aqua-primary flex-shrink-0" />
                  <span className="text-gray-700">Sleek Design and Chrome Finish</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Percent className="w-5 h-5 text-dirham-green flex-shrink-0" />
                  <span className="text-gray-700">20% Discount on Water Filtration Systems and Service/maintenance contract</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FlaskConical className="w-5 h-5 text-aqua-primary flex-shrink-0" />
                  <span className="text-gray-700">FREE Kangen Water Demo</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-gray-900">
                  <span className="line-through text-gray-400">د.إ 399 + VAT</span>
                  <span className="text-dirham-green ml-2">د.إ 99</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleJoinNow}
                  className="w-full bg-aqua-primary text-white hover:bg-aqua-secondary py-4 text-lg font-semibold"
                >
                  Join Now To Trade-in & Claim Your Exclusive Rewards
                </Button>
                <Button 
                  onClick={handleCallUs}
                  variant="outline"
                  className="w-full border-2 border-aqua-primary text-aqua-primary hover:bg-aqua-primary hover:text-white py-4 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +971 52 394 6311
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Community Section */}
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">#SAYNOTOPLASTIC</h2>
            <h3 className="text-2xl font-semibold mb-8">AND YOUR LUNCH IS ON US</h3>
            
            <Card className="bg-white/10 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center">
                    <Gift className="w-8 h-8 text-gray-900" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold">Absolutely FREE</h4>
                    <p className="text-blue-100">د.إ 300+ FREE Meal Voucher</p>
                  </div>
                </div>
                <p className="text-blue-100 mb-4">د.إ 100! (When your friend signs up)</p>
                
                <Card className="bg-white/10 border-0">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2">Partnership Highlights:</h4>
                    <ul className="space-y-2 text-sm text-blue-100">
                      <li>• Bake for the Planet initiative</li>
                      <li>• Sustainable dining experiences</li>
                      <li>• Eco-conscious community building</li>
                      <li>• Premium organic ingredients</li>
                    </ul>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
