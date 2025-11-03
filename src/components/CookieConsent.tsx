"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Cookie, X, Shield, CheckCircle, XCircle } from "lucide-react";
import {
  getConsentStatus,
  setConsentStatus,
  loadTrackingScripts,
  type ConsentStatus,
} from "../utils/cookieConsent";

export function CookieConsent() {
  const [consentStatus, setConsentStatusState] = useState<ConsentStatus>('pending');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check consent status on mount
    const status = getConsentStatus();
    setConsentStatusState(status);
    
    // Show banner if no decision has been made
    if (status === 'pending') {
      // Delay showing the banner slightly to not interfere with page load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setConsentStatus('accepted');
    setConsentStatusState('accepted');
    setIsVisible(false);
    
    // Load tracking scripts
    loadTrackingScripts();
  };

  const handleReject = () => {
    setConsentStatus('rejected');
    setConsentStatusState('rejected');
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
    // User closed without deciding - we'll ask again next time
  };

  if (consentStatus !== 'pending') {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <Card className="max-w-5xl mx-auto bg-white border-2 border-gray-200 shadow-2xl">
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Cookie className="w-6 h-6 text-blue-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl mb-2 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        Your Privacy Matters
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed">
                        We use cookies to enhance your browsing experience, analyze site traffic, 
                        and deliver personalized content. By clicking "Accept", you consent to our 
                        use of cookies for analytics and marketing purposes. You can change your 
                        preferences at any time.
                      </p>
                    </div>
                    
                    {/* Close button - desktop only */}
                    <button
                      onClick={handleClose}
                      className="hidden md:block flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label="Close banner"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Privacy info */}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 mb-4">
                    <p className="text-sm text-blue-800">
                      <strong>Note:</strong> GooClaim does not collect personally identifiable 
                      information (PII) through cookies. We only use cookies for site 
                      functionality and anonymous analytics.
                    </p>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={handleAccept}
                      className="flex-1 sm:flex-initial bg-blue-600 hover:bg-blue-700 text-white"
                      size="lg"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Accept Cookies
                    </Button>
                    
                    <Button
                      onClick={handleReject}
                      variant="outline"
                      className="flex-1 sm:flex-initial border-gray-300 hover:bg-gray-50"
                      size="lg"
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      Reject Non-Essential
                    </Button>

                    {/* Mobile close button */}
                    <button
                      onClick={handleClose}
                      className="md:hidden text-gray-500 hover:text-gray-700 text-sm underline"
                    >
                      Decide Later
                    </button>
                  </div>

                  {/* Links */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      Learn more about how we protect your privacy in our{' '}
                      <a 
                        href="/privacy-policy" 
                        className="text-blue-600 hover:text-blue-700 underline"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.hash = '#/privacy-policy';
                        }}
                      >
                        Privacy Policy
                      </a>
                      {' '}and{' '}
                      <a 
                        href="/privacy-policy#cookie-policy" 
                        className="text-blue-600 hover:text-blue-700 underline"
                        onClick={(e) => {
                          e.preventDefault();
                          window.location.hash = '#/privacy-policy';
                          setTimeout(() => {
                            document.querySelector('[data-section="what-are-cookies"]')?.scrollIntoView({ behavior: 'smooth' });
                          }, 300);
                        }}
                      >
                        Cookie Policy
                      </a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CookieConsent;
