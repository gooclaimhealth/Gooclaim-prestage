export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export const pageMetadata: Record<string, PageMetadata> = {
  home: {
    title: "GooClaim - AI-Powered Healthcare Automation",
    description: "Transform healthcare operations with autonomous AI agents. Automate claim coding, denial management, prior auths, and patient intake with 99.2% accuracy.",
    keywords: "healthcare automation, AI medical coding, claim processing, prior authorization, denial management, HIPAA compliant",
    ogTitle: "GooClaim - AI-Powered Healthcare Automation",
    ogDescription: "Transform healthcare operations with autonomous AI agents. Automate claim coding, denial management, prior auths, and patient intake.",
  },
  about: {
    title: "About Us - GooClaim",
    description: "Learn about GooClaim's mission to transform healthcare administration through autonomous AI agents. Meet our team and discover our story.",
    keywords: "GooClaim team, healthcare AI company, medical automation, about us",
    ogTitle: "About GooClaim - Healthcare AI Innovation",
    ogDescription: "Learn about GooClaim's mission to transform healthcare administration through autonomous AI agents.",
  },
  contact: {
    title: "Contact Us - GooClaim",
    description: "Get in touch with GooClaim. Schedule a demo, ask questions, or learn how our AI can transform your healthcare operations.",
    keywords: "contact GooClaim, healthcare AI demo, get started, support",
    ogTitle: "Contact GooClaim - Get Started Today",
    ogDescription: "Get in touch with GooClaim. Schedule a demo or learn how our AI can transform your healthcare operations.",
  },
  pricing: {
    title: "Pricing - GooClaim",
    description: "Explore GooClaim's flexible pricing plans for healthcare organizations. From startups to enterprise - find the right AI automation solution.",
    keywords: "GooClaim pricing, healthcare AI cost, medical automation pricing, enterprise healthcare",
    ogTitle: "GooClaim Pricing - Healthcare AI Plans",
    ogDescription: "Explore flexible pricing plans for healthcare AI automation. From startups to enterprise solutions.",
  },

  "how-it-works": {
    title: "How It Works - GooClaim",
    description: "Discover how GooClaim's autonomous AI agents transform healthcare operations from manual processes to intelligent automation. See the complete workflow.",
    keywords: "how GooClaim works, healthcare AI workflow, medical automation process, AI agents healthcare",
    ogTitle: "How GooClaim Works - AI Healthcare Automation",
    ogDescription: "Discover how autonomous AI agents transform healthcare operations from manual chaos to intelligent automation.",
  },
  "privacy-policy": {
    title: "Privacy Policy & Legal Center | GooClaim",
    description: "Learn how GooClaim protects your data with HIPAA-compliant security, privacy policies, terms of service, and comprehensive compliance documentation.",
    keywords: "privacy policy, terms of service, HIPAA compliance, data security, cookie policy, DPA, business associate agreement, healthcare data protection",
    ogTitle: "Privacy & Legal Center - GooClaim",
    ogDescription: "HIPAA-compliant security, privacy policies, and comprehensive legal documentation for GooClaim healthcare automation platform.",
  }
};

export function updatePageMetadata(page: string): void {
  const metadata = pageMetadata[page];
  if (!metadata) return;

  // Update title
  document.title = metadata.title;

  // Update or create meta tags
  updateMetaTag('description', metadata.description);
  
  if (metadata.keywords) {
    updateMetaTag('keywords', metadata.keywords);
  }

  // Open Graph tags
  updateMetaTag('og:title', metadata.ogTitle || metadata.title, 'property');
  updateMetaTag('og:description', metadata.ogDescription || metadata.description, 'property');
  updateMetaTag('og:type', 'website', 'property');
  updateMetaTag('og:url', window.location.href, 'property');
  
  if (metadata.ogImage) {
    updateMetaTag('og:image', metadata.ogImage, 'property');
  }

  // Twitter Card tags
  updateMetaTag('twitter:card', 'summary_large_image');
  updateMetaTag('twitter:title', metadata.ogTitle || metadata.title);
  updateMetaTag('twitter:description', metadata.ogDescription || metadata.description);
}

function updateMetaTag(name: string, content: string, attribute: string = 'name'): void {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  
  tag.content = content;
}