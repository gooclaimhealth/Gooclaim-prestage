"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Bot, Zap, Shield } from "lucide-react";

export function WhatIsGooClaim() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
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
                <span className="text-sm text-blue-700">About GooClaim</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                What is GooClaim?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              GooClaim is an AI-powered healthcare automation platform that handles your entire revenue cycle management—from patient check-in to final payment—using intelligent agents.
            </p>
          </div>

          {/* Core Concept Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Bot,
                title: "AI Agent Workforce",
                description: "Seven specialized AI agents work together, each handling a specific part of your revenue cycle with precision and consistency.",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                icon: Zap,
                title: "Autonomous Operation",
                description: "Once set up, GooClaim runs continuously without human intervention, processing claims, handling denials, and managing appeals automatically.",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                icon: Shield,
                title: "Complete Transparency",
                description: "Every decision is explainable and traceable. Full audit trails ensure compliance and give you complete visibility into every action.",
                gradient: "from-green-500 to-green-600"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="relative group">
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative p-8 rounded-2xl border border-gray-200 bg-white h-full transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-lg">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
                <span className="text-blue-600">GooClaim transforms</span> complex, manual healthcare administrative workflows into{" "}
                <span className="text-green-600">streamlined, automated processes</span>—freeing your team to focus on what matters most: patient care.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhatIsGooClaim;
