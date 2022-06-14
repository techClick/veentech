import styled from 'styled-components';
import bgImage from 'assets/bg4.jpg';
import { headerHeight } from 'styles/styled';

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
  @media(min-width: 1291px) {
    background-size: 100vw auto;
  }
`;

export const Container2 = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`;
