import React from 'react';
import styles from './HeaderNavLine.module.css';
const HeaderNavLine = ({ className }) => {
  return <div className={`${className} ${styles.line}`}></div>;
};

export default HeaderNavLine;
