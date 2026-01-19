'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { socialLinks } from '@/data/content';

const iconMap = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
};

export default function SocialLinks() {
  return (
    <div className="social-links">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <Link
            key={link.name}
            href={link.url}
            className="social-icon"
            aria-label={link.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Icon && <Icon />}
          </Link>
        );
      })}
    </div>
  );
}
