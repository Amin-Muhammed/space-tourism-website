import React from 'react';
import styles from './Pages.module.css';

import useLazyBackground from '../Hooks/useLazyBackground';
import imgSrc from '../assets/home/background-home-desktop.jpg';
import '../global.css';
import HomeContent from '../components/HomeComponents/HomeContent';
import SpaceHome from '../components/HomeComponents/SpaceHome';
import CustomButton from '../components/ReUseComp/CustomButton';
import { useNavigate } from 'react-router';
const Home = () => {
  const isImgLoaded = useLazyBackground(imgSrc);
  const navigate = useNavigate();
  return (
    <div className={`${styles.page} ${styles.home} ${isImgLoaded || styles['loading']}`}>
      <HomeContent>
        <SpaceHome />
        <CustomButton onClick={() => navigate('/destination')} className={'home-explore-btn'}>
          EXPLORE
        </CustomButton>
      </HomeContent>
    </div>
  );
};

export default Home;
