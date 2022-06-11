import Color from 'color';
import styled from 'styled-components';
import { textColor2 } from 'styles/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const ExpCont = styled.div`
  text-align: right;
`;

export const Exp = styled.div`
  font-size: calc(20px + 2vw);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
`;

export const Plus = styled.span`
  font-size: calc(20px + 1vw);
  font-weight: 500;
`;

export const ExpDesc = styled.div`
  font-size: calc(15px + 0.25vw);
  color: ${textColor2};
  font-weight: 300;
  margin-top: -3px;
`;

export const Slash = styled.div`
  font-size: calc(125px + 1vw);
  font-weight: 100;
  margin: 0px 2vw;
  margin-top: -25px;
  color: ${Color('white').darken(0.85).toString()};
`;

export const ExpCont2 = styled.div`
  text-align: left;
`;
