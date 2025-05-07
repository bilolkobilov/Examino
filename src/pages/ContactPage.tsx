import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Github, Mail, Clock, MapPin, ArrowRight, Check, ExternalLink } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [hoverCard, setHoverCard] = useState<number | null>(null);
  
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      description: "Get a response within 24 hours",
      link: "mailto:bilolkobilov1@gmail.com",
      linkText: "bilolkobilov1@gmail.com"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "Check our repositories and projects",
      link: "https://github.com/bilolkobilov",
      linkText: "github.com/bilolkobilov"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      description: "Monday to Friday, 9:00 AM to 6:00 PM",
      link: null,
      linkText: null
    }
  ];

  const assistanceCategories = [
    "Questions about course content",
    "Feature requests and suggestions",
    "Issue reporting and bug fixes",
    "Research and collaboration opportunities",
    "Professional consultations",
    "Educational resources"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative text-center mb-16 md:mb-20 lg:mb-24">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
              <div className="w-64 h-64 rounded-full bg-exam-600 blur-3xl"></div>
            </div>
            
            <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-exam-900 mb-4">
              <span className="inline-block relative">
                Get in Touch
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-exam-600 rounded-full transform"></span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We're here to help with your questions, feedback, or collaboration opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16">
            <div className="lg:col-span-5 space-y-6">
              {contactMethods.map((method, index) => (
                <div 
                  key={index}
                  className="bg-white border border-exam-100 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
                  onMouseEnter={() => setHoverCard(index)}
                  onMouseLeave={() => setHoverCard(null)}
                >
                  <div className="flex items-start">
                    <div className={`p-3 rounded-xl ${hoverCard === index ? 'bg-exam-600 text-white' : 'bg-exam-50 text-exam-600'} transition-colors duration-300`}>
                      {method.icon}
                    </div>
                    
                    <div className="ml-5">
                      <h3 className="text-lg font-semibold text-exam-900 mb-2">{method.title}</h3>
                      <p className="text-gray-600 mb-3">{method.description}</p>
                      
                      {method.link && (
                        <a 
                          href={method.link} 
                          target={method.link.startsWith('http') ? "_blank" : undefined}
                          rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="group inline-flex items-center text-exam-600 hover:text-exam-700 font-medium transition-colors"
                        >
                          {method.linkText}
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white border border-exam-100 rounded-2xl p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start">
                  <div className="p-3 bg-exam-50 text-exam-600 rounded-xl">
                    <MapPin className="h-6 w-6" />
                  </div>
                  
                  <div className="ml-5">
                    <h3 className="text-lg font-semibold text-exam-900 mb-2">Location</h3>
                    <p className="text-gray-600">Tashkent, Uzbekistan</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white border border-exam-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-xl overflow-hidden">
                <div className="bg-gradient-to-r from-exam-500 to-exam-600 p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-2">How Can We Help You?</h2>
                  <p className="text-exam-50">
                    Our team is ready to assist with any questions or inquiries
                  </p>
                </div>
                
                <div className="p-6 md:p-8">
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-exam-900 mb-4">Our Services</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {assistanceCategories.map((category, index) => (
                        <div key={index} className="flex items-center p-3 rounded-lg bg-gray-50 hover:bg-exam-50 transition-colors">
                          <Check className="h-5 w-5 text-exam-600 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-exam-900 mb-3">Quick Response</h3>
                      <p className="text-gray-600">
                        We aim to respond to all inquiries within 24 hours during business days. 
                        For urgent matters, please indicate in your email subject line.
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <a
                          href="mailto:bilolkobilov1@gmail.com"
                          className="flex items-center justify-center px-6 py-3 bg-exam-600 text-white font-medium rounded-xl hover:bg-exam-700 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <Mail className="h-5 w-5 mr-2" />
                          Send Email
                        </a>
                        <a
                          href="https://github.com/bilolkobilov"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-medium rounded-xl hover:bg-gray-900 transition-all duration-300 shadow-sm hover:shadow-md"
                        >
                          <Github className="h-5 w-5 mr-2" />
                          GitHub Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;