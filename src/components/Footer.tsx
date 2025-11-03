"use client";

import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github,
  Shield,
  Lock,
  RefreshCw,
  FileText,
  ExternalLink,
  Heart
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import logoImage from 'figma:asset/f1163d58a8bf72259e2770440f27e5787ba374be.png';

function Logomark() {
  return (
    <div className="relative shrink-0 size-10">
      <img
        src={logoImage}
        alt="GooClaim Logo"
        className="block size-full object-contain"
      />
    </div>
  );
}

interface FooterProps {
  onPrivacyClick?: () => void;
  onLogoClick?: () => void;
}

export function Footer({ onPrivacyClick, onLogoClick }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  const handleLogoClick = () => {
    if (onLogoClick) {
      onLogoClick();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

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

  const navigationLinks = [
    { name: "About", onClick: () => {} },
    { name: "AI Agents", onClick: () => {} },
    { name: "Benefits", onClick: () => {} },
    { name: "Comparison", onClick: () => {} }
  ];

  const productLinks = [
    { name: "AI Medical Coding", href: "#" },
    { name: "Prior Authorization", href: "#" },
    { name: "Denial Management", href: "#" },
    { name: "Patient Intake", href: "#" },
    { name: "Documentation", href: "https://documentation.gooclaim.com/" }
  ];

  const resourceLinks = [
    { name: "Case Studies", href: "#" },
    { name: "White Papers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Training", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Data Processing Agreement", href: "#" },
    { name: "Security", href: "#" }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-900" }
  ];

  const complianceItems = [];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),transparent)]" />
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"
      />
      <motion.div 
        animate={{ 
          x: [0, -20, 0],
          y: [0, 15, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-xl"
      />

      <div className="container mx-auto px-6 py-16 relative">
        <TooltipProvider>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Main Footer Content */}
            <div className="max-w-4xl mx-auto">
              {/* Company Info */}
              <motion.div variants={itemVariants} className="space-y-8 text-center">
                <button
                  onClick={handleLogoClick}
                  className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity group"
                >
                  <div className="group-hover:scale-105 transition-transform">
                    <Logomark />
                  </div>
                  <div className="font-bold text-gray-900 text-3xl tracking-[-1.12px] px-[-10px] py-[0px]">
                    GooClaim
                  </div>
                </button>
                
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  Transforming healthcare administration through autonomous AI agents. 
                  Eliminate manual workflows, reduce errors, and accelerate patient care delivery.
                </p>
                
                {/* Contact Info */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                  <a href="mailto:contact@gooclaim.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>contact@gooclaim.com</span>
                  </a>
                  <a href="tel:+917762925373" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>+91 7762925373</span>
                  </a>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Bengaluru, India</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className={`w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-600 transition-all duration-300 hover:shadow-md hover:scale-105 ${social.color}`}
                      aria-label={social.name}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Compliance Section */}
            <motion.div 
              variants={itemVariants}
              className="py-8 border-t border-gray-200"
            >
              <div className="text-center space-y-6">
                <h3 className="text-lg text-gray-900">Enterprise-Grade Compliance</h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm text-gray-600"
                >
                  <span className="inline-flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    Compliance certifications coming soon - Currently in foundation stage
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Section */}
            <motion.div 
              variants={itemVariants}
              className="pt-8 border-t border-gray-200"
            >
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Copyright */}
                <div className="flex items-center gap-2 text-gray-600">
                  <span>© {currentYear} Gooclaim. All rights reserved.</span>
                  <span className="text-red-500">
                    Automating the Claims That Hold Healthcare Back
                  </span>
                </div>

                {/* Legal Links */}
                <div className="flex items-center gap-6 flex-wrap">
                  <button
                    onClick={onPrivacyClick}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                  >
                    Privacy & Legal
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Back to Top Button */}
            <motion.div 
              variants={itemVariants}
              className="text-center pt-8"
            >
              <button
                onClick={onLogoClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↑
                </motion.div>
                Back to Top
              </button>
            </motion.div>
          </motion.div>
        </TooltipProvider>
      </div>
    </footer>
  );
}

export default Footer;