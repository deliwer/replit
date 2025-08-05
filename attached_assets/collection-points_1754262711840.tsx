import { Card, CardContent } from "@/components/ui/card";
import { Building, Plane, MapPin } from "lucide-react";

export function CollectionPoints() {
  const points = [
    {
      name: "Mazaya Center Dubai",
      location: "Business Bay",
      description: "Modern business hub in the heart of Dubai's financial district",
      icon: Building,
      address: "Business Bay, Dubai"
    },
    {
      name: "Dubai Airport Freezone",
      location: "International Hub",
      description: "Strategic location for international travelers and residents",
      icon: Plane,
      address: "Dubai Airport, UAE"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Collection Points</h2>
          <p className="text-lg text-gray-600">Convenient locations across Dubai for your trade-in needs</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {points.map((point, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-aqua-primary rounded-full flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{point.name}</h3>
                    <p className="text-gray-600">{point.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{point.description}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 text-aqua-primary" />
                  <span>{point.address}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
