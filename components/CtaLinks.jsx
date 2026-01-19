'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ctaLinks } from '@/data/content';

export default function CtaLinks() {
  return (
    <section className="cta-section">
      {ctaLinks.map((cta, index) => (
        <motion.div
          key={cta.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
        >
          <Link 
            href={cta.url} 
            className="cta-link" 
            target={cta.url.startsWith('#') ? '_self' : '_blank'}
            rel="noopener noreferrer"
          >
            <div className="cta-content">
              <h3>{cta.title}</h3>
              <p>{cta.description}</p>
            </div>
            <span className="arrow">→</span>
          </Link>
        </motion.div>
      ))}
    </section>
  );
}
