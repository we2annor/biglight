import React, { useState, useEffect } from "react";
import styled from "styled-components";

const placeholder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const Image = styled.img`
  display: block;

  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }
  &.has-error {
    content: url(${placeholder});
  }
`;

export const LazyLoad = ({
  src,
  alt,
  //placeholder,
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
            threshold: 0.03,
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
    <Image
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
