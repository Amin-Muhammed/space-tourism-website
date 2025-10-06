import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Logo from '../LayoutCompoenents/Logo';
import styles from './Layout.module.css';
import Header from '../LayoutCompoenents/Header';
import CostumeNavigtion from '../ReUseComp/CostumeNavigtion';
import CustomButton from '../ReUseComp/CustomButton';
import Hamburger from '../../assets/shared/icon-hamburger.svg';
import Close from '../../assets/shared/icon-close.svg';

const NAV_OBJ = [
  { navName: 'HOME', path: 'home', index: true },
  { navName: 'DESTINATION', path: 'destination' },
  { navName: 'CREW', path: 'crew' },
  { navName: 'TECHNOLOGY', path: 'technology' },
];
const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [buttonImg, setButtonImg] = useState(Hamburger);

  const handleClickOnNavButton = () => {
    setIsNavOpen((prevNavState) => !prevNavState);
    setButtonImg((prevImg) => (prevImg === Close ? Hamburger : Close));
  };

  useEffect(() => {
    if (!isNavOpen) return;

    const handleOutsideClick = (e) => {
      const nav = document.querySelector(`.${styles.navigation}`);
      const btn = document.querySelector(`.${styles['phone-hamburger-btn']}`);
      const a = document.querySelectorAll(`.${styles['link']}`);
      const isNavClicked = nav && nav.contains(e.target);
      const isBtnClicked = btn && btn.contains(e.target); // this is necesseriy so that if we click the button it opens the nav not closing it
      // Check if the click was outside the navigation menu and not on the button itself and if the click is a link
      a.forEach((a) => {
        if ((!isNavClicked && !isBtnClicked) || a.contains(e.target)) {
          setButtonImg(Hamburger);
          setIsNavOpen(false);
        }
      });
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }; // removet the evnet listener
  }, [isNavOpen]);

  return (
    <div className={styles.layout}>
      <Header>
        <Logo />
        <CostumeNavigtion
          navObject={NAV_OBJ}
          showNumber="true"
          className={`${styles.navigation} ${isNavOpen ? styles.showNav : styles.hideNav}`}
          costumeStyle={styles}
          indexPath={'/'}
        />
        <CustomButton
          aria-controls={styles.navigation}
          className={styles['phone-hamburger-btn']}
          onClick={handleClickOnNavButton}
        >
          <img src={buttonImg} alt="Navigation toggle button" />
        </CustomButton>
      </Header>
      <Outlet className={styles.outlet} />
    </div>
  );
};

export default Layout;
