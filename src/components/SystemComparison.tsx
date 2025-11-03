import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Clock, 
  User, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Bot, 
  BarChart3,
  ArrowRight,
  X,
  RefreshCw,
  Phone,
  Mail,
  Building,
  Shuffle,
  Target,
  Shield,
  Sparkles,
  UserCheck,
  Keyboard,
  BadgeCheck
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const traditionalSteps = [
  { icon: FileText, label: "Paper Forms", delay: 0 },
  { icon: Phone, label: "Phone Calls", delay: 0.5 },
  { icon: Mail, label: "Fax Documents", delay: 1 },
  { icon: User, label: "Manual Review", delay: 1.5 },
  { icon: Shuffle, label: "Handoff", delay: 2 },
  { icon: AlertTriangle, label: "Error Checking", delay: 2.5 },
  { icon: RefreshCw, label: "Reprocessing", delay: 3 },
  { icon: Clock, label: "Waiting Period", delay: 3.5 },
  { icon: BadgeCheck, label: "Compliance Checks", delay: 4 },
  { icon: User, label: "Manager Approval", delay: 4.5 },
  { icon: Keyboard, label: "Manual Data Entry", delay: 5 },
  { icon: Target, label: "Submission", delay: 5.5 }
];

const gooClaimSteps = [
  { icon: Bot, label: "AI Data Capture", delay: 0 },
  { icon: Sparkles, label: "Smart Processing", delay: 0.3 },
  { icon: Shield, label: "Auto Compliance", delay: 0.6 },
  { icon: UserCheck, label: "Human in Loop", delay: 0.9 },
  { icon: CheckCircle, label: "Instant Approval", delay: 1.2 }
];

