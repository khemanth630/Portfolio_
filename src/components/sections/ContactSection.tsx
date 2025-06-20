import React, { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast({
        title: "EmailJS Configuration Error",
        description: "EmailJS environment variables are missing. Please check your .env file and restart the dev server.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          template_html: `
            <div style="max-width: 600px; margin: auto; background: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 0px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; text-align: center;">New Contact Request</h2>
              <p style="font-size: 16px;">Hello,</p>
              <p style="font-size: 16px;">You have received a new message via the Contact Us form.</p>
              
              <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #3498db;">
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Subject:</strong> ${formData.subject}</p>
                <p><strong>Message:</strong></p>
                <p style="color: #555; font-style: italic;">${formData.message}</p>
              </div>
              
              <p style="font-size: 14px; margin-top: 20px;">Please respond to this message at your earliest convenience.</p>
              <p style="text-align: center; margin-top: 30px;">
                <a href="mailto:${formData.email}" style="background-color: #3498db; color: white; padding: 10px 15px; text-decoration: none; border-radius: 5px;">Reply Now</a>
              </p>
              <p style="font-size: 12px; color: #777; text-align: center; margin-top: 20px;">This email was sent using EmailJS.</p>
            </div>
          `
        },
        publicKey
      );

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // console.log(
  //   "SERVICE_ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID,
  //   "TEMPLATE_ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  //   "PUBLIC_KEY:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  // );

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Contact Me</h2>
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Contact Information Cards - At the top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="backdrop-blur-sm overflow-hidden border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg mb-1 text-foreground">Email</h3>
                  <p className="text-muted-foreground break-words">hemanth630209@gmail.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-sm overflow-hidden border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg mb-1 text-foreground">Location</h3>
                  <p className="text-muted-foreground">Bengaluru,karnataka, India</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-sm overflow-hidden border-border hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-lg mb-1 text-foreground">Call</h3>
                  <p className="text-muted-foreground">+91 9490509324</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Form - Bigger size */}
        <Card className="backdrop-blur-sm h-full border-border hover:border-primary/30 transition-all duration-300">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Your Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="border-border focus-visible:ring-primary h-12"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Your Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="border-border focus-visible:ring-primary h-12"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="border-border focus-visible:ring-primary h-12"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  className="min-h-[160px] border-border focus-visible:ring-primary"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 h-auto text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="-ml-1 mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Success Dialog */}
      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">Message Sent Successfully!</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Thank you for contacting me. I will get back to you as soon as possible.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center">
            <AlertDialogAction onClick={() => setShowSuccess(false)}>
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
};
export default ContactSection;
