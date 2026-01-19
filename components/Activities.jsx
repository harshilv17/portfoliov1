'use client';

import { motion } from 'framer-motion';
import { coCurricular } from '@/data/content';
import { FaTrophy, FaUsers, FaGithub, FaMicrophone } from 'react-icons/fa';

const activityIcons = {
  1: FaTrophy,
  2: FaUsers,
  3: FaGithub,
  4: FaMicrophone,
};

export default function Activities() {
  return (
    <motion.section
      className="activities-section"
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
        <span className="label">Beyond Code:</span>
        <h2 style={{ color: 'var(--text-dark)' }}>CO-CURRICULAR</h2>
      </div>

      <div className="activities-grid">
        {coCurricular.map((activity, index) => {
          const Icon = activityIcons[activity.id] || FaTrophy;
          return (
            <motion.div
              key={activity.id}
              className="activity-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="activity-icon">
                <Icon />
              </div>
              <div className="activity-content">
                <h3 className="activity-title">{activity.title}</h3>
                <span className="activity-org">{activity.organization}</span>
                <p className="activity-description">{activity.description}</p>
                <span className="activity-year">{activity.year}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
