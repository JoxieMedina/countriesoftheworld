import { AppContext } from 'containers/App/context';
import React, { useContext } from 'react';
import { Country } from 'services/CountryService';

const Home = () => {
  const { allContries }: { allContries: Country[] } = useContext(AppContext);
  return <>This is home {allContries && allContries[0]?.nativeName}</>;
};

export default Home;
