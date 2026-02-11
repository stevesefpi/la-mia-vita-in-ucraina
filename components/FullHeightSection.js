'use client';

import { useState, useEffect } from 'react';

export default function FullHeightSection({ children, className }) {
  const [minHeight, setMinHeight] = useState('100vh');

  useEffect(() => {
    const updateHeight = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        setMinHeight(`calc(100vh - ${navbar.offsetHeight}px)`);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className={className} style={{ minHeight }}>
      {children}
    </div>
  );
}
