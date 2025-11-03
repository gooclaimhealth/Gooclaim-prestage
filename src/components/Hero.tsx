import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, TrendingUp, Shield, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-green-200/20 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="relative container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit px-4 py-2 bg-blue-100 text-blue-700 border-blue-200">
              🚀 AI Autopilot for Healthcare Revenue
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Reclaim Your Time. 
                <span className="block text-blue-600">Automate Insurance Ops</span>
                <span className="block">with AI Agents.</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Say goodbye to coding bottlenecks, claim delays, and prior auth chaos. 
                Gooclaim handles it — autonomously, accurately, and fast.
              </p>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white">
                Get a Demo
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 border-gray-300 hover:bg-gray-50">
                <Play className="w-4 h-4 mr-2" />
                How It Works
              </Button>
            </div>
            
            {/* Trust Bar */}
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by leaders in healthcare</p>
              <div className="flex items-center gap-8 opacity-60">
                <div className="h-8 w-24 bg-gray-300 rounded" />
                <div className="h-8 w-24 bg-gray-300 rounded" />
                <div className="h-8 w-24 bg-gray-300 rounded" />
                <div className="h-8 w-24 bg-gray-300 rounded" />
              </div>
            </div>
          </div>
          
          {/* Right Content - AI Demo */}
          <div className="relative">
            <Card className="p-6 bg-white/70 backdrop-blur-sm border-0 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm">AI Agent Processing Claims...</span>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse delay-100" />
                  <div className="h-4 bg-green-200 rounded w-2/3 animate-pulse delay-200" />
                </div>
                
                <div className="grid grid-cols-3 gap-3 pt-4">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Code className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                    <span className="text-xs text-gray-600">Auto Coding</span>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-600" />
                    <span className="text-xs text-gray-600">Prediction</span>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-6 h-6 mx-auto mb-2 text-purple-600" />
                    <span className="text-xs text-gray-600">Auth Check</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}