import React, { useEffect } from 'react';
import styles from './Pages.module.css';
import TechnologyStyle from './Technology.module.css';
import useLazyBackground from '../Hooks/useLazyBackground';
import imgSrc from '../assets/Technology/background-Technology-desktop.jpg';
import '../global.css';
import PageTitle from '../components/ReUseComp/PageTitle';
import { useData } from '../context/DataContext';
import { Outlet } from 'react-router';
import PageContentConainer from '../components/ReUseComp/PageContentContainer';
import CostumeNavigtion from '../components/ReUseComp/CostumeNavigtion';
const NAV_OBJ = [
  { navName: '1', path: 'launch-vehicle' },
  { navName: '2', path: 'space-port' },
  { navName: '3', path: 'space-capsule' },
];
const Technology = () => {
  const isImgLoaded = useLazyBackground(imgSrc);
  let { data, fetchData, isloading, error, page, setPage } = useData();
  useEffect(() => {
    setPage('technology');
    fetchData('technology');
  }, [page]);
  if (!data) return <p>failed to load data</p>;

  return (
    <div className={` ${styles.page} ${styles.technology}  ${isImgLoaded || styles['loading']}`}>
      <PageTitle>
        <span>03</span>
        Space launch 101
      </PageTitle>
      <PageContentConainer className={TechnologyStyle['technology-content-container']}>
        <CostumeNavigtion
          className={TechnologyStyle.technologyNav}
          navObject={NAV_OBJ}
          applyDefaultStyle={false}
          costumeStyle={TechnologyStyle}
        />
        <Outlet />
      </PageContentConainer>
    </div>
  );
};

export default Technology;
