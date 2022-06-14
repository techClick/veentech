import Color from 'color';
import styled from 'styled-components';
import { headerColor, textColor2 } from 'styles/styled';

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
  font-weight: 800;
  max-width: 100%;
  line-height: 1.5;
  font-size: calc(15px + 0.3vw);
  font-family: Poppins;
  padding: 14px 25px;
  padding-bottom: 0px;
  padding-left: 0px;
  border-bottom:
  border-radius: 6px;
  padding-bottom: 25px;
  width: max-content;
`;

export const Label = styled.div`
  font-weight: 300;
  max-width: 100%;
  width: max-content;
  line-height: 1.3;
  font-size: calc(11.35px + 0.275vw);
  font-family: Lato;
  color: ${textColor2};
  margin-top: 2px;
  // padding-bottom: 25px;
  // border-bottom: 2px dotted ${Color(textColor2).darken(0.6).toString()};
`;
