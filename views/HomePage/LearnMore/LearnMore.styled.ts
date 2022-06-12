import styled from 'styled-components';
import { headerColor, textColor, textColor2 } from 'styles/styled';

export const MainContainer = styled.div`
  width: 100%;  
  margin-top: -1px;
`;

export const DarkContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  position: relative;
  background: ${headerColor};
`;

export const Header = styled.div`
  font-weight: 400;
  width: 45vw;
  line-height: 1.5;
  font-size: calc(14px + 0.5vw);
  font-family: Poppins;
  @media(max-width: 890px) {
    width: 80vw;
  }
`;

export const Header2 = styled.div`
  font-weight: 300;
  width: 45vw;
  max-width: 830px;
  line-height: 1.3;
  font-size: calc(14px + 0.25vw);
  margin-top: 13px;
  color: ${textColor2};
  @media(max-width: 890px) {
    width: 70vw;
  }
`;

export const WhitePart = styled.span`
  color: ${textColor};
  text-decoration: underline solid ${textColor} 1px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
