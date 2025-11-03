"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Shield, Clock, Brain, Zap, CheckCircle } from "lucide-react";
import { useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { DemoForm } from "./DemoForm";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      x: [0, 5, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),transparent)]" />
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          y: [0, -15, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-40 h-40 bg-blue-200/20 rounded-full blur-2xl"
      />
      <motion.div 
        animate={{ 
          x: [0, -15, 0],
          y: [0, 10, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-48 h-48 bg-green-200/20 rounded-full blur-2xl"
      />
      
      <div className="container mx-auto px-6 relative">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Title & Subtitle */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Healthcare Operations?
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join us in building the future of healthcare automation with AI agents that handle your entire revenue cycle.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image with Floating Element */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop&crop=center"
                  alt="Computer screen showing healthcare data analytics and AI processing"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent bg-[rgba(255,41,41,0)]" />
                
                {/* Bottom overlay message */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-gray-900 font-medium">AI Processing Active</span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      Automating workflows so healthcare teams can focus on patient care
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating AI Element */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-4 -right-4 z-10"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl blur-lg opacity-60"></div>
                  
                  {/* Main floating card */}
                  <div className="relative bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                        <Brain className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">GooClaim</p>
                        <p className="text-xs text-green-600">Processing Claims</p>
                      </div>
                    </div>
                    
                    {/* Mini stats */}
                    <div className="space-y-2">
         
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Accuracy</span>
                        <span className="font-medium text-green-600">95%</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">Time</span>
                        <span className="font-medium text-blue-600">0.0167 hrs</span>
                      </div>
                    </div>

                    {/* Processing indicator */}
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <div className="flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-3 h-3 border-2 border-blue-500 border-t-transparent rounded-full"
                        />
                        <span className="text-xs text-blue-600">Processing...</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating particles */}
                  {[1, 2, 3].map((particle) => (
                    <motion.div
                      key={particle}
                      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"
                      style={{
                        top: `${20 + particle * 15}%`,
                        left: `${-10 + particle * 5}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: particle * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
              </motion.div>


            </motion.div>

            {/* Form */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-white border-0 shadow-2xl rounded-2xl">
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <h3 className="text-3xl text-gray-900">
                      Get Your Free Demo
                    </h3>
                    <p className="text-gray-600">
                      See GooClaim in action with a personalized 30-minute demonstration
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      onClick={() => window.open('https://calendly.com/contact-gooclaim/30min', '_blank')}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Get Free Demo
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-3">
                    <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-green-500" />
                        <span>Certifications Coming Soon</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Quick Setup</span>
                      </div>
                    </div>
                    
                    <p className="text-center text-xs text-gray-500">
                      Click to schedule your 30-minute demo via Calendly.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Demo Form Modal */}
      <DemoForm 
        isOpen={isDemoFormOpen}
        onClose={() => setIsDemoFormOpen(false)}
      />
    </section>
  );
}

export default FinalCTA;