import React, { use } from "react";
import Country from "../Country/Country";
import "./country.css";

const Countries = ({ countriesPromice }) => {
  const countriesData = use(countriesPromice);
  const country = countriesData.countries;
  console.log(country);

  return (
    <div>
      <h1>Total Country:{country.length}</h1>
      <div className="Countries">
        {country.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
