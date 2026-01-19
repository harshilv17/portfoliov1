'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { footerLinks } from '@/data/content';

export default function Footer() {
  return (
    <>
      {/* Footer CTA */}
      <motion.section
        className="footer-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>If you are looking for consulting or collaboration, click below.</p>
        <Link href="#contact" className="cta-button large">
          BOOK A CONSULTING SLOT
        </Link>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <Link href="#">{footerLinks.built}</Link>
        <Link href="#">{footerLinks.credit}</Link>
      </footer>
    </>
  );
}
