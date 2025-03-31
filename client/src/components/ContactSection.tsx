import { useState, useRef } from "react";
import { contactInfo } from "../data/portfolioData";
import { useToast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Show loading animation
    setIsSubmitting(true);
    
    try {
      // Get form data
      const formData = new FormData(e.currentTarget);
      const formJson = Object.fromEntries(formData.entries());
      
      // Submit form using Web3Forms API
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await res.json();
      
      if (data.success) {
        // Show success animation
        setFormSubmitted(true);
        
        // Show success toast
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        
        // Reset form after 2 seconds
        setTimeout(() => {
          formRef.current?.reset();
          setIsSubmitting(false);
          setFormSubmitted(false);
        }, 2000);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      
      // Show error toast
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive"
      });
      
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 gap-10 max-w-3xl mx-auto">
          <div className="glassmorphism rounded-xl p-8 relative">
            <h3 className="text-2xl font-space font-bold mb-6 text-fuchsia-400">Send Me a Message</h3>
            
            {/* Success animation overlay */}
            {formSubmitted && (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-background/90 rounded-xl">
                <div className="success-checkmark">
                  <div className="check-icon">
                    <span className="icon-line line-tip"></span>
                    <span className="icon-line line-long"></span>
                    <div className="icon-circle"></div>
                    <div className="icon-fix"></div>
                  </div>
                </div>
                <p className="text-xl font-medium text-cyan-400 mt-4">Message Sent Successfully!</p>
              </div>
            )}
            
            <form 
              ref={formRef}
              onSubmit={handleSubmit} 
              className="space-y-6 relative"
            >
              <input type="hidden" name="access_key" value="5fa75b1d-6680-45d0-962b-32e1f7714798" />
              <input type="hidden" name="subject" value="New message from portfolio contact form" />
              <input type="hidden" name="from_name" value="Portfolio Website" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div>
                <label htmlFor="name" className="block text-lg mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full p-3 rounded-lg bg-muted border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-lg mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full p-3 rounded-lg bg-muted border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-lg mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  className="w-full p-3 rounded-lg bg-muted border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg relative overflow-hidden font-bold text-white transition-all duration-300 ${isSubmitting ? 'bg-gray-600' : 'bg-gradient-to-r from-fuchsia-400 to-purple-600 hover:shadow-lg hover:shadow-fuchsia-400/50'}`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="submit-spinner mr-2"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <span className="submit-btn-shine"></span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <Toaster />
    </section>
  );
};

export default ContactSection;
