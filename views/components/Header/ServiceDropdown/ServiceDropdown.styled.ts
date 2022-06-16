import Color from 'color';
import styled from 'styled-components';
import { headerColor, sideBarColor, textColor2 } from 'styles/styled';

export const Container = styled.div`
  position: absolute;
  left: 0;
  bottom: -0px;
  transform: translateY(100%);
  overflow: hidden;
  background: ${Color(sideBarColor).lighten(1).toString()};
  width: 220px;
  height: 0px;
  transition: all 0.15s ease-out;
  cursor: pointer;
`;

export const Service = styled.div`
  padding: 10px 13px;
  border-bottom: 1px solid ${Color(headerColor).darken(0.3).toString()};
  width: 100%;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  color: ${headerColor}; // ${textColor2};
  &:hover {
    background: ${Color(sideBarColor).lighten(2.35).toString()};
  }
`;
