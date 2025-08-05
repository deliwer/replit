import { Button } from "@/components/ui/button";
import { Bot, Smartphone, CheckCircle, Truck, Gift } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <Smartphone className="text-2xl" />,
      number: 1,
      title: "Submit Device Details",
      description: "Fill our simple form with your device information for instant valuation"
    },
    {
      icon: <CheckCircle className="text-2xl" />,
      number: 2,
      title: "Get Instant Quote",
      description: "Receive fair market value assessment within minutes via WhatsApp"
    },
    {
      icon: <Truck className="text-2xl" />,
      number: 3,
      title: "Schedule Pickup",
      description: "Free device collection from your Dubai location at your convenience"
    },
    {
      icon: <Gift className="text-2xl" />,
      number: 4,
      title: "Enjoy Rewards",
      description: "Get your 1000+ Dirham value in premium water delivery, meal vouchers, and exclusive benefits"
    }
  ];

  const openChat = () => {
    // This would open the AI chat widget
    console.log("Opening AI chat...");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Your TRADE-IN AGENT Works</h2>
          <p className="text-xl text-gray-600">Simple steps to maximize value from your old electronics</p>
        </div>
        
        {/* AI Assistant Introduction */}
        <div className="bg-gradient-to-r from-aqua-primary to-aqua-secondary rounded-2xl p-8 mb-16 text-white">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Meet Dolly, Your AI Trade-in Assistant</h3>
              <p className="text-lg opacity-90 mb-6">
                Get instant device valuations, trade-in guidance, and personalized recommendations from our AI-powered assistant.
              </p>
              <Button 
                onClick={openChat}
                className="bg-white text-aqua-primary hover:bg-gray-100"
              >
                Chat with Dolly Now
              </Button>
            </div>
            <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center ml-8 animate-pulse-slow">
              <Bot className="text-white text-4xl" />
            </div>
          </div>
        </div>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center card-hover">
              <div className="w-16 h-16 bg-aqua-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
