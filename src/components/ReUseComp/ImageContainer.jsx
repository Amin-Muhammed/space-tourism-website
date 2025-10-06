import React from 'react';

const ImageContainer = ({ src, alt, className }) => (
  <div className={className}>
    <img src={src} alt={alt} />
  </div>
);

export default ImageContainer;
