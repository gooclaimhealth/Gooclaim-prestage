"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function VisualBenefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      emoji: "⚡",
      title: "Lightning Fast",
      description: "What takes hours happens in minutes",
      visual: "Hours → Minutes",
      color: "from-yellow-400 to-orange-500"
    },
    {
      emoji: "🎯",
      title: "Laser Accurate",
      description: "AI precision eliminates human errors",
      visual: "Zero Mistakes",
      color: "from-blue-400 to-blue-600"
    },
    {
      emoji: "💰",
      title: "Better Cash Flow",
      description: "Faster claims mean faster payments",
      visual: "Faster Revenue",
      color: "from-green-400 to-green-600"
    },
    {
      emoji: "🌍",
      title: "Always Working",
      description: "Agents never sleep or take breaks",
      visual: "24/7 Operation",
      color: "from-purple-400 to-purple-600"
    },
    {
      emoji: "📈",
      title: "Infinite Scale",
      description: "Handle any volume without hiring",
      visual: "Unlimited Capacity",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      emoji: "❤️",
      title: "Happy Teams",
      description: "Staff focus on care, not paperwork",
      visual: "Better Work-Life",
      color: "from-pink-400 to-pink-600"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-green-300/20 rounded-full blur-3xl" />
      </div>

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
              <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/80 shadow-lg">
                <span className="text-sm text-gray-700">✨ The Benefits</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                Transform Your Operations
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              See the real-world impact of AI automation on your healthcare organization
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Glow effect on hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity duration-500`} />
                  
                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border-2 border-white/60 p-8 h-full shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                    {/* Large Emoji */}
                    <div className="mb-6">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1,
                          delay: index * 0.2
                        }}
                        className="text-7xl"
                      >
                        {benefit.emoji}
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl mb-3">{benefit.title}</h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Visual indicator */}
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r ${benefit.color} text-white text-sm shadow-md`}>
                      {benefit.visual}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20 blur-3xl rounded-3xl" />
              
              {/* Content */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl border-2 border-white/80 p-10 shadow-2xl">
                <div className="text-center">
                  <div className="flex justify-center gap-4 mb-6 text-5xl">
                    <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>
                      ⚡
                    </motion.span>
                    <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}>
                      🎯
                    </motion.span>
                    <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}>
                      💰
                    </motion.span>
                    <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
                      📈
                    </motion.span>
                  </div>
                  
                  <h3 className="text-3xl mb-4">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                      All This Without Adding Headcount
                    </span>
                  </h3>
                  
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    GooClaim's AI agents deliver enterprise-level automation that scales with your practice—
                    giving you more capacity, better accuracy, and faster revenue, all while reducing administrative burden.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default VisualBenefits;
