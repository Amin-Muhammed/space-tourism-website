import React, { useEffect } from 'react';
import styles from './Pages.module.css';
import useLazyBackground from '../Hooks/useLazyBackground';
import imgSrc from '../assets/destination/background-destination-desktop.jpg';
import '../global.css';
import PageTitle from '../components/ReUseComp/PageTitle';
import PageContentConainer from '../components/ReUseComp/PageContentContainer';
import CostumeNavigtion from '../components/ReUseComp/CostumeNavigtion';
import { Outlet, useSearchParams } from 'react-router';
import { useData } from '../context/DataContext';
import ImageContainer from '../components/ReUseComp/ImageContainer';
import SpinnerFullPage from '../components/ReUseComp/SpinnerFullPage';

const NAV_OBJ = [
  { navName: 'moon', path: 'moon', index: true },
  { navName: 'mars', path: 'mars' },
  { navName: 'europa', path: 'europa' },
  { navName: 'titan', path: 'titan' },
];

const Destination = () => {
  const isImgLoaded = useLazyBackground(imgSrc);
  let { data, fetchData, isloading, error, page, setPage } = useData();
  useEffect(() => {
    fetchData('destination');
  }, []);
  if (!data) return <SpinnerFullPage />;
  data = data.destinations;
  return (
    <div className={`${styles.page} ${styles.destination} ${isImgLoaded || styles['loading']}`}>
      <PageTitle>
        <span>01</span>
        Pick your destination
      </PageTitle>
      <PageContentConainer className={styles['page-content-container']}>
        <Outlet context={{ data, error, isloading, type: 'planet image outlet' }} />
        <CostumeNavigtion
          className={styles['destination-nav']}
          navObject={NAV_OBJ}
          indexPath={'moon'}
        />{' '}
        <Outlet context={{ data, error, isloading, type: 'planet info outlet' }} />
        {/*this is showing planet according to the url  */}
      </PageContentConainer>
    </div>
  );
};
// The only moon known to have a dense atmosphere other than Earth, Titan
// is a home away from home (just a few hundred degrees colder!). As a
// bonus, you get striking views of the Rings of Saturn.

// Avg. distance
// 1.6 bil. km

// Est. travel time
// 7 years
export default Destination;
