"use client";

import { Card } from "./ui/card";
import { motion, useInView } from "framer-motion";
import { Code, TrendingDown, Shield, FileText, Zap, Bot } from "lucide-react";
import { useRef } from "react";

export function AnimatedUSPs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const usps = [
    {
      icon: Code,
      title: "Autonomous Medical Coding",
      description: "AI agents automatically extract and code medical encounters with 100% accuracy, reducing manual coding time by 99.5%.",
      color: "blue",
      metric: "100%",
      metricLabel: "Accuracy"
    },
    {
      icon: TrendingDown,
      title: "Denial Prediction & Appeals",
      description: "Predict claim denials before submission and automatically generate appeals with supporting documentation.",
      color: "red",
      metric: "95%",
      metricLabel: "Denial Reduction"
    },
    {
      icon: Shield,
      title: "Frictionless Prior Auth",
      description: "Automated prior authorization processing that reduces approval time from days to secs with real-time validation.",
      color: "green",
      metric: "10 secs",
      metricLabel: "Avg Time"
    },
    {
      icon: FileText,
      title: "Audit-Ready Explainability",
      description: "Complete audit trails with AI decision explanations, FHIR compliance, and regulatory documentation.",
      color: "purple",
      metric: "100%",
      metricLabel: "Compliant"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Core AI Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four powerful AI agents working together to transform your healthcare operations
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            const colorClasses = {
              blue: {
                icon: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
                accent: "text-blue-600",
                gradient: "from-blue-500 to-blue-600"
              },
              red: {
                icon: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
                accent: "text-red-600",
                gradient: "from-red-500 to-red-600"
              },
              green: {
                icon: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
                accent: "text-green-600",
                gradient: "from-green-500 to-green-600"
              },
              purple: {
                icon: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
                accent: "text-purple-600",
                gradient: "from-purple-500 to-purple-600"
              }
            };
            
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group p-6 h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[usp.color as keyof typeof colorClasses].gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${colorClasses[usp.color as keyof typeof colorClasses].icon}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      
                      {/* Floating metric */}
                      <div className="text-right">
                        <div className={`text-2xl group-hover:scale-110 transition-transform duration-300 ${colorClasses[usp.color as keyof typeof colorClasses].accent}`}>
                          {usp.metric}
                        </div>
                        <div className="text-xs text-gray-500">{usp.metricLabel}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg group-hover:text-gray-900 transition-colors duration-300">
                        {usp.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {usp.description}
                      </p>
                    </div>

                    {/* AI indicator */}
                    <div className="flex items-center gap-2 pt-2">
                      <Bot className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-400">AI Powered</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// Default export for lazy loading
export default AnimatedUSPs;