import { DollarSign, Truck, Droplet, Zap } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: <DollarSign className="text-2xl" />,
      title: "💰 Best Prices Guaranteed",
      description: "Get the best value for your old iPhone with our competitive pricing and transparent valuations.",
      color: "bg-dirham-green"
    },
    {
      icon: <Truck className="text-2xl" />,
      title: "🚚 Free Home Pickup",
      description: "Enjoy the convenience of doorstep pickup in Dubai. Let us take care of your items with our professional service.",
      color: "bg-aqua-primary"
    },
    {
      icon: <Droplet className="text-2xl" />,
      title: "💧 AquaCafe Water Systems",
      description: "Swap your iPhone for a premium 7-stage water filtration system for an eco-friendly home.",
      color: "bg-aqua-secondary"
    },
    {
      icon: <Zap className="text-2xl" />,
      title: "⚡ Instant Valuation",
      description: "Discover your iPhone's value in under 2 minutes with our calculator.",
      color: "bg-dubai-gold"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">📱 Why Choose DeliWer?</h2>
          <p className="text-xl text-gray-600">Your trusted partner for device trade-ins in Dubai</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gray-50 card-hover">
              <div className={`w-16 h-16 ${benefit.color} text-white rounded-full flex items-center justify-center mx-auto mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
