import styled from 'styled-components';
import { headerColor } from 'styles/styled';

export const GradientDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70vh;
  z-index: 0.1;
  background: linear-gradient(transparent, ${headerColor});
  min-width: 1290px;
`;

export const Bg = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 30vh;
  z-index: 0.1;
  min-width: 1290px;
  background: ${headerColor};
  /* -webkit-box-shadow: 0px -4px 3px ${headerColor};
  -moz-box-shadow: 0px -4px 3px ${headerColor}; */
  box-shadow: 0px -140px 139px ${headerColor};
`;
