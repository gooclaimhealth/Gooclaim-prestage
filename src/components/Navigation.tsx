"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import logoImage from 'figma:asset/f1163d58a8bf72259e2770440f27e5787ba374be.png';
import { DemoForm } from "./DemoForm";

function Logomark() {
  return (
    <div className="relative shrink-0 size-9">
      <img
        src={logoImage}
        alt="GooClaim Logo"
        className="block size-full object-contain"
      />
    </div>
  );
}

interface LogoProps {
  onClick: () => void;
}

function Logo({ onClick }: LogoProps) {
  return (
    <button
      onClick={onClick}
      className="h-8 hover:opacity-80 transition-opacity z-10 relative"
    >
      <div className="box-border content-stretch flex flex-row gap-1 h-8 items-center justify-start p-0 relative">
        <Logomark />
        <div className="font-bold leading-none relative shrink-0 text-[#1b2228] text-[28px] text-left text-nowrap tracking-[-1.12px]">
          <p className="block leading-none whitespace-pre">GooClaim</p>
        </div>
      </div>
    </button>
  );
}

interface PageLinkProps {
  text: string;
  onClick: () => void;
}

function PageLink({ text, onClick }: PageLinkProps) {
  return (
    <button
      onClick={onClick}
      className="font-medium leading-none text-[15px] text-left text-nowrap transition-colors duration-200 relative group w-full lg:w-auto text-left text-[#1b2228] hover:text-[#0d99ff]"
    >
      <p className="block leading-[20px] whitespace-pre">{text}</p>
      <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-[#0d99ff] transition-transform duration-200 scale-x-0 group-hover:scale-x-100" />
    </button>
  );
}

interface PageLinksProps {
  onAboutClick: () => void;
  onAgentsClick: () => void;
  onBenefitsClick: () => void;
  onComparisonClick: () => void;
}

function PageLinks({ onAboutClick, onAgentsClick, onBenefitsClick, onComparisonClick }: PageLinksProps) {
  return (
    <div className="hidden lg:flex box-border content-stretch flex-row gap-8 items-center justify-center p-0 relative">
      <PageLink text="About" onClick={onAboutClick} />
      <PageLink text="Agents" onClick={onAgentsClick} />
      <PageLink text="Benefits" onClick={onBenefitsClick} />
      <PageLink text="Comparison" onClick={onComparisonClick} />
    </div>
  );
}

interface ButtonFilledProps {
  onClick?: () => void;
}

function ButtonFilled({ onClick }: ButtonFilledProps) {
  return (
    <button 
      onClick={onClick}
      className="relative bg-gradient-to-br from-[#0d99ff] to-[#0b7ce6] rounded-2xl hover:from-[#0b87e6] hover:to-[#0968d1] hover:scale-105 transition-all duration-300 shadow-[0px_4px_16px_0px_rgba(13,153,255,0.3)] hover:shadow-[0px_8px_24px_0px_rgba(13,153,255,0.4)] w-full lg:w-auto backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/[0.1] rounded-2xl" />
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row items-center justify-center px-5 py-2.5 relative">
          <div className="font-bold leading-none text-[#ffffff] text-[15px] text-center text-nowrap">
            <p className="block leading-[20px] whitespace-pre">Get free Demo </p>
          </div>
        </div>
      </div>
    </button>
  );
}

interface ButtonGroupProps {
  onDemoClick: () => void;
}

function ButtonGroup({ onDemoClick }: ButtonGroupProps) {
  return (
    <div className="hidden lg:flex box-border content-stretch flex-row gap-3.5 items-center justify-start p-0 relative">
      <ButtonFilled onClick={onDemoClick} />
    </div>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onAboutClick: () => void;
  onAgentsClick: () => void;
  onBenefitsClick: () => void;
  onComparisonClick: () => void;
  onDemoClick: () => void;
}

function MobileMenu({ isOpen, onClose, onAboutClick, onAgentsClick, onBenefitsClick, onComparisonClick, onDemoClick }: MobileMenuProps) {
  const handleAboutClick = () => {
    onAboutClick();
    onClose();
  };

  const handleAgentsClick = () => {
    onAgentsClick();
    onClose();
  };

  const handleBenefitsClick = () => {
    onBenefitsClick();
    onClose();
  };

  const handleComparisonClick = () => {
    onComparisonClick();
    onClose();
  };

  const handleDemoClick = () => {
    onDemoClick();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="lg:hidden fixed inset-0 bg-black/10 backdrop-blur-md z-40"
            style={{ top: 0 }}
          />
          
          {/* Mobile menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 z-50"
          >
            <div className="backdrop-blur-[64px] backdrop-saturate-150 bg-gradient-to-br from-white/[0.15] via-white/[0.08] to-white/[0.15] rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.12)] p-6 border border-white/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] via-transparent to-green-500/[0.02] rounded-[24px]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.1] to-transparent rounded-[24px]" />
              <div className="relative z-10">
              <div className="flex flex-col gap-6">
                {/* Mobile Page Links */}
                <div className="flex flex-col gap-4">
                  <PageLink text="About" onClick={handleAboutClick} />
                  <PageLink text="Agents" onClick={handleAgentsClick} />
                  <PageLink text="Benefits" onClick={handleBenefitsClick} />
                  <PageLink text="Comparison" onClick={handleComparisonClick} />
                </div>
                
                {/* Mobile Buttons */}
                <div className="flex flex-col gap-3">
                  <ButtonFilled onClick={handleDemoClick} />
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

interface NavigationProps {
  onLogoClick: () => void;
  onAboutClick: () => void;
  onAgentsClick: () => void;
  onBenefitsClick: () => void;
  onComparisonClick: () => void;
  onDemoClick?: () => void;
}

export function Navigation({ onLogoClick, onAboutClick, onAgentsClick, onBenefitsClick, onComparisonClick, onDemoClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleDemoClick = () => {
    window.open('https://calendly.com/contact-gooclaim/30min', '_blank');
    if (onDemoClick) onDemoClick();
  };

  const handleMobileDemoClick = () => {
    window.open('https://calendly.com/contact-gooclaim/30min', '_blank');
    closeMobileMenu();
    if (onDemoClick) onDemoClick();
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Pilot Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 border-b border-blue-400">
        <div className="container mx-auto px-6 py-2.5">
          <div className="flex items-center justify-center gap-2 text-white">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <p className="text-center text-sm md:text-base">
              <span className="font-medium">GooClaim will be onboarding our pilot soon</span>
            </p>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl p-4">
        <div
          className="backdrop-blur-[64px] backdrop-saturate-150 relative rounded-[24px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.12)] size-full border border-white/20"
          data-name="Container"
        >
          <div className="flex flex-row items-center relative size-full">
            <div className="box-border content-stretch flex flex-row gap-24 items-center justify-between lg:justify-start overflow-clip pl-10 pr-5 py-5 relative size-full">
              <div
                className="absolute bg-gradient-to-r from-white/[0.15] via-white/[0.08] to-white/[0.15] inset-0 rounded-[24px]"
                data-name="bg"
              />
              <div
                className="absolute bg-gradient-to-br from-blue-500/[0.02] via-transparent to-green-500/[0.02] inset-0 rounded-[24px]"
                data-name="gradient-overlay"
              />
              <div
                className="absolute inset-0 rounded-[24px] bg-gradient-to-b from-white/[0.1] to-transparent"
                data-name="glass-shine"
              />
              
              {/* Logo */}
              <Logo onClick={onLogoClick} />
              
              {/* Desktop Navigation */}
              <PageLinks 
                onAboutClick={onAboutClick}
                onAgentsClick={onAgentsClick}
                onBenefitsClick={onBenefitsClick}
                onComparisonClick={onComparisonClick}
              />
              
              {/* Desktop Buttons */}
              <div className="hidden lg:block ml-auto">
                <ButtonGroup 
                  onDemoClick={handleDemoClick} 
                />
              </div>
              
              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="lg:hidden text-[#1b2228] p-2 hover:bg-gradient-to-br hover:from-white/[0.2] hover:to-white/[0.1] rounded-xl transition-all duration-300 relative z-10 touch-manipulation backdrop-blur-xl border border-white/20 hover:border-white/40"
                type="button"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={closeMobileMenu}
          onAboutClick={onAboutClick}
          onAgentsClick={onAgentsClick}
          onBenefitsClick={onBenefitsClick}
          onComparisonClick={onComparisonClick}
          onDemoClick={handleMobileDemoClick}
        />
      </div>

      {/* Demo Form Modal */}
      <DemoForm 
        isOpen={isDemoFormOpen} 
        onClose={() => setIsDemoFormOpen(false)} 
      />
    </motion.nav>
  );
}