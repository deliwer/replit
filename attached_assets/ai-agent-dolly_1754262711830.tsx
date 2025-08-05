import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Send } from "lucide-react";

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export function AIAgentDolly() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi! I'm Dolly, your trade-in assistant. What device would you like to trade in today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateAIResponse(inputMessage);
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleQuickAction = (device: string) => {
    setInputMessage(`I want to trade in my ${device}`);
  };

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes("iphone")) {
      return "Great! I can help you with iPhone trade-ins. What model do you have? For example: iPhone 15 Pro, iPhone 14, etc. Also, what's the storage capacity and condition?";
    } else if (input.includes("samsung")) {
      return "Perfect! Samsung devices are also accepted. Which Galaxy model do you have? Please share the model, storage, and condition details.";
    } else if (input.includes("macbook") || input.includes("laptop")) {
      return "Excellent! MacBooks have great trade-in value. What year and model is your MacBook? Is it in working condition?";
    } else if (input.includes("condition") || input.includes("working")) {
      return "For device condition, we categorize as: Excellent (like new), Good (minor wear), Fair (visible wear but functional), or Poor (significant damage but works). Based on your device condition, I can provide an estimated value.";
    } else if (input.includes("value") || input.includes("price") || input.includes("worth")) {
      return "Trade-in values depend on device model, storage, and condition. For example, an iPhone 15 Pro 128GB in excellent condition could be worth د.إ 2,800+ including our AquaCafe bonus! Would you like me to calculate your device's value?";
    } else {
      return "I'd be happy to help! Please tell me more about your device - the model, storage capacity, and condition. I can then provide you with an accurate trade-in valuation for your AquaCafe water system upgrade.";
    }
  };

  return (
    <Card className="ai-chat-container text-white border-0">
      <CardContent className="p-6">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
            <Bot className="w-6 h-6 text-aqua-primary" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Meet Dolly</h3>
            <p className="text-blue-100">Your AI Trade-in Assistant</p>
          </div>
        </div>
        
        {/* Chat Messages */}
        <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className="ai-message rounded-lg p-3">
              <div className="flex items-start space-x-3">
                {!message.isUser && (
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-aqua-primary" />
                  </div>
                )}
                <div className={`flex-1 ${message.isUser ? 'text-right' : ''}`}>
                  <p className="text-sm text-white">{message.text}</p>
                  <span className="text-xs text-blue-200">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Quick Actions */}
        <div className="flex space-x-2 mb-4">
          <Button 
            size="sm"
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 text-white border-0"
            onClick={() => handleQuickAction("iPhone 15 Pro")}
          >
            iPhone 15 Pro
          </Button>
          <Button 
            size="sm"
            variant="secondary"
            className="bg-white/20 hover:bg-white/30 text-white border-0"
            onClick={() => handleQuickAction("Samsung S24")}
          >
            Samsung S24
          </Button>
        </div>
        
        {/* Message Input */}
        <div className="flex space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Type your message..."
            className="bg-white/10 border-white/30 text-white placeholder-white/70"
          />
          <Button 
            onClick={handleSendMessage}
            size="icon"
            className="bg-white/20 hover:bg-white/30"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
