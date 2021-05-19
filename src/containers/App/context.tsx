import React, { useState, ReactChild, useEffect } from 'react';
import { Country, CountryService } from 'services/CountryService';

const AppContext: any = React.createContext({});

type Props = {
  children: ReactChild;
};

const AppProvider = ({ children }: Props) => {
  const [allContries, setAllContries] = useState<Country[]>();

  useEffect(() => {
    const init = async () => {
      const countriesList = await CountryService.ListAll();
      setAllContries(countriesList);
    };
    init();
  }, []);

  return (
    <AppContext.Provider
      value={{
        allContries,
        setAllContries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
