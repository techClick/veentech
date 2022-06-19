import styled, { keyframes } from 'styled-components';
import Color from 'color';

export const bigRes = 699.99;
export const contWidth = '90%';
export const contMaxWidth = '1520px';
export const headerHeight = '70px';
export const headerColor = Color('white').darken(0.92).toString();
export const blueColor = '#1685ec';
export const baseColor = '#071542';
export const sideBarColor = Color(headerColor).lighten(2.5).toString();
export const buttonColor = '#3795E0';
export const orange = Color('#DC4D18').darken(0.05).toString();
export const textColor = Color('white').darken(0.115).toString();
export const textColor2 = Color('white').darken(0.25).toString();
export const textColor3 = Color('white').darken(0).toString();
export const textColor4 = Color('white').darken(0.175).toString();
export const columnRes_HPConsult = '702px';

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
  z-index: 4;
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
  font-weight: 700;
  font-size: 14px;
  width: max-content;
  height: max-content;
  color: ${Color('white').darken(0.8).toString()};
  cursor: pointer;
  &:hover {
    color: ${Color('white').darken(0.9).toString()};
    background: ${Color(buttonColor).darken(0.2).toString()};
  }
`;

export const Container = styled.div`
  height: calc(95vh - ${headerHeight});
  position: relative;
  margin: auto;
  width: ${contWidth};
  max-width: ${contMaxWidth};
  z-index: 1;
  color: ${textColor};
  min-height: 630px;
`;

export const ContainerMax = styled.div`
  height: max-content;
  position: relative;
  margin: auto;
  width: ${contWidth};
  max-width: ${contMaxWidth};
  z-index: 1;
  color: ${textColor};
`;
