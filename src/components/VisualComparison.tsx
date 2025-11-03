"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { X, Check, Clock, Zap, Users, Bot, TrendingDown, TrendingUp } from "lucide-react";

export function VisualComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisons = [
    {
      icon: Clock,
      aspect: "Speed",
      manual: {
        text: "Hours to days per claim",
        emoji: "🐌",
        icon: Clock
      },
      gooclaim: {
        text: "Minutes per claim",
        emoji: "⚡",
        icon: Zap
      }
    },
    {
      icon: Users,
      aspect: "Availability",
      manual: {
        text: "Business hours only",
        emoji: "🕐",
        icon: Clock
      },
      gooclaim: {
        text: "24/7 operation",
        emoji: "🌍",
        icon: Zap
      }
    },
    {
      icon: TrendingDown,
      aspect: "Errors",
      manual: {
        text: "Human mistakes & typos",
        emoji: "❌",
        icon: X
      },
      gooclaim: {
        text: "Consistent accuracy",
        emoji: "✅",
        icon: Check
      }
    },
    {
      icon: Users,
      aspect: "Scaling",
      manual: {
        text: "Hire & train more staff",
        emoji: "👥",
        icon: Users
      },
      gooclaim: {
        text: "Instant scaling",
        emoji: "🚀",
        icon: Bot
      }
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-red-100 to-green-100 rounded-full border border-red-200">
                <span className="text-sm text-gray-700">The Difference</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Manual vs AI-Powered
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              See the transformation from traditional workflows to intelligent automation
            </p>
          </div>

          {/* Visual Comparison Cards */}
          <div className="space-y-8">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Aspect Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <comparison.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl">{comparison.aspect}</h3>
                  </div>

                  {/* Comparison */}
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Manual Way */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-red-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                      <div className="relative bg-white rounded-xl border-2 border-red-200 p-6 h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                            <X className="w-5 h-5 text-red-600" />
                          </div>
                          <span className="text-sm uppercase tracking-wider text-red-600">Old Way</span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-4xl">{comparison.manual.emoji}</span>
                          <p className="text-lg text-gray-700 flex-1">{comparison.manual.text}</p>
                        </div>
                        
                        <div className="pt-3 border-t border-red-100">
                          <div className="flex items-center gap-2 text-red-600">
                            <TrendingDown className="w-4 h-4" />
                            <span className="text-sm">Slow & Limited</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* GooClaim Way */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                      <div className="relative bg-white rounded-xl border-2 border-green-200 p-6 h-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                            <Check className="w-5 h-5 text-green-600" />
                          </div>
                          <span className="text-sm uppercase tracking-wider text-green-600">GooClaim</span>
                        </div>
                        
                        <div className="flex items-center gap-4 mb-3">
                          <span className="text-4xl">{comparison.gooclaim.emoji}</span>
                          <p className="text-lg text-gray-900 flex-1">{comparison.gooclaim.text}</p>
                        </div>
                        
                        <div className="pt-3 border-t border-green-100">
                          <div className="flex items-center gap-2 text-green-600">
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-sm">Fast & Scalable</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Visual Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Manual Process Summary */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl">Manual Process</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Limited by human capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Prone to errors & delays</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Expensive to scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>Staff burnout & turnover</span>
                  </li>
                </ul>
              </div>

              {/* GooClaim Summary */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl">GooClaim AI</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Unlimited processing capacity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Consistent accuracy 24/7</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Scales instantly on demand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Teams focus on patient care</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default VisualComparison;
