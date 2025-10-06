import React, { useEffect, useMemo } from 'react';
import styles from './Pages.module.css';
import crewStyle from './Crew.module.css';
import useLazyBackground from '../Hooks/useLazyBackground';
import imgSrc from '../assets/crew/background-crew-desktop.jpg';
import '../global.css';
import PageTitle from '../components/ReUseComp/PageTitle';
import { useData } from '../context/DataContext';
import PageContentConainer from '../components/ReUseComp/PageContentContainer';
import { Outlet, useParams, useSearchParams } from 'react-router';
import CostumeNavigtion from '../components/ReUseComp/CostumeNavigtion';
import LoadingPlanet from '../components/DestinationComponents/LoadingPlanet/LoadingPlanet';
const NAV_OBJ = [
  { navName: 'commander', path: 'commander' },
  { navName: 'missionspecialist', path: 'missionspecialist' },
  { navName: 'pilot', path: 'pilot' },
  { navName: 'flightengineer', path: 'flightengineer' },
];
const Crew = () => {
  const isImgLoaded = useLazyBackground(imgSrc);
  const { data, isLoading, error, setPage } = useData();
  useEffect(() => {
    setPage('crew');
  }, []);

  return (
    <div className={`${styles.page} ${styles.crew} ${isImgLoaded || styles['loading']}`}>
      <PageTitle>
        <span>02</span>
        Meet your crew
      </PageTitle>
      <PageContentConainer className={crewStyle['crew-content-container']}>
        <Outlet context={{ data, isLoading, error }} />
        <CostumeNavigtion
          navObject={NAV_OBJ}
          className={crewStyle['crew-nav']}
          costumeStyle={crewStyle}
          showNavName={false}
          applyDefaultStyle={false}
        />
      </PageContentConainer>
    </div>
  );
};
export default Crew;
