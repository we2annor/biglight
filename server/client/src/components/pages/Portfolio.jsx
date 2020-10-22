import React, { useState, useEffect } from "react";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { lazyLoad } from "../../util/lazy";
import { getApi } from "../../axios";
import "../../sass/pages/portfolio.scss";

const Portfolio = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = "./portfolio/spreadsheet";
  lazyLoad();

  useEffect(() => {
    getApi(api, setLoading, setResults, setError);
  }, [api]);

  const getInfo = (results) => {
    const filteredResults = results;
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

  const responsiveImage = (mobileImage, desktopImage) => {
    return (
      <img
        data-src={desktopImage}
        alt='my portfolio'
        srcSet={`${desktopImage} 1024w, ${mobileImage} 640w `}
        size='(max-width: 600px) 640px, 100vw'
        src='./images/placeholder.png'
        className='lazy portfolio-landing-image'
      />
    );
  };

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

  const getImage = (mobileImage, desktopImage, header, subHeader) => {
    return (
      <div className='portfolio-image'>
        <div className='image-container'>
          {responsiveImage(mobileImage, desktopImage)}
        </div>
        {getDescription(header, subHeader)}
      </div>
    );
  };

  const subHeaders = getInfo(results[3])[1];
  const firstSubHeader = String(subHeaders).split("<br/>")[0];
  const secondSubHeader = String(subHeaders).split("<br/>")[1];

  return (
    <div>
      <div className='container'>
        <h1 className='heading'>{getInfo(results[3])[0]}</h1>
        <span>{firstSubHeader}</span>
        <span>{secondSubHeader}</span>
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
        {getImage(
          getInfo(results[5])[2],
          getInfo(results[5])[3],
          getInfo(results[5])[4],
          getInfo(results[5])[5]
        )}
      </div>
    </div>
  );
};

export default Portfolio;
