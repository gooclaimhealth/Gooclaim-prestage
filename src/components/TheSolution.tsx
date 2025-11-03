"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Zap, CheckCircle, ArrowRight } from "lucide-react";

export function TheSolution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const solutions = [
    {
      step: "01",
      title: "AI Takes Over",
      description: "Seven specialized AI agents handle every step of your revenue cycle—from patient intake to final payment.",
      color: "blue"
    },
    {
      step: "02",
      title: "Continuous Processing",
      description: "Agents work around the clock, processing claims, validating information, and handling denials automatically.",
      color: "purple"
    },
    {
      step: "03",
      title: "Smart Decision Making",
      description: "Each agent uses NLP and machine learning to make accurate, explainable decisions in real-time.",
      color: "green"
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
              <div className="px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full border border-green-200">
                <span className="text-sm text-green-700">The Solution</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                How GooClaim Solves It
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Instead of manual work, GooClaim uses AI agents to automate your entire revenue cycle—intelligently, accurately, and continuously.
            </p>
          </div>

          {/* Solution Steps */}
          <div className="space-y-12 mb-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: 0.3 + index * 0.2 }}
              >
                <div className="flex gap-6 items-start">
                  {/* Step Number */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${
                    solution.color === 'blue' ? 'from-blue-500 to-blue-600' :
                    solution.color === 'purple' ? 'from-purple-500 to-purple-600' :
                    'from-green-500 to-green-600'
                  } flex items-center justify-center text-white text-xl shadow-lg`}>
                    {solution.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl mb-3">{solution.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{solution.description}</p>
                  </div>
                  
                  {/* Arrow (not on last item) */}
                  {index < solutions.length - 1 && (
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="hidden lg:block flex-shrink-0 text-gray-300"
                    >
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.9 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Zap,
                title: "Instant Processing",
                description: "What takes humans hours takes AI agents minutes"
              },
              {
                icon: CheckCircle,
                title: "Consistent Accuracy",
                description: "No more human errors or oversights"
              },
              {
                icon: Sparkles,
                title: "Always Learning",
                description: "AI agents improve with every claim processed"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg mb-2">{benefit.title}</h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TheSolution;
