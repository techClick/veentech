import styled from 'styled-components';
import { headerColor, textColor2 } from 'styles/styled';

export const MainContainer = styled.div`
  width: 100%;  
  margin-top: -1px;
`;

export const DarkContainer = styled.div`
  width: 100%;
  padding-top: 60px;
  position: relative;
  background: ${headerColor};
`;

export const Header = styled.div`
  font-weight: 400;
  width: 70vw;
  // max-width: 950px;
  line-height: 1.5;
  font-size: calc(18px + 0.5vw);
  font-family: Poppins;
  @media(max-width: 890px) {
    width: 80vw;
  }
`;

export const Header2 = styled.div`
  font-weight: 300;
  width: 50vw;
  max-width: 830px;
  line-height: 1.3;
  font-size: calc(13px + 0.35vw);
  margin-top: 15px;
  color: ${textColor2};
  @media(max-width: 890px) {
    width: 70vw;
  }
`;
