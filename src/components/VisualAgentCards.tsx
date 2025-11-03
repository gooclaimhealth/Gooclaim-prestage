"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { 
  UserCheck, 
  Code, 
  Shield, 
  AlertTriangle, 
  FileText, 
  CreditCard,
  Lock,
  ArrowRight
} from "lucide-react";

export function VisualAgentCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const agents = [
    {
      icon: UserCheck,
      name: "Intake Agent",
      tagline: "Validates Patient Data",
      emoji: "👤",
      whatItDoes: "Scans forms, verifies insurance, checks eligibility",
      result: "Clean, accurate patient information",
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      name: "Coding Agent",
      tagline: "Applies Medical Codes",
      emoji: "📋",
      whatItDoes: "Reads clinical notes, applies ICD-10/CPT codes",
      result: "Accurate billing codes in seconds",
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      name: "Prior Auth Agent",
      tagline: "Gets Approvals",
      emoji: "🛡️",
      whatItDoes: "Identifies requirements, submits requests, tracks status",
      result: "Authorizations without the wait",
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: AlertTriangle,
      name: "Denial Agent",
      tagline: "Predicts Problems",
      emoji: "🎯",
      whatItDoes: "Analyzes patterns, flags risks, suggests fixes",
      result: "Prevent denials before they happen",
      color: "orange",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: FileText,
      name: "Appeal Agent",
      tagline: "Handles Appeals",
      emoji: "📝",
      whatItDoes: "Creates appeal letters, includes evidence, resubmits",
      result: "Turn denials into approvals",
      color: "red",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: CreditCard,
      name: "Billing Agent",
      tagline: "Submits Claims",
      emoji: "💳",
      whatItDoes: "Compiles data, validates claims, submits to payers",
      result: "Clean claims, fast payment",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Lock,
      name: "Audit Agent",
      tagline: "Ensures Compliance",
      emoji: "🔒",
      whatItDoes: "Records all actions, maintains audit trails, generates reports",
      result: "Complete transparency & compliance",
      color: "gray",
      gradient: "from-gray-600 to-gray-700"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/20 to-green-50/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full border border-blue-200">
                <span className="text-sm text-blue-700">🤖 Meet Your AI Team</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                7 AI Agents, One Goal
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Each agent specializes in a different part of your revenue cycle—working together to automate everything
            </p>
          </div>

          {/* Agents Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {agents.slice(0, 6).map((agent, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl border-2 border-gray-200 p-6 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                  
                  <div className="relative">
                    {/* Icon + Emoji */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.gradient} flex items-center justify-center shadow-lg`}>
                        <span className="text-3xl">{agent.emoji}</span>
                      </div>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${agent.gradient} bg-opacity-10 flex items-center justify-center`}>
                        <agent.icon className={`w-5 h-5 text-${agent.color}-600`} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl mb-1">{agent.name}</h3>
                    <p className={`text-sm bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent mb-4`}>
                      {agent.tagline}
                    </p>

                    {/* What it does */}
                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-xs">⚙️</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{agent.whatItDoes}</p>
                      </div>
                      
                      <div className="flex gap-2">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="text-xs">✓</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-900">{agent.result}</p>
                      </div>
                    </div>

                    {/* Hover Arrow */}
                    <div className="mt-4 flex items-center gap-2 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Audit Agent - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.9 }}
            className="group"
          >
            <div className="relative bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-gray-300 transition-all duration-300 hover:shadow-2xl">
              <div className={`absolute inset-0 bg-gradient-to-br ${agents[6].gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
              
              <div className="relative flex items-start gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${agents[6].gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-4xl">{agents[6].emoji}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl mb-1">{agents[6].name}</h3>
                      <p className={`text-lg bg-gradient-to-r ${agents[6].gradient} bg-clip-text text-transparent`}>
                        {agents[6].tagline}
                      </p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${agents[6].gradient} bg-opacity-10 flex items-center justify-center`}>
                      <agents[6].icon className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-sm">⚙️</span>
                        </div>
                      </div>
                      <p className="text-gray-600">{agents[6].whatItDoes}</p>
                    </div>
                    
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                          <span className="text-sm">✓</span>
                        </div>
                      </div>
                      <p className="text-gray-900">{agents[6].result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-gray-600">
              These 7 agents work together as a <span className="text-blue-600">coordinated AI workforce</span>,{" "}
              handling your entire revenue cycle from start to finish.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default VisualAgentCards;
