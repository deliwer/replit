import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Bot, X, Send } from "lucide-react";

export function AIChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm Dolly, your AI trade-in assistant. I can help you:",
      options: [
        "• Calculate device value",
        "• Find pickup locations", 
        "• Answer trade-in questions"
      ]
    },
    {
      type: 'user',
      text: "What's my iPhone 14 Pro worth?"
    },
    {
      type: 'bot',
      text: "Great! An iPhone 14 Pro can be worth AED 1,200-2,400 depending on storage and condition. Would you like me to calculate the exact value?"
    }
  ]);

  const [inputValue, setInputValue] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = () => {
    if (!inputValue.trim()) return;
    
    setMessages(prev => [...prev, {
      type: 'user',
      text: inputValue
    }]);
    setInputValue("");
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text: "Thanks for your question! For detailed assistance, please contact our team via WhatsApp for personalized help with your trade-in."
      }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Chat Toggle Button */}
        <Button
          onClick={toggleChat}
          className="w-16 h-16 bg-gradient-to-r from-aqua-primary to-aqua-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        
        {/* Chat Interface */}
        {isOpen && (
          <Card className="absolute bottom-20 right-0 w-80 shadow-2xl border">
            <div className="bg-gradient-to-r from-aqua-primary to-aqua-secondary text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mr-3">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Dolly</h4>
                    <p className="text-sm opacity-80">AI Trade Assistant</p>
                  </div>
                </div>
                <Button
                  onClick={toggleChat}
                  variant="ghost"
                  size="sm"
                  className="text-white/80 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <CardContent className="p-4 h-64 overflow-y-auto">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`${message.type === 'user' ? 'ml-8' : ''}`}>
                    <div className={`p-3 rounded-lg ${
                      message.type === 'user' 
                        ? 'bg-aqua-primary text-white ml-auto max-w-[80%]' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                      {message.options && (
                        <ul className="text-sm mt-2 space-y-1">
                          {message.options.map((option, idx) => (
                            <li key={idx}>{option}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="text-sm"
                />
                <Button
                  onClick={sendMessage}
                  className="bg-aqua-primary text-white hover:bg-aqua-secondary px-3"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
