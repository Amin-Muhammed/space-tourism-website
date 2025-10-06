import React, { useState } from 'react';
import styles from './CostumeNavigtion.module.css';
import { NavLink } from 'react-router-dom'; // Ensure it's from 'react-router-dom'
import useLazyBackground from '../../Hooks/useLazyBackground';

const CostumeNavigtion = ({
  navObject = [],
  className = '',
  flexDirection = 'row',
  gap = 0,
  showNumber = false,
  costumeStyle = null,
  indexPath = null,
  showNavName = true,
  applyDefaultStyle = true,
  ...props
}) => {
  const [clicked, setClicked] = useState(null);

  const handleClick = (name) => {
    setClicked(name);
    setTimeout(() => setClicked(null), 200); // Reset clicked state after short delay
  };

  return (
    <nav className={`${applyDefaultStyle && styles.nav} ${className}`}>
      <ul className={`${styles[flexDirection]} ${styles.navList}`}>
        {navObject.map((el, index) => {
          const linkTo = el.path && el.index ? indexPath : el.path.toLowerCase();
          const linkName = el.navName.toLowerCase();

          return (
            <li key={index} className={styles.navItem}>
              <NavLink
                to={linkTo}
                onClick={() => handleClick(linkName)}
                className={({ isActive }) => {
                  const base = costumeStyle ? costumeStyle.link : styles.link;
                  const active = isActive
                    ? costumeStyle
                      ? costumeStyle.active
                      : styles.active
                    : '';
                  const clickedClass = clicked === linkName ? styles.clicked : '';
                  return `${base} ${active} ${clickedClass}`;
                }}
              >
                {showNumber && <span>{index < 10 ? '0' + index : index}</span>}
                {showNavName && el.navName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default CostumeNavigtion;
