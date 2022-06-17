import styled from 'styled-components';
import bgImage from 'assets/bg4.jpg';
import { headerColor, headerHeight } from 'styles/styled';
import Color from 'color';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
`;

export const BgContainer = styled.div`
  background-attachment: fixed;
  background-image: url(${bgImage.src});
  background-position: 0px 0px;
  background-repeat: repeat;
  background-size: 1290px auto;
  width: 100%;
  height: calc(100% - ${headerHeight});
  margin-top: -1px;
  padding-top: 7vh;
  overflow: hidden;
  position: relative;
  @media(min-width: 1291px) {
    background-size: 100vw auto;
  }
`;

export const BgCover = styled.div`
  background: ${Color(headerColor).lighten(0.1).toString()};
  width: 100%;
  height: 25%;
  position: absolute;
  bottom: 0;
`;

export const Container2 = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;

export const BgContainer2 = styled.div`
  background: ${Color(headerColor).lighten(0.1).toString()};
  width: 100%;
  height: calc(100% - ${headerHeight});
  margin-top: -1px;
  padding-bottom: 15px;
  box-shadow: 0 3px 1.5px -1.5px ${Color(headerColor).darken(0.25).toString()};
  position: relative;
  z-index: 3;
`;
