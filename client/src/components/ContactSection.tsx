import { contactInfo } from "../data/portfolioData";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          <span className="gradient-text">Get In Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="glassmorphism rounded-xl p-8">
            <h3 className="text-2xl font-space font-bold mb-6 text-cyan-400">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-400/20 text-cyan-400 mr-4">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-cyan-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-fuchsia-400/20 text-fuchsia-400 mr-4">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-fuchsia-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400/20 text-yellow-400 mr-4">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-1">Location</h4>
                  <p className="text-gray-300">{contactInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {contactInfo.socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-cyan-400 hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`${link.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="glassmorphism rounded-xl p-8">
            <h3 className="text-2xl font-space font-bold mb-6 text-fuchsia-400">Send Me a Message</h3>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value="5fa75b1d-6680-45d0-962b-32e1f7714798" />
              
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
                className="w-full py-3 rounded-lg bg-gradient-to-r from-fuchsia-400 to-purple-600 font-bold text-white hover:shadow-lg hover:shadow-fuchsia-400/50 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
