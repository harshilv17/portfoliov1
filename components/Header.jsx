'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/content';

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`header ${hidden ? 'hidden' : ''}`}>
      <Link href="/" className="logo">
        {siteConfig.name}
      </Link>
      <Link href="#contact" className="cta-button">
        BOOK A CALL
      </Link>
    </header>
  );
}
