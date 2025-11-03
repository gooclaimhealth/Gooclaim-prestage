import { Card } from "./ui/card";
import { ArrowRight, User, Bot, FileCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: User,
      title: "Patient Encounter",
      description: "Patient visits healthcare provider. Medical encounter and documentation is generated.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Bot,
      title: "AI Agent Extracts & Codes",
      description: "Gooclaim agents automatically extract medical data and generate accurate billing codes.",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: FileCheck,
      title: "Claim Filed & Monitored",
      description: "Claims are automatically filed, validated in real-time, and continuously monitored for issues.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            How Gooclaim Works for You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI agents handle the entire insurance operations workflow automatically, 
            from patient encounter to claim resolution.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-300 via-green-300 to-purple-300 transform -translate-y-1/2" />
          
          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={index} className="relative">
                  <Card className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                    <div className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-6`}>
                      <Icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                      </div>
                      
                      <h3 className="text-xl">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-6 mb-2">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}