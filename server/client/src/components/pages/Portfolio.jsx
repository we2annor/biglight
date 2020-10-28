import React, { useState, useEffect } from "react";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import LoadImage from "../LoadImage";
import { getApi } from "../../axios";
import "../../sass/pages/portfolio.scss";

const Portfolio = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = "./portfolio/spreadsheet";

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
        <LoadImage
          mobileImage={getInfo(results[3])[2]}
          desktopImage={getInfo(results[3])[3]}
          header={getInfo(results[3])[4]}
          subHeader={getInfo(results[3])[5]}
        />
        <LoadImage
          mobileImage={getInfo(results[4])[2]}
          desktopImage={getInfo(results[4])[3]}
          header={getInfo(results[4])[4]}
          subHeader={getInfo(results[3])[5]}
        />
        <LoadImage
          mobileImage={getInfo(results[5])[2]}
          desktopImage={getInfo(results[5])[3]}
          header={getInfo(results[5])[4]}
          subHeader={getInfo(results[5])[5]}
        />
      </div>
    </div>
  );
};

export default Portfolio;
