import React from "react";
import { LazyLoad } from "../util/lazyLoad/LazyLoad";

const LoadImage = ({ mobileImage, desktopImage, header, subHeader }) => {
  const getDescription = (header, subHeader) => {
    return (
      <div className='portfolio-description'>
        <div className='description-header-container'>
          <span className='description-header'>{header}</span>
          <span>{subHeader}</span>
        </div>
      </div>
    );
  };

  const responsiveImage = (mobileImage, desktopImage) => {
    return (
      <LazyLoad
        alt='my portfolio'
        srcSet={`${desktopImage} 1024w, ${mobileImage} 640w `}
        sizes='(max-width: 600px) 640px, 100vw'
        src={desktopImage}
        classname='lazy portfolio-landing-image'
      />
    );
  };

  return (
    <div className='portfolio-image'>
      <div className='image-container'>
        {responsiveImage(mobileImage, desktopImage)}
      </div>
      {getDescription(header, subHeader)}
    </div>
  );
};

export default LoadImage;
