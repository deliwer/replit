import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Truck, Droplets, Zap } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: DollarSign,
      title: "💰 Best Prices Guaranteed",
      description: "Get the best value for your old iPhone with our competitive pricing and transparent valuations."
    },
    {
      icon: Truck,
      title: "🚚 Free Home Pickup",
      description: "Enjoy the convenience of doorstep pickup in Dubai. Let us take care of your items with our professional service."
    },
    {
      icon: Droplets,
      title: "💧 AquaCafe Water Systems",
      description: "Swap your iPhone for a premium 7-stage water filtration system for an eco-friendly home."
    },
    {
      icon: Zap,
      title: "⚡ Instant Valuation",
      description: "Discover your iPhone's value in under 2 minutes with our calculator."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">📱 Why Choose DeliWer?</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="hover-lift transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-aqua-primary rounded-full flex items-center justify-center mb-6 mx-auto">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
