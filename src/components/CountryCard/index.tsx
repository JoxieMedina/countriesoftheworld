import React from 'react';
import { Country } from 'services/CountryService';
import { CountryCardContainer, CountryFlag } from './styled';

const CountryCard = ({ country, onSelect }: { country: Country; onSelect: () => void }) => {
  return (
    <CountryCardContainer onClick={onSelect}>
      <CountryFlag bg={country.flag} />
      <section>
        <h1>{country.name}</h1>
        <span>{country.population.toLocaleString()} inhabitants</span>
      </section>
    </CountryCardContainer>
  );
};

export default CountryCard;
