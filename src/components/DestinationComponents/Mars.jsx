import React from 'react';
import { useOutletContext } from 'react-router';
import marsImgSrc from '../../assets/destination/image-mars.png';
import marsImgSrcLowQuality from '../../assets/destination/image-mars-lowerSize.png';
import styles from './Moon.module.css';
import LoadingPlanet from './LoadingPlanet/LoadingPlanet';
import useLazyBackground from '../../Hooks/useLazyBackground';
import HeaderNavLine from '../LayoutCompoenents/HeaderNavLine';
import Spinner from '../ReUseComp/Spinner';

const Mars = () => {
  const { data, isloading, error, type } = useOutletContext();
  const isImgLoaded = useLazyBackground(marsImgSrc);
  if (!data) return <p>loading</p>;
  if (isloading) return <Spinner />;

  const {
    name = 'not available',
    description = 'not provided',
    distance = 'unknown',
    travel = 'unknown',
  } = data.at(1);
  if (type === 'planet image outlet') {
    return (
      <div className={styles['planet-image']}>
        <img
          className={isImgLoaded ? styles['fade-in-img'] : ''}
          src={marsImgSrc}
          alt="mars image"
        />
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

export default Mars;
