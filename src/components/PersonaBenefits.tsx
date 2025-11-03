"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, useInView } from "framer-motion";
import { Building2, Users, Shield, TrendingUp, Clock, DollarSign, CheckCircle, Star, Target, Zap } from "lucide-react";
import { useRef, useState } from "react";

export function PersonaBenefits() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [activePersona, setActivePersona] = useState(0);

  const personas = [
    {
      icon: Building2,
      title: "For Insurance Companies",
      subtitle: "Streamline claim processing with intelligent automation",
      benefits: [
        {
          icon: TrendingUp,
          title: "Automated Claim Review",
          description: "Reduce manual review workload with AI-powered claim analysis"
        },
        {
          icon: Target,
          title: "Intelligent Triage",
          description: "Smart claim prioritization and routing for efficient processing"
        },
        {
          icon: DollarSign,
          title: "Cost Reduction",
          description: "Lower operational costs through automated processing workflows"
        },
        {
          icon: Shield,
          title: "Risk Management",
          description: "Advanced pattern recognition to identify potential issues early"
        }
      ],
      testimonial: {
        quote: "Coming soon - Building the future of insurance automation.",
        author: "GooClaim Team",
        title: "Product Development"
      },
      color: "blue"
    },
    {
      icon: Users,
      title: "For Healthcare Providers",
      subtitle: "Let doctors focus on care, not paperwork",
      benefits: [
        {
          icon: Clock,
          title: "Rapid Processing",
          description: "Quick encounter coding and claim submission automation"
        },
        {
          icon: Star,
          title: "EHR Integration",
          description: "Seamless integration with your existing healthcare systems"
        },
        {
          icon: TrendingUp,
          title: "Reduced Admin Burden",
          description: "Free up staff time by automating repetitive administrative tasks"
        },
        {
          icon: CheckCircle,
          title: "Care-Focused",
          description: "Automation designed to support better patient care delivery"
        }
      ],
      testimonial: {
        quote: "Coming soon - Empowering healthcare providers with AI.",
        author: "GooClaim Team",
        title: "Product Development"
      },
      color: "green"
    },
    {
      icon: Shield,
      title: "For Operations Teams",
      subtitle: "Scale workflows without adding headcount",
      benefits: [
        {
          icon: Zap,
          title: "3x Faster Turnaround",
          description: "MVP shows significant speed improvements in internal trials"
        },
        {
          icon: CheckCircle,
          title: "Built-in Audit Trails",
          description: "Feedback loops and compliance documentation ready"
        },
        {
          icon: TrendingUp,
          title: "Headcount-Free Scaling",
          description: "Early workflows handle increased volume efficiently"
        },
        {
          icon: Shield,
          title: "Compliance-First Design",
          description: "Audit trails and process documentation built-in"
        }
      ],
      testimonial: {
        quote: "No new hires. Just better throughput.",
        author: "Early Adopter",
        title: "Operations Manager"
      },
      color: "purple"
    }
  ];

  const colorClasses = {
    blue: {
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      text: "text-blue-600",
      icon: "bg-blue-100 text-blue-600"
    },
    green: {
      gradient: "from-green-500 to-green-600",
      bg: "bg-green-50",
      text: "text-green-600",
      icon: "bg-green-100 text-green-600"
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
      text: "text-purple-600",
      icon: "bg-purple-100 text-purple-600"
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="w-fit px-4 py-2 bg-blue-100 text-blue-700 border-blue-200 mb-6">
            <Users className="w-4 h-4 mr-2" />
            Early Results
          </Badge>
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Built for Every Healthcare Stakeholder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Early pilot results show promising benefits across insurance companies, healthcare providers, and operations teams
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Persona Selector */}
          <div className="space-y-6">
            {personas.map((persona, index) => {
              const Icon = persona.icon;
              const isActive = activePersona === index;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-105' : 'scale-100 hover:scale-102'
                  }`}
                  onMouseEnter={() => setActivePersona(index)}
                >
                  <Card className={`p-6 border-0 transition-all duration-300 hover:shadow-xl ${
                    isActive 
                      ? `bg-gradient-to-r ${colorClasses[persona.color as keyof typeof colorClasses].gradient} text-white shadow-2xl` 
                      : 'bg-white/80 backdrop-blur-sm hover:bg-white shadow-md hover:shadow-lg'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive ? 'bg-white/20' : colorClasses[persona.color as keyof typeof colorClasses].icon
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      <div>
                        <h3 className={`text-xl mb-1 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-900'}`}>{persona.title}</h3>
                        <p className={`text-sm transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-gray-600'}`}>
                          {persona.subtitle}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side - Benefits Display */}
          <div className="relative">
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Benefits Grid */}
              <div className="grid grid-cols-2 gap-4">
                {personas[activePersona].benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  
                  return (
                    <motion.div
                      key={`${activePersona}-${index}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Card className="p-6 bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="space-y-3">
                          <Icon className={`w-8 h-8 ${colorClasses[personas[activePersona].color as keyof typeof colorClasses].text}`} />
                          <div>
                            <h4 className="text-lg mb-2 text-gray-900">{benefit.title}</h4>
                            <p className="text-sm text-gray-600">{benefit.description}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-gray-200 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
                        Pilot Feedback
                      </Badge>
                    </div>
                    <div>
                      <blockquote className="text-lg mb-3 text-gray-900">
                        "{personas[activePersona].testimonial.quote}"
                      </blockquote>
                      <cite className="text-gray-600 text-sm">
                        — {personas[activePersona].testimonial.author}, {personas[activePersona].testimonial.title}
                      </cite>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {personas.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                activePersona === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              onMouseEnter={() => setActivePersona(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PersonaBenefits;