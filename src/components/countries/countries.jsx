import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./country.css";

const Countries = ({ countriesPromice }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = (country) => {
    setVisitedCountry([...visitedCountry, country]);
  };
  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };

  const countriesData = use(countriesPromice);
  const country = countriesData.countries;
  console.log(country);

  return (
    <div className="all-container">
      <div className="stats-container">
        <h2>Total Country : {country.length}</h2>
        <br />
        <h4>Country Visited : {visitedCountry.length} </h4>
        <h4>Total Flag Visited : {visitedFlags.length}</h4>
        <div className="visited-flag">
          {visitedFlags.map((flag) => (
            <img src={flag}></img>
          ))}
        </div>
      </div>
      <div className="Countries">
        {country.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
