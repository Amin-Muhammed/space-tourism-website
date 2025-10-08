import React from 'react';
import styles from './Technology.module.css';

import lounchTechnologyImgSrcPort from '../../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleTechnologyImgSrcPort from '../../assets/technology/image-space-capsule-portrait.jpg';
import spacePortTechnologyImgSrcPort from '../../assets/technology/image-spaceport-portrait.jpg';
import lounchTechnologyImgSrcLandScape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceCapsuleTechnologyImgSrcLandScape from '../../assets/technology/image-space-capsule-landscape.jpg';
import spacePortTechnologyImgSrcLandScape from '../../assets/technology/image-spaceport-landscape.jpg';
const imageMap = {
  'image-launch-vehicle-portrait.jpg': lounchTechnologyImgSrcPort,
  'image-space-capsule-portrait.jpg': spaceCapsuleTechnologyImgSrcPort,
  'image-spaceport-portrait.jpg': spacePortTechnologyImgSrcPort,
  'image-launch-vehicle-landscape.jpg': lounchTechnologyImgSrcLandScape,
  'image-space-capsule-landscape.jpg': spaceCapsuleTechnologyImgSrcLandScape,
  'image-spaceport-landscape.jpg': spacePortTechnologyImgSrcLandScape,
};
const Technology = ({ data }) => {
  const isOnTabletWidth = window.innerWidth <= 946;
  if (!data) return <p>failed to load data.</p>;
  const imgPath = isOnTabletWidth
    ? data.images.landscape.split('/').pop()
    : data.images.portrait.split('/').pop();

  return (
    <>
      <div className={styles['crew-information-container']}>
        <h2>THE TERMINOLOGY…</h2>
        <h1>{data.name}</h1>
        <p>{data.description}</p> {/* Assuming this should be bio, not 'b' */}
      </div>
      <div className={styles['crew-img-container']}>
        <img src={imageMap[imgPath]} alt="" />
      </div>
    </>
  );
};

export default Technology;
