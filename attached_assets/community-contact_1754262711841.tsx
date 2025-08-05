import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, Mail, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export function CommunityContact() {
  const handleWhatsAppClick = () => {
    openWhatsApp("971567148381", "Hi DeliWer! I want to learn more about your services.");
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Instant quotes and customer support",
      contact: "+971 56 714 8381",
      action: handleWhatsAppClick,
      bgColor: "bg-green-500"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+971 52 394 6311",
      action: () => window.location.href = "tel:+971523946311",
      bgColor: "bg-aqua-primary"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed inquiries and support",
      contact: "support@deliwer.com",
      action: () => window.location.href = "mailto:support@deliwer.com",
      bgColor: "bg-aqua-primary"
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <section className="py-20 bg-gradient-aqua">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Community</h2>
          <p className="text-xl text-blue-100">Connect with us and stay updated on sustainability initiatives</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <Card key={index} className="text-center hover-lift">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <Button
                  onClick={method.action}
                  variant="link"
                  className="text-aqua-primary hover:text-aqua-secondary font-semibold"
                >
                  {method.contact}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-aqua-primary" />
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <span className="text-2xl font-bold text-white">#SAYNOTOPLASTIC</span>
            <p className="text-blue-100 mt-2">Join the movement for a sustainable Dubai</p>
          </div>
        </div>
      </div>
    </section>
  );
}
