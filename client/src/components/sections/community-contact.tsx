import { Button } from "@/components/ui/button";
import { Users, Smartphone, Leaf, Phone, Mail } from "lucide-react";
import { openWhatsAppSupport } from "@/lib/whatsapp";

export function CommunityContactSection() {
  const stats = [
    {
      icon: <Users className="text-3xl" />,
      number: "5,000+",
      label: "Happy Customers"
    },
    {
      icon: <Smartphone className="text-3xl" />,
      number: "15,000+",
      label: "Devices Traded"
    },
    {
      icon: <Leaf className="text-3xl" />,
      number: "50 Tons",
      label: "E-Waste Recycled"
    }
  ];

  const whatsappSupport = () => {
    openWhatsAppSupport("Hi! I need support with my trade-in application or have questions about the service.");
  };

  const emailSupport = () => {
    window.open('mailto:support@deliwer.com');
  };

  return (
    <section className="py-20 bg-aqua-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Join the DeliWer Community</h2>
        <p className="text-xl opacity-90 mb-12 max-w-3xl mx-auto">
          Connect with thousands of satisfied customers who have traded their devices for sustainable water solutions and delicious meals
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{stat.number}</h3>
              <p className="opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={whatsappSupport}
            size="lg"
            className="bg-green-500 text-white hover:bg-green-600 text-lg px-8 py-4"
          >
            <Phone className="w-5 h-5 mr-2" />
            WhatsApp: +971 56 714 8381
          </Button>
          <Button 
            onClick={emailSupport}
            size="lg"
            className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 text-lg px-8 py-4"
          >
            <Mail className="w-5 h-5 mr-2" />
            Email Support
          </Button>
        </div>
      </div>
    </section>
  );
}
