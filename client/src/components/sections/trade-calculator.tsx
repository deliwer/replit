import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { useQuery } from "@tanstack/react-query";
import { formatAED } from "@/lib/currency";
import { generateQuoteMessage, openWhatsAppSupport } from "@/lib/whatsapp";
import { AlertCircle } from "lucide-react";

interface CalculatorState {
  model: string;
  storage: string;
  condition: string;
  year: string;
  accessories: string[];
}

interface ValuationResult {
  marketValue: number;
  tradeValue: number;
  bonusValue: number;
  totalValue: number;
}

export function TradeCalculatorSection() {
  const [formData, setFormData] = useState<CalculatorState>({
    model: "",
    storage: "",
    condition: "",
    year: "",
    accessories: []
  });

  const [shouldCalculate, setShouldCalculate] = useState(false);

  const { data: valuation, isLoading, error } = useQuery({
    queryKey: ['/api/device-valuations', formData.model, formData.storage, formData.condition],
    enabled: shouldCalculate && !!formData.model && !!formData.storage && !!formData.condition,
  });

  const handleCalculate = () => {
    if (!formData.model || !formData.storage || !formData.condition) {
      alert("Please select model, storage, and condition before calculating.");
      return;
    }
    setShouldCalculate(true);
  };

  const handleAccessoryChange = (accessory: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      accessories: checked 
        ? [...prev.accessories, accessory]
        : prev.accessories.filter(a => a !== accessory)
    }));
  };

  const handleApplyTradeIn = () => {
    if (valuation) {
      const message = generateQuoteMessage({
        model: formData.model,
        storage: formData.storage,
        condition: formData.condition,
        estimatedValue: valuation.totalValue
      });
      openWhatsAppSupport(message);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Trade-in Calculator</h2>
          <p className="text-xl text-gray-600">Get instant valuation for your device - with AquaCafe welcome bonus</p>
        </div>
        
        <Card className="bg-white shadow-xl">
          <CardContent className="p-8">
            <form className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Model *</label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, model: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="iPhone 15 Pro Max">iPhone 15 Pro Max</SelectItem>
                    <SelectItem value="iPhone 15 Pro">iPhone 15 Pro</SelectItem>
                    <SelectItem value="iPhone 15 Plus">iPhone 15 Plus</SelectItem>
                    <SelectItem value="iPhone 15">iPhone 15</SelectItem>
                    <SelectItem value="iPhone 14 Pro Max">iPhone 14 Pro Max</SelectItem>
                    <SelectItem value="iPhone 14 Pro">iPhone 14 Pro</SelectItem>
                    <SelectItem value="Samsung Galaxy S23">Samsung Galaxy S23</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Storage Capacity *</label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, storage: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Storage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="128GB">128GB</SelectItem>
                    <SelectItem value="256GB">256GB</SelectItem>
                    <SelectItem value="512GB">512GB</SelectItem>
                    <SelectItem value="1TB">1TB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Condition *</label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Condition" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent - Like new</SelectItem>
                    <SelectItem value="good">Good - Minor wear</SelectItem>
                    <SelectItem value="fair">Fair - Visible wear</SelectItem>
                    <SelectItem value="poor">Poor - Heavy wear</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Model Year</label>
                <Select onValueChange={(value) => setFormData(prev => ({ ...prev, year: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="older">Older</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-4">Included Accessories</label>
                <div className="grid grid-cols-3 gap-4">
                  {["Original Charger", "Original Box", "Earphones"].map((accessory) => (
                    <div key={accessory} className="flex items-center space-x-2">
                      <Checkbox 
                        id={accessory}
                        onCheckedChange={(checked) => handleAccessoryChange(accessory, !!checked)}
                      />
                      <label htmlFor={accessory} className="text-sm text-gray-700">{accessory}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="md:col-span-2">
                <Button 
                  type="button"
                  onClick={handleCalculate}
                  disabled={isLoading}
                  className="w-full bg-aqua-primary text-white py-4 px-6 text-lg font-semibold hover:bg-aqua-secondary"
                >
                  {isLoading ? "Calculating..." : "Calculate Trade-in Value"}
                </Button>
              </div>
            </form>
            
            {/* Results */}
            {error && (
              <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <AlertCircle className="w-4 h-4 text-red-500 mr-2" />
                  <p className="text-red-800">Error calculating valuation. Please try again.</p>
                </div>
              </div>
            )}
            
            {valuation && (
              <Card className="mt-8 calculator-result">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Trade-in Value</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Market Value:</span>
                      <span className="font-semibold">{formatAED(valuation.marketValue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Trade-in Rate (50%):</span>
                      <span className="font-semibold">{formatAED(valuation.tradeValue)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">AquaCafe Bonus (20%):</span>
                      <span className="font-semibold text-dirham-green">{formatAED(valuation.bonusValue)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Total Value:</span>
                      <span className="font-bold text-aqua-primary text-xl">{formatAED(valuation.totalValue)}</span>
                    </div>
                  </div>
                  <Button 
                    onClick={handleApplyTradeIn}
                    className="w-full bg-dubai-gold text-gray-900 py-3 px-6 font-semibold mt-6 hover:bg-yellow-500"
                  >
                    Apply Trade-in Value
                  </Button>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
