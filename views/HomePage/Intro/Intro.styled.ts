import Color from 'color';
import styled from 'styled-components';
import { buttonColor } from 'styles/styled';

export const Container = styled.div`
  height: max-content;
  position: absolute;
  bottom: 18vh;
  left: 0;
`;

export const IntroText = styled.div`
  font-weight: 400;
  margin-top: 300px;
  width: 50vw;
  max-width: 830px;
  line-height: 1.4;
  font-size: calc(17px + 1vw);
  @media(max-width: 1150px) {
    // font-size: calc(12px + 2vw);
  }
  @media(max-width: 890px) {
    width: 70vw;
  }
`;

export const IntroText2 = styled.div`
  font-weight: 300;
  font-size: calc(15px + 1vw);
  margin-top: 5px;
`;

export const ButtonDiv = styled.div`
  margin-top: 30px;
  display: flex;
  @media(max-width: 900px) {
    margin-top: 20px;
  }
  @media(max-width: 330px) {
    flex-direction: column;
  }
`;

export const Button = styled.div`
  color: white;
  background: ${Color(buttonColor).lighten(0.67).toString()};
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 14px;
  width: max-content;
  height: max-content;
  color: ${Color('white').darken(0.8).toString()};
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    color: ${Color('white').darken(0.9).toString()};
    background: ${Color(buttonColor).darken(0.2).toString()};
  }
  @media(max-width: 330px) {
    margin-bottom: 15px;
  }
`;
