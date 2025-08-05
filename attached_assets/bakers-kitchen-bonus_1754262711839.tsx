import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Utensils, Leaf, Handshake } from "lucide-react";

export function BakersKitchenBonus() {
  const handleClaimVoucher = () => {
    // This would typically integrate with a voucher system
    alert("Voucher claim process initiated! We'll contact you with redemption details.");
  };

  const handleVisitBakersKitchen = () => {
    window.open("https://www.bakerskitchenuae.com", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 bg-gradient-dubai">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="shadow-2xl overflow-hidden hover-lift">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Visual Section */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Gift className="w-12 h-12 text-yellow-500" />
                </div>
                <h3 className="text-3xl font-bold mb-2">د.إ 100 FREE</h3>
                <p className="text-yellow-100">Bakers Kitchen Meal Voucher</p>
              </div>
            </div>
            
            {/* Content Section */}
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bonus: Free Bakers Kitchen Meal!</h3>
              <p className="text-gray-600 mb-6">Worth د.إ 100 when your friend signs up for our eco-friendly trade-in program</p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Utensils className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-700">Fresh Mediterranean cuisine</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Leaf className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Organic ingredients</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Handshake className="w-5 h-5 text-aqua-primary" />
                  <span className="text-gray-700">Partner restaurant</span>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <Button 
                  onClick={handleClaimVoucher}
                  className="bg-yellow-500 text-white hover:bg-yellow-600"
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Claim Voucher
                </Button>
                <Button 
                  onClick={handleVisitBakersKitchen}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Visit Bakers Kitchen
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  );
}
