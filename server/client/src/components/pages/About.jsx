import React, { useState, useEffect } from "react";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { LazyLoad } from "../../util/lazyLoad/LazyLoad";
import { getApi } from "../../axios";
import "../../sass/pages/about.scss";

const About = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = "./about/spreadsheet";

  useEffect(() => {
    getApi(api, setLoading, setResults, setError);
  }, [api]);

  const getInfo = (result) => {
    const filteredResults = result;
    let resultsArray = [];

    for (let i in filteredResults) {
      resultsArray.push(filteredResults[i]);
    }

    return resultsArray;
  };

  if (!loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const header = getInfo(results[3])[0];
  const subHeader = getInfo(results[3])[1];

  const responsiveImage = (mobileImage, desktopImage) => {
    return (
      <LazyLoad
        srcSet={`${desktopImage} 1024w, ${mobileImage} 640w `}
        sizes='(max-width: 600px) 640px, 100vw'
        alt='About'
        src={desktopImage}
        classname='about-image'
      />
    );
  };

  const getDescription = (header, subHeader) => {
    return (
      <div className='about-description'>
        <span className='about-description-header'>{header}</span>
        <span>{subHeader}</span>
      </div>
    );
  };

  const getImage = (mobileImage, desktopImage, header, subHeader) => {
    return (
      <div className='image'>
        <div className='image-container'>
          {responsiveImage(mobileImage, desktopImage)}
        </div>
        {getDescription(header, subHeader)}
      </div>
    );
  };

  return (
    <div className='about'>
      <div className='container'>
        <span className='heading'>{header}</span>
        <span>{subHeader}</span>
      </div>
      <div className='container images'>
        {getImage(
          getInfo(results[3])[2],
          getInfo(results[3])[3],
          getInfo(results[3])[4],
          getInfo(results[3])[5]
        )}
        {getImage(
          getInfo(results[4])[2],
          getInfo(results[4])[3],
          getInfo(results[4])[4],
          getInfo(results[4])[5]
        )}
      </div>
    </div>
  );
};

export default About;
