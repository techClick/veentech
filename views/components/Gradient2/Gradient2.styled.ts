import styled from 'styled-components';
import { headerColor } from 'styles/styled';

export const GradientDiv = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 70vh;
  z-index: 0.1;
  background: linear-gradient(${headerColor}, transparent);
`;

export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
  z-index: 0.1;
  background: ${headerColor};
  -webkit-box-shadow: 0 7px 7px ${headerColor};
  -moz-box-shadow: 0 7px 7px ${headerColor};
  box-shadow: 0 7px 7px ${headerColor};
`;
