import { Card } from "./ui/card";
import { Quote, Star, Rocket, Bot } from "lucide-react";

export function SocialProof() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Pre-Launch Message */}
        <div className="text-center mb-16">
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 border-0 shadow-xl bg-gradient-to-r from-blue-50 to-green-50">
            <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-6" />
            
            <blockquote className="text-2xl lg:text-3xl text-gray-800 mb-6 leading-relaxed">
              "Building the future of healthcare automation — launching soon."
            </blockquote>
            
            <div className="flex items-center justify-center gap-3 mb-4">
              <Bot className="w-6 h-6 text-blue-600" />
              <span className="text-lg text-blue-600">AI-Powered Healthcare Revenue Cycle</span>
            </div>
            
            <cite className="text-gray-600">
              — The GooClaim Team
            </cite>
          </Card>
        </div>

        {/* Future Vision */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 via-blue-600 to-green-600 bg-clip-text text-transparent">
              The Future of Healthcare Admin 
              <span className="block">is Autonomous</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be among the first to experience AI-powered automation that transforms 
              healthcare operations from manual chaos to intelligent workflows.
            </p>
          </div>

          {/* Coming Soon Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-8">
            <div className="text-center">
              <div className="text-4xl text-blue-600 mb-2">7 Agents</div>
              <div className="text-gray-600">Autonomous AI Workflow</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Always-On Processing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Audit Trail Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;