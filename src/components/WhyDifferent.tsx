"use client";

import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { X, Check, Clock, Calendar, AlertTriangle, TrendingUp, FileText, Shield, Users, Brain, Zap, Moon, CheckCircle } from "lucide-react";
import { Card } from "./ui/card";

export function WhyDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnimating, setIsAnimating] = useState(false);
  const [manualComplete, setManualComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsAnimating(true);
      // Set greyscale after 5 seconds
      const timer = setTimeout(() => {
        setManualComplete(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const comparisons = [
    {
      aspect: "Processing Speed",
      icon: Zap,
      manual: "Hours to days per claim",
      gooclaim: "Minutes per claim, continuous operation",
      manualMetric: "8-24 hrs",
      gooclaimMetric: "5 min",
      color: "yellow"
    },
    {
      aspect: "Working Hours",
      icon: Moon,
      manual: "Limited to business hours",
      gooclaim: "24/7 automated processing",
      manualMetric: "8 hrs/day",
      gooclaimMetric: "24/7",
      color: "indigo"
    },
    {
      aspect: "Error Rate",
      icon: AlertTriangle,
      manual: "Human mistakes in data entry and coding",
      gooclaim: "Consistent accuracy with validation",
      manualMetric: "5-10%",
      gooclaimMetric: "<1%",
      color: "red"
    },
    {
      aspect: "Scalability",
      icon: TrendingUp,
      manual: "Requires hiring and training new staff",
      gooclaim: "Instantly scales to any volume",
      manualMetric: "Weeks",
      gooclaimMetric: "Instant",
      color: "purple"
    },
    {
      aspect: "Documentation",
      icon: FileText,
      manual: "Scattered notes and inconsistent records",
      gooclaim: "Complete audit trail for every action",
      manualMetric: "Partial",
      gooclaimMetric: "100%",
      color: "blue"
    },
    {
      aspect: "Denial Management",
      icon: Shield,
      manual: "Reactive—fix issues after denial",
      gooclaim: "Proactive—predict and prevent denials",
      manualMetric: "After",
      gooclaimMetric: "Before",
      color: "orange"
    },
    {
      aspect: "Staff Focus",
      icon: Users,
      manual: "Buried in administrative tasks",
      gooclaim: "Focused on patient care and complex cases",
      manualMetric: "Admin 80%",
      gooclaimMetric: "Care 80%",
      color: "pink"
    },
    {
      aspect: "Continuous Improvement",
      icon: Brain,
      manual: "Depends on training and experience",
      gooclaim: "AI learns from every claim processed",
      manualMetric: "Static",
      gooclaimMetric: "Learning",
      color: "green"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
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
                <span className="text-sm text-blue-700">The Difference</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                GooClaim vs Manual Processes
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              See how AI automation transforms every aspect of revenue cycle management compared to traditional manual workflows.
            </p>
          </div>

          {/* Side-by-Side Comparison */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Manual Process */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <Card className={`h-full p-8 bg-gradient-to-br from-red-50 to-red-100/50 border-red-200 relative overflow-hidden transition-all duration-1000 ${
                manualComplete ? 'grayscale' : ''
              }`}>
                {/* Border loading animation - flowing effect */}
                {isAnimating && !manualComplete && (
                  <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="98"
                        height="98"
                        fill="none"
                        stroke="rgb(252 165 165)"
                        strokeWidth="0.5"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                        rx="2"
                        style={{
                          animation: 'drawBorderSlow 8s linear forwards'
                        }}
                      />
                    </svg>
                  </div>
                )}
                
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl mb-2 text-gray-800">Manual Process</h3>
                  <div className="text-3xl text-red-600 mb-2">Slow & Error-Prone</div>
                  <p className="text-sm text-gray-600">Traditional workflow challenges</p>
                </div>

                {/* Comparison Features */}
                <div className="space-y-4 mb-6 relative z-10">
                  {comparisons.slice(0, 4).map((comparison, index) => {
                    const IconComponent = comparison.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isAnimating ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="bg-white/60 rounded-xl p-4 border border-red-200"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-5 h-5 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-sm text-gray-900">{comparison.aspect}</h4>
                              <div className="px-2 py-1 bg-red-100 rounded-full">
                                <span className="text-xs text-red-700">{comparison.manualMetric}</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">{comparison.manual}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>

            {/* GooClaim AI */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-green-100/50 border-green-200 relative overflow-hidden">
                {/* Border loading animation - continuous loop */}
                {isAnimating && (
                  <div className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none">
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="98"
                        height="98"
                        fill="none"
                        stroke="rgb(134 239 172)"
                        strokeWidth="0.5"
                        strokeDasharray="100"
                        strokeDashoffset="100"
                        rx="2"
                        style={{
                          animation: 'drawBorderLoop 3s linear infinite'
                        }}
                      />
                    </svg>
                  </div>
                )}
                
                {/* Header */}
                <div className="text-center mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl mb-2 text-gray-800">GooClaim AI</h3>
                  <div className="text-3xl text-green-600 mb-2">Fast & Accurate</div>
                  <p className="text-sm text-gray-600">Intelligent automation</p>
                </div>

                {/* Comparison Features */}
                <div className="space-y-4 mb-6 relative z-10">
                  {comparisons.slice(0, 4).map((comparison, index) => {
                    const IconComponent = comparison.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isAnimating ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="bg-white/60 rounded-xl p-4 border border-green-200 relative"
                      >
                        <div className="flex items-start gap-3">
                          <motion.div
                            animate={isAnimating ? { 
                              scale: [1, 1.05, 1]
                            } : {}}
                            transition={{ 
                              delay: 1.5 + index * 0.2,
                              duration: 2,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                            className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0"
                          >
                            <IconComponent className="w-5 h-5 text-white" />
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="text-sm text-gray-900">{comparison.aspect}</h4>
                              <div className="px-2 py-1 bg-green-100 rounded-full">
                                <span className="text-xs text-green-700">{comparison.gooclaimMetric}</span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-700">{comparison.gooclaim}</p>
                          </div>
                        </div>
                        
                        {/* Success indicator */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={isAnimating ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                          transition={{ 
                            delay: 1.2 + index * 0.1,
                            type: "spring",
                            stiffness: 150
                          }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="w-4 h-4 text-white" />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* AI Magic Effects */}
                <AnimatePresence>
                  {isAnimating && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, x: Math.random() * 300 - 150, y: Math.random() * 200 - 100 }}
                          animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            rotate: 360
                          }}
                          transition={{ 
                            delay: 2 + i * 0.3,
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 4
                          }}
                          className="absolute w-2 h-2 bg-green-400 rounded-full pointer-events-none"
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          </div>

          {/* Bottom Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                The difference isn't just speed or accuracy—it's a fundamental shift from{" "}
                <span className="text-red-600">reactive, manual workflows</span> to{" "}
                <span className="text-green-600">proactive, intelligent automation</span> that works for you around the clock.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyDifferent;
