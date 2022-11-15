import React from "react";
import { CountryList } from "./components/CountryList/CountryList";
import { transformCountries } from "./mappers/transformCountries";
import countries from "./country-data.json";

export const App = () => {
  const transformedCountries = transformCountries(countries);

  return (
    <div className="container">
      <h1>Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};

export default App;
