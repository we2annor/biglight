import React, { useState, useEffect } from "react";

export const LazyLoad = ({
  src,
  alt,
  placeholder,
  //data,
  //srcSet,
  //sizes,
  classname,
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();

  const onLoad = (event) => {
    event.target.classList.add("loaded");
  };

  const onError = (event) => {
    event.target.classList.add("has-error");
  };

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.0,
            rootMargin: "-10%",
          }
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
        console.log("image Ref", imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  console.log("test");
  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      //srcSet={srcSet}
      //sizes={sizes}
      loading='lazy'
      className={classname}
    />
  );
};
