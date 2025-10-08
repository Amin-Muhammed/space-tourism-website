import React from 'react';
import styles from './LoadingPlanet.module.css';

const LoadingPlanet = () => {
  return (
    <div className={styles.content}>
      <div className={styles.planet}>
        <div className={styles.ring}></div>
        <div className={styles.coverRing}></div>
        <div className={styles.spots}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p>loading</p>
    </div>
  );
};

export default LoadingPlanet;