export function SystemComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isAnimating, setIsAnimating] = useState(false);
  const [traditionalComplete, setTraditionalComplete] = useState(false);
  const [gooClaimComplete, setGooClaimComplete] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    
    // Reset states
    setIsAnimating(false);
    setTraditionalComplete(false);
    setGooClaimComplete(false);
    
    const timer = setTimeout(() => {
      setIsAnimating(true);
      
      // Traditional system takes 8 seconds to complete
      setTimeout(() => {
        setTraditionalComplete(true);
      }, 8000);
      
      // GooClaim never completes - keeps loading continuously
    }, 1000);

    return () => clearTimeout(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-200/60 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 border-blue-200">
            ⚡ Workflow Revolution
          </Badge>
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            See The Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how GooClaim eliminates complexity
          </p>
        </motion.div>

        {/* Main Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Traditional System */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Card className={`h-full p-8 bg-gradient-to-br from-red-50 to-red-100/50 border-red-200 relative overflow-hidden transition-all duration-1000 ${
              traditionalComplete ? 'grayscale' : ''
            }`}>
              {/* Border loading animation */}
              {isAnimating && !traditionalComplete && (
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
                      className="animate-draw-border-slow"
                      style={{
                        animation: 'drawBorder 8s linear forwards'
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
                <h3 className="text-2xl mb-2 text-gray-800">Traditional System</h3>
                <div className="text-xl text-red-600 mb-2">Manual & Complex</div>
                <p className="text-sm text-gray-600">Multiple steps and handoffs</p>
              </div>

              {/* Static Workflow */}
              <div className="relative h-96 overflow-hidden">
                {/* Static Steps */}
                <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
                  {traditionalSteps.map((step, index) => {
                    const Icon = step.icon;
                    
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isAnimating ? { 
                          opacity: 0.7,
                          scale: 1,
                          y: 0
                        } : { opacity: 0, scale: 0 }}
                        transition={{ 
                          delay: step.delay,
                          duration: 0.6,
                          type: "spring",
                          stiffness: 100,
                          damping: 15
                        }}
                        className="flex flex-col items-center relative"
                      >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 bg-red-200 text-red-600">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs text-center text-gray-600 leading-tight">
                          {step.label}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Characteristics */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center relative z-10">
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-lg text-red-600">Many</div>
                  <div className="text-xs text-gray-600">Manual Steps</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-lg text-red-600">High</div>
                  <div className="text-xs text-gray-600">Error Prone</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* GooClaim System */}
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
                      className="animate-draw-border-loop"
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
                <h3 className="text-2xl mb-2 text-gray-800">GooClaim </h3>
                <div className="text-3xl text-green-600 mb-2">Less than 2 mins</div>
                <p className="text-sm text-gray-600">Intelligent automation</p>
              </div>

              {/* Streamlined Workflow */}
              <div className="relative h-96 overflow-hidden">
                {/* AI Steps */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="max-w-md mx-auto">
                    {/* First Row - 3 icons */}
                    <div className="grid grid-cols-3 gap-6 place-items-center mb-8">
                      {gooClaimSteps.slice(0, 3).map((step, index) => {
                        const Icon = step.icon;
                        
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={isAnimating ? { 
                              opacity: 1,
                              scale: 1,
                              y: 0
                            } : { opacity: 0, scale: 0, y: 20 }}
                            transition={{ 
                              delay: 1.5 + step.delay,
                              duration: 0.6,
                              type: "spring",
                              stiffness: 200
                            }}
                            className="flex flex-col items-center relative w-20"
                          >
                            <motion.div
                              animate={isAnimating ? { 
                                rotate: [0, 2, -2, 0],
                                scale: [1, 1.02, 1]
                              } : {}}
                              transition={{ 
                                delay: 2 + step.delay,
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 4,
                                ease: "easeInOut"
                              }}
                              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center mb-3 shadow-lg"
                            >
                              <Icon className="w-8 h-8" />
                            </motion.div>
                            <span className="text-xs text-center text-gray-700 leading-tight">
                              {step.label}
                            </span>
                            
                            {/* Success indicator */}
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={isAnimating ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                              transition={{ 
                                delay: 2.5 + step.delay,
                                type: "spring",
                                stiffness: 150,
                                damping: 12,
                                duration: 0.4
                              }}
                              className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                    
                    {/* Second Row - 2 icons centered */}
                    <div className="flex justify-center gap-12">
                      {gooClaimSteps.slice(3, 5).map((step, index) => {
                        const Icon = step.icon;
                        const actualIndex = index + 3;
                        
                        return (
                          <motion.div
                            key={actualIndex}
                            initial={{ opacity: 0, scale: 0, y: 20 }}
                            animate={isAnimating ? { 
                              opacity: 1,
                              scale: 1,
                              y: 0
                            } : { opacity: 0, scale: 0, y: 20 }}
                            transition={{ 
                              delay: 1.5 + step.delay,
                              duration: 0.6,
                              type: "spring",
                              stiffness: 200
                            }}
                            className="flex flex-col items-center relative w-20"
                          >
                            <motion.div
                              animate={isAnimating ? { 
                                rotate: [0, 2, -2, 0],
                                scale: [1, 1.02, 1]
                              } : {}}
                              transition={{ 
                                delay: 2 + step.delay,
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 4,
                                ease: "easeInOut"
                              }}
                              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 text-white flex items-center justify-center mb-3 shadow-lg"
                            >
                              <Icon className="w-8 h-8" />
                            </motion.div>
                            <span className="text-xs text-center text-gray-700 leading-tight">
                              {step.label}
                            </span>
                            
                            {/* Success indicator */}
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={isAnimating ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                              transition={{ 
                                delay: 2.5 + step.delay,
                                type: "spring",
                                stiffness: 150,
                                damping: 12,
                                duration: 0.4
                              }}
                              className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
                            >
                              <CheckCircle className="w-3 h-3 text-white" />
                            </motion.div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* AI Magic Effects - continuous */}
                <AnimatePresence>
                  {isAnimating && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0, x: Math.random() * 300, y: Math.random() * 300 }}
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
                          className="absolute w-2 h-2 bg-green-400 rounded-full"
                        />
                      ))}
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-4 text-center relative z-10">
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-lg text-green-600">5</div>
                  <div className="text-xs text-gray-600">AI+Human Steps</div>
                </div>
                <div className="bg-white/50 rounded-lg p-3">
                  <div className="text-lg text-green-600">97.4%</div>
                  <div className="text-xs text-gray-600">Accuracy</div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Impact Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            {/* Time Comparison */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-red-600" />
                </div>
                <div className="text-2xl text-red-600 mb-2">168 hrs</div>
                <div className="text-sm text-gray-600">Traditional Time</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="flex flex-col items-center justify-center"
              >
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl mb-2"
                >
                  →
                </motion.div>
                <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200">
                  99.7% Faster
                </Badge>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-green-600" />
                </div>
                <div className="text-2xl text-green-600 mb-2">0.0167 hrs</div>
                <div className="text-sm text-gray-600">GooClaim Time</div>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 3, duration: 0.6 }}
            >
              <Badge variant="secondary" className="px-8 py-4 text-lg bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200">
                <Sparkles className="w-5 h-5 mr-2" />
                Ready to eliminate the chaos?
              </Badge>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Default export for lazy loading
export default SystemComparison;