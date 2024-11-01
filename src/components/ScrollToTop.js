// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when the pathname changes
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop;
