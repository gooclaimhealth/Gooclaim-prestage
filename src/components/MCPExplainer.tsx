"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { 
  Network, 
  GitBranch, 
  Users, 
  Layers, 
  Route,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Settings,
  Play,
  Upload,
  Brain,
  Zap,
  Activity,
  Cpu,
  Server,
  FileText,
  Shield,
  Heart,
  Eye,
  Stethoscope
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

export function MCPExplainer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  // Improved scroll progress calculation to ensure all steps are activated
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      // Ensure we can reach step 4 (index 4) by adjusting the calculation
      const stepIndex = Math.floor(progress * 4.99); // Use 4.99 instead of 5 to ensure we can reach index 4
      setActiveStep(Math.min(Math.max(stepIndex, 0), 4));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  // Additional intersection observer for each step to ensure proper activation
  useEffect(() => {
    const stepElements = document.querySelectorAll('[id^="step-"]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = entry.target.id;
            const stepIndex = parseInt(stepId.replace('step-', ''));
            setActiveStep(stepIndex);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    stepElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      stepElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const steps = [
    {
      icon: Network,
      title: "Centralized Model Gateway",
      subtitle: "One API to rule them all",
      description: "Your front end connects to MCP's unified API layer. One gateway for all AI services.",
      endpoint: "POST /models/coding",
      visual: {
        type: "network",
        elements: ["UI", "MCP Gateway", "ICD Model", "Denial Model", "Prior Auth Model"]
      },
      details: [
        "Single point of entry for all AI models",
        "Unified response format across services",
        "Built-in rate limiting and authentication",
        "Real-time model health monitoring"
      ],
      color: "blue"
    },
    {
      icon: GitBranch,
      title: "Versioned AI Models",
      subtitle: "Track every change, audit every decision",
      description: "Track model versions, audit logs, and confidence thresholds for every prediction.",
      endpoint: "GET /models/coding/versions",
      visual: {
        type: "versions",
        elements: ["v1.0", "v2.1", "v3.0", "Config", "Thresholds"]
      },
      details: [
        "Seamless model version rollbacks",
        "A/B testing between model versions",
        "Configurable confidence thresholds",
        "Complete deployment audit trail"
      ],
      color: "green"
    },
    {
      icon: Users,
      title: "Human-in-the-Loop Workflows",
      subtitle: "AI + Human oversight = Perfect results",
      description: "Override or approve predictions with full traceability via MCP.",
      endpoint: "POST /reviews/override",
      visual: {
        type: "review",
        elements: ["AI Prediction", "Human Review", "Override", "Audit Log"]
      },
      details: [
        "Smart escalation rules for low confidence",
        "Expert reviewer assignment logic",
        "Complete decision audit trails",
        "Feedback loop for model improvement"
      ],
      color: "purple"
    },
    {
      icon: Layers,
      title: "Batch Processing for Scale",
      subtitle: "Handle thousands of documents effortlessly",
      description: "Bulk-process massive datasets — async, traceable, and report-ready.",
      endpoint: "POST /batch/coding",
      visual: {
        type: "batch",
        elements: ["1,000+ Docs", "Batch Queue", "Processing", "Results", "Reports"]
      },
      details: [
        "Async processing with status tracking",
        "Priority queuing for urgent batches",
        "Detailed progress reporting",
        "Automatic error handling and retries"
      ],
      color: "orange"
    },
    {
      icon: Route,
      title: "Auto Routing to Specialized Models",
      subtitle: "Right model, right task, right outcome",
      description: "Intelligent routing analyzes request complexity and routes to the most appropriate specialized AI model.",
      endpoint: "GET /routing/intelligent/{taskType}",
      visual: {
        type: "routing",
        elements: ["Request Analysis", "Basic Model", "Advanced Model", "Specialist Model", "Smart Router"]
      },
      details: [
        "Task complexity analysis and classification",
        "Specialty-specific model selection",
        "Dynamic load balancing across models",
        "Real-time performance optimization"
      ],
      color: "red"
    }
  ];

  const colorClasses = {
    blue: {
      gradient: "from-blue-500 to-blue-600",
      bg: "bg-blue-50",
      text: "text-blue-600",
      icon: "bg-blue-100 text-blue-600",
      border: "border-blue-200"
    },
    green: {
      gradient: "from-green-500 to-green-600",
      bg: "bg-green-50",
      text: "text-green-600",
      icon: "bg-green-100 text-green-600",
      border: "border-green-200"
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      bg: "bg-purple-50",
      text: "text-purple-600",
      icon: "bg-purple-100 text-purple-600",
      border: "border-purple-200"
    },
    orange: {
      gradient: "from-orange-500 to-orange-600",
      bg: "bg-orange-50",
      text: "text-orange-600",
      icon: "bg-orange-100 text-orange-600",
      border: "border-orange-200"
    },
    red: {
      gradient: "from-red-500 to-red-600",
      bg: "bg-red-50",
      text: "text-red-600",
      icon: "bg-red-100 text-red-600",
      border: "border-red-200"
    }
  };

  const renderVisual = (step: typeof steps[0], index: number) => {
    const isActive = activeStep >= index;
    const isHovered = hoveredStep === index;
    const colors = colorClasses[step.color as keyof typeof colorClasses];

    const AnimatedNetwork = () => (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {/* Central Gateway */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isActive ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={`absolute z-10 w-16 h-16 rounded-full ${colors.icon} flex items-center justify-center shadow-lg`}
        >
          <Server className="w-8 h-8" />
        </motion.div>

        {/* Surrounding Services */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * 90) - 45;
          const radius = 80;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;
          
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              className="absolute w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-xs"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <Cpu className="w-5 h-5 text-gray-600" />
            </motion.div>
          );
        })}

        {/* Connecting Lines */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i * 90) - 45;
          return (
            <motion.div
              key={`line-${i}`}
              initial={{ pathLength: 0 }}
              animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
              className="absolute w-full h-full"
            >
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <motion.line
                  x1="100" y1="100"
                  x2={100 + Math.cos((angle * Math.PI) / 180) * 60}
                  y2={100 + Math.sin((angle * Math.PI) / 180) * 60}
                  stroke={`rgb(59 130 246)`}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                />
              </svg>
            </motion.div>
          );
        })}

        {/* Animated Pulses */}
        {isActive && (
          <motion.div
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`absolute w-16 h-16 rounded-full border-2 border-blue-300 opacity-20`}
          />
        )}
      </div>
    );

    const AnimatedVersionTree = () => (
      <div className="relative w-full h-64 flex flex-col items-center justify-center overflow-hidden">
        {/* Version Nodes */}
        {['v1.0', 'v2.1', 'v3.0'].map((version, i) => (
          <motion.div
            key={version}
            initial={{ opacity: 0, x: -50 }}
            animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className={`flex items-center gap-4 mb-4 ${i === 2 ? colors.icon : 'bg-gray-100'} px-4 py-2 rounded-lg`}
          >
            <GitBranch className={`w-4 h-4 ${i === 2 ? colors.text : 'text-gray-600'}`} />
            <span className={`text-sm ${i === 2 ? colors.text : 'text-gray-600'}`}>{version}</span>
            <motion.div
              initial={{ opacity: 0 }}
              animate={isActive && i === 2 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="flex items-center gap-1"
            >
              <Activity className="w-3 h-3 text-green-500" />
              <span className="text-xs text-green-600">Active</span>
            </motion.div>
          </motion.div>
        ))}

        {/* Confidence Meter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full max-w-xs"
        >
          <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
            <Settings className="w-3 h-3" />
            <span>Model Confidence: 95%</span>
          </div>
          <div className="bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={isActive ? { width: "95%" } : { width: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className={`h-2 bg-gradient-to-r ${colors.gradient} rounded-full`}
            />
          </div>
        </motion.div>
      </div>
    );

    const AnimatedWorkflow = () => (
      <div className="relative w-full h-64 flex flex-col items-center justify-center gap-4 overflow-hidden">
        {/* AI Processing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg"
        >
          <Brain className="w-5 h-5 text-purple-600" />
          <span className="text-sm text-gray-700">AI Processing...</span>
          <motion.div
            animate={isActive ? { rotate: 360 } : { rotate: 0 }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full"
          />
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
          transition={{ delay: 0.6, duration: 0.3 }}
        >
          <ArrowRight className="w-6 h-6 text-gray-400" />
        </motion.div>

        {/* Human Review */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className={`flex items-center gap-3 ${colors.icon} px-4 py-3 rounded-lg border-2 ${colors.border}`}
        >
          <Users className={`w-5 h-5 ${colors.text}`} />
          <span className={`text-sm ${colors.text}`}>Expert Review</span>
        </motion.div>

        {/* Approval */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex items-center gap-2 text-green-600"
        >
          <CheckCircle className="w-5 h-5" />
          <span className="text-sm">Approved & Logged</span>
        </motion.div>
      </div>
    );

    const AnimatedBatchProcessing = () => (
      <div className="relative w-full h-64 flex flex-col items-center justify-center overflow-hidden">
        {/* Upload Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <Upload className="w-5 h-5 text-gray-600" />
          <span className="text-sm text-gray-700">1,247 documents uploaded</span>
        </motion.div>

        {/* Processing Queue */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          {['Queued', 'Processing', 'Complete'].map((status, i) => (
            <motion.div
              key={status}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.4 }}
              className={`px-3 py-2 rounded text-xs text-center ${
                i === 1 ? colors.icon : 'bg-gray-100 text-gray-600'
              }`}
            >
              {status}
              {i === 1 && isActive && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-2 h-2 bg-orange-500 rounded-full mx-auto mt-1"
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="w-full max-w-xs"
        >
          <div className="text-xs text-center text-gray-600 mb-2">
            Progress: 847/1,247 completed
          </div>
          <div className="bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={isActive ? { width: "68%" } : { width: 0 }}
              transition={{ delay: 1, duration: 1.5 }}
              className={`h-2 bg-gradient-to-r ${colors.gradient} rounded-full`}
            />
          </div>
        </motion.div>
      </div>
    );

    const AnimatedIntelligentRouting = () => (
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        {/* Incoming Requests */}
        <div className="absolute left-4 top-4 space-y-3">
          {[
            { type: "Simple", icon: FileText, color: "bg-green-100 text-green-600", delay: 0.2 },
            { type: "Complex", icon: Heart, color: "bg-yellow-100 text-yellow-600", delay: 0.4 },
            { type: "Critical", icon: Shield, color: "bg-red-100 text-red-600", delay: 0.6 }
          ].map((request, i) => (
            <motion.div
              key={request.type}
              initial={{ opacity: 0, x: -30 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: request.delay, duration: 0.5 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg ${request.color} text-xs`}
            >
              <request.icon className="w-4 h-4" />
              <span>{request.type} Task</span>
            </motion.div>
          ))}
        </div>

        {/* Central Intelligence Router */}
        <motion.div
          initial={{ scale: 0, rotate: -90 }}
          animate={isActive ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className={`absolute z-10 w-16 h-16 rounded-xl ${colors.icon} flex items-center justify-center shadow-lg border-2 ${colors.border}`}
        >
          <Brain className="w-8 h-8" />
        </motion.div>

        {/* Specialized Models */}
        <div className="absolute right-4 space-y-2">
          {[
            { name: "Basic", specialty: "Simple Tasks", color: "bg-blue-100 text-blue-600", delay: 1.2 },
            { name: "Advanced", specialty: "Complex Analysis", color: "bg-purple-100 text-purple-600", delay: 1.4 },
            { name: "Specialist", specialty: "Critical Cases", color: "bg-orange-100 text-orange-600", delay: 1.6 }
          ].map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, x: 30 }}
              animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: model.delay, duration: 0.5 }}
              className={`${model.color} px-3 py-2 rounded-lg text-center`}
            >
              <div className="text-xs font-semibold">{model.name} AI</div>
              <div className="text-xs opacity-80">{model.specialty}</div>
            </motion.div>
          ))}
        </div>

        {/* Routing Paths */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
          {/* Simple to Basic */}
          <motion.path
            d="M 80 40 Q 150 30 220 60"
            stroke="rgb(34 197 94)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          />
          {/* Complex to Advanced */}
          <motion.path
            d="M 80 70 Q 150 80 220 100"
            stroke="rgb(168 85 247)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ delay: 2.0, duration: 0.8 }}
          />
          {/* Critical to Specialist */}
          <motion.path
            d="M 80 100 Q 150 130 220 140"
            stroke="rgb(251 146 60)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isActive ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          />
        </svg>

        {/* Animated Decision Particles */}
        {isActive && (
          <>
            {/* Green particle - Simple to Basic */}
            <motion.div
              animate={{ x: [60, 120, 180], y: [40, 35, 60] }}
              transition={{ repeat: Infinity, duration: 4, delay: 2.5 }}
              className="absolute w-2 h-2 bg-green-500 rounded-full"
            />
            {/* Purple particle - Complex to Advanced */}
            <motion.div
              animate={{ x: [60, 120, 180], y: [70, 80, 100] }}
              transition={{ repeat: Infinity, duration: 4.5, delay: 3 }}
              className="absolute w-2 h-2 bg-purple-500 rounded-full"
            />
            {/* Orange particle - Critical to Specialist */}
            <motion.div
              animate={{ x: [60, 120, 180], y: [100, 130, 140] }}
              transition={{ repeat: Infinity, duration: 5, delay: 3.5 }}
              className="absolute w-2 h-2 bg-orange-500 rounded-full"
            />
          </>
        )}

        {/* Intelligence Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 2.8, duration: 0.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 bg-white px-3 py-1 rounded-full shadow-sm"
        >
          <Zap className="w-3 h-3 inline mr-1" />
          Smart Analysis & Routing
        </motion.div>
      </div>
    );

    switch (step.visual.type) {
      case "network":
        return <AnimatedNetwork />;
      case "versions":
        return <AnimatedVersionTree />;
      case "review":
        return <AnimatedWorkflow />;
      case "batch":
        return <AnimatedBatchProcessing />;
      case "routing":
        return <AnimatedIntelligentRouting />;
      default:
        return null;
    }
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-blue-100 text-blue-700">
            <Brain className="w-4 h-4 mr-2" />
            MCP Architecture Deep Dive
          </Badge>
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            How GooClaim Works with the MCP Server
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            <span className="text-blue-600">Modular</span>, <span className="text-green-600">Auditable</span>, <span className="text-purple-600">Scalable</span> — 
            The technical architecture that powers autonomous healthcare operations
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colors = colorClasses[step.color as keyof typeof colorClasses];
              const isActive = activeStep >= index;
              const isHovered = hoveredStep === index;
              
              return (
                <motion.div
                  key={index}
                  id={`step-${index}`}
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="scroll-mt-24"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  <Card className={`overflow-hidden border-0 shadow-xl transition-all duration-500 ${
                    isActive ? 'shadow-2xl' : ''
                  } ${isHovered ? 'scale-102' : ''}`}>
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Content */}
                      <div className="p-8 lg:p-12">
                        <div className="space-y-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-xl ${colors.icon} flex items-center justify-center`}>
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <Badge variant="outline" className={`mb-2 ${colors.border} ${colors.text}`}>
                                Step {index + 1}
                              </Badge>
                              <h3 className="text-2xl mb-1">{step.title}</h3>
                              <p className={`text-sm ${colors.text}`}>{step.subtitle}</p>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed text-lg">
                            {step.description}
                          </p>

                          {/* API Endpoint */}
                          <div className="bg-gray-900 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-2">
                              <Code className="w-4 h-4 text-green-400" />
                              <span className="text-xs text-gray-400">API Endpoint</span>
                            </div>
                            <motion.code 
                              className="text-green-400 font-mono text-sm"
                              initial={{ opacity: 0 }}
                              animate={isActive ? { opacity: 1 } : { opacity: 0.5 }}
                              transition={{ delay: 0.3, duration: 0.5 }}
                            >
                              {step.endpoint}
                            </motion.code>
                          </div>

                          {/* Technical Details - Now always expanded by default */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-3"
                          >
                            <h4 className="text-sm text-gray-700 mb-3">Key capabilities:</h4>
                            {step.details.map((detail, detailIndex) => (
                              <motion.div
                                key={detailIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: detailIndex * 0.1 + 0.2, duration: 0.3 }}
                                className="flex items-center gap-3"
                              >
                                <CheckCircle className={`w-4 h-4 ${colors.text}`} />
                                <span className="text-sm text-gray-600">{detail}</span>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      </div>

                      {/* Interactive Animation */}
                      <div className={`${colors.bg} p-8 lg:p-12 flex items-center justify-center overflow-hidden`}>
                        <div className="w-full max-w-sm overflow-hidden">
                          {renderVisual(step, index)}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-20"
        >

        </motion.div>
      </div>
    </section>
  );
}