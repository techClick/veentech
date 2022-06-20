import Color from 'color';
import styled, { keyframes } from 'styled-components';

const panelBorderColor = 'lightgrey';

const opacityIn = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
`;

export const Container = styled.div`
  background: white;
  position: fixed;
  z-index: 5;
  right: 50%;
  bottom: 50%;
  transform: translate(50%, 50%);
  padding: 20px;
  font-size: 14px;
  width: 260px;
  color: ${Color('white').darken(0.8).toString()};
  text-align: center;
  border-radius: 3px;
  background: ${Color(panelBorderColor).lighten(0.25).toString()};
  animation: ${opacityIn} 0.35s ease-in;
`;
