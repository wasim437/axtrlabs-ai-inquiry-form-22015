
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Sparkles, Zap, Brain, Cpu } from "lucide-react";

interface ServiceSelectorProps {
  selectedServices: string[];
  setSelectedServices: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ServiceSelector = ({ selectedServices, setSelectedServices }: ServiceSelectorProps) => {
  const aiServices = [
    { id: 'ai-automation', label: 'AI Automation', icon: Zap },
    { id: 'data-science', label: 'Data Science', icon: Brain },
    { id: 'machine-learning', label: 'Machine Learning', icon: Cpu },
    { id: 'computer-vision', label: 'Computer Vision', icon: Sparkles },
    { id: 'nlp', label: 'Natural Language Processing', icon: Brain },
    { id: 'predictive-analytics', label: 'Predictive Analytics', icon: Zap },
    { id: 'ai-consulting', label: 'AI Consulting', icon: Sparkles },
    { id: 'custom-ai', label: 'Custom AI Solutions', icon: Cpu }
  ];

  return (
    <div className="space-y-4">
      <Label className="text-white font-medium text-lg">
        AI Services Needed <span className="text-red-400">*</span>
      </Label>
      <div className="grid md:grid-cols-2 gap-4">
        {aiServices.map((service) => {
          const IconComponent = service.icon;
          return (
            <div 
              key={service.id}
              className={`flex items-center space-x-3 p-4 rounded-lg border transition-all hover-glow card-highlight ${
                selectedServices.includes(service.id)
                  ? 'bg-white/10 border-white animate-pulse-glow'
                  : 'bg-black/20 border-gray-700 hover:bg-white/5'
              }`}
            >
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedServices(prev => [...prev, service.id]);
                  } else {
                    setSelectedServices(prev => prev.filter(id => id !== service.id));
                  }
                }}
                className="border-gray-500 data-[state=checked]:bg-white data-[state=checked]:border-white"
              />
              <IconComponent className="w-5 h-5 text-white" />
              <Label 
                htmlFor={service.id} 
                className="text-white cursor-pointer flex-1"
              >
                {service.label}
              </Label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
