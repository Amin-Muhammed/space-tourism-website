import React from 'react';
import titan from '../../assets/destination/image-titan.png';
import styles from './Moon.module.css';
import { useOutletContext } from 'react-router';
import useLazyBackground from '../../Hooks/useLazyBackground';
import LoadingPlanet from './LoadingPlanet/LoadingPlanet';
import HeaderNavLine from '../LayoutCompoenents/HeaderNavLine';

const Titan = () => {
  const { data, isloading, error, type } = useOutletContext();
  const isImgLoaded = useLazyBackground(titan);

  if (!data || isloading) return <p>loading</p>;

  const {
    name = 'not available',
    description = 'not provided',
    distance = 'unknown',
    travel = 'unknown',
  } = data.at(3);

  if (type === 'planet image outlet') {
    return (
      <div className={styles['planet-image']}>
        {isImgLoaded ? (
          <img className={`${styles['fade-in-img']} ${styles.image}`} src={titan} alt="titan" />
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

export default Titan;
