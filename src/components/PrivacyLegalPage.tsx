"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Shield, Lock, FileText, Cookie, Scale, ChevronRight } from "lucide-react";
import { Navigation } from "./Navigation";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

function Section({ id, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-32">
      {children}
    </section>
  );
}

interface SidebarLinkProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  isActive: boolean;
  onClick: (e: React.MouseEvent) => void;
}

function SidebarLink({ href, icon, title, isActive, onClick }: SidebarLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all w-full text-left ${
        isActive
          ? "bg-blue-50 text-blue-700 font-medium"
          : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <span className="flex-shrink-0">{icon}</span>
      <span className="text-sm truncate">{title}</span>
      {isActive && <ChevronRight className="w-4 h-4 ml-auto" />}
    </button>
  );
}

interface PrivacyLegalPageProps {
  onBackClick?: () => void;
}

export function PrivacyLegalPage({ onBackClick }: PrivacyLegalPageProps) {
  const [activeSection, setActiveSection] = useState("privacy-policy");
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "privacy-policy",
        "terms-of-service",
        "data-processing-agreement",
        "security-overview",
        "cookie-policy",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navigation
        onLogoClick={onBackClick || scrollToTop}
        onAboutClick={onBackClick || (() => {})}
        onAgentsClick={onBackClick || (() => {})}
        onBenefitsClick={onBackClick || (() => {})}
        onComparisonClick={onBackClick || (() => {})}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32">
        {/* Background Elements */}
        <div className="fixed top-20 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="fixed bottom-20 right-20 w-64 h-64 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 pb-8 border-b border-gray-200"
          >
            <p className="text-sm text-gray-600 mb-4">Last updated: October 12, 2025</p>
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Privacy & Legal
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Your trust is our priority. Learn how GooClaim protects your data and ensures compliance
              with healthcare regulations.
            </p>
          </motion.div>

          <div className="flex gap-12 relative pt-40">
            {/* Sidebar Navigation */}
            <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-40 h-fit">
              <nav className="space-y-2">
                <SidebarLink
                  href="#privacy-policy"
                  icon={<Shield className="w-4 h-4" />}
                  title="Privacy Policy"
                  isActive={activeSection === "privacy-policy"}
                  onClick={scrollToSection("privacy-policy")}
                />
                <SidebarLink
                  href="#terms-of-service"
                  icon={<FileText className="w-4 h-4" />}
                  title="Terms of Service"
                  isActive={activeSection === "terms-of-service"}
                  onClick={scrollToSection("terms-of-service")}
                />
                <SidebarLink
                  href="#data-processing-agreement"
                  icon={<Scale className="w-4 h-4" />}
                  title="Data Processing Agreement"
                  isActive={activeSection === "data-processing-agreement"}
                  onClick={scrollToSection("data-processing-agreement")}
                />
                <SidebarLink
                  href="#security-overview"
                  icon={<Lock className="w-4 h-4" />}
                  title="Security Overview"
                  isActive={activeSection === "security-overview"}
                  onClick={scrollToSection("security-overview")}
                />
                <SidebarLink
                  href="#cookie-policy"
                  icon={<Cookie className="w-4 h-4" />}
                  title="Cookie Policy"
                  isActive={activeSection === "cookie-policy"}
                  onClick={scrollToSection("cookie-policy")}
                />
              </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-4xl space-y-16 pb-24">
              {/* Privacy Policy Section */}
              <Section id="privacy-policy">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-3xl mb-2 flex items-center gap-3">
                      <Shield className="w-8 h-8 text-blue-600" />
                      Privacy Policy
                    </h2>
                    <p className="text-gray-600">How we handle your personal information</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl mb-4">Introduction</h3>
                      <p className="text-gray-700 mb-6">
                        GooClaim ("we," "our," or "us") is committed to protecting your privacy and
                        ensuring the security of your personal information. This Privacy Policy explains
                        how we collect, use, disclose, and safeguard your information when you use our
                        healthcare automation platform.
                      </p>
                      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                        <p className="text-sm text-blue-900">
                          <strong>Important:</strong> GooClaim is designed for healthcare providers and
                          organizations. We do not collect or store patient health information (PHI)
                          directly. Our platform processes administrative and billing data in compliance
                          with HIPAA regulations.
                        </p>
                      </div>
                      <p className="text-gray-700 mt-6">
                        By using GooClaim, you agree to the collection and use of information in accordance
                        with this policy. If you do not agree with our policies and practices, please do
                        not use our services.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">Information We Collect</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-lg mb-2">Account Information</h4>
                          <p className="text-gray-700">
                            Name, email address, phone number, organization name, job title, and billing
                            information when you create an account or request a demo.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg mb-2">Usage Data</h4>
                          <p className="text-gray-700">
                            Information about how you interact with our platform, including feature usage,
                            session duration, clicks, and navigation patterns.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg mb-2">Technical Information</h4>
                          <p className="text-gray-700">
                            IP address, browser type, device information, operating system, and cookies for
                            authentication and analytics purposes.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg mb-2">Business Data</h4>
                          <p className="text-gray-700">
                            Claims data, prior authorization requests, medical codes, and other
                            administrative healthcare information that you input into our system.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">How We Use Information</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Provide, operate, and maintain our healthcare automation services</li>
                        <li>Process claims, prior authorizations, and medical coding requests</li>
                        <li>Improve, personalize, and expand our platform capabilities</li>
                        <li>Communicate with you about updates, support, and service-related notices</li>
                        <li>Analyze usage patterns to enhance user experience and performance</li>
                        <li>Detect, prevent, and address technical issues or fraudulent activity</li>
                        <li>Comply with legal obligations and regulatory requirements</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">Data Security</h3>
                      <p className="text-gray-700 mb-4">
                        We implement industry-standard security measures to protect your information from
                        unauthorized access, alteration, disclosure, or destruction:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>End-to-end encryption for data in transit (TLS 1.3)</li>
                        <li>AES-256 encryption for data at rest</li>
                        <li>Regular security audits and penetration testing</li>
                        <li>Multi-factor authentication (MFA) for user accounts</li>
                        <li>Role-based access control (RBAC)</li>
                        <li>SOC 2 Type II compliance</li>
                        <li>HIPAA-compliant infrastructure and processes</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">Sharing of Information</h3>
                      <p className="text-gray-700 mb-4">
                        We do not sell, rent, or trade your personal information. We may share information
                        only in the following circumstances:
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg mb-2">Service Providers</h4>
                          <p className="text-gray-700">
                            With trusted third-party vendors who assist in operating our platform (hosting,
                            analytics, payment processing) under strict confidentiality agreements.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg mb-2">Legal Requirements</h4>
                          <p className="text-gray-700">
                            When required by law, court order, or government regulation, or to protect our
                            rights, property, or safety.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg mb-2">Business Transfers</h4>
                          <p className="text-gray-700">
                            In connection with a merger, acquisition, or sale of assets, with notice
                            provided to affected users.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg mb-2">With Your Consent</h4>
                          <p className="text-gray-700">
                            With your explicit permission for specific purposes you authorize.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">Contact Information</h3>
                      <p className="text-gray-700 mb-4">
                        For questions or concerns about this Privacy Policy, please contact us:
                      </p>
                      <div className="space-y-2 text-gray-700">
                        <p>
                          <strong>Email:</strong>{" "}
                          <a href="mailto:privacy@gooclaim.com" className="text-blue-600 hover:underline">
                            privacy@gooclaim.com
                          </a>
                        </p>
                        <p>
                          <strong>Phone:</strong> 1-800-GOO-CLAIM
                        </p>
                        <p>
                          <strong>Address:</strong>
                          <br />
                          GooClaim Privacy Office
                          <br />
                          123 Healthcare Blvd, Suite 500
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Section>

              {/* Terms of Service Section */}
              <Section id="terms-of-service">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 pt-8 border-t border-gray-200"
                >
                  <div>
                    <h2 className="text-3xl mb-2 flex items-center gap-3">
                      <FileText className="w-8 h-8 text-blue-600" />
                      Terms of Service
                    </h2>
                    <p className="text-gray-600">Legal terms governing your use of GooClaim</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl mb-4">Use of Service</h3>
                      <p className="text-gray-700 mb-4">
                        By accessing and using GooClaim, you agree to comply with these Terms of Service.
                        GooClaim provides healthcare automation software designed for medical practices,
                        hospitals, and healthcare organizations.
                      </p>
                      <p className="text-gray-700">
                        <strong>Eligibility:</strong> You must be at least 18 years old and have the
                        authority to enter into this agreement on behalf of your organization.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">User Responsibilities</h3>
                      <p className="text-gray-700 mb-4">You agree to:</p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li>Provide accurate and complete information when creating an account</li>
                        <li>Maintain the security and confidentiality of your login credentials</li>
                        <li>Use the service only for lawful purposes in compliance with healthcare regulations</li>
                        <li>Not attempt to gain unauthorized access to our systems or networks</li>
                        <li>Not use the service to transmit malicious code or harmful content</li>
                        <li>Notify us immediately of any security breaches or unauthorized access</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">Limitation of Liability</h3>
                      <p className="text-gray-700 mb-4">
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, GOOCLAIM SHALL NOT BE LIABLE FOR ANY
                        INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR
                        RELATED TO YOUR USE OF THE SERVICE.
                      </p>
                      <p className="text-gray-700">
                        Our total liability for any claims shall not exceed the amount you paid us in the 12
                        months preceding the claim.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Section>

              {/* Data Processing Agreement Section */}
              <Section id="data-processing-agreement">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 pt-8 border-t border-gray-200"
                >
                  <div>
                    <h2 className="text-3xl mb-2 flex items-center gap-3">
                      <Scale className="w-8 h-8 text-blue-600" />
                      Data Processing Agreement (DPA)
                    </h2>
                    <p className="text-gray-600">HIPAA Business Associate Agreement</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl mb-4">Security Measures</h3>
                      <p className="text-gray-700 mb-4">
                        GooClaim implements technical and organizational measures to ensure HIPAA compliance:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>Encryption at rest and in transit</li>
                          <li>Audit logging and monitoring</li>
                          <li>Employee training and NDAs</li>
                          <li>Business continuity planning</li>
                        </ul>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700">
                          <li>Access controls and authentication</li>
                          <li>Regular security assessments</li>
                          <li>Incident response procedures</li>
                          <li>Secure development practices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Section>

              {/* Security Overview Section */}
              <Section id="security-overview">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 pt-8 border-t border-gray-200"
                >
                  <div>
                    <h2 className="text-3xl mb-2 flex items-center gap-3">
                      <Lock className="w-8 h-8 text-blue-600" />
                      Security Overview
                    </h2>
                    <p className="text-gray-600">Our commitment to data protection</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl mb-4">Infrastructure</h3>
                      <p className="text-gray-700 mb-4">
                        GooClaim is built on enterprise-grade, HIPAA-compliant cloud infrastructure:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg mb-2">Azure Infrastructure</h4>
                          <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Multi-region redundancy</li>
                            <li>99.99% uptime SLA</li>
                            <li>SOC 2 Type II certified</li>
                            <li>HIPAA-eligible services</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg mb-2">Network Security</h4>
                          <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>DDoS protection</li>
                            <li>Web Application Firewall (WAF)</li>
                            <li>Intrusion detection systems</li>
                            <li>Network segmentation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">Compliance Alignment</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="text-base mb-1">HIPAA</h4>
                          <p className="text-sm text-gray-600">
                            Health Insurance Portability and Accountability Act
                          </p>
                        </div>
                        <div>
                          <h4 className="text-base mb-1">SOC 2 Type II</h4>
                          <p className="text-sm text-gray-600">Service Organization Control</p>
                        </div>
                        <div>
                          <h4 className="text-base mb-1">GDPR</h4>
                          <p className="text-sm text-gray-600">General Data Protection Regulation</p>
                        </div>
                        <div>
                          <h4 className="text-base mb-1">CCPA</h4>
                          <p className="text-sm text-gray-600">California Consumer Privacy Act</p>
                        </div>
                        <div>
                          <h4 className="text-base mb-1">HITECH</h4>
                          <p className="text-sm text-gray-600">
                            Health Information Technology for Economic and Clinical Health Act
                          </p>
                        </div>
                        <div>
                          <h4 className="text-base mb-1">ISO 27001</h4>
                          <p className="text-sm text-gray-600">
                            Information Security Management (In Progress)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Section>

              {/* Cookie Policy Section */}
              <Section id="cookie-policy">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8 pt-8 border-t border-gray-200"
                >
                  <div>
                    <h2 className="text-3xl mb-2 flex items-center gap-3">
                      <Cookie className="w-8 h-8 text-blue-600" />
                      Cookie Policy
                    </h2>
                    <p className="text-gray-600">How we use cookies and tracking technologies</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl mb-4">What Are Cookies</h3>
                      <p className="text-gray-700 mb-4">
                        Cookies are small text files stored on your device when you visit our website. They
                        help us provide a better user experience by remembering your preferences and
                        analyzing how you use our platform.
                      </p>
                      <p className="text-gray-700">
                        <strong>Your Control:</strong> You can manage cookie preferences through our consent
                        banner or your browser settings. Rejecting cookies may limit some functionality.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">Types of Cookies We Use</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg mb-2">Essential Cookies (Always Active)</h4>
                          <p className="text-gray-700 mb-2">
                            Required for the website to function properly. These cannot be disabled.
                          </p>
                          <p className="text-sm text-gray-600">
                            Examples: Authentication, security, session management, cookie consent preference
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg mb-2">Analytics Cookies (Optional)</h4>
                          <p className="text-gray-700 mb-2">
                            Help us understand how visitors interact with our website.
                          </p>
                          <p className="text-sm text-gray-600">
                            Examples: Page views, session duration, feature usage, error tracking
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg mb-2">Functional Cookies (Optional)</h4>
                          <p className="text-gray-700 mb-2">
                            Enable enhanced functionality and personalization.
                          </p>
                          <p className="text-sm text-gray-600">
                            Examples: Language preferences, display settings, recent searches
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">No Advertising Cookies</h3>
                      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                        <h4 className="text-base mb-2">Privacy-First Approach</h4>
                        <p className="text-sm text-blue-900 mb-2">
                          <strong>GooClaim does NOT use advertising cookies.</strong> We do not sell your
                          data to third parties or display targeted advertisements.
                        </p>
                        <p className="text-sm text-gray-700">
                          Any analytics cookies we use are solely for improving our service and understanding
                          user behavior on an aggregate, anonymized basis.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl mb-4">Contact Information</h3>
                      <p className="text-gray-700 mb-2">For questions about our use of cookies:</p>
                      <p className="text-gray-700">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:privacy@gooclaim.com" className="text-blue-600 hover:underline">
                          privacy@gooclaim.com
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </Section>

              {/* Footer Note */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Last Updated:</strong> October 12, 2025
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  We may update this policy periodically. Material changes will be communicated via email
                  to registered users.
                </p>
                <div className="flex gap-4 text-sm">
                  <button
                    onClick={() => window.location.href = "mailto:contact@gooclaim.com"}
                    className="text-blue-600 hover:underline"
                  >
                    Contact Us
                  </button>
                  <span className="text-gray-400">•</span>
                  <button onClick={() => window.print()} className="text-blue-600 hover:underline">
                    Print This Page
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacyLegalPage;
