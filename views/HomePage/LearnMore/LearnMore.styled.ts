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
  font-size: calc(14px + 0.35vw);
  font-family: Poppins;
  padding: 14px 25px;
  border-radius: 3px;
  width: max-content;
  background: ${Color(textColor2).darken(0.5).toString()};
  color: ${Color('white').darken(0.915).toString()};
`;

export const Label = styled.div`
  font-weight: 400;
  max-width: 100%;
  width: max-content;
  line-height: 1.3;
  font-size: calc(12px + 0.275vw);
  font-family: Lato;
  color: ${Color('white').darken(0.935).toString()};
`;
