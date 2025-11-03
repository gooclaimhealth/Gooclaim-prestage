"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { 
  UserCheck, 
  Code, 
  Shield, 
  AlertTriangle, 
  FileText, 
  CreditCard,
  Lock,
  ChevronRight,
  Bot
} from "lucide-react";
import { Card } from "./ui/card";

export function AgentsDeepDive() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedAgent, setSelectedAgent] = useState(0);

  const agents = [
    {
      icon: UserCheck,
      name: "Intake Agent",
      tagline: "Perfect Patient Data, Every Time",
      description: "The Intake Agent is your front-line data validator. It automatically verifies patient information, insurance coverage, and eligibility before any claim is submitted.",
      howItWorks: [
        "Scans and extracts data from patient forms and insurance cards",
        "Validates patient demographics against payer databases",
        "Verifies insurance coverage and benefits in real-time",
        "Flags missing or incorrect information for quick correction"
      ],
      benefit: "Eliminates data entry errors and ensures every claim starts with accurate, complete information.",
      color: "blue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      name: "Coding Agent",
      tagline: "Medical NLP Meets Billing Precision",
      description: "The Coding Agent reads clinical documentation and automatically applies accurate ICD-10, CPT, and HCPCS codes using advanced medical natural language processing.",
      howItWorks: [
        "Analyzes physician notes and medical records using NLP",
        "Identifies diagnoses and procedures automatically",
        "Applies appropriate billing codes with confidence scoring",
        "Cross-references codes for accuracy and compliance"
      ],
      benefit: "What takes coders hours per chart happens in seconds, with consistent accuracy and full audit trails.",
      color: "purple",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      name: "Prior Auth Agent",
      tagline: "Authorization Without the Wait",
      description: "The Prior Auth Agent handles the complex process of getting approvals from insurance companies before procedures or treatments.",
      howItWorks: [
        "Identifies which procedures require prior authorization",
        "Gathers necessary clinical documentation automatically",
        "Submits requests through payer portals or APIs",
        "Tracks status and follows up until approval is received"
      ],
      benefit: "Turns a days-long manual process into an automated workflow that runs in the background.",
      color: "green",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: AlertTriangle,
      name: "Denial Agent",
      tagline: "Predict and Prevent Rejections",
      description: "The Denial Agent uses predictive analytics to identify claims at risk of denial before they're submitted.",
      howItWorks: [
        "Analyzes claim data against historical denial patterns",
        "Identifies missing information or coding issues",
        "Predicts likelihood of denial with reasoning",
        "Suggests corrections before submission"
      ],
      benefit: "Catch problems before they become denials, saving weeks of rework and lost revenue.",
      color: "orange",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: FileText,
      name: "Appeal Agent",
      tagline: "Smart Appeals, Automatic Resubmission",
      description: "When denials do happen, the Appeal Agent creates payer-specific appeal letters with supporting documentation and resubmits automatically.",
      howItWorks: [
        "Analyzes denial reasons and gathers relevant documentation",
        "Generates appeal letters tailored to each payer's requirements",
        "Includes clinical justification and supporting evidence",
        "Tracks appeal status and escalates when needed"
      ],
      benefit: "Turn denied claims into paid claims faster with less manual effort and higher success rates.",
      color: "red",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: CreditCard,
      name: "Billing Agent",
      tagline: "Clean Claims, Fast Payment",
      description: "The Billing Agent compiles all the work from other agents into clean, accurate claims and ensures proper submission to payers.",
      howItWorks: [
        "Aggregates data from coding, auth, and intake agents",
        "Performs final validation checks before submission",
        "Submits claims through EDI or payer portals",
        "Tracks claim status and payment posting"
      ],
      benefit: "Maximize clean claim rates and accelerate revenue with automated, error-free submissions.",
      color: "indigo",
      gradient: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Lock,
      name: "Audit Agent",
      tagline: "Compliance Through Transparency",
      description: "The Audit Agent maintains an immutable, secure record of every action taken by every agent—creating a complete audit trail for compliance.",
      howItWorks: [
        "Records every decision and action in WORM (Write Once, Read Many) storage",
        "Captures reasoning behind AI decisions with full explainability",
        "Maintains HIPAA-compliant logs with encryption",
        "Generates compliance reports and audit trails on demand"
      ],
      benefit: "Pass audits with confidence knowing every action is documented, traceable, and explainable.",
      color: "gray",
      gradient: "from-gray-500 to-gray-600"
    }
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
    green: "bg-green-100 text-green-700 border-green-200",
    orange: "bg-orange-100 text-orange-700 border-orange-200",
    red: "bg-red-100 text-red-700 border-red-200",
    indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
    gray: "bg-gray-100 text-gray-700 border-gray-200"
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30">
      <div className="container mx-auto px-6">
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
              <div className="px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 rounded-full border border-blue-200 flex items-center gap-2">
                <Bot className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-blue-700">Meet the Agents</span>
              </div>
            </motion.div>
            
            <h2 className="text-4xl md:text-6xl mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 bg-clip-text text-transparent">
                Your AI Team, Explained
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Seven specialized agents working together to automate your entire revenue cycle. Click each agent to learn how it works.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Agent Selector */}
            <div className="lg:col-span-1 space-y-3">
              {agents.map((agent, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  onMouseEnter={() => setSelectedAgent(index)}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${
                    selectedAgent === index
                      ? colorClasses[agent.color] + ' shadow-lg'
                      : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      selectedAgent === index
                        ? `bg-gradient-to-br ${agent.gradient} text-white`
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {(() => {
                        const IconComponent = agent.icon;
                        return <IconComponent className="w-5 h-5" />;
                      })()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium ${selectedAgent === index ? '' : 'text-gray-900'}`}>
                        {agent.name}
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      selectedAgent === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Agent Details */}
            <div className="lg:col-span-2">
              <motion.div
                key={selectedAgent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="p-8 bg-white border-0 shadow-xl">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agents[selectedAgent].gradient} flex items-center justify-center flex-shrink-0`}>
                      {(() => {
                        const IconComponent = agents[selectedAgent].icon;
                        return <IconComponent className="w-8 h-8 text-white" />;
                      })()}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl mb-2">{agents[selectedAgent].name}</h3>
                      <p className={`text-lg bg-gradient-to-r ${agents[selectedAgent].gradient} bg-clip-text text-transparent`}>
                        {agents[selectedAgent].tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {agents[selectedAgent].description}
                  </p>

                  {/* How It Works */}
                  <div className="mb-8">
                    <h4 className="text-xl mb-4 flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${agents[selectedAgent].gradient} flex items-center justify-center`}>
                        <span className="text-white text-sm">⚙️</span>
                      </div>
                      How It Works
                    </h4>
                    <ul className="space-y-3">
                      {agents[selectedAgent].howItWorks.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${agents[selectedAgent].gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <span className="text-white text-xs">{index + 1}</span>
                          </div>
                          <span className="text-gray-600 leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefit */}
                  <div className={`p-6 rounded-xl ${colorClasses[agents[selectedAgent].color].replace('text-', 'bg-').replace('-700', '-50')} border ${colorClasses[agents[selectedAgent].color].split(' ')[2]}`}>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 text-2xl">✨</div>
                      <div>
                        <h5 className="font-medium mb-2">The Benefit</h5>
                        <p className="text-gray-700 leading-relaxed">{agents[selectedAgent].benefit}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AgentsDeepDive;