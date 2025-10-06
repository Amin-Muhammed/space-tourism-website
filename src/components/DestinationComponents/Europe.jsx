import React from 'react';
import styles from './Moon.module.css';
import europe from '../../assets/destination/image-europa.png';
import { useOutletContext } from 'react-router';
import useLazyBackground from '../../Hooks/useLazyBackground';
import LoadingPlanet from './LoadingPlanet/LoadingPlanet';
import HeaderNavLine from '../LayoutCompoenents/HeaderNavLine';
import Spinner from '../ReUseComp/Spinner';

const Europe = () => {
  const { data, isloading, error, type } = useOutletContext();
  let isImgLoaded = useLazyBackground(europe);

  if (!data) return <Spinner />;

  if (isloading) return;
  const {
    name = 'not available',
    description = 'not provided',
    distance = 'unknown',
    travel = 'unknown',
  } = data.at(2);
  if (type === 'planet image outlet') {
    return (
      <div className={styles['planet-image']}>
        <img className={isImgLoaded ? styles['fade-in-img'] : ''} src={europe} alt="europe image" />
      </div>
    );
  } else if (type === 'planet info outlet') {
    return (
      <div
        className={`${styles['planet-information']} ${isImgLoaded ? styles['fade-in-content'] : ''}`}
      >
        <h1>{name}</h1>
        <p>{description}</p>
        <HeaderNavLine className={styles.line} />

        <div className={styles.avarages}>
          <div>
            <h6>AVG. DISTANCE</h6>
            <span>{distance}</span>
          </div>
          <div>
            <h6>AVG. TRAVEL TIME</h6>
            <span>{travel}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Europe;
