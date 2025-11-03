"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";
import { Navigation } from "./Navigation";
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  Shield, 
  Globe,
  Heart,
  Brain,
  Zap,
  Building,
  CheckCircle
} from "lucide-react";
import image_e53b55aebbed41bf33b69425761f31554bf2e81a from 'figma:asset/e53b55aebbed41bf33b69425761f31554bf2e81a.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface AboutPageProps {
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

const teamMembers = [
  {
    name: "Kumar Mayank",
    image: image_e53b55aebbed41bf33b69425761f31554bf2e81a
  }
];

const values = [
  {
    icon: Heart,
    title: "Patient-First",
    description: "Every decision we make prioritizes patient outcomes and healthcare accessibility."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We maintain the highest standards of data protection and regulatory compliance."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push the boundaries of what's possible with AI in healthcare operations."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with healthcare professionals to build solutions that truly matter."
  }
];

const milestones = [
  {
    year: "2025",
    title: "Company Founded",
    description: "Started with a vision to automate healthcare backend operations"
  },
  {
    year: "2025",
    title: "First AI Models",
    description: "Launched claim coding automation with 97.4% accuracy"
  }
];

export function AboutPage({ 
  onLogoClick, 
  onFeaturesClick, 
  onHowItWorksClick,
  onAboutClick, 
  onContactClick, 
  onPricingClick, 
  onDemoClick,
  currentPage 
}: AboutPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <Navigation 
        onLogoClick={onLogoClick}
        onFeaturesClick={onFeaturesClick}
        onHowItWorksClick={onHowItWorksClick}
        onAboutClick={onAboutClick}
        onContactClick={onContactClick}
        onPricingClick={onPricingClick}
        onDemoClick={onDemoClick}
        currentPage={currentPage}
      />

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pt-32 pb-16"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <Badge variant="secondary" className="w-fit px-4 py-2 bg-blue-100 text-blue-700 border-blue-200 mb-6">
            <Heart className="w-4 h-4 mr-2" />
            About GooClaim
          </Badge>
          
          <h1 className="text-4xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Transforming Healthcare
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              with AI Innovation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're on a mission to eliminate administrative burden in healthcare, 
            allowing medical professionals to focus on what matters most: patient care.
          </p>


        </motion.div>

        {/* Mission & Vision */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                Healthcare systems spend billions of hours annually on administrative tasks that could be automated. 
                We believe this time should be redirected to patient care, research, and innovation.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                GooClaim's AI agents work tirelessly behind the scenes, handling claim coding, prior authorizations, 
                denial management, and patient intake with superhuman accuracy and speed.
              </p>
              <div className="space-y-3">
                {[
                  "Reduce administrative burden by 70%",
                  "Increase claim approval rates by 40%",
                  "Process authorizations in minutes, not days",
                  "95% automation, audit-ready and explainable"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-gradient-to-br from-blue-600 to-green-600 text-white border-0">
              <h3 className="text-2xl mb-4">Our Vision</h3>
              <p className="text-lg opacity-90">
                A world where healthcare professionals can focus entirely on healing, 
                while AI handles the complexity of healthcare operations seamlessly and transparently.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do, from product development to customer relationships
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Our Journey</h2>
            <p className="text-gray-600">Key milestones in our mission to transform healthcare operations</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    <span className="text-sm">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-200 mx-auto mt-4" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-lg mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div variants={itemVariants} className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Leadership Team</h2>
            <p className="text-gray-600">Healthcare and AI experts working together to revolutionize the industry</p>
          </div>
          
          <div className="flex justify-center max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="mb-4">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                </div>
                <h3 className="text-lg">{member.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="text-center">
          <Card className="p-12 bg-gradient-to-br from-blue-600 to-green-600 text-white border-0">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl">Ready to Join Our Mission?</h2>
              <p className="text-blue-100 text-lg">
                Be part of the healthcare transformation. Let's build the future of medical operations together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4"
                  onClick={onDemoClick}
                >
                  <Building className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-[rgba(21,93,252,1)] hover:bg-white/10 px-8 py-4"
                  onClick={onContactClick}
                >
                  <Users className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutPage;