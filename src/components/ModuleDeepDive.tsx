"use client";

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { Code, TrendingDown, Shield, Users, ArrowRight, Zap, Brain } from "lucide-react";
import { useRef, useEffect } from "react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Number.isInteger(latest) ? Math.round(latest) : latest.toFixed(1));
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export function ModuleDeepDive() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const modules = [
    {
      icon: Code,
      title: "Autonomous medical coding",
      subtitle: "Autonomous medical coding with explainable AI",
      description: "Advanced NLP and machine learning models that understand medical documentation and generate accurate billing codes with complete audit trails.",
      metrics: [
        { label: "Accuracy Rate", value: 100, suffix: "%", isCounter: true },
        { label: "Time Saved", value: 99.5, suffix: "%", isCounter: true },
        { label: "Availability", value: "24/7", suffix: "", isCounter: false }
      ],
      features: [
        "ICD-10, CPT, and HCPCS coding",
        "Real-time confidence scoring",
        "Automated code validation",
        "FHIR-compliant output"
      ],
      color: "blue",
      dashboard: {
        title: "Coding Dashboard",
        stats: [
          { label: "Today's Claims", value: "1,247" },
          { label: "Avg Confidence", value: "98.7%" },
          { label: "Manual Review", value: "2.1%" }
        ]
      }
    },
    {
      icon: TrendingDown,
      title: "Denial Prediction",
      subtitle: "Predictive analytics for claim optimization",
      description: "Machine learning models trained on millions of claims to predict denials before submission and automatically generate appeals with supporting documentation.",
      metrics: [
        { label: "Denial Prediction", value: 95, suffix: "%", isCounter: true },
        { label: "Appeal Success", value: 97, suffix: "%", isCounter: true },
        { label: "Days Saved", value: 12, suffix: "", isCounter: true }
      ],
      features: [
        "Pre-submission risk analysis",
        "Automated appeal generation",
        "Payer-specific optimization",
        "Real-time rejection prevention"
      ],
      color: "red",
      dashboard: {
        title: "Risk Analysis",
        stats: [
          { label: "High Risk Claims", value: "23" },
          { label: "Prevention Rate", value: "94.2%" },
          { label: "Recovery Amount", value: "$127K" }
        ]
      }
    },
    {
      icon: Shield,
      title: "Prior Authorization",
      subtitle: "Instant authorization with intelligent routing",
      description: "Automated prior authorization processing that reduces approval time from days to seconds through intelligent payer routing and documentation.",
      metrics: [
        { label: "Avg Time", value: 10, suffix: "sec", isCounter: true },
        { label: "Auto Approval", value: 100, suffix: "%", isCounter: true },
        { label: "Success Rate", value: 99, suffix: "%", isCounter: true }
      ],
      features: [
        "Intelligent payer routing",
        "Auto-documentation generation",
        "Real-time status tracking",
        "Appeal automation"
      ],
      color: "green",
      dashboard: {
        title: "Auth Center",
        stats: [
          { label: "Pending Auth", value: "14" },
          { label: "Approved Today", value: "89" },
          { label: "Avg Response", value: "10sec" }
        ]
      }
    },
    {
      icon: Users,
      title: "Patient Intake",
      subtitle: "Seamless registration and eligibility verification",
      description: "Streamlined patient onboarding with automated insurance verification, eligibility checking, and demographic data validation.",
      metrics: [
        { label: "Processing Time", value: 15, suffix: "sec", isCounter: true },
        { label: "Accuracy Rate", value: 99, suffix: "%", isCounter: true },
        { label: "Auto-Verify", value: 98, suffix: "%", isCounter: true }
      ],
      features: [
        "Real-time eligibility checking",
        "Automated demographic validation",
        "Insurance verification",
        "Seamless EHR integration"
      ],
      color: "purple",
      dashboard: {
        title: "Intake Portal",
        stats: [
          { label: "Patients Today", value: "156" },
          { label: "Verified", value: "99%" },
          { label: "Avg Time", value: "15 sec" }
        ]
      }
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            AI Module Deep Dive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four specialized AI agents working in harmony to transform your healthcare operations
          </p>
        </motion.div>

        <div className="space-y-16">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const isEven = index % 2 === 0;
            
            const colorClasses = {
              blue: {
                gradient: "from-blue-500 to-blue-600",
                bg: "bg-blue-50",
                text: "text-blue-600",
                icon: "bg-blue-100 text-blue-600"
              },
              red: {
                gradient: "from-red-500 to-red-600",
                bg: "bg-red-50",
                text: "text-red-600",
                icon: "bg-red-100 text-red-600"
              },
              green: {
                gradient: "from-green-500 to-green-600",
                bg: "bg-green-50",
                text: "text-green-600",
                icon: "bg-green-100 text-green-600"
              },
              purple: {
                gradient: "from-purple-500 to-purple-600",
                bg: "bg-purple-50",
                text: "text-purple-600",
                icon: "bg-purple-100 text-purple-600"
              }
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                  <div className={`grid lg:grid-cols-2 gap-0 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    {/* Content */}
                    <div className={`p-8 lg:p-12 ${isEven ? '' : 'lg:col-start-2'}`}>
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className={`w-16 h-16 rounded-2xl ${colorClasses[module.color as keyof typeof colorClasses].icon} flex items-center justify-center`}>
                            <Icon className="w-8 h-8" />
                          </div>
                          
                          <div>
                            <h3 className="text-3xl mb-2 capitalize">{module.title}</h3>
                            <p className={`text-lg ${colorClasses[module.color as keyof typeof colorClasses].text}`}>
                              {module.subtitle}
                            </p>
                          </div>
                          
                          <p className="text-gray-600 leading-relaxed">
                            {module.description}
                          </p>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-3 gap-4">
                          {module.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="text-center p-4 bg-gray-50 rounded-lg">
                              <div className={`text-3xl mb-1 ${colorClasses[module.color as keyof typeof colorClasses].text}`}>
                                {metric.isCounter ? (
                                  <>
                                    <Counter from={0} to={metric.value as number} duration={2} />
                                    {metric.suffix}
                                  </>
                                ) : (
                                  <motion.span
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                    transition={{ delay: index * 0.2 + metricIndex * 0.1 + 0.5, duration: 0.6 }}
                                  >
                                    {metric.value}{metric.suffix}
                                  </motion.span>
                                )}
                              </div>
                              <div className="text-xs text-gray-500">{metric.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Features */}
                        <div className="space-y-3">
                          {module.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: index * 0.2 + featureIndex * 0.1 + 0.5 }}
                              className="flex items-center gap-3"
                            >
                              <div className={`w-5 h-5 rounded-full ${colorClasses[module.color as keyof typeof colorClasses].icon} flex items-center justify-center`}>
                                <div className="w-2 h-2 bg-current rounded-full" />
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <Button className={`bg-gradient-to-r ${colorClasses[module.color as keyof typeof colorClasses].gradient} text-white hover:shadow-lg transition-all duration-300`}>
                          <Brain className="w-4 h-4 mr-2" />
                          Explore {module.title}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>

                    {/* Dashboard Mockup */}
                    <div className={`${colorClasses[module.color as keyof typeof colorClasses].bg} p-8 lg:p-12 flex items-center ${isEven ? '' : 'lg:col-start-1'}`}>
                      <Card className="w-full max-w-md mx-auto shadow-lg">
                        <div className="p-6 space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="text-lg">{module.dashboard.title}</h4>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                              <span className="text-sm text-gray-600">Live</span>
                            </div>
                          </div>
                          
                          <div className="grid gap-3">
                            {module.dashboard.stats.map((stat, statIndex) => (
                              <motion.div
                                key={statIndex}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                transition={{ delay: index * 0.2 + statIndex * 0.1 + 0.8 }}
                                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                              >
                                <span className="text-sm text-gray-600">{stat.label}</span>
                                <span className={`${colorClasses[module.color as keyof typeof colorClasses].text}`}>
                                  {stat.value}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                          
                          <div className="pt-2">
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <motion.div
                                className={`h-full bg-gradient-to-r ${colorClasses[module.color as keyof typeof colorClasses].gradient}`}
                                initial={{ width: 0 }}
                                animate={isInView ? { width: "75%" } : { width: 0 }}
                                transition={{ delay: index * 0.2 + 1.2, duration: 1 }}
                              />
                            </div>
                            <div className="flex justify-between text-xs text-gray-500 mt-1">
                              <span>Processing</span>
                              <span>75%</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ModuleDeepDive;