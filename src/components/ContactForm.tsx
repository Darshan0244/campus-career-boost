
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Send, User, Mail, GraduationCap, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    query: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`PlacementPrep Query from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCollege: ${formData.college}\n\nQuery:\n${formData.query}`
      );
      const mailtoLink = `mailto:darshand4893@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        college: '',
        query: ''
      });

      toast({
        title: "Email client opened!",
        description: "Your default email client should now be open with the pre-filled message.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="glass border-white/20 bg-gradient-to-br from-white/10 to-white/5">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold gradient-text flex items-center justify-center gap-2">
            <Send className="w-6 h-6" />
            Get in Touch
          </CardTitle>
          <CardDescription className="text-gray-300">
            Have suggestions, feedback, or questions? We'd love to hear from you!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white flex items-center gap-2">
                  <User className="w-4 h-4 text-neon-blue" />
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="glass-light border-white/20 text-white placeholder:text-gray-400 focus:border-neon-blue"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-white flex items-center gap-2">
                  <Mail className="w-4 h-4 text-neon-blue" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="glass-light border-white/20 text-white placeholder:text-gray-400 focus:border-neon-blue"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="college" className="text-white flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-neon-purple" />
                College/University
              </Label>
              <Input
                id="college"
                name="college"
                value={formData.college}
                onChange={handleChange}
                placeholder="Your college or university name"
                required
                className="glass-light border-white/20 text-white placeholder:text-gray-400 focus:border-neon-purple"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="query" className="text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-neon-green" />
                Your Message
              </Label>
              <Textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Tell us about your query, feedback, feature request, or any suggestions..."
                rows={4}
                required
                className="glass-light border-white/20 text-white placeholder:text-gray-400 focus:border-neon-green resize-none"
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-neon-purple to-neon-blue text-white font-medium py-3 transition-all duration-300 ${!isSubmitting ? 'hover:from-neon-purple/80 hover:to-neon-blue/80 hover:scale-105' : ''}`}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Opening Email Client...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </div>
              )}
            </Button>
          </form>
          
          <div className="mt-6 p-4 glass-light rounded-lg border border-white/10">
            <p className="text-sm text-gray-300 text-center">
              <span className="text-neon-blue font-medium">Quick Response:</span> Queries will be responded within 1-2 days
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
