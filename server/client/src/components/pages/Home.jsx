import React, { useState, useEffect } from "react";
import Button from "../Button";
import { getApi } from "../../axios";
import Loading from "../loading/Loading";
import { LazyLoad } from "../../util/lazyLoad/LazyLoad";
import Error from "../error/Error";
import "../../sass/pages/home.scss";

const Home = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = "./homepage/spreadsheet";

  useEffect(() => {
    getApi(api, setLoading, setResults, setError);
  }, [api]);

  const getInfo = () => {
    const resultsContent = results[3];
    let details = [];

    for (let i in resultsContent) {
      details.push(resultsContent[i]);
    }
    return details;
  };

  const headerText = getInfo()[0];
  const subHeader = getInfo()[1];
  const mobileImage = getInfo()[2];
  const deskTopImage = getInfo()[3];
  const subHeader1 = String(subHeader).split("<br/>")[0];
  const subHeader2 = String(subHeader).split("<br/>")[1];

  if (!loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className='home-page'>
      <div className='container'>
        <span className='heading'>{headerText}</span>
        <span>{subHeader1}</span>
        <span>{subHeader2}</span>
      </div>

      <div className='container images'>
        <div>
          <LazyLoad
            src={deskTopImage}
            alt='home page 1'
            srcSet={`${deskTopImage} 1024w, ${mobileImage} 640w `}
            size='(min-width: 36em) 33.3vw, 100vw'
            classname='landing-page-image lazy'
            placeholder='./images/placeholder.png'
          />
        </div>
      </div>
      <div className='container'>
        <Button label={"Check out my portfolio"} />
        <Button label={"Read more about me"} />
      </div>
    </div>
  );
};

export default Home;
