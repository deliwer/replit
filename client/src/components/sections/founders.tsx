import { User } from "lucide-react";

export function FoundersSection() {
  const founders = [
    {
      name: "Ahmed Al-Rashid",
      title: "CEO & Co-Founder",
      description: "Former McKinsey consultant with 15+ years in sustainable technology and circular economy initiatives across the MENA region.",
      gradient: "from-aqua-primary to-aqua-secondary"
    },
    {
      name: "Sarah Mitchell",
      title: "CTO & Co-Founder", 
      description: "Tech innovator and former Apple engineer specializing in AI-powered valuation systems and circular economy platforms.",
      gradient: "from-aqua-secondary to-dubai-gold"
    },
    {
      name: "Rajesh Patel",
      title: "COO & Co-Founder",
      description: "Operations expert with deep experience in Dubai's logistics sector and sustainable business model development.",
      gradient: "from-dubai-gold to-dirham-green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Founders</h2>
          <p className="text-xl text-gray-600">Visionary leaders building Dubai's sustainable future</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <div key={index} className="text-center card-hover">
              <div className={`w-48 h-48 bg-gradient-to-br ${founder.gradient} rounded-full mx-auto mb-6 flex items-center justify-center`}>
                <User className="text-white text-6xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{founder.name}</h3>
              <p className="text-aqua-primary font-semibold mb-4">{founder.title}</p>
              <p className="text-gray-600 text-sm">{founder.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our leadership team combines decades of experience in technology, sustainability, and Middle Eastern markets to revolutionize how Dubai handles electronic waste while providing value to our community.
          </p>
        </div>
      </div>
    </section>
  );
}
