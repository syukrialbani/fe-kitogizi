import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const frameId = window.requestAnimationFrame(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });

      return () => window.cancelAnimationFrame(frameId);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    return undefined;
  }, [hash, pathname]);

  return null;
};
