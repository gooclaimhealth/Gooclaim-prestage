"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, useInView } from "framer-motion";
import { Users, Bot, AlertTriangle, FileCheck, BarChart3, ArrowRight } from "lucide-react";
import { useRef } from "react";

export function InteractiveTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const timelineSteps = [
    {
      icon: Users,
      title: "Patient Intake",
      description: "Patient arrives, documentation begins",
      ui: {
        title: "Patient Registration",
        fields: ["John Smith", "DOB: 01/15/1980", "Insurance: BlueCross", "Chief Complaint: Chest pain"]
      },
      color: "blue"
    },
    {
      icon: Bot,
      title: "Autonomous Medical Coding",
      description: "AI extracts data and generates billing codes",
      ui: {
        title: "AI Coding Engine",
        fields: ["ICD-10: R06.02", "CPT: 99213", "Confidence: 98.5%", "Review: Not Required"]
      },
      color: "green"
    },
    {
      icon: AlertTriangle,
      title: "Denial Prediction",
      description: "Real-time validation and risk assessment",
      ui: {
        title: "Risk Analysis",
        fields: ["Approval Probability: 94%", "Risk Factors: None", "Pre-auth: Not Required", "Status: Ready to Submit"]
      },
      color: "yellow"
    },
    {
      icon: FileCheck,
      title: "Claim Submission",
      description: "Claim submission to clearing house ",
      ui: {
        title: "Claim Status",
        fields: ["Claim ID: CLM-2024-1247", "Submitted: 2min ago", "Status: Processing", "Expected: 24-48hrs"]
      },
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Performance tracking and optimization",
      ui: {
        title: "Dashboard Metrics",
        fields: ["Claims Today: 47", "Success Rate: 96.2%", "Avg Time: 12min", "Revenue: $127,432"]
      },
      color: "indigo"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Complete Workflow Automation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI agents handle the entire insurance operations pipeline autonomously
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 via-green-300 via-yellow-300 via-purple-300 to-indigo-300" />
            
            <div className="grid grid-cols-5 gap-6">
              {timelineSteps.map((step, index) => {
                const Icon = step.icon;
                const colorClasses = {
                  blue: "bg-blue-100 text-blue-600 border-blue-200",
                  green: "bg-green-100 text-green-600 border-green-200",
                  yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
                  purple: "bg-purple-100 text-purple-600 border-purple-200",
                  indigo: "bg-indigo-100 text-indigo-600 border-indigo-200"
                };
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="relative"
                  >
                    {/* Step Number */}
                    <div className={`w-10 h-10 rounded-full ${colorClasses[step.color as keyof typeof colorClasses]} border-2 flex items-center justify-center mx-auto mb-6 relative z-10 bg-white`}>
                      <span className="text-sm">{index + 1}</span>
                    </div>
                    
                    {/* Step Card */}
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                      <div className="text-center mb-4">
                        <div className={`w-12 h-12 rounded-lg ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-3`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                      
                      {/* UI Mockup */}
                      <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                        <div className="text-xs text-gray-500 mb-2">{step.ui.title}</div>
                        {step.ui.fields.map((field, fieldIndex) => (
                          <motion.div
                            key={fieldIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                            transition={{ delay: index * 0.2 + fieldIndex * 0.1 + 0.5 }}
                            className="text-xs bg-white rounded px-2 py-1 border"
                          >
                            {field}
                          </motion.div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineSteps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 border-2 border-blue-200 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  {index < timelineSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 mt-4" />
                  )}
                </div>
                
                <Card className="flex-1 p-4">
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                  
                  <div className="bg-gray-50 rounded-lg p-3 space-y-1">
                    <div className="text-xs text-gray-500 mb-2">{step.ui.title}</div>
                    {step.ui.fields.map((field, fieldIndex) => (
                      <div key={fieldIndex} className="text-xs bg-white rounded px-2 py-1 border">
                        {field}
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            ⚡ End-to-end automation in 2 minutes 
          </Badge>
          <p className="text-gray-600 mb-6">
            See how Gooclaim transforms your entire workflow from patient encounter to payment
          </p>
        </motion.div>
      </div>
    </section>
  );
}