
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { BackgroundShapes } from "@/components/BackgroundShapes";
import { Header } from "@/components/Header";
import { ServiceSelector } from "@/components/ServiceSelector";
import { ContactForm } from "@/components/ContactForm";
import { SuccessMessage } from "@/components/SuccessMessage";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    description: ''
  });

  const aiServices = [
    { id: 'ai-automation', label: 'AI Automation' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'computer-vision', label: 'Computer Vision' },
    { id: 'nlp', label: 'Natural Language Processing' },
    { id: 'predictive-analytics', label: 'Predictive Analytics' },
    { id: 'ai-consulting', label: 'AI Consulting' },
    { id: 'custom-ai', label: 'Custom AI Solutions' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (selectedServices.length === 0) {
      toast({
        title: "No Services Selected",
        description: "Please select at least one AI service",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const submissionData = {
      ...formData,
      services: selectedServices.map(id => aiServices.find(s => s.id === id)?.label).filter(Boolean),
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://service-321.app.n8n.cloud/webhook-test/3490623d-a414-41d3-8a95-0a4e23987e06', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Inquiry Submitted Successfully!",
          description: "Our AI experts will contact you soon.",
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitAnother = () => {
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phone: '', company: '', website: '', description: '' });
    setSelectedServices([]);
  };

  useEffect(() => {
    // Add floating animation to background shapes
    const shapes = document.querySelectorAll('.floating-shape');
    shapes.forEach((shape, index) => {
      const delay = index * 0.8;
      (shape as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
        <BackgroundShapes isSuccess />
        <SuccessMessage onSubmitAnother={handleSubmitAnother} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <BackgroundShapes />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <Header />

        {/* Enhanced Form Card */}
        <Card className="max-w-4xl mx-auto glass-dark card-highlight animate-highlight-border">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <ContactForm formData={formData} handleInputChange={handleInputChange} />
              
              <ServiceSelector 
                selectedServices={selectedServices} 
                setSelectedServices={setSelectedServices} 
              />

              {/* Enhanced Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white font-semibold text-lg transition-all duration-300 hover-glow animate-pulse-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting Inquiry...
                  </>
                ) : (
                  'Submit AI Inquiry'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Enhanced Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-400 animate-pulse-glow">
            © 2024 aXtrLabs. Pioneering the future with intelligent AI solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
