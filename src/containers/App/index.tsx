import React from 'react';
import styled from 'styled-components';
import { AppProvider } from './context';
import AppRouter from './AppRouter';

const AppContainer = styled.div`
  width: 100vw;
  margin: 0 auto;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

function App() {
  return (
    <AppProvider>
      <AppContainer>
        <AppRouter />
      </AppContainer>
    </AppProvider>
  );
}

export default App;
