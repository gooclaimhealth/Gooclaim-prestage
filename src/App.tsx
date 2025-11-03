import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Navigation } from "./components/Navigation";
import { NewHero } from "./components/NewHero";
import { CookieConsent } from "./components/CookieConsent";
import { DocumentHead } from "./components/DocumentHead";
import { Toaster } from "./components/ui/sonner";

// Below-the-fold components - lazy loaded
const WhatIsGooClaim = lazy(() => import("./components/WhatIsGooClaim"));
const TheProblem = lazy(() => import("./components/TheProblem"));
const TheSolution = lazy(() => import("./components/TheSolution"));
const AgentsDeepDive = lazy(() => import("./components/AgentsDeepDive"));
const BenefitsSection = lazy(() => import("./components/BenefitsSection"));
const WhyDifferent = lazy(() => import("./components/WhyDifferent"));
const SimpleCTA = lazy(() => import("./components/SimpleCTA"));
const Footer = lazy(() => import("./components/Footer"));
const PrivacyLegalPage = lazy(() => import("./components/PrivacyLegalPage"));

type Page = "home" | "privacy";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const aboutRef = useRef<HTMLDivElement>(null);
  const agentsRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleGetStarted = () => {
    window.open('https://calendly.com/contact-gooclaim/30min', '_blank');
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    scrollToTop();
  };

  const navigateToPrivacy = () => {
    setCurrentPage("privacy");
    scrollToTop();
  };

  useEffect(() => {
    // Defer non-critical scripts
    const deferredScripts = () => {
      // Any analytics or tracking scripts would go here
    };
    
    if (document.readyState === 'complete') {
      deferredScripts();
    } else {
      window.addEventListener('load', deferredScripts);
      return () => window.removeEventListener('load', deferredScripts);
    }
  }, []);

  if (currentPage === "privacy") {
    return (
      <>
        <DocumentHead />
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <PrivacyLegalPage onBackClick={navigateToHome} />
        </Suspense>
        <Toaster />
      </>
    );
  }

  return (
    <>
      <DocumentHead />
      <div className="min-h-screen bg-white">
        <Navigation
          onLogoClick={scrollToTop}
          onAboutClick={() => scrollToSection(aboutRef)}
          onAgentsClick={() => scrollToSection(agentsRef)}
          onBenefitsClick={() => scrollToSection(benefitsRef)}
          onComparisonClick={() => scrollToSection(comparisonRef)}
        />

        <main>
          {/* Hero - Not lazy loaded */}
          <NewHero onGetStarted={handleGetStarted} />

          {/* Lazy loaded sections */}
          <Suspense fallback={<div className="h-screen" />}>
            <div ref={aboutRef}>
              <WhatIsGooClaim />
            </div>
            <TheProblem />
            <TheSolution />
            <div ref={agentsRef}>
              <AgentsDeepDive />
            </div>
            <div ref={benefitsRef}>
              <BenefitsSection />
            </div>
            <div ref={comparisonRef}>
              <WhyDifferent />
            </div>
            <SimpleCTA />
            <Footer onPrivacyClick={navigateToPrivacy} onLogoClick={scrollToTop} />
          </Suspense>
        </main>

        <CookieConsent />
        <Toaster />
      </div>
    </>
  );
}

export default App;
