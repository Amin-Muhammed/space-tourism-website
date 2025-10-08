import React from 'react';
import { useOutletContext } from 'react-router';
import styles from './Moon.module.css';
import marsImgSrc from '../../assets/destination/image-mars.png';
import useLazyBackground from '../../Hooks/useLazyBackground';
import HeaderNavLine from '../LayoutCompoenents/HeaderNavLine';
import LoadingPlanet from './LoadingPlanet/LoadingPlanet';

const Mars = () => {
  const { data, isloading, error, type } = useOutletContext();
  const isImgLoaded = useLazyBackground(marsImgSrc);

  if (!data || isloading) return <p>loading</p>;

  const {
    name = 'not available',
    description = 'not provided',
    distance = 'unknown',
    travel = 'unknown',
  } = data.at(1);

  if (type === 'planet image outlet') {
    return (
      <div className={styles['planet-image']}>
        {isImgLoaded ? (
          <img className={`${styles['fade-in-img']} ${styles.image}`} src={marsImgSrc} alt="mars" />
        ) : (
          <LoadingPlanet />
        )}
      </div>
    );
  } else if (type === 'planet info outlet') {
    return (
      <div
        className={`${styles['planet-information']} ${
          isImgLoaded ? styles['fade-in-content'] : ''
        }`}
      >
        <h1>{name}</h1>
        <p>{description}</p>
        <HeaderNavLine className={styles.line} />
        <div className={styles.avarages}>
          <div>
            <h5>AVG. DISTANCE</h5>
            <span>{distance}</span>
          </div>
          <div>
            <h5>AVG. TRAVEL TIME</h5>
            <span>{travel}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default Mars;
