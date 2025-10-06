import React from 'react';
import styles from './Role.module.css';
import Role1ImgSrc from '../../assets/crew/image-mark-shuttleworth.webp';
import Role2ImgSrc from '../../assets/crew/image-anousheh-ansari.webp';
import Role3ImgSrc from '../../assets/crew/image-douglas-hurley.webp';
import Role4ImgSrc from '../../assets/crew/image-victor-glover.webp';
import Spinner from '../ReUseComp/Spinner';

// Map file names (from API) to imported images
const imageMap = {
  'image-mark-shuttleworth.webp': Role1ImgSrc,
  'image-anousheh-ansari.webp': Role2ImgSrc,
  'image-douglas-hurley.webp': Role3ImgSrc,
  'image-victor-glover.webp': Role4ImgSrc,
};

const Role = ({ data }) => {
  if (!data) return <p>loading</p>;

  // Extract file name from path
  const imageFilename = data.images.webp.split('/').pop();
  const imgSrc = imageMap[imageFilename];

  return (
    <>
      <div className={styles['crew-info']}>
        <h2>{data.role}</h2>
        <h1>{data.name}</h1>
        <p>{data.bio}</p> {/* Assuming this should be bio, not 'b' */}
      </div>
      <div className={styles['crew-role-img']}>
        <img src={imgSrc} alt={data.name} />
      </div>
    </>
  );
};

export default Role;
