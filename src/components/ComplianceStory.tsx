"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Shield, FileText, Eye, CheckCircle, Lock, Database, AlertTriangle } from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function ComplianceStory() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [activeStep, setActiveStep] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  // Change active step based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const stepIndex = Math.floor(progress * 4);
      setActiveStep(Math.min(stepIndex, 3));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Generate real-time timestamps in EDT
  const getCurrentTimestamp = (offsetSeconds: number = 0) => {
    const now = new Date();
    now.setSeconds(now.getSeconds() - offsetSeconds);
    
    // Format in EDT timezone
    const edtTime = now.toLocaleString("en-US", {
      timeZone: "America/New_York",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    
    // Convert to YYYY-MM-DD HH:MM:SS EDT format
    const [date, time] = edtTime.split(', ');
    const [month, day, year] = date.split('/');
    return `${year}-${month}-${day} ${time} EDT`;
  };

  const complianceSteps = [
    {
      title: "Data Ingestion",
      description: "Secure processing of patient data with HIPAA compliance",
      logs: [
        `${getCurrentTimestamp(16)} - Patient data received via FHIR R4`,
        `${getCurrentTimestamp(15)} - PHI encryption verified (AES-256)`,
        `${getCurrentTimestamp(14)} - Access control validated`,
        `${getCurrentTimestamp(13)} - Audit trail initiated`
      ],
      icon: Database,
      color: "blue"
    },
    {
      title: "AI Processing",
      description: "Explainable AI decisions with complete transparency",
      logs: [
        `${getCurrentTimestamp(12)} - NLP model initialized (v3.2.1)`,
        `${getCurrentTimestamp(11)} - Document analyzed: chest_pain_evaluation.pdf`,
        `${getCurrentTimestamp(10)} - Code suggestion: ICD-10 R06.02 (confidence: 98.5%)`,
        `${getCurrentTimestamp(9)} - Reasoning: Primary symptom mapping validated`
      ],
      icon: Eye,
      color: "green"
    },
    {
      title: "Validation & Review",
      description: "Multi-layer validation with human oversight capabilities",
      logs: [
        `${getCurrentTimestamp(8)} - Code validation rules applied`,
        `${getCurrentTimestamp(7)} - Cross-reference check completed`,
        `${getCurrentTimestamp(6)} - Quality score calculated: 96.2%`,
        `${getCurrentTimestamp(5)} - Manual review: Not required`
      ],
      icon: CheckCircle,
      color: "purple"
    },
    {
      title: "Audit Trail",
      description: "Complete documentation for regulatory compliance",
      logs: [
        `${getCurrentTimestamp(4)} - Decision pathway documented`,
        `${getCurrentTimestamp(3)} - Compliance check: SOC2, HIPAA ✓`,
        `${getCurrentTimestamp(2)} - Audit log sealed with blockchain hash`,
        `${getCurrentTimestamp(1)} - Ready for regulatory review`
      ],
      icon: FileText,
      color: "orange"
    }
  ];

  const colorClasses = {
    blue: "text-blue-600 bg-blue-100",
    green: "text-green-600 bg-green-100",
    purple: "text-purple-600 bg-purple-100",
    orange: "text-orange-600 bg-orange-100"
  };

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
            Complete Transparency & Compliance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every AI decision is traceable, explainable, and audit-ready from day one
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Sticky Navigation */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="space-y-4">
              {complianceSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = activeStep >= index;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className={`transition-all duration-500 ${
                      isActive ? 'scale-105' : 'scale-100 opacity-60'
                    }`}
                  >
                    <Card className={`p-6 border-0 cursor-pointer transition-all duration-300 ${
                      isActive 
                        ? 'shadow-lg bg-gradient-to-r from-blue-50 to-green-50' 
                        : 'hover:shadow-md'
                    }`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive 
                            ? colorClasses[step.color as keyof typeof colorClasses]
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        
                        <div>
                          <h3 className={`text-lg mb-1 transition-colors duration-300 ${
                            isActive ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {step.title}
                          </h3>
                          <p className="text-sm text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Compliance Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-4"
            >
              <h4 className="text-lg">Compliance Standards</h4>
              <div className="text-sm text-gray-600">
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Compliance certifications coming soon - Currently in foundation stage
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Live Audit Trail */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="p-6 bg-gray-900 text-green-400 border-0 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-lg">Live Audit Trail</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-400">Streaming</span>
                    </div>
                  </div>
                  
                  <div className="font-mono text-sm space-y-2 max-h-96 overflow-hidden">
                    {complianceSteps.map((step, stepIndex) => (
                      <div key={stepIndex}>
                        {step.logs.map((log, logIndex) => (
                          <motion.div
                            key={`${stepIndex}-${logIndex}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={
                              stepIndex <= activeStep
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0.3, x: 20 }
                            }
                            transition={{ 
                              delay: stepIndex <= activeStep ? logIndex * 0.1 : 0,
                              duration: 0.3 
                            }}
                            className={`transition-all duration-300 ${
                              stepIndex <= activeStep ? 'text-green-400' : 'text-gray-600'
                            }`}
                          >
                            {stepIndex <= activeStep && stepIndex === activeStep && logIndex === step.logs.length - 1 && (
                              <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1" />
                            )}
                            {log}
                          </motion.div>
                        ))}
                        {stepIndex < complianceSteps.length - 1 && stepIndex <= activeStep && (
                          <div className="text-gray-600 my-2">{'>'} Next step...</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Security Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: "End-to-End Encryption", desc: "AES-256 encryption", icon: Lock },
                { title: "Zero Trust Architecture", desc: "Continuous verification", icon: Shield },
                { title: "Audit Trail", desc: "Immutable record keeping", icon: FileText },
                { title: "Real-time Monitoring", desc: "24/7 security oversight", icon: AlertTriangle }
              ].map((feature, index) => (
                <Card key={index} className="p-4 hover:shadow-lg transition-all duration-300">
                  <div className="space-y-2">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                    <h4 className="text-sm">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.desc}</p>
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComplianceStory;