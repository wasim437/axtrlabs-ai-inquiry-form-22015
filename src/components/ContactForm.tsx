
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  description: string;
}

interface ContactFormProps {
  formData: FormData;
  handleInputChange: (field: string, value: string) => void;
}

export const ContactForm = ({ formData, handleInputChange }: ContactFormProps) => {
  return (
    <>
      {/* Personal Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white font-medium">
            Full Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="bg-black/30 border-gray-600 text-white placeholder:text-gray-500 focus:border-white hover-glow card-highlight"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white font-medium">
            Email Address <span className="text-red-400">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="bg-black/30 border-gray-600 text-white placeholder:text-gray-500 focus:border-white hover-glow card-highlight"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white font-medium">
            Phone Number <span className="text-red-400">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="bg-black/30 border-gray-600 text-white placeholder:text-gray-500 focus:border-white hover-glow card-highlight"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company" className="text-white font-medium">
            Company Name <span className="text-red-400">*</span>
          </Label>
          <Input
            id="company"
            type="text"
            placeholder="Enter your company name"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="bg-black/30 border-gray-600 text-white placeholder:text-gray-500 focus:border-white hover-glow card-highlight"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website" className="text-white font-medium">Website</Label>
        <Input
          id="website"
          type="url"
          placeholder="https://your-website.com"
          value={formData.website}
          onChange={(e) => handleInputChange('website', e.target.value)}
          className="bg-black/30 border-gray-600 text-white placeholder:text-gray-500 focus:border-white hover-glow card-highlight"
        />
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <Label htmlFor="description" className="text-white font-medium">
          Project Description
        </Label>
        <Textarea
          id="description"
          placeholder="Tell us about your AI project needs, goals, and requirements..."
          value={formData.description}
          onChange={(e) => handleInputChange('description', e.target.value)}
          className="bg-black/30 border-gray-600 text-white placeholder:text-gray-500 focus:border-white min-h-[120px] hover-glow card-highlight"
        />
      </div>
    </>
  );
};
