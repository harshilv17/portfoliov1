'use client';

import { motion } from 'framer-motion';
import { technicalSkills } from '@/data/content';
import { FaCode, FaReact, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const categoryIcons = {
  languages: FaCode,
  frontend: FaReact,
  backend: FaServer,
  database: FaDatabase,
  tools: FaTools,
};

const categoryLabels = {
  languages: "PROGRAMMING LANGUAGES",
  frontend: "FRONTEND",
  backend: "BACKEND",
  database: "DATABASES",
  tools: "TOOLS & PLATFORMS",
};

export default function Skills() {
  return (
    <motion.section
      className="skills-section"
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
        <span className="label">Expertise:</span>
        <h2 style={{ color: 'var(--text-dark)' }}>TECHNICAL SKILLS</h2>
      </div>

      <div className="skills-grid">
        {Object.entries(technicalSkills).map(([category, skills], index) => {
          const Icon = categoryIcons[category];
          return (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="skill-category-header">
                <Icon className="skill-icon" />
                <span className="skill-category-label">{categoryLabels[category]}</span>
              </div>
              <div className="skill-tags">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
