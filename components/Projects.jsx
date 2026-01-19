'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/content';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  return (
    <motion.section
      className="projects-section"
      id="projects"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Corner Brackets */}
      <div className="corner-bracket top-left" />
      <div className="corner-bracket top-right" />
      <div className="corner-bracket bottom-left" />
      <div className="corner-bracket bottom-right" />

      <div className="section-header" style={{ marginBottom: '25px' }}>
        <span className="label">Portfolio:</span>
        <h2 style={{ color: 'var(--text-dark)' }}>MY PROJECTS</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="project-item-image">
              <div className="project-item-placeholder">
                {project.title.charAt(0)}
              </div>
            </div>
            <div className="project-item-content">
              <div className="project-item-header">
                <h3 className="project-item-title">{project.title}</h3>
                <div className="project-item-links">
                  <Link href={project.link} target="_blank" className="project-item-link">
                    <FaGithub /> Code
                  </Link>
                </div>
              </div>
              <p className="project-item-description">{project.description}</p>
              <div className="project-item-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="project-tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
