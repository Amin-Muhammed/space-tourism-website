import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const PageContentContainer = ({ children, className = '', typesOfPage }) => {
  const typesOfPages = useMemo(
    () => ({
      destination: (
        <motion.div
          initial={{ x: -700, y: 500, opacity: 0, scale: 0.2 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          exit={{ x: -700, y: -500, opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      ),
      crew: (
        <motion.div
          initial={{ x: -700, opacity: 0, scale: 0.2 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 700, opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      ),
      technology: (
        <motion.div
          initial={{ y: -700, opacity: 0, scale: 0.2 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 700, opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={`overflow-hidden ${className}`}
        >
          {children}
        </motion.div>
      ),
    }),
    [children, className]
  );

  return typesOfPages[typesOfPage];
};

export default PageContentContainer;
