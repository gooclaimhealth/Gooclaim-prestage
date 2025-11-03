import { Navigation } from "../Navigation";
import { Footer } from "../Footer";
import { HowItWorks } from "../HowItWorks";
import { SystemComparison } from "../SystemComparison";
import { MCPExplainer } from "../MCPExplainer";
import { InteractiveTimeline } from "../InteractiveTimeline";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { 
  Zap, 
  Shield, 
  Clock, 
  Target,
  ArrowRight,
  Bot,
  BarChart3,
  CheckCircle,
  Sparkles
} from "lucide-react";

interface HowItWorksPageProps {
  onLogoClick: () => void;
  onFeaturesClick: () => void;
  onHowItWorksClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onPricingClick: () => void;
  onPrivacyPolicyClick: () => void;
  onDemoClick: () => void;
  currentPage?: string;
}

export function HowItWorksPage({
  onLogoClick,
  onFeaturesClick,
  onHowItWorksClick,
  onAboutClick,
  onContactClick,
  onPricingClick,
  onPrivacyPolicyClick,
  onDemoClick,
  currentPage
}: HowItWorksPageProps) {
  
  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        onLogoClick={onLogoClick}
        onFeaturesClick={onFeaturesClick}
        onHowItWorksClick={onHowItWorksClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
        onPricingClick={onPricingClick}
        onPrivacyPolicyClick={onPrivacyPolicyClick}
        onDemoClick={onDemoClick}
        currentPage={currentPage}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/60 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="secondary" className="mb-6 px-6 py-3 bg-gradient-to-r from-blue-50 to-green-50 text-blue-700 border-blue-200 text-lg">
              🚀 Complete Workflow Automation
            </Badge>
            
            <h1 className="text-5xl lg:text-6xl mb-8 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              How GooClaim Works
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
              Discover how our autonomous AI agents transform healthcare operations 
              from manual chaos to intelligent automation
            </p>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg text-blue-600 mb-1">99%</div>
                <div className="text-sm text-gray-600">Time Savings</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg text-green-600 mb-1">95%</div>
                <div className="text-sm text-gray-600">Accuracy</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg text-purple-600 mb-1">Zero</div>
                <div className="text-sm text-gray-600">Manual Work</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-3">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div className="text-lg text-orange-600 mb-1">Real-time</div>
                <div className="text-sm text-gray-600">Analytics</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={onDemoClick}
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                onClick={onContactClick}
                variant="outline"
                size="lg"
                className="px-8 py-4 border-2 border-gray-200 hover:border-blue-300 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main How It Works Component */}
      <HowItWorks />

      {/* System Comparison */}
      <SystemComparison />

      {/* MCP Explainer */}
      <MCPExplainer />

      {/* Interactive Timeline */}
      <InteractiveTimeline />

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50/30 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-200/60 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]" />
        
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-green-500" />
              <Badge variant="secondary" className="px-6 py-3 bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border-green-200 text-lg">
                Ready to Transform Your Operations?
              </Badge>
            </div>
            
            <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              See GooClaim in Action
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience the power of autonomous AI agents firsthand. 
              Book a personalized demo and discover how we can transform your healthcare operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={onDemoClick}
                size="lg"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Free Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button
                onClick={onContactClick}
                variant="outline"
                size="lg"
                className="px-8 py-4 border-2 border-gray-200 hover:border-blue-300 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                Contact Sales
              </Button>
            </div>

            {/* Key Success Metrics */}
            <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl text-blue-600 mb-2"> 2 min </div>
                <div className="text-sm text-gray-600">Average processing time</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl text-green-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Accuracy rate</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-white/50"
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Bot className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl text-purple-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">AI automation</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer 
        onLogoClick={onLogoClick}
        onFeaturesClick={onFeaturesClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
      />
    </div>
  );
}

export default HowItWorksPage;