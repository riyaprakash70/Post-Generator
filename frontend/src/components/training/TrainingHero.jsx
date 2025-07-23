import React from 'react';
import { motion } from 'framer-motion';
import '../assets/TrainingHero.css'; // ✅ Use consistent path convention
import heroImage from '../assets/hero.png';

const TrainingHero = () => {
  return (
    <section className="training-hero">
      <motion.div
        className="hero-content"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="hero-title">Level Up Your Skills</h1>
        <p className="hero-subtitle">
          Explore hands-on training and real-world projects to boost your career.
        </p>
        <button className="hero-btn">Explore Trainings</button>
      </motion.div>

      <motion.div
        className="hero-image-wrapper"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <img
          src={heroImage}
          alt="Training Hero"
          className="hero-image"
          loading="lazy" // ✅ Optional: for performance
        />
      </motion.div>
    </section>
  );
};

export default TrainingHero;
