"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Clock, FileText, AlertTriangle, Users, TrendingDown, RefreshCw } from "lucide-react";

export function TheProblem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: Clock,
      title: "Endless Manual Work",
      description: "Staff spend hours on data entry, form filling, and chasing paperwork instead of focusing on patient care."
    },
    {
      icon: FileText,
      title: "Complex Documentation",
      description: "Multiple forms, payer requirements, and coding standards create a maze of administrative burden."
    },
    {
      icon: AlertTriangle,
      title: "Frequent Errors",
      description: "Manual processes lead to coding mistakes, missing information, and claim denials that cost time and money."
    },
    {
      icon: RefreshCw,
      title: "Constant Rework",
      description: "Denied claims require resubmission, appeals need documentation, and the cycle repeats endlessly."
    },
    {
      icon: TrendingDown,
      title: "Delayed Revenue",
      description: "Slow processing, denials, and appeals mean cash flow suffers and revenue comes in months late."
    },
    {
      icon: Users,
      title: "Staff Burnout",
      description: "Healthcare workers are overwhelmed with administrative tasks, leading to frustration and turnover."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
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
              <div className="px-4 py-2 bg-red-100 rounded-full border border-red-200">
                <span className="text-sm text-red-700">The Challenge</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                The Healthcare Admin Nightmare
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Healthcare providers face an overwhelming burden of manual administrative work that slows everything down and drains resources.
            </p>
          </div>

          {/* Problems Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="p-6 rounded-xl bg-white border border-gray-200 h-full hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg mb-2">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Impact Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.9 }}
            className="mt-16 text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-red-100">
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                <span className="text-red-600">The result?</span> Healthcare teams spend more time on paperwork than patient care, 
                revenue is delayed by weeks or months, and staff are burned out from repetitive administrative tasks.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default TheProblem;
