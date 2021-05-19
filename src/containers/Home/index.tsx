import CountryCard from 'components/CountryCard';
import { AppContext } from 'containers/App/context';
import React, { useContext } from 'react';
import { Country } from 'services/CountryService';
import { HomeContainer } from './styled';

const Home = () => {
  const { allContries }: { allContries: Country[] } = useContext(AppContext);
  return (
    <HomeContainer>
      {allContries &&
        allContries.map((country) => <CountryCard key={country.numericCode} country={country} />)}
    </HomeContainer>
  );
};

export default Home;
