"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Users, Building, DollarSign, Clock, Heart, TrendingUp } from "lucide-react";

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Users,
      title: "Free Your Team",
      description: "Healthcare workers spend their time on patient care instead of paperwork, reducing burnout and improving satisfaction.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Save Time",
      description: "Tasks that took hours or days are completed in minutes, letting you process more claims with the same resources.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: DollarSign,
      title: "Improve Cash Flow",
      description: "Faster processing, fewer denials, and quicker appeals mean revenue comes in sooner and more reliably.",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Increase Accuracy",
      description: "AI agents don't make typos or miss details. Consistent, accurate processing reduces claim rejections and rework.",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Building,
      title: "Scale Effortlessly",
      description: "Handle more volume without hiring more staff. AI agents scale instantly to meet demand spikes.",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: Heart,
      title: "Better Patient Care",
      description: "When admin work is automated, healthcare providers can focus on what matters most—their patients.",
      gradient: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
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
                <span className="text-sm text-green-700">The Benefits</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Why Healthcare Teams
                <br />
                Choose GooClaim
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Automation isn't just about efficiency—it's about transforming how healthcare organizations operate and deliver care.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="group relative h-full">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative p-8 rounded-2xl border border-gray-200 bg-white h-full transition-all duration-300 group-hover:border-gray-300 group-hover:shadow-xl">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6`}>
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 border border-blue-100">
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                <span className="text-blue-600">GooClaim doesn't replace your team</span>—it empowers them. 
                By handling repetitive tasks, AI agents let healthcare professionals focus on decisions that require human expertise and compassion.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BenefitsSection;
