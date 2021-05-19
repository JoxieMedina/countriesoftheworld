import CountryCard from 'components/CountryCard';
import { RoutesPaths } from 'containers/App/AppRouter';
import { AppContext } from 'containers/App/context';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Country, CountryService } from 'services/CountryService';
import { HomeContainer } from './styled';

const Home = () => {
  const { allContries }: { allContries: Country[] } = useContext(AppContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchValues, setSearchValues] = useState<Country[]>([]);
  const history = useHistory();

  useEffect(() => {
    const doSearch = async () => {
      try {
        const results = await CountryService.SearchByName(searchQuery);
        setSearchValues(results);
      } catch (error) {
        setSearchValues([]);
      }
    };
    doSearch();
  }, [searchQuery]);

  const onCountryClick = (country: Country) => {
    history.push(RoutesPaths.PROFILE, country);
  };

  const onSearchChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <input
        type='text'
        onChange={onSearchChanged}
        value={searchQuery}
        placeholder='Search by name'
      />
      <HomeContainer>
        {allContries &&
          searchQuery.length === 0 &&
          allContries.map((country) => (
            <CountryCard
              onSelect={() => onCountryClick(country)}
              key={country.numericCode}
              country={country}
            />
          ))}

        {searchQuery.length > 0 && searchValues.length > 0 ? (
          searchValues.map((country) => (
            <CountryCard
              onSelect={() => onCountryClick(country)}
              key={country.numericCode}
              country={country}
            />
          ))
        ) : (
          <p>No results</p>
        )}
      </HomeContainer>
    </>
  );
};

export default Home;
