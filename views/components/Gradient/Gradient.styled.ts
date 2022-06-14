import styled from 'styled-components';
import { headerColor } from 'styles/styled';

export const GradientDiv = styled.div<any>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${(props) => props.height1 || '78vh'};
  z-index: 1;
  background: linear-gradient(transparent, ${headerColor});
  min-width: 1290px;
`;

export const Bg = styled.div<any>`
  position: absolute;
  bottom: 1px;
  left: 0;
  width: 100vw;
  height: ${(props) => props.height2 || '22vh'};
  z-index: 1;
  min-width: 1290px;
  background: ${headerColor};
  -webkit-box-shadow: 0px -140px 140px ${headerColor};
  -moz-box-shadow: 0px -140px 140px ${headerColor};
  box-shadow: 0px -140px 140px ${headerColor};
`;
