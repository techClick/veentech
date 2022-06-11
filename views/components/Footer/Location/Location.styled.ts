import Color from 'color';
import styled from 'styled-components';
import { textColor2 } from 'styles/styled';

export const MainCont = styled.div<any>`
  width: 250px;
  font-weight: 400;
  margin: ${(props) => props.isAuto && 'auto'};
  margin-top: 45px;
  margin-bottom: ${(props) => props.isAuto && '20px'};
  width: ${(props) => props.isAuto && '190px'};
  text-align: left;
  font-family: Poppins;
  color: ${textColor2};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const LogoCont1 = styled.div`
  width: 25px;
  height: 100%;
  position: relative;
`;

export const LogoCont = styled.div`
  width: 100%;
  height: 25px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.div`
  transform: scale(0.7);
`;

export const Address = styled.div<any>`
  font-size: calc(13px + 0.1vw);
  margin-left: ${(props) => props.isAuto ? '15px' : '10px'};
  line-height: 2;
  margin-top: -7px;
  color: ${Color(textColor2).darken(0.15).toString()};
`;

export const Container2 = styled.div<any>`
  width: 100%;
  display: flex;
  margin-top: 10px;
  margin-left: ${(props) => props.isAuto && '-3px'};
`;

export const Number = styled.div`
  font-size: calc(13px + 0.1vw);
  margin-left: 10px;
  line-height: 2;
  margin-top: -2px;
  color: ${Color(textColor2).darken(0.15).toString()};
`;

export const Logo2 = styled.div`
  transform: scale(0.5);
`;
