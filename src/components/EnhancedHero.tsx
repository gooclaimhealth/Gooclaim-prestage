"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, TrendingUp, Shield, Play, ChevronDown, Zap, Brain, FileCheck } from "lucide-react";
import { useRef } from "react";


interface EnhancedHeroProps {
  onTryFreeClick?: () => void;
}

export function EnhancedHero({ onTryFreeClick }: EnhancedHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Color mappings for explicit class names
  const colorClasses = {
    blue: {
      icon: "text-blue-600",
      progress: "bg-blue-600"
    },
    green: {
      icon: "text-green-600", 
      progress: "bg-green-600"
    },
    purple: {
      icon: "text-purple-600",
      progress: "bg-purple-600"
    }
  };

  return (
    <section ref={ref} className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-200/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-200/10 rounded-full blur-2xl animate-pulse delay-500" />
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <motion.div 
        style={{ opacity }}
        className="relative container mx-auto px-6 pt-32 pb-16"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <Badge variant="secondary" className="w-fit px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
                <Zap className="w-4 h-4 mr-2" />
                AI Autopilot for Healthcare Revenue
              </Badge>
            </motion.div>
            
            <div className="space-y-6">
              <motion.h1 
                variants={itemVariants}
                className="text-5xl lg:text-7xl tracking-tight"
              >
                
                
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Automate Health Insurance 
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Ops with AI Agents.
                </span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 max-w-2xl leading-relaxed"
              >
                GooClaim simplifies claim coding, denial management, prior auths, and patient intake — 
                <span className="text-blue-600"> fully autonomous</span>, 
                <span className="text-green-600"> fully explainable</span>.
              </motion.p>
            </div>
            
            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={onTryFreeClick}
              >
                <Brain className="w-5 h-5 mr-2" />
                Get a Demo
              </Button>

            </motion.div>
            
            {/* Compliance Badges */}
            <motion.div 
              variants={itemVariants}
              className="pt-8"
            >
              <p className="text-sm text-gray-500 mb-4">Enterprise-grade compliance</p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-sm text-gray-600"
              >
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Compliance certifications coming soon - Currently in foundation stage
                </span>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Right Content - Animated AI Dashboard */}
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-xl">AI Agents</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600">Coming Soon</span>
                  </div>
                </div>
                
                {/* Agent List */}
                <div className="space-y-3">
                  {[
                    { task: "Intake Agent", icon: Code, color: "blue" as const },
                    { task: "Coding Agent", icon: Shield, color: "purple" as const },
                    { task: "Prior Auth Agent", icon: Shield, color: "green" as const },
                    { task: "Denial Agent", icon: TrendingUp, color: "orange" as const },
                    { task: "Appeal Agent", icon: FileCheck, color: "red" as const },
                    { task: "Billing Agent", icon: Code, color: "indigo" as const },
                    { task: "Audit Agent", icon: Shield, color: "gray" as const }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-4 h-4 ${
                          item.color === 'blue' ? 'text-blue-600' :
                          item.color === 'purple' ? 'text-purple-600' :
                          item.color === 'green' ? 'text-green-600' :
                          item.color === 'orange' ? 'text-orange-600' :
                          item.color === 'red' ? 'text-red-600' :
                          item.color === 'indigo' ? 'text-indigo-600' :
                          'text-gray-600'
                        }`} />
                        <span className="text-sm flex-1">{item.task}</span>
                        <div className="w-2 h-2 bg-blue-500 rounded-full opacity-50" />
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Info Footer */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Brain className="w-4 h-4 text-blue-600" />
                      <span>Autonomous AI-powered automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
        
        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm">Scroll to explore</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}