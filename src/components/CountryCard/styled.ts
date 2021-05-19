import styled from 'styled-components';

export const CountryCardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #d4ddee;
  box-sizing: border-box;
  box-shadow: 0px 6px 7px rgba(125, 155, 211, 0.21);
  border-radius: 10px;
  max-width: 350px;
  margin: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }

  section {
    padding: 20px 30px;
    h1 {
      color: #37474f;
    }
    span {
      color: #78909c;
    }
  }
`;

export const CountryFlag = styled.div<{ bg: string }>`
  background-image: url(${(props) => props.bg});
  width: 350px;
  background-position: center;
  background-size: cover;
  height: 230px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
