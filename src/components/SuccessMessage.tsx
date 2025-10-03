
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface SuccessMessageProps {
  onSubmitAnother: () => void;
}

export const SuccessMessage = ({ onSubmitAnother }: SuccessMessageProps) => {
  return (
    <Card className="w-full max-w-md glass-dark card-highlight animate-pulse-glow">
      <CardContent className="p-8 text-center">
        <CheckCircle className="w-16 h-16 text-white mx-auto mb-4 animate-pulse-glow" />
        <h2 className="text-2xl font-bold text-white mb-2">Thank You!</h2>
        <p className="text-gray-300 mb-4">
          Your inquiry has been submitted successfully. Our AI experts will review your request and contact you soon.
        </p>
        <Button 
          onClick={onSubmitAnother}
          className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white font-semibold hover-glow"
        >
          Submit Another Inquiry
        </Button>
      </CardContent>
    </Card>
  );
};
