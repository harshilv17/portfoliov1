'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/content';

export default function Testimonials() {
  // Double the testimonials for infinite scroll effect
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <motion.section
      className="testimonials-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="section-header">
        <span className="label">Testimonials:</span>
        <h2>WHAT PEOPLE SAY</h2>
        <p>Here&apos;s what collaborators and clients have to say about working with me.</p>
      </div>

      <div className="testimonials-container">
        <div className="testimonials-track">
          {allTestimonials.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div className="testimonial-info">
                  <span className="testimonial-name">{testimonial.name}</span>
                  <span className="testimonial-role">{testimonial.role}</span>
                </div>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-footer">
                <span className="company">{testimonial.company}</span>
                <span className="country">{testimonial.country}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
