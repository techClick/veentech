import styled, { keyframes } from 'styled-components';
import Color from 'color';

export const bigRes = 699.99;
export const contWidth = '85%';
export const contMaxWidth = '1300px';
export const headerHeight = '60px';
export const headerColor = Color('white').darken(0.92).toString();
export const blueColor = '#1685ec';
export const baseColor = '#071542';
export const greyColor = '#c9c9c9';
export const buttonColor = '#3795E0';
export const orange = Color('#DC4D18').darken(0.05).toString();
export const textColor = Color('white').darken(0.1).toString();
export const textColor2 = Color('white').darken(0.35).toString();
export const textColor3 = Color('#AFB5CA').darken(0.6).toString();

const opacityIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.85;
  }
`;

export const Background = styled.div<any>`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  background: black;
  opacity: 0.85;
  animation: ${opacityIn} 0.1s ease-in;
`;

export const RelativeContainer = styled.div<any>`
  height: 100%;
  position: relative;
  width: 100%;
  display: ${(props) => props.flex && 'flex'};
  align-items: ${(props) => props.flex && 'center'};
`;

export const MainButton = styled.div`
  color: white;
  background: ${Color(buttonColor).lighten(0.27).toString()};
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  width: max-content;
  height: max-content;
  color: ${Color('white').darken(0.7).toString()};
  cursor: pointer;
  &:hover {
    color: ${Color('white').darken(0.9).toString()};
    background: ${Color(buttonColor).darken(0.2).toString()};
  }
`;
