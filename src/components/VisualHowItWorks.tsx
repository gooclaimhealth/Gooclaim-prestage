"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowDown, CheckCircle, FileText, Brain, Zap, Shield } from "lucide-react";

export function VisualHowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Patient Data Arrives",
      description: "Patient forms, insurance cards, and medical records come in",
      visual: "📄",
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      number: "2",
      icon: Brain,
      title: "AI Agents Process",
      description: "7 specialized agents analyze, validate, code, and prepare everything",
      visual: "🤖",
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      number: "3",
      icon: Zap,
      title: "Smart Validation",
      description: "Agents predict and prevent denials before submission",
      visual: "⚡",
      color: "orange",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Clean Submission",
      description: "Perfect claims submitted automatically to payers",
      visual: "✅",
      color: "green",
      gradient: "from-green-500 to-green-600"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
                <span className="text-sm text-blue-700">Visual Workflow</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                How GooClaim Works
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              A simple, automated flow from patient data to payment—powered by AI
            </p>
          </div>

          {/* Visual Flow */}
          <div className="relative">
            {steps.map((step, index) => (
              <div key={index}>
                {/* Step Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-center gap-6 mb-8">
                    {/* Large Visual Icon */}
                    <div className={`flex-shrink-0 w-24 h-24 rounded-3xl bg-gradient-to-br ${step.gradient} shadow-2xl flex items-center justify-center relative group`}>
                      <div className="absolute inset-0 bg-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-5xl relative z-10">{step.visual}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300">
                      <div className="flex items-start gap-4">
                        {/* Step Number */}
                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${step.gradient} text-white flex items-center justify-center text-xl`}>
                          {step.number}
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-2xl mb-2 flex items-center gap-2">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-600">{step.description}</p>
                        </div>

                        {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} bg-opacity-10 flex items-center justify-center`}>
                          <step.icon className={`w-6 h-6 text-${step.color}-600`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="flex justify-center my-6"
                  >
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center"
                    >
                      <ArrowDown className="w-6 h-6 text-blue-600" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Result Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1.5 }}
            className="mt-12 text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border-2 border-green-200 shadow-lg">
              <div className="flex items-center gap-4 justify-center mb-3">
                <Shield className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl">The Result</h3>
              </div>
              <p className="text-lg text-gray-700 max-w-2xl">
                <span className="text-green-600">Faster processing</span>, <span className="text-blue-600">fewer errors</span>, 
                and <span className="text-purple-600">better cash flow</span>—all without manual intervention
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default VisualHowItWorks;
