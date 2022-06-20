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
  padding-bottom: 10px;
  font-size: 15px;
  width: 90%;
  max-width: 360px;
  color: ${Color('white').darken(0.6).toString()};
  text-align: center;
  border-radius: 3px;
  background: ${Color(panelBorderColor).lighten(0.15).toString()};
  animation: ${opacityIn} 0.25s ease-in;
`;

export const Header = styled.div`
  padding: 20px;
  padding-bottom: 19px;
  border-bottom: 1px solid ${Color(panelBorderColor).darken(0.05).toString()};
  font-size: 16px;
  font-weight: 600;
`;

export const Desc = styled.div`
  margin: auto;
  width: max-content;
  max-width: 90%;
  margin-top: 10px;
`;

export const ButtonDiv = styled.div`
  width: max-content;
  margin: auto;
  margin-top: 20px;
`;

export const MainButton = styled.div`
  color: white;
  background: #3795E0;
  padding: 8px 26px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 18px;
  width: max-content;
  height: max-content;
  cursor: pointer;
  &:hover {
    background: ${Color('#28BEA5').darken(0.1).toString()};
  }
`;
