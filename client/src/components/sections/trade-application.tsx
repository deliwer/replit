import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle, AlertCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import type { InsertTradeInApplication } from "@shared/schema";

export function TradeApplicationSection() {
  const [formData, setFormData] = useState<Partial<InsertTradeInApplication>>({
    tradeOption: "aquacafe"
  });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedAssessment, setAcceptedAssessment] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: InsertTradeInApplication) => {
      const response = await apiRequest("POST", "/api/trade-applications", data);
      return response.json();
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!acceptedTerms || !acceptedAssessment) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    const requiredFields = ['name', 'phone', 'iphoneModel', 'condition', 'tradeOption', 'pickupLocation'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof InsertTradeInApplication]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    mutation.mutate(formData as InsertTradeInApplication);
  };

  const handleInputChange = (field: keyof InsertTradeInApplication, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (mutation.isSuccess) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your trade-in application. We'll contact you within 24 hours via WhatsApp or email 
                to finalize your iPhone trade-in process.
              </p>
              <Button 
                onClick={() => window.location.reload()}
                className="bg-aqua-primary text-white hover:bg-aqua-secondary"
              >
                Submit Another Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="trade-application" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Start Your Trade-in Process</h2>
          <p className="text-xl text-gray-600">Complete the form below and we shall contact you within 24 hours to finalize your iPhone trade-in</p>
        </div>
        
        <Card className="shadow-xl bg-white">
          <CardContent className="p-6">
            {/* Error Message */}
            {mutation.isError && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                  <p className="text-red-800 text-sm">Error submitting form. Please try again.</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Quick Contact & Device */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="mt-1"
                    value={formData.name || ""}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    className="mt-1"
                    placeholder="+971 XXX XXXXX"
                    value={formData.phone || ""}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">iPhone Model *</Label>
                  <Select onValueChange={(value) => handleInputChange("iphoneModel", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select Model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iPhone 15 Pro Max">iPhone 15 Pro Max</SelectItem>
                      <SelectItem value="iPhone 15 Pro">iPhone 15 Pro</SelectItem>
                      <SelectItem value="iPhone 15">iPhone 15</SelectItem>
                      <SelectItem value="iPhone 14 Pro Max">iPhone 14 Pro Max</SelectItem>
                      <SelectItem value="iPhone 14 Pro">iPhone 14 Pro</SelectItem>
                      <SelectItem value="iPhone 13 Pro">iPhone 13 Pro</SelectItem>
                      <SelectItem value="iPhone 12 Pro">iPhone 12 Pro</SelectItem>
                      <SelectItem value="Other">Other Model</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-700">Condition *</Label>
                  <Select onValueChange={(value) => handleInputChange("condition", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Device Condition" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Excellent">Excellent</SelectItem>
                      <SelectItem value="Good">Good</SelectItem>
                      <SelectItem value="Fair">Fair</SelectItem>
                      <SelectItem value="Poor">Poor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Trade Option & Pickup */}
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-700">Trade-in Option *</Label>
                  <RadioGroup 
                    value={formData.tradeOption || "aquacafe"} 
                    onValueChange={(value) => handleInputChange("tradeOption", value)}
                    className="mt-2 grid grid-cols-1 gap-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="aquacafe" id="aquacafe" />
                      <Label htmlFor="aquacafe" className="text-sm">AquaCafe Water System</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash" className="text-sm">Cash Payment</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div>
                  <Label className="text-sm font-medium text-gray-700">Pickup Location *</Label>
                  <Select onValueChange={(value) => handleInputChange("pickupLocation", value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose Dubai Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dubai Airport Freezone">Dubai Airport Freezone</SelectItem>
                      <SelectItem value="Bakers Kitchen Restaurant">Bakers Kitchen Restaurant</SelectItem>
                      <SelectItem value="Dubai Mall">Dubai Mall</SelectItem>
                      <SelectItem value="Marina">Dubai Marina</SelectItem>
                      <SelectItem value="Downtown">Downtown Dubai</SelectItem>
                      <SelectItem value="Home Pickup">Home Pickup</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Terms and Submit */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="terms"
                      checked={acceptedTerms}
                      onCheckedChange={(checked) => setAcceptedTerms(!!checked)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the Terms of Service and Privacy Policy.
                    </Label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="assessment"
                      checked={acceptedAssessment}
                      onCheckedChange={(checked) => setAcceptedAssessment(!!checked)}
                    />
                    <Label htmlFor="assessment" className="text-sm">
                      I understand that this is a preliminary assessment and final valuation may vary based on device inspection.
                    </Label>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  disabled={mutation.isPending}
                  className="w-full bg-aqua-primary text-white py-4 px-6 text-lg font-semibold hover:bg-aqua-secondary"
                >
                  {mutation.isPending ? "Submitting..." : "Book Pickup & Submit Application"}
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  You'll receive a response within 24 hours via WhatsApp or email
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
