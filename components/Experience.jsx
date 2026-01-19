'use client';

import { motion } from 'framer-motion';
import { workExperience } from '@/data/content';
import { FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

export default function Experience() {
  return (
    <motion.section
      className="experience-section"
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
        <span className="label">Career:</span>
        <h2 style={{ color: 'var(--text-dark)' }}>WORK EXPERIENCE</h2>
      </div>

      <div className="experience-timeline">
        {workExperience.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="experience-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <div className="experience-dot" />
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3 className="experience-role">{exp.role}</h3>
                  <div className="experience-company">
                    <FaBriefcase /> {exp.company}
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="experience-duration">{exp.duration}</span>
                  <span className="experience-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-highlights">
                {exp.highlights.map((highlight) => (
                  <span key={highlight} className="highlight-tag">{highlight}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
