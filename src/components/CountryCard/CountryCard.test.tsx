import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryCard from '.';
import { Country } from 'services/CountryService';

test('renders CountryCard country name', () => {
  const tCountry = {
    flag: 'https://restcountries.eu/data/usa.svg',
    name: 'United States of America',
    population: 323947000,
  } as Country;

  render(<CountryCard country={tCountry} onSelect={() => console.log('go to details')} />);
  const linkElement = screen.getByText(tCountry.name);
  expect(linkElement).toBeInTheDocument();
});
