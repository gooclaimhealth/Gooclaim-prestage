"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { 
  Check, 
  Star, 
  Shield, 
  Zap, 
  Brain, 
  FileCheck,
  Clock,
  HeadphonesIcon,
  Building,
  Stethoscope,
  Send,
  Mail,
  User,
  Building2
} from "lucide-react";
import { useState } from "react";

interface PricingPageProps {
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

const allFeatures = [
  "Scalable claims processing (500 to unlimited)",
  "Advanced AI coding & prior authorization",
  "Priority phone & email support",
  "Advanced analytics dashboard", 
  "Denial prediction & management",
  "Flexible user account limits",
  "Custom integrations & workflows",
  "SOC2 + HIPAA compliance",
  "Real-time processing",
  "Dedicated success manager (Enterprise)",
  "White-label options (Enterprise)",
  "99.9% uptime SLA",
  "Custom model training",
  "Multi-facility support",
  "Advanced API access"
];

const additionalFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "HIPAA, SOC2, and FHIR compliant with end-to-end encryption"
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence", 
    description: "Advanced machine learning models trained on healthcare data"
  },
  {
    icon: Clock,
    title: "Real-time Processing",
    description: "Process claims and authorizations in minutes, not days"
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description: "Healthcare AI specialists available when you need them"
  }
];

const faqs = [
  {
    question: "How quickly can we implement GooClaim?",
    answer: "Most implementations take 2-4 weeks depending on your current systems. Our team handles the entire setup process."
  },
  {
    question: "Is GooClaim HIPAA compliant?",
    answer: "Yes, GooClaim is fully HIPAA compliant with SOC2 certification and enterprise-grade security measures."
  },
  {
    question: "Can GooClaim integrate with our existing EHR?",
    answer: "GooClaim integrates with all major EHR systems including Epic, Cerner, and AllScripts through secure APIs."
  },
  {
    question: "What kind of ROI can we expect?",
    answer: "Most customers see 60-80% reduction in manual processing time and 40-70% improvement in claim approval rates within 3 months."
  }
];

interface ContactForm {
  name: string;
  email: string;
  company: string;
}

export function PricingPage({ 
  onLogoClick, 
  onFeaturesClick, 
  onHowItWorksClick,
  onAboutClick, 
  onContactClick, 
  onPricingClick, 
  onDemoClick,
  currentPage
}: PricingPageProps) {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    company: ""
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) return;

    setSubmitting(true);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-03540c48/demo-request`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company: form.company || '',
            phone: '',
            message: 'Pricing inquiry from pricing page contact form'
          })
        }
      );

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success(`Thank you! We'll send custom pricing details to ${form.email}`);
        setForm({ name: "", email: "", company: "" });
      } else {
        console.error('Pricing inquiry submission error:', result);
        toast.error(result.error || 'Failed to submit pricing inquiry');
      }
    } catch (error) {
      console.error('Error submitting pricing inquiry:', error);
      toast.error('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

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
            <Stethoscope className="w-4 h-4 mr-2" />
            Healthcare AI Pricing
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Get Custom Pricing for
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Your Healthcare AI Solution
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your healthcare operations with AI-powered automation. 
            Fill out the form below to receive personalized pricing based on your organization's needs.
          </p>
        </motion.div>

        {/* Single Full-Width Pricing Card */}
        <motion.div variants={itemVariants} className="mb-20">
          <Card className="max-w-5xl mx-auto p-8 lg:p-12 bg-gradient-to-br from-white to-blue-50 border-blue-200 shadow-2xl">
            <div className="text-center mb-8">
              <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 mb-4">
                <Star className="w-4 h-4 mr-2" />
                Complete Healthcare AI Platform
              </Badge>
              <h2 className="text-3xl lg:text-4xl mb-4">GooClaim Enterprise Solution</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Tailored AI automation for healthcare organizations of all sizes - from small practices to large enterprise systems
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl mb-4">Get Your Custom Quote</h3>
                  <p className="text-gray-600 mb-6">
                    Tell us about your organization and we'll provide personalized pricing and implementation details.
                  </p>
                </div>

                <div className="space-y-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Your Full Name *"
                      className="pl-12 h-12 text-lg"
                      value={form.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Work Email Address *"
                      className="pl-12 h-12 text-lg"
                      value={form.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      placeholder="Healthcare Organization (Optional)"
                      className="pl-12 h-12 text-lg"
                      value={form.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>

                  <Button 
                    className="w-full h-12 text-lg bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg"
                    onClick={handleSubmit}
                    disabled={!form.name || !form.email || submitting}
                  >
                    {submitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending Request...
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Get Custom Pricing
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    No commitment required • Response within 24 hours • HIPAA compliant
                  </p>
                </div>
              </div>

              {/* Features & Metrics */}
              <div className="space-y-6">
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl text-green-600 mb-1">Around 2 mins</div>
                    <div className="text-sm text-gray-500">Estimated Processing</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl text-purple-600 mb-1">97-99%</div>
                    <div className="text-sm text-gray-500">Projected Time Saved</div>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <h4 className="text-lg mb-4">What's Included:</h4>
                  <div className="grid gap-3 max-h-80 overflow-y-auto pr-2">
                    {allFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Additional Features */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Why Choose GooClaim?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built specifically for healthcare with enterprise-grade security and compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Get answers to common questions about GooClaim pricing and implementation</p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="p-12 bg-gradient-to-br from-blue-600 to-green-600 text-white border-0">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl">Ready to Transform Your Healthcare Operations?</h2>
              <p className="text-blue-100 text-lg">
                Join hundreds of healthcare organizations already saving time and improving accuracy with GooClaim
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
                  onClick={onDemoClick}
                >
                  <Building className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-[rgba(21,93,252,1)] hover:bg-white/10 px-8 py-4 bg-[rgba(255,250,250,1)]"
                  onClick={onDemoClick}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </Button>
              </div>
              <p className="text-blue-100 text-sm">
                30-day free trial • No credit card required • HIPAA compliant setup
              </p>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default PricingPage;