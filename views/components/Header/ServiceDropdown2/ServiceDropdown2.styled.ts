import Color from 'color';
import styled from 'styled-components';
import { headerColor, sideBarColor, textColor2 } from 'styles/styled';

export const Container = styled.div`
  position: fixed;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  overflow: hidden;
  background: ${Color(sideBarColor).lighten(1.5).toString()};
  width: 220px;
  height: 0px;
  transition: all 0.15s ease-out;
  height: 334px;
  cursor: pointer;
  z-index: 3;
  border-radius: 3px;
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
