import React from 'react';
import styles from './HomeContent.module.css';
const HomeContent = ({ children }) => {
  return <div className={styles.homeContent}>{children}</div>;
};

export default HomeContent;
