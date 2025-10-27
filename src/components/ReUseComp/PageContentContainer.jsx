import React from 'react';
import { motion } from 'framer-motion';
import styles from './PageContentContainer.module.css';

const PageContentContainer = ({ children, className = '', typesOfPage }) => {
  const animations = {
    destination: {
      initial: { x: -100, y: 50, opacity: 0 },
      animate: { x: 0, y: 0, opacity: 1 },
      exit: { x: 100, y: -50, opacity: 0 },
    },
    crew: {
      initial: { x: -100, opacity: 0 },
      animate: { x: 0, opacity: 1 },
      exit: { x: 100, opacity: 0 },
    },
    technology: {
      initial: { y: 80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      exit: { y: -80, opacity: 0 },
    },
  };

  const { initial, animate, exit } = animations[typesOfPage] || animations.destination;

  return (
    <div className={`${styles.container}`}>
      <motion.div
        key={typesOfPage}
        initial={initial}
        animate={animate}
        exit={exit}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className={`${styles.motionContent} ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageContentContainer;
