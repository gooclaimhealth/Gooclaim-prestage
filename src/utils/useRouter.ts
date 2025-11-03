import { useState, useEffect } from 'react';
import { router, type Page } from './router';

export function useRouter() {
  const [currentPage, setCurrentPage] = useState<Page>(() => router.getCurrentPage());

  useEffect(() => {
    const unsubscribe = router.subscribe((page: Page) => {
      setCurrentPage(page);
    });

    return unsubscribe;
  }, []);

  const navigateTo = (page: Page) => {
    router.navigateTo(page);
  };

  const getUrlForPage = (page: Page) => {
    return router.getUrlForPage(page);
  };

  return {
    currentPage,
    navigateTo,
    getUrlForPage
  };
}