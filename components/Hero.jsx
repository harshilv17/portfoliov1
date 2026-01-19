'use client';

import { motion } from 'framer-motion';
import { heroContent, siteConfig } from '@/data/content';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <motion.section
      className="hero-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Corner Brackets */}
      <div className="corner-bracket top-left" />
      <div className="corner-bracket top-right" />
      <div className="corner-bracket bottom-left" />
      <div className="corner-bracket bottom-right" />

      <div className="hero-content">
        <div className="hero-left">
          <span className="label">{heroContent.label}</span>
          <h1 className="name">
            {heroContent.name.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </h1>
          <p className="bio">{heroContent.bio}</p>
          <span className="location">{siteConfig.location}</span>
        </div>
        <div className="hero-right">
          <div className="profile-card">
            <div className="profile-image">
              <div className="profile-placeholder">{heroContent.initials}</div>
            </div>
            <div className="profile-info">
              <span className="profile-name">{siteConfig.name}</span>
              <span className="profile-title">{siteConfig.title}</span>
            </div>
            <span className="year">{siteConfig.year}</span>
          </div>
        </div>
      </div>

      <SocialLinks />
    </motion.section>
  );
}
