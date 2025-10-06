import { useState, useEffect } from 'react';
// custome hook to return true while the img is loaded
const useLazyBackground = (imgSrc, delay = 0) => {
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  useEffect(() => {
    // Simulating a delay for the effect
    const timeout = setTimeout(() => {
      const img = new Image();
      img.src = imgSrc;

      img.onload = () => setIsImgLoaded(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [imgSrc, delay]);

  return isImgLoaded;
};

export default useLazyBackground;
