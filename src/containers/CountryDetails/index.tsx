import { RoutesPaths } from 'containers/App/AppRouter';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Country } from 'services/CountryService';

const CountryDetails = () => {
  const history = useHistory();
  const [country, setCountry] = useState<Country>();

  useEffect(() => {
    const init = () => {
      if (history.location.state) {
        const stateCountry = history.location.state as Country;
        setCountry(stateCountry);
      } else {
        history.replace(RoutesPaths.HOME);
      }
    };
    init();
  }, [history]);
  return (
    <>
      <img src={country?.flag} />
      <section>
        <h1>{country?.name}</h1>
        <span>{country?.population.toLocaleString()} inhabitants</span>
        <p>Capital: {country?.capital}</p>
        <p>Region: {country?.region}</p>
      </section>
    </>
  );
};

export default CountryDetails;
