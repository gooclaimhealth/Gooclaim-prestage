# GooClaim Routing System

This application uses a custom hash-based routing system that enables proper browser navigation with working back/forward buttons and bookmarkable URLs.

## Features

- ✅ URL-based navigation with hash routing (`/#about`, `/#pricing`, etc.)
- ✅ Browser back/forward button support
- ✅ Bookmarkable and shareable URLs
- ✅ SEO metadata updates per page
- ✅ Smooth page transitions
- ✅ Scroll-to-section functionality from any page

## URL Structure

- Home: `/` or `/#home`
- About: `/#about`
- Contact: `/#contact`
- Pricing: `/#pricing`
- Login: `/#login`

## How It Works

### Router Utility (`/utils/router.ts`)
- Singleton class that manages URL hash changes
- Listens for `hashchange` and `popstate` events
- Provides subscribe/unsubscribe pattern for components
- Handles navigation between pages

### Metadata Management (`/utils/metadata.ts`)
- Updates page titles, descriptions, and Open Graph tags
- Improves SEO and social media sharing
- Automatically applied when navigating between pages

### Custom Hook (`/utils/useRouter.ts`)
- React hook for easy router integration in components
- Returns current page, navigation function, and URL helpers

## Usage Examples

### Basic Navigation
```typescript
import { router } from './utils/router';

// Navigate to a page
router.navigateTo('about');

// Get current page
const currentPage = router.getCurrentPage();

// Get URL for a page
const aboutUrl = router.getUrlForPage('about');
```

### Using the Hook
```typescript
import { useRouter } from './utils/useRouter';

function MyComponent() {
  const { currentPage, navigateTo, getUrlForPage } = useRouter();
  
  return (
    <button onClick={() => navigateTo('pricing')}>
      Go to Pricing
    </button>
  );
}
```

### Navigation with Scroll
The app supports navigating to the home page and scrolling to specific sections:

```typescript
// Navigate to home and scroll to features section
const scrollToFeatures = () => {
  if (currentPage !== "home") {
    router.navigateTo("home");
    setTimeout(() => {
      featureRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  } else {
    featureRef.current?.scrollIntoView({ behavior: "smooth" });
  }
};
```

## Browser Compatibility

- Works in all modern browsers that support HTML5 History API
- Gracefully degrades to hash-based navigation
- No external dependencies required

## Performance

- Lightweight implementation (~2KB)
- No full page reloads
- Smooth transitions with CSS animations
- Lazy loading compatible