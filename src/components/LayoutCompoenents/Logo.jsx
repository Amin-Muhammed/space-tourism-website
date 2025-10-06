import React from 'react';
import logo from '../../assets/shared/logo.svg';
import { NavLink } from 'react-router';
import styles from './Logo.module.css';
import HeaderNavLine from './HeaderNavLine';
const Logo = () => {
  return (
    <div className={styles.logo}>
      <NavLink to={'/'}>
        {' '}
        <img alt="logo img" src={logo} />
      </NavLink>
      <HeaderNavLine className={styles.line} />
    </div>
  );
};

export default Logo;
