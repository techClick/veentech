import Color from 'color';
import styled from 'styled-components';
import { greyColor } from 'styles/styled';

export const Container = styled.div`
  background: ${greyColor};
  width: max-content;
  height: 100%;
  padding: 12px 10px;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 10px;
  transform: translateX(-100%);
  z-index: 4;
`;

export const LogoCont = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${Color(greyColor).darken(0.2).toString()};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;
  padding: 10px 0;
  border-radius: 2px;
  cursor: pointer;
`;

export const WhiteBg = styled.div<any>`
  background: white;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  opacity: 0.01;
  pointer-events: none;
  z-index: 3;
`;
