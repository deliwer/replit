import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export function FoundersSection() {
  const founders = [
    {
      name: "Rubab Hassan",
      title: "Founder & CEO, DeliWer Shopping Metaverse",
      description: "Leading Dubai's transition to sustainable technology consumption through innovative trade-in programs that transform old devices into clean water solutions for families.",
      role: "Trade-in Innovation",
      benefit: "Premium iPhone valuations with instant Dubai pickup service",
      gradient: "from-aqua-primary to-aqua-secondary"
    },
    {
      name: "Dr. Sven Mostaqel",
      title: "Founder & Chef, Bakers Kitchen UAE",
      description: "Creating the partnership bridge between sustainable technology and healthy dining, offering exclusive meal vouchers to AquaCafe members as part of our shared environmental mission.",
      role: "Partnership Benefits",
      benefit: "Exclusive dining rewards and healthy meal vouchers for members",
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">The Partnership Behind Your Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two Dubai entrepreneurs joined forces to create an ecosystem where your old iPhone becomes clean water, exclusive dining rewards, and environmental impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className={`w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br ${founder.gradient} p-1`}>
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="w-16 h-16 text-gray-500" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className={`font-semibold mb-3 ${index === 0 ? 'text-aqua-primary' : 'text-yellow-600'}`}>
                  {founder.title}
                </p>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-1">{founder.role}</p>
                  <p className="text-sm text-gray-600">{founder.benefit}</p>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {founder.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
