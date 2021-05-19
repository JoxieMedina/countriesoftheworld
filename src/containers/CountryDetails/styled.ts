import styled from 'styled-components';

export const CountryDetailsContainer = styled.div`
  padding: 30px;
  background: #ffffff;
  border: 1px solid #d4ddee;
  box-sizing: border-box;
  box-shadow: 0px 6px 7px rgb(125 155 211 / 21%);
  max-width: 700px;
  margin: 30px auto;
  color: #37474f;
  border-radius: 10px;
  img {
    max-width: 300px;
  }
`;

export const BackButton = styled.button`
  position: absolute;
  border-radius: 50%;
  font-size: 30px;
  margin: 30px;
  box-shadow: 0px 6px 7px rgb(125 155 211 / 21%);
  border: 2px solid #d4ddee;
  color: #5f6165;
  height: 50px;
  width: 50px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
