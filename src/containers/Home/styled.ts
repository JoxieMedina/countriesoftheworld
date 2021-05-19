import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #f2f2f2;
  padding: 10px;
  @media (min-width: 1600px) {
    grid-template-columns: auto auto auto auto;
  }
  @media (max-width: 1190px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 800px) {
    grid-template-columns: auto;
  }
`;
