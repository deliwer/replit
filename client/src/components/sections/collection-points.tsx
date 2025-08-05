import { Button } from "@/components/ui/button";
import { Plane, Utensils, MapPin, Clock, Phone, CheckCircle, Gift, Home } from "lucide-react";
import { openWhatsAppSupport } from "@/lib/whatsapp";

export function CollectionPointsSection() {
  const bookFreezone = () => {
    openWhatsAppSupport("Hi! I would like to book an appointment at Dubai Airport Freezone for device trade-in.");
  };

  const bookBakers = () => {
    openWhatsAppSupport("Hi! I would like to book a pickup at Bakers Kitchen Restaurant.");
  };

  const homePickup = () => {
    openWhatsAppSupport("Hi! I would like to request a home pickup service in Dubai.");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Collection Points</h2>
          <p className="text-xl text-gray-600">Convenient pickup locations across Dubai</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Dubai Airport Freezone */}
          <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-aqua-primary text-white rounded-full flex items-center justify-center mr-6">
                <Plane className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Dubai Airport Freezone</h3>
                <p className="text-aqua-primary font-semibold">Primary Collection Hub</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="text-aqua-primary mr-3 w-5 h-5" />
                <span>Dubai Airport Freezone Authority, Dubai</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="text-aqua-primary mr-3 w-5 h-5" />
                <span>Sunday - Thursday: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="text-aqua-primary mr-3 w-5 h-5" />
                <span>+971 52 394 6311</span>
              </div>
            </div>
            
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <CheckCircle className="text-dirham-green mr-2 w-4 h-4" />
                Professional device inspection
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-dirham-green mr-2 w-4 h-4" />
                Instant valuation confirmation
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-dirham-green mr-2 w-4 h-4" />
                Secure data wiping service
              </li>
            </ul>
            
            <Button 
              onClick={bookFreezone}
              className="w-full bg-aqua-primary text-white hover:bg-aqua-secondary"
            >
              Book Appointment
            </Button>
          </div>
          
          {/* Bakers Kitchen Restaurant */}
          <div className="bg-white rounded-2xl shadow-lg p-8 card-hover">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mr-6">
                <Utensils className="text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Bakers Kitchen Restaurant</h3>
                <p className="text-orange-500 font-semibold">Trusted Restaurant Partner</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-600">
                <MapPin className="text-orange-500 mr-3 w-5 h-5" />
                <span>Multiple Dubai locations</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="text-orange-500 mr-3 w-5 h-5" />
                <span>Daily: 8:00 AM - 11:00 PM</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Gift className="text-orange-500 mr-3 w-5 h-5" />
                <span>AED 100 meal voucher included</span>
              </div>
            </div>
            
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li className="flex items-center">
                <CheckCircle className="text-dirham-green mr-2 w-4 h-4" />
                Convenient dining experience
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-dirham-green mr-2 w-4 h-4" />
                Healthy meal options
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-dirham-green mr-2 w-4 h-4" />
                Community collection point
              </li>
            </ul>
            
            <Button 
              onClick={bookBakers}
              className="w-full bg-orange-500 text-white hover:bg-orange-600"
            >
              Book at Bakers Kitchen
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">Can't make it to our collection points?</p>
          <Button 
            onClick={homePickup}
            size="lg"
            className="bg-dubai-gold text-gray-900 hover:bg-yellow-500 text-lg px-8 py-4"
          >
            <Home className="w-5 h-5 mr-2" />
            Request Home Pickup
          </Button>
          <p className="text-sm text-gray-500 mt-2">Additional charges may apply for home pickup service</p>
        </div>
      </div>
    </section>
  );
}
