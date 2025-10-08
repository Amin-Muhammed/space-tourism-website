import { Image, ImageKitProvider } from '@imagekit/react';

const ImageContainer = ({ src, className }) => {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/qazwsqhfv/">
      <Image src={src} className={className} height={'340'} width={'440'} />
    </ImageKitProvider>
  );
};

export default ImageContainer;
