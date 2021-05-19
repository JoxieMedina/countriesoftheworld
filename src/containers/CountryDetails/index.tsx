import { RoutesPaths } from 'containers/App/AppRouter';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Country } from 'services/CountryService';
import { BackButton, CountryDetailsContainer } from './styled';

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

  const onBack = () => {
    history.goBack();
  };

  return (
    <>
      <CountryDetailsContainer>
        <img src={country?.flag} />
        <section>
          <h1>{country?.name}</h1>
          <p>
            <strong>Population:</strong> {country?.population.toLocaleString()}
          </p>
          <p>
            <strong>Capital:</strong> {country?.capital}
          </p>
          <p>
            <strong>Region:</strong> {country?.region}
          </p>
          <p>
            <strong>Currency:</strong> {country?.currencies[0].name} (
            {country?.currencies[0].symbol})
          </p>
        </section>
      </CountryDetailsContainer>
      <BackButton onClick={onBack}>{'<'}</BackButton>
    </>
  );
};

export default CountryDetails;
