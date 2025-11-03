export type Page = "home" | "about" | "contact" | "pricing" | "how-it-works" | "privacy-policy";

export class Router {
  private static instance: Router;
  private listeners: Array<(page: Page) => void> = [];

  static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  }

  constructor() {
    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      this.notifyListeners();
    });

    // Listen for popstate (back/forward button)
    window.addEventListener('popstate', () => {
      this.notifyListeners();
    });
  }

  getCurrentPage(): Page {
    const hash = window.location.hash.slice(1); // Remove the #
    // Handle hash fragments (e.g., #/privacy-policy or #privacy-policy)
    const cleanHash = hash.startsWith('/') ? hash.slice(1) : hash;
    
    switch (cleanHash) {
      case 'about':
        return 'about';
      case 'contact':
        return 'contact';
      case 'pricing':
        return 'pricing';
      case 'how-it-works':
        return 'how-it-works';
      case 'privacy-policy':
        return 'privacy-policy';
      default:
        return 'home';
    }
  }

  navigateTo(page: Page): void {
    if (page === 'home') {
      // For home page, we can either use no hash or #home
      if (window.location.hash) {
        window.location.hash = '';
      }
    } else {
      window.location.hash = page;
    }
    this.notifyListeners();
  }

  subscribe(listener: (page: Page) => void): () => void {
    this.listeners.push(listener);
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners(): void {
    const currentPage = this.getCurrentPage();
    this.listeners.forEach(listener => listener(currentPage));
  }

  // Utility method to get URL for a specific page
  getUrlForPage(page: Page): string {
    const baseUrl = window.location.origin + window.location.pathname;
    return page === 'home' ? baseUrl : `${baseUrl}#${page}`;
  }
}

export const router = Router.getInstance();