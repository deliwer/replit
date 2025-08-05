import { AIAgentDolly } from "./ai-agent-dolly";

export function HowItWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Submit Device Details",
      description: "Fill our simple form with your device information for instant valuation"
    },
    {
      number: 2,
      title: "Get Instant Quote",
      description: "Receive fair market value assessment within minutes via WhatsApp"
    },
    {
      number: 3,
      title: "Schedule Pickup",
      description: "Free device collection from your Dubai location at your convenience"
    },
    {
      number: 4,
      title: "Enjoy Rewards",
      description: "Get your د.إ 1000+ value in premium water delivery, meal vouchers, and exclusive benefits"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Your TRADE-IN AGENT Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Simple steps to maximize value from your old electronics</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* AI Agent Dolly Interface */}
          <div className="fade-in">
            <AIAgentDolly />
          </div>
          
          {/* Steps Process */}
          <div className="space-y-8 slide-up">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-aqua-primary rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
