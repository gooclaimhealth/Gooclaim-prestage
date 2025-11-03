"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { 
  Mail, 
  Copy, 
  MapPin, 
  Send,
  MessageSquare,
  Building
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface ContactPageProps {
  onLogoClick: () => void;
  onFeaturesClick: () => void;
  onHowItWorksClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onPricingClick: () => void;
  onPrivacyPolicyClick: () => void;
  onDemoClick: () => void;
  currentPage?: string;
}

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    contact: "contact@gooclaim.com",
    action: "Send Email",
    type: "email"
  },
  {
    icon: Copy,
    title: "Phone Number",
    description: "Copy our phone number",
    contact: "+91 7762925373",
    action: "Copy Phone Number",
    type: "phone"
  }
];

const offices = [
  {
    city: "Bengaluru",
    address: "HSR Layout, Sector 7",
    region: "Karnataka 560102, India",
    isHeadquarters: true
  }
];

export function ContactPage({ 
  onLogoClick, 
  onFeaturesClick, 
  onHowItWorksClick,
  onAboutClick, 
  onContactClick, 
  onPricingClick, 
  onDemoClick,
  currentPage
}: ContactPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const orbVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 0.8, 0.6],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleContactAction = async (method: typeof contactMethods[0]) => {
    if (method.type === "email") {
      // Use the same mailto functionality as demo button
      onDemoClick();
    } else if (method.type === "phone") {
      try {
        await navigator.clipboard.writeText(method.contact);
        toast.success("Phone number copied successfully!");
      } catch (err) {
        // Fallback for browsers that don't support clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = method.contact;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          toast.success("Phone number copied successfully!");
        } catch (fallbackErr) {
          toast.error("Failed to copy phone number");
        }
        document.body.removeChild(textArea);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <Navigation 
        onLogoClick={onLogoClick}
        onFeaturesClick={onFeaturesClick}
        onHowItWorksClick={onHowItWorksClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
        onPricingClick={onPricingClick}
        onDemoClick={onDemoClick}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pt-32 pb-16"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <Badge variant="secondary" className="w-fit px-4 py-2 bg-blue-100 text-blue-700 border-blue-200 mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Contact Us
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Let's Talk About
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Your Healthcare AI Needs
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your healthcare operations? Our team is here to help you get started with GooClaim.
          </p>
        </motion.div>

        {/* Contact Methods */}
        <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <Card key={index} className="p-6 text-center bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <method.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              <h3 className="text-lg mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{method.description}</p>
              <p className="text-gray-900 mb-4">{method.contact}</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  if (method.type === "email") {
                    const subject = encodeURIComponent("Inquiry about GooClaim Healthcare AI Platform");
                    const body = encodeURIComponent("Hello GooClaim team,\n\nI am interested in learning more about your healthcare AI automation platform. Please provide me with more information about:\n\n• Medical coding automation\n• Prior authorization validation\n• Denial prediction\n• Patient intake processing\n\nI would like to schedule a demo to see how GooClaim can help transform our healthcare operations.\n\nThank you,");
                    window.open(`mailto:${method.contact}?subject=${subject}&body=${body}`, '_blank');
                  } else {
                    handleContactAction(method);
                  }
                }}
              >
                {method.action}
              </Button>
            </Card>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="mb-20">
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-white border-0 shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Send us a Message</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have a specific question or want to discuss your healthcare automation needs? 
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </div>
            
            <form className="space-y-6 max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">First Name</label>
                  <Input placeholder="John" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm mb-2">Last Name</label>
                  <Input placeholder="Doe" className="h-12" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2">Work Email</label>
                <Input type="email" placeholder="john.doe@hospital.com" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Organization</label>
                <Input placeholder="Your Healthcare Organization" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm mb-2">Phone Number</label>
                <Input type="tel" placeholder="+91 7762925373" className="h-12" />
              </div>
              
              <div>
                <label className="block text-sm mb-2">How can we help?</label>
                <Textarea 
                  placeholder="Tell us about your healthcare automation challenges and what you'd like to achieve with GooClaim..."
                  rows={6}
                  className="resize-none"
                />
              </div>
              
              <Button className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We'll respond within 24 hours • All communications are HIPAA compliant
              </p>
            </form>
          </Card>
        </motion.div>

        {/* Office Location */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Office</h2>
            <p className="text-gray-600">Visit us at our headquarters or schedule a virtual meeting</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="relative overflow-hidden p-8 lg:p-12 bg-white border-0 shadow-lg">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div
                    variants={orbVariants}
                    animate="animate"
                    className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-30"
                  />
                  <motion.div
                    variants={orbVariants}
                    animate="animate"
                    style={{ animationDelay: "1s" }}
                    className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full opacity-30"
                  />
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-16 right-20 w-4 h-4 bg-blue-400 rounded-full opacity-40"
                  />
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: "2s" }}
                    className="absolute bottom-16 left-20 w-3 h-3 bg-green-400 rounded-full opacity-40"
                  />
                </div>

                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                  {/* Location Info */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      {office.isHeadquarters && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                        >
                          <Badge className="w-fit bg-blue-100 text-blue-700 px-4 py-2">
                            🏢 Headquarters
                          </Badge>
                        </motion.div>
                      )}
                      <div className="flex items-center gap-2 text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">Primary Location</span>
                      </div>
                    </div>
                    
                    <motion.h3 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.6 }}
                      className="text-2xl mb-4"
                    >
                      {office.city}, India
                    </motion.h3>
                    
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.9, duration: 0.6 }}
                      className="space-y-3 mb-6"
                    >
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-gray-900">{office.address}</p>
                          <p className="text-gray-600">{office.region}</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.1, duration: 0.6 }}
                      className="grid sm:grid-cols-2 gap-4"
                    >
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Copy className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="text-gray-900">+91 7762925373</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg pt-[10px] pr-[12px] pb-[10px] pl-[8px]">
                        <Mail className="w-5 h-5 text-green-600" />
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="text-gray-900">contact@gooclaim.com</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Animated Visual Element */}
                  <div className="text-center lg:text-left">
                    <div className="relative bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                      <motion.div
                        variants={floatingVariants}
                        animate="animate"
                        className="flex justify-center lg:justify-start mb-6"
                      >
                        <div className="relative">
                          <Building className="w-16 h-16 text-blue-600" />
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="absolute -inset-2 bg-blue-200 rounded-full opacity-30 -z-10"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.h4 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.6 }}
                        className="text-xl mb-3 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"
                      >
                        Innovation Hub
                      </motion.h4>
                      
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                        className="text-gray-600 text-sm mb-4"
                      >
                        Where healthcare AI meets cutting-edge technology. Our team is dedicated to transforming healthcare operations through intelligent automation.
                      </motion.p>
                      
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.6 }}
                        className="flex justify-center lg:justify-start gap-2"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: "0.5s"}}></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: "1s"}}></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="p-12 bg-gradient-to-br from-blue-600 to-green-600 text-white border-0">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl">Prefer a Live Demo?</h2>
              <p className="text-blue-100 text-lg">
                See GooClaim in action with a personalized demonstration tailored to your healthcare organization's needs.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
                onClick={onDemoClick}
              >
                <Building className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
              <p className="text-blue-100 text-sm">
                30-minute demo • No commitment required • Immediate access
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ContactPage;