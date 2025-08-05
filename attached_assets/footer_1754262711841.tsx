export function Footer() {
  const serviceLinks = [
    { name: "Trade-in Calculator", href: "#calculator" },
    { name: "AquaCafe Membership", href: "#membership" },
    { name: "Water Filtration", href: "#" },
    { name: "Kangen Water K8", href: "#" }
  ];

  const partnerLinks = [
    { name: "Bakers Kitchen UAE", href: "https://www.bakerskitchenuae.com", external: true },
    { name: "AquaCafe Systems", href: "#" },
    { name: "Bake for the Planet", href: "#" },
    { name: "Sustainability Initiative", href: "#" }
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Trade-in Terms", href: "#" }
  ];

  const handleLinkClick = (href: string, external?: boolean) => {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-aqua-primary mb-4">DeliWer</div>
            <p className="text-gray-400 mb-4">
              Dubai's first iPhone-to-Water trade service, pioneering sustainable technology solutions.
            </p>
            <div className="text-sm text-gray-500">
              <p>Shopping Metaverse</p>
              <p>Dubai, UAE</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Partners</h4>
            <ul className="space-y-2 text-gray-400">
              {partnerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href, link.external)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="hover:text-white transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DeliWer Shopping Metaverse. All rights reserved. | Empowering sustainable technology solutions in Dubai.</p>
        </div>
      </div>
    </footer>
  );
}
