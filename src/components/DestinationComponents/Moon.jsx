import React from 'react';
import styles from './Planets.module.css';
import moon from '../../assets/destination/image-moon.png';
import { useOutletContext } from 'react-router';
import useLazyBackground from '../../Hooks/useLazyBackground';
import HeaderNavLine from '../LayoutCompoenents/HeaderNavLine';
import Spinner from '../ReUseComp/Spinner';
import ImageContainer from '../ReUseComp/ImageContainer';
import { Image, ImageKitProvider } from '@imagekit/react';
import LoadingPlanet from './LoadingPlanet/LoadingPlanet';
const Moon = () => {
  const { data, isloading, error, type } = useOutletContext();
  let isImgLoaded = useLazyBackground(moon);
  if (!data || isloading) return <p>loading</p>;
  const {
    name = 'not available',
    description = 'not provided',
    distance = 'unknown',
    travel = 'unknown',
  } = data.at(0);
  if (type === 'planet image outlet') {
    return (
      <div className={`${styles['planet-image']}`}>
        {isImgLoaded ? (
          <img className={`${styles['fade-in-img']} ${styles.image}`} src={moon} alt="moon" />
        ) : (
          <LoadingPlanet />
        )}
        {/* <ImageKitProvider urlEndpoint={'https://ik.im/agekit.io/qazwsqhfv'}>
          <Image
            urlEndpoint="https://ik.imagekit.io/qazwsqhfv"
            src="assets/destination/image-moon.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </ImageKitProvider> */}
      </div>
    );
  } else if (type === 'planet info outlet')
    return (
      <div
        className={`${styles['planet-information']} ${isImgLoaded ? styles['fade-in-content'] : ''}`}
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
};

export default Moon;
