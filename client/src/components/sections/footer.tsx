import { Facebook, Instagram, Linkedin, Phone, Mail, Globe } from "lucide-react";

export function FooterSection() {
  const services = [
    { name: "Device Calculator", href: "#calculator" },
    { name: "Trade-in Application", href: "#trade-application" },
    { name: "AquaCafe Systems", href: "https://www.deliwer.com/products/aquacafe" },
    { name: "Partnership Program", href: "#partnership" }
  ];

  const collectionPoints = [
    "Dubai Airport Freezone",
    "Bakers Kitchen Restaurant", 
    "Dubai Mall",
    "Dubai Marina"
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-aqua-primary mb-4">DeliWer</h3>
            <p className="text-gray-400 mb-6">
              Dubai's leading iPhone-to-water trade service, transforming electronic waste into sustainable water solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-aqua-primary text-white rounded-full flex items-center justify-center hover:bg-aqua-secondary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-aqua-primary text-white rounded-full flex items-center justify-center hover:bg-aqua-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-aqua-primary text-white rounded-full flex items-center justify-center hover:bg-aqua-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index}>
                  {service.href.startsWith('#') ? (
                    <button 
                      onClick={() => scrollToSection(service.href)}
                      className="hover:text-aqua-primary transition-colors text-left"
                    >
                      {service.name}
                    </button>
                  ) : (
                    <a 
                      href={service.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-aqua-primary transition-colors"
                    >
                      {service.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Collection Points</h4>
            <ul className="space-y-2 text-gray-400">
              {collectionPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-aqua-primary" />
                +971 52 394 6311
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-green-500" />
                +971 56 714 8381
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-aqua-primary" />
                info@deliwer.com
              </li>
              <li className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-aqua-primary" />
                www.deliwer.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 DeliWer Shopping Metaverse. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-aqua-primary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-aqua-primary text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-aqua-primary text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
