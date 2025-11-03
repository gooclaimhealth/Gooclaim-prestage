"use client";

import { Card } from "./ui/card";
import { motion, useInView } from "framer-motion";
import { 
  UserCheck, 
  Code, 
  Shield, 
  AlertTriangle, 
  FileText, 
  CreditCard,
  Lock,
  Bot
} from "lucide-react";
import { useRef } from "react";

export function AgentsShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const agents = [
    {
      icon: UserCheck,
      title: "Intake Agent",
      description: "Verifies all patient, payer, and coverage data automatically to ensure accuracy from the start.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Coding Agent",
      description: "Applies accurate ICD/CPT codes using advanced medical NLP and machine learning.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Prior Auth Agent",
      description: "Automates authorization submission and tracking with intelligent payer routing.",
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: AlertTriangle,
      title: "Denial Agent",
      description: "Predicts claim rejections before they happen using predictive analytics.",
      color: "orange",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: FileText,
      title: "Appeal Agent",
      description: "Creates smart payer-specific appeal letters and automatically resubmits claims.",
      color: "red",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: CreditCard,
      title: "Billing Agent",
      description: "Compiles clean claims and ensures proper payment submission to maximize revenue.",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Lock,
      title: "Audit Agent",
      description: "Records an immutable log of every transaction with secure WORM storage for compliance.",
      color: "gray",
      gradient: "from-gray-500 to-gray-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const colorClasses: Record<string, { icon: string; accent: string }> = {
    blue: {
      icon: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
      accent: "text-blue-600"
    },
    purple: {
      icon: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
      accent: "text-purple-600"
    },
    green: {
      icon: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
      accent: "text-green-600"
    },
    orange: {
      icon: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
      accent: "text-orange-600"
    },
    red: {
      icon: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
      accent: "text-red-600"
    },
    indigo: {
      icon: "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white",
      accent: "text-indigo-600"
    },
    gray: {
      icon: "bg-gray-100 text-gray-600 group-hover:bg-gray-600 group-hover:text-white",
      accent: "text-gray-600"
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
      />
      <motion.div 
        animate={{ 
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-xl"
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            <Bot className="w-4 h-4" />
            <span className="text-sm">AI Agent Ecosystem</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
            Meet Your AI Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Seven specialized AI agents working together to automate your entire healthcare revenue cycle — 
            from patient intake to final payment.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {agents.map((agent, index) => {
            const Icon = agent.icon;
            
            return (
              <motion.div key={index} variants={cardVariants}>
                <Card className="group p-8 h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${colorClasses[agent.color].icon}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      {/* AI Badge */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-colors">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-gray-600">Active</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className={`text-xl group-hover:${colorClasses[agent.color].accent} transition-colors duration-300`}>
                        {agent.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {agent.description}
                      </p>
                    </div>

                    {/* AI indicator */}
                    <div className="flex items-center gap-2 pt-2 border-t border-gray-100">
                      <Bot className="w-4 h-4 text-gray-400" />
                      <span className="text-xs text-gray-400">Autonomous AI Agent</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            All agents work together seamlessly, ensuring complete automation and accuracy across your entire revenue cycle.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// Default export for lazy loading
export default AgentsShowcase;
