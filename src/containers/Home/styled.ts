import styled from 'styled-components';

export const HomeContainer = styled.div`
  margin-top: 80px;
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

export const SearchBarContainer = styled.div`
  padding: 20px 30px;
  box-shadow: 0px 6px 7px rgba(125, 155, 211, 0.21);
  background: #ffffff;
  position: fixed;
  width: 100%;
  z-index: 1000;
  text-align: left;

  input {
    font-size: 20px;
    width: 300px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #d4ddee;
  }
`;
