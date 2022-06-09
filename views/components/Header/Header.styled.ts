import Color from 'color';
import styled from 'styled-components';
import { headerHeight, textColor2, bigRes, headerColor } from 'styles/styled';

export const Container = styled.div`
  background: ${headerColor};
  // border-bottom: 1px solid ${Color(headerColor).darken(0.20).toString()};
  min-height: ${headerHeight};
  min-width: 100%;
  display: flex;
  z-index: 2;
  position: relative;
`;

export const RelativeContainer = styled.div`
  width: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
`;

export const MenuContainer = styled.div`
  width: 60px;
  height: 100%;
  margin-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${textColor2};
  cursor: pointer;
`;

export const Menu = styled.div`
  transform: scale(1);
`;

export const LogoCont = styled.div`
  width: max-content;
  height: 100%;
  margin-left: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${textColor2};
  cursor: pointer;
  @media(max-width: ${`${bigRes}px`}) {
    margin-left: 25px;
  }
`;

export const TabsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 60px;
  margin-top: 2px;
`;

export const Tab = styled.div`
  margin-right: 55px;
  font-size: 13.6px;
  font-weight: 700;
  position: relative;
  padding: 5px 0px;
  cursor: pointer;
  color: ${textColor2};
  &:hover{
    color: white;
  }
`;

export const Underline = styled.div<any>`
  background: white;
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 1px;
  width: ${(props) => { return props.isActive ? '100%' : '0%'; }};
  transition: all 0.1s ease-in;
`;
