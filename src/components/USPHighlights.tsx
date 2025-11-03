import { Card } from "./ui/card";
import { Code, TrendingUp, Shield } from "lucide-react";

export function USPHighlights() {
  const usps = [
    {
      icon: Code,
      title: "Autonomous Claim Coding",
      description: "AI agents automatically extract and code medical encounters with 99%+ accuracy",
      color: "blue"
    },
    {
      icon: TrendingUp,
      title: "Real-time Denial Prediction",
      description: "Predict and prevent claim denials before submission with advanced ML models",
      color: "green"
    },
    {
      icon: Shield,
      title: "Prior Auth in Minutes",
      description: "Automated prior authorization processing that used to take days, now in minutes",
      color: "purple"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
              green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
              purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
            };
            
            return (
              <Card 
                key={index}
                className="group p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${colorClasses[usp.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl group-hover:text-blue-600 transition-colors">
                      {usp.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {usp.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}