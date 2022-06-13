import Color from 'color';
import styled from 'styled-components';
import { buttonColor, columnRes_HPConsult, headerColor, textColor2 } from 'styles/styled';

export const MainContainer = styled.div`
  width: 100%;
  height: max-content;
  padding-bottom: 25px;
`;

export const Container = styled.div`
  width: 100%;
  height: max-content;
  padding-top: 280px;
  overflow: hidden;
`;

export const Container2 = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  height: 300px;
  @media(max-width: ${columnRes_HPConsult}) {
    flex-direction: column;
    height: max-content;
  }
`;

export const TransparentBG = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  background: ${Color(headerColor).darken(0.25).toString()};
  opacity: 0.6;
  border-radius: 5px;
  box-shadow: 0px 0 5px black;
`;

export const LeftSection = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
  // border-right: 2px solid ${Color(headerColor).darken(0.1).toString()};
  @media(max-width: ${columnRes_HPConsult}) {
    width: 100%;
    height: max-content;
    padding: 30px 0;
    padding-top: 35px;
    border: 0;
    border-bottom: 2px solid ${Color(headerColor).darken(0.6).toString()};
  }
`;

export const TextPart = styled.div`
  text-align: center;
  width: 70%;
`;

export const TopText = styled.div`
  font-size: calc(20px + 1vw);
  font-weight: 500;
  line-height: 1;
  font-family: Poppins;
`;

export const Text = styled.div`
  font-size: calc(10px + 0.5vw);
  font-weight: 300;
  line-height: 1.4;
  margin: auto;
  margin-top: 7px;
  color: ${textColor2};
  font-family: Lato;
  max-width: 80%;
  @media(min-width: 845px) {
    max-width: 60%;
  }
`;

export const ConsultUs = styled.div`
  width: max-content;
  font-weight: 300;
  line-height: 1.4;
  margin-top: 15px;
  display: inline-block;
  opacity: 0.95;
`;

export const MainButton = styled.div`
  color: white;
  padding: 6px 15px;
  border-radius: 3px;
  font-weight: 300;
  font-size: 15.5px;
  width: max-content;
  height: max-content;
  color: ${Color(buttonColor).lighten(0.127).toString()};
  cursor: pointer;
  &:hover {
    color: ${Color('white').darken(0.9).toString()};
    background: ${Color(buttonColor).lighten(0.2).toString()};
  }
`;

export const RightSection = styled.div`
  width: 55%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  @media(max-width: ${columnRes_HPConsult}) {
    width: 100%;
    min-height: 0;
    height: max-content;
  }
`;

export const TransparentBG2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  left: 0;
  top: 0;
  background: ${Color(headerColor).darken(0.15).toString()};
  opacity: 0.25;
  border-radius: 5px;
`;
