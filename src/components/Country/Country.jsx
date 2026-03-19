import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };
  return (
    <div className={`${visited ? "country-not-visited" : "Country"}`}>
      <h2>Name: {country.name.common}</h2>
      <br />
      <img src={country.flags.flags.png} alt="" />
      <h3>Polulation: {country.population.population}</h3>
      <h3>Region : {country.region.region}</h3>
      <h2>
        Area : {country.area.area}
        {" =>> "}
        {country.area.area > 100000 ? "It's Big" : "It's Small"}
      </h2>
      <div className="btns">
        <button onClick={handleVisited} className="btn">
          {visited ? "Visited" : "Not Visited"}
        </button>
        <button
          onClick={() => {
            handleVisitedFlag(country.flags.flags.png);
          }}
          className="btn"
        >
          Add Visited Flag
        </button>
      </div>
    </div>
  );
};

export default Country;
